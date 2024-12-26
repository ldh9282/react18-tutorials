import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { openCofirmModal } from "../../../shared/modal/redux/confirmModalSlice";
import { clearCart } from "../redux/cartSlice";

const CartContainer = () => {
    const dispatch = useDispatch();

    const { cartItems, total, amount, isLoading } = useSelector(
        (state) => state.cart
    );

    if (isLoading) {
        return (
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        );
    }
    if (amount < 1) {
        return (
            <section className="cart">
                <header>
                    <h2>your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        );
    }
    return (
        <section className="cart">
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cartItems?.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                        total <span>${total}</span>
                    </h4>
                </div>
                <button
                    className="btn clear-btn"
                    onClick={() => {
                        dispatch(
                            openCofirmModal({
                                message:
                                    "remove all items from your shopping cart?",
                                confirmCb: () => dispatch(clearCart()),
                            })
                        );
                    }}
                >
                    clear cart
                </button>
            </footer>
        </section>
    );
};
export default CartContainer;
