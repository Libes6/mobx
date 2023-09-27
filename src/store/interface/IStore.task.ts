import { ITagApi, ITodoApi } from '../../types/Todo/ITodo.ts';

interface ITaskStoreDefault {
    error?: object;
    isLoading: boolean;
}
export interface ITaskStore extends ITaskStoreDefault {
    item: ITodoApi[];
}

export interface ITagStore extends ITaskStoreDefault {
    item: ITagApi[];
}
