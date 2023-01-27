import { baseApi } from "./baseApi"


export const searchItem = (query = "") => {

    const site_id = "MCO"

    const item = baseApi.get(`/sites/${site_id}/search?q=${query}`);

    console.log(item)
    return item
}