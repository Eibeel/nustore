import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth'
import { nustoreSlice } from './nustore/nustoreSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        nustore: nustoreSlice.reducer
    }
})