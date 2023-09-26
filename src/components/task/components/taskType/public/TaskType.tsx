import { useTaskType } from '../hook/useTaskType.ts';
import { observer } from 'mobx-react-lite';

import { Skeleton } from 'antd';
import { clsMix } from '../../../../../lib/clsx/Clsx.ts';

export const TaskType = observer(() => {
    const { totalTag, totalUiTag, handleAddTag } = useTaskType();

    if (totalTag.isLoading) {
        return <Skeleton paragraph={{ rows: 1 }} />;
    }
    return (
        <div className='task-item__tag'>
            {totalTag.item.map((item, index) => {
                const currentActiveStyle = totalUiTag.includes(
                    item.id
                );
                return (
                    <div
                        onClick={() => handleAddTag(item.id)}
                        className={clsMix(
                            'task-item__tag-item',
                            { 'tag-active': currentActiveStyle },
                            []
                        )}
                        key={index}
                    >
                        <span>{item.text}</span>
                        <span></span>
                    </div>
                );
            })}
        </div>
    );
});
