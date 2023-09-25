import { FC } from 'react';
import { ITask } from '../../../../../store/task.tsx';
import { clsMix } from '../../../../../lib/clsx/Clsx.ts';
import { useTaskItem } from '../hook/useTaskItem.tsx';
interface ITaskItemProps {
    item: ITask;
    completeTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}
export const TaskItem: FC<ITaskItemProps> = ({
    item,
    completeTodo,
    deleteTodo,
}) => {
    const { name, isCompleted, id } = item;
    const { handleDelete, handleComplete, renderIcon } = useTaskItem({
        id,
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
                <p>{name}</p>
            </div>
            <div onClick={event => handleDelete(event)}>
                {renderIcon()}
            </div>
        </div>
    );
};
