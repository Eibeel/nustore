import { baseApi } from "../../services/api/baseApi"
import { setCategories, startLoading } from "./nustoreSlice";

export const startIsLoading = () => {
    return (dispatch) => {

        dispatch(startLoading());

    }
}

export const setCategory = () => {

    return async (dispatch) => {

        const { data } = await baseApi.get(`/sites/MCO/categories`);

        dispatch(setCategories(data));
    }

}
