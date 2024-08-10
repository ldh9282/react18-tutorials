import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import cartItems from "./data";
import {
    CLEAR_CART,
    DECREASE,
    DISPLAY_ITEMS,
    INCREASE,
    LOADING,
    REMOVE,
} from "./action";
import { getTotals } from "./utils";

const url = "https://www.course-api.com/react-useReducer-cart-project";

const AppContext = createContext();

const initialState = {
    loading: true,
    cart: new Map(),
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { totalAmount, totalCost } = getTotals(state.cart);

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: LOADING });
            const response = await fetch(url);
            const cartItems = await response.json();
            dispatch({ type: DISPLAY_ITEMS, payload: { cartItems } });
        };
        fetchData();
    }, []);

    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    };

    const remove = (id) => {
        dispatch({ type: REMOVE, payload: { id } });
    };

    const increase = (id) => {
        dispatch({ type: INCREASE, payload: { id } });
    };
    const decrease = (id) => {
        dispatch({ type: DECREASE, payload: { id } });
    };

    const globalState = {
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        totalAmount,
        totalCost,
    };
    return (
        <AppContext.Provider value={globalState}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
