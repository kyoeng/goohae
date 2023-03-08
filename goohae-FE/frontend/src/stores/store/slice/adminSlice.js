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
    initialState: {
        product: [],
        searchProd: '',
        searchProdCate: '',
    },
    reducers: {
        setProd: (state, action) => {
            state.product = action.payload;
        },
        searchProd: (state, action) => {
            state.searchProd = action.payload;
        },
        searchProd: (state, action) => {
            state.searchProdCate = action.payload;
        },
    }
})

export const { setUser } = userSlice.actions;
export const { setProd } = productSlice.actions;
export { userSlice, productSlice };