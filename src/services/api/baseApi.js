import axios from 'axios';

export const baseApi = axios.create({
    baseURL: 'https://api.mercadolibre.com',
})