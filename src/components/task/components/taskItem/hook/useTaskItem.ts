import * as React from 'react';
import { IUseTaskItem } from '../interface/ITaskItem.ts';

export const useTaskItem = ({
    id,
    isCompleted,
    deleteTodo,
    completeTodo,
}: IUseTaskItem) => {
    const handleDelete = (
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        event.stopPropagation();
        deleteTodo(id);
    };

    const handleComplete = () => {
        completeTodo(id, !isCompleted);
    };

    return { handleComplete, handleDelete };
};
