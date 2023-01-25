// import { baseApi } from "../../services/api/baseApi"
import { categories, categoryItems } from "../../services/api";
import { setCategories, setProducts, startLoading } from "./nustoreSlice";

export const startIsLoading = () => {
    return (dispatch) => {

        dispatch(startLoading());

    }
}

export const setCategory = () => {

    return async (dispatch) => {

        const { data } = await categories();

        dispatch(setCategories(data));
    }

}

export const setItems = (page = 0, category_id  = "") => {

    return async (dispatch) => {

        dispatch(startLoading());

        const { data: { results } } = await categoryItems(page * 10, category_id);

        dispatch(setProducts({ products: results, page: page + 1, category_id }))

    }

}

// export const setIdCategories = (category_id = "") => {
    
//     return async (dispatch) => {

//         dispatch(startLoading());

//         const products = await categoryItems(category_id);

//         dispatch(setProducts())

//     }

// }