import { instance } from '../../api/api.interceptor.ts';
export const NewsService = {
    async getNews() {
        const response = await instance({
            url: '/news',
            method: 'GET',
        });
        return response.data;
    },
};
