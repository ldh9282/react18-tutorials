import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../../../shared/layout/MainLayout";
import CartContainer from "../components/CartContainer";
import { useEffect } from "react";
import { calculateTotals, getCartItems } from "../redux/cartSlice";

const CartPage = () => {
    const dispatch = useDispatch();

    const { cartItems } = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(calculateTotals());
    }, [dispatch, cartItems]);

    useEffect(() => {
        dispatch(getCartItems("random"));
    }, [dispatch]);
    return (
        <MainLayout>
            <CartContainer />
        </MainLayout>
    );
};
export default CartPage;
