import { baseApi } from "./baseApi"


export const itemDescription = (product_id = "") => {

    const description = baseApi.get(`/items/${product_id}/description`)

    return description
}