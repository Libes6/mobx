import { ITodoApi } from '../../../../../types/Todo/ITodo.ts';

interface ITaskItemRecord {
    deleteTodo: (id: number) => void;
    completeTodo: (id: number, isCompleted: boolean) => void;
}
export interface IUseTaskItem extends ITaskItemRecord {
    id: number;
    isCompleted: boolean;
}

export interface ITaskItemProps extends ITaskItemRecord {
    item: ITodoApi;
}
