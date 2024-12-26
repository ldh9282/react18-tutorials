import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: "",
    isOpen: false,
    confirmCb: null,
    cancleCb: null,
};

const confirmModalSlice = createSlice({
    name: "confirmModal",
    initialState,
    reducers: {
        openCofirmModal: (state, action) => {
            const { message, confirmCb, cancleCb } = action.payload;
            state.message = message;
            state.isOpen = true;
            state.confirmCb = confirmCb;
            state.cancleCb = cancleCb;
        },
        closeConfirmModal: (state, action) => {
            state.message = "";
            state.isOpen = false;
            state.confirmCb = null;
            state.cancleCb = null;
        },
    },
});

export const { openCofirmModal, closeConfirmModal } = confirmModalSlice.actions;

export const confirmModalReducer = confirmModalSlice.reducer;
