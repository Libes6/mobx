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

    async addTag(text: string) {
        const response = await instance({
            url: `${TODO_URL}`,
            method: 'POST',
            data: {
                text,
            },
        });
        return response.data;
    },
    async deleteTag(id: number) {
        const response = await instance({
            url: `${TODO_URL}/${id}`,
            method: 'DELETE',
        });
        return response.data;
    },
};
