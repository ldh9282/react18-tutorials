import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../../features/cart/redux/cartSlice";
import { confirmModalReducer } from "../modal/redux/confirmModalSlice";
import { thunk } from "redux-thunk";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        confirmModal: confirmModalReducer,
    },
    middleware: [thunk], // [미들웨어 redux-thunk] store 에 function 저장을 위해
});
