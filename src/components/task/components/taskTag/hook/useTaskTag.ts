import { useEffect } from 'react';
import taskStore from '../../../../../store/task.tsx';
import uiTag from '../../../../../store/uiTag.tsx';
export const useTaskTag = () => {
    const { totalTag, loadTagTodo, deleteTagTodo } = taskStore;
    const { totalUiTag, incrementTag, clearTag, decrementTag } =
        uiTag;
    useEffect(() => {
        loadTagTodo();
        clearTag();
    }, []);

    const handleAddTag = (values: number) => {
        incrementTag(values);
    };
    const handleDeleteTag = (
        id: number,
        event: React.MouseEvent<HTMLSpanElement>
    ) => {
        event.preventDefault();
        deleteTagTodo(id);
        decrementTag(id);
    };

    return { totalTag, totalUiTag, handleAddTag, handleDeleteTag };
};
