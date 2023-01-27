import { categories, categoryItems, itemDescription } from "../../services/api";
import { setCategories, setDescription, setProductId, setProducts, startLoading } from "./nustoreSlice";

export const startIsLoading = () => {
    return (dispatch) => {

        dispatch(startLoading());

    }
}

export const setCategory = () => {

    return async (dispatch) => {

        const { data } = await categories();

        dispatch(setCategories({ categories: data }));
    }
}

export const setItems = (page = 0, category_id = "", query = "") => {

    return async (dispatch) => {

        dispatch(startLoading());

        const { data: { results } } = await categoryItems(page * 10, category_id, query);

        dispatch(setProducts({ products: results, page: page + 1, category_id, query }))

    }
}

export const setProduct = (product_id = "") => {

    return async (dispatch) => {

        dispatch(setProductId({ product_id }))

        const { data: { plain_text } } = await itemDescription(product_id);

        dispatch(setDescription({ description: plain_text }))
    }
}