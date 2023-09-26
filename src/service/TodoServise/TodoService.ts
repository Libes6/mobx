import { instance } from '../../api/api.interceptor.ts';
import { ITodoAdd } from '../../types/Todo/ITodo.ts';
const TODO_URL = '/todo';
export const TodoService = {
    async getTodo(search: string) {
        const response = await instance({
            url: `${TODO_URL}`,
            method: 'GET',
            params: {
                search,
            },
        });
        return response.data;
    },

    async addTodo(data: ITodoAdd) {
        const response = await instance({
            url: `${TODO_URL}`,
            method: 'POST',
            data,
        });
        return response.data;
    },
    async deleteTodo(id: number) {
        const response = await instance({
            url: `${TODO_URL}/${id}`,
            method: 'DELETE',
        });
        return response.data;
    },

    async completeTodo(id: number, isCompleted: boolean) {
        const response = await instance({
            url: `${TODO_URL}/complete/${id}`,
            method: 'PATCH',
            data: { isCompleted },
        });
        return response.data;
    },
};
