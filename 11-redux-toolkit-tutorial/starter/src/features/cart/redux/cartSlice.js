import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://www.course-api.com/react-useReducer-cart-project";

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
};

export const getCartItems = createAsyncThunk(
    "cart/getCartItems",
    async (name, thunkAPI) => {
        try {
            const resp = await axios(url);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("something went wrong");
        }
    }
);
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },

        removeItem: (state, action) => {
            // console.log("action", action);

            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload.id
            );
        },

        increase: (state, action) => {
            const theItem = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            theItem.amount = theItem.amount + 1;
            console.log("theItem", { ...theItem });
        },
        decrease: (state, action) => {
            const theItem = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            if (theItem.amount > 1) {
                theItem.amount = theItem.amount - 1;
            }
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += 1;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = Number(total.toFixed(2));
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCartItems.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCartItems.fulfilled, (state, action) => {
                // console.log(action);
                state.isLoading = false;
                state.cartItems = action.payload;
            })
            .addCase(getCartItems.rejected, (state, action) => {
                console.log(action);
                state.isLoading = false;
            });
    },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
    cartSlice.actions;

export const cartReducer = cartSlice.reducer;
