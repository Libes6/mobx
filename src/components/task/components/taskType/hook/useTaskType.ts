import { useEffect } from 'react';
import taskStore from '../../../../../store/task.tsx';
import uiTag from '../../../../../store/uiTag.tsx';
export const useTaskType = () => {
    const { totalTag, loadTagTodo } = taskStore;
    const { totalUiTag, incrementTag } = uiTag;
    useEffect(() => {
        loadTagTodo();
    }, []);

    const handleAddTag = (values: number) => {
        incrementTag(values);
    };
    const handleDeleteTag = () => {};

    return { totalTag, totalUiTag, handleAddTag, handleDeleteTag };
};
