import { baseApi } from "./baseApi"


export const categoryItems = (page = 0, category_id = "", query = "") => {

    const side_id = "MCO"

    const items = baseApi.get(`/sites/${side_id}/search?category=${category_id}&limit=10&offset=${page}&q=${query}`)

    return items
}
