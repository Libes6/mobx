import { useState } from 'react';
import { useOutside } from '../../../../../../../lib/hook/useoutsideclick.ts';
import taskStore from '../../../../../../../store/task.tsx';

export const useTaskTagInput = () => {
    const [textEdit, setTextEdit] = useState('');
    const { ref, isShow, setIsShow } = useOutside(false);
    const { addTagTodo } = taskStore;
    const handleTextEdit = (text: string) => {
        setTextEdit(text);
    };
    const handleKeyUp = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === 'Enter' && textEdit !== '') {
            addTagTodo(textEdit);
            setIsShow(false);
            handleTextEdit('');
        }
    };

    return {
        textEdit,
        ref,
        isShow,
        setIsShow,
        handleTextEdit,
        handleKeyUp,
    };
};
