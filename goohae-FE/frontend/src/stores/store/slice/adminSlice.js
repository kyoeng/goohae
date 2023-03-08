import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "adminUser",
    initialState: [],
    reducers: {
        setUser: (state, action) => {
            state.push(...action.payload);
        }
    }
});

const productSlice = createSlice({
    name: "adminProduct",
    initialState: [],

    reducers: {
        setProd: (state, action) => {
            state.product = action.payload;
        },
    }
})

export const { setUser } = userSlice.actions;
export const { setProd } = productSlice.actions;
export { userSlice, productSlice };