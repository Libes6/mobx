import * as React from 'react';
import { DeleteOutlined } from '@ant-design/icons';

interface IUseTaskItem {
    id: number;
    deleteTodo: (id: number) => void;
    completeTodo: (id: number) => void;
}
export const useTaskItem = ({
    id,
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
        completeTodo(id);
    };
    const renderIcon = () => {
        return <DeleteOutlined twoToneColor={'#eb2f96'} />;
    };

    return { handleComplete, handleDelete, renderIcon };
};
