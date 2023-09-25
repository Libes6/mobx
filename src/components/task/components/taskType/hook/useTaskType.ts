import { useEffect } from 'react';
import taskStore from '../../../../../store/task.tsx';
import uiTag from '../../../../../store/uiTag.tsx';
interface IUseTaskType {
    loadTagTodo?: () => void;
}
export const useTaskType = ({}: IUseTaskType) => {
    const { totalTag, loadTagTodo } = taskStore;
    const { totalUiTag, incrementTag, decrementTag } = uiTag;
    useEffect(() => {
        loadTagTodo();
    }, []);

    const handleAddTag = (values: number) => {
        // console.log([...totalUiTag]);
        // console.log(totalUiTag.filter(item => item == values));
        incrementTag(values);
    };
    const handleDeleteTag = (values: number) => {};

    return { totalTag, totalUiTag, handleAddTag, handleDeleteTag };
};
