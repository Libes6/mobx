import { instance } from '../../api/api.interceptor.ts';
const TODO_URL = '/tagtodo';
export const TagTodoService = {
    async getTag() {
        const response = await instance({
            url: `${TODO_URL}`,
            method: 'GET',
        });
        return response.data;
    },
};
