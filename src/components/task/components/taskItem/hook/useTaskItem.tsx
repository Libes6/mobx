import * as React from 'react';
import { DeleteOutlined } from '@ant-design/icons';

interface IUseTaskItem {
    id: number;
    isCompleted: boolean;
    deleteTodo: (id: number) => void;
    completeTodo: (id: number, isCompleted: boolean) => void;
}
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
    const renderIcon = () => {
        return <DeleteOutlined twoToneColor={'#eb2f96'} />;
    };

    return { handleComplete, handleDelete, renderIcon };
};
