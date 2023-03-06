import { configureStore } from '@reduxjs/toolkit';
import { userSlice, productSlice } from './slice/adminSlice';

const store = configureStore({
    reducer: {
        adminUser: userSlice.reducer,
        adminProduct: productSlice.reducer
    }
})

export default store;