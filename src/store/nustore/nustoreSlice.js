import { createSlice } from '@reduxjs/toolkit';

export const nustoreSlice = createSlice({
    name: 'nustore',
    initialState: {
        categories: [],
        products: [],
        description: [],
        page: 0,
        category_id: 0,
        isLoading: false
    },
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
            state.isLoading = false;
        },
        setProducts: (state, action) => {
            state.products = action.payload.products;
            state.page = action.payload.page;
            state.category_id = action.payload.category_id
            state.isLoading = false;
        },
        setDescription: (state, action) => {
            state.description = action.payload;
            state.isLoading = false;
        },
        startLoading: (state) => {
            state.isLoading = true;
        },
    }
});


// Action creators are generated for each case reducer function
export const { setCategories, setDescription, startLoading, setProducts } = nustoreSlice.actions;
