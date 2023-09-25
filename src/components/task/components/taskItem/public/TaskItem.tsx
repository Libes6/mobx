import { FC } from 'react';
import { clsMix } from '../../../../../lib/clsx/Clsx.ts';
import { useTaskItem } from '../hook/useTaskItem.tsx';
import { ITodoApi } from '../../../../../types/Todo/ITodo.ts';
interface ITaskItemProps {
    item: ITodoApi;
    completeTodo: (id: number, isCompleted: boolean) => void;
    deleteTodo: (id: number) => void;
}
export const TaskItem: FC<ITaskItemProps> = ({
    item,
    completeTodo,
    deleteTodo,
}) => {
    const { text, isCompleted, id } = item;
    const { handleDelete, handleComplete, renderIcon } = useTaskItem({
        id,
        isCompleted,
        deleteTodo,
        completeTodo,
    });
    return (
        <div className='task-item' onClick={() => handleComplete()}>
            <div
                className={clsMix(
                    'task-item__title',
                    { 'title-complete': isCompleted },
                    []
                )}
            >
                <p>{text}</p>
            </div>
            <div onClick={event => handleDelete(event)}>
                {renderIcon()}
            </div>
        </div>
    );
};
