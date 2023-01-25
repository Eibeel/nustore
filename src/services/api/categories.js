import { baseApi } from "./baseApi";

export const categories = () => {

    const side_id = "MCO";

    const categories = baseApi.get(`/sites/${side_id}/categories`);

    return categories
}
