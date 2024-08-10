import {
    CLEAR_CART,
    DECREASE,
    DISPLAY_ITEMS,
    INCREASE,
    LOADING,
    REMOVE,
} from "./action";

export const reducer = (state, action) => {
    if (action.type === LOADING) {
        return { ...state, loading: true };
    }
    if (action.type === DISPLAY_ITEMS) {
        const theCart = new Map(
            action.payload.cartItems.map((item) => [item.id, item])
        );

        return { ...state, loading: false, cart: theCart };
    }
    if (action.type === CLEAR_CART) {
        return { ...state, cart: new Map() };
    }

    if (action.type === REMOVE) {
        const theCart = new Map(state.cart);
        theCart.delete(action.payload.id);
        return { ...state, cart: theCart };
    }
    if (action.type === INCREASE) {
        const theCart = new Map(state.cart);

        const item = theCart.get(action.payload.id);
        const theItem = { ...item, amount: item.amount + 1 };
        theCart.set(action.payload.id, theItem);

        return { ...state, cart: theCart };
    }
    if (action.type === DECREASE) {
        const theCart = new Map(state.cart);

        const item = theCart.get(action.payload.id);
        const theItem = {
            ...item,
            amount: item.amount - 1 >= 1 ? item.amount - 1 : 1,
        };
        theCart.set(action.payload.id, theItem);

        return { ...state, cart: theCart };
    }
    throw new Error(`no matching action type: ${action.type}`);
};
