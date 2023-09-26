import { useTaskTag } from '../hook/useTaskTag.ts';
import { observer } from 'mobx-react-lite';

import { Skeleton } from 'antd';
import { clsMix } from '../../../../../lib/clsx/Clsx.ts';
import { TaskTagInput } from '../components/taskTagInput/public/TaskTagInput.tsx';
import { CloseOutlined } from '@ant-design/icons';

export const TaskTag = observer(() => {
    const { totalTag, totalUiTag, handleAddTag, handleDeleteTag } =
        useTaskTag();

    if (totalTag.isLoading) {
        return <Skeleton paragraph={{ rows: 1 }} />;
    }
    return (
        <div className='tag-list'>
            <TaskTagInput />
            {totalTag.item.map((item, index) => {
                const currentActiveStyle = totalUiTag.includes(
                    item.id
                );
                return (
                    <div
                        onClick={() => handleAddTag(item.id)}
                        className={clsMix(
                            'tag-item',
                            { 'tag-active': currentActiveStyle },
                            []
                        )}
                        key={index}
                    >
                        <span>{item.text}</span>
                        <span
                            onClick={event =>
                                handleDeleteTag(item.id, event)
                            }
                        >
                            <CloseOutlined className='icon-action' />
                        </span>
                    </div>
                );
            })}
        </div>
    );
});
