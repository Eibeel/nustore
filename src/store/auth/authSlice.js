import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        uid: null,
        name: null,
        errorMessage: null
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated'
            state.uid = payload.uid
            state.name = payload.name
            state.errorMessage = null
        },
        logout: (state, { payload }) => {
            state.status = 'notAuth';
            state.uid = null;
            state.displayName = null;
            state.errorMessage = payload?.errorMessage;
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;