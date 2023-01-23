import { baseApi } from "./baseApi";

const side_id = "MCO";

export const categories = baseApi.get(`/sites/${side_id}/categories`);
