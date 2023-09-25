import { useTaskType } from '../hook/useTaskType.ts';
import { observer } from 'mobx-react-lite';

import { Col, Input, Row, Skeleton, Space } from 'antd';
import CheckableTag from 'antd/lib/tag/CheckableTag';
import { clsMix } from '../../../../../lib/clsx/Clsx.ts';

export const TaskType = observer(() => {
    const { totalTag, totalUiTag, handleAddTag, handleDeleteTag } =
        useTaskType({});

    if (totalTag.isLoading) {
        return <Skeleton />;
    }
    return (
        <div className='task-item__tag'>
            {/*<div className='task-item__tag-input'>*/}
            {/*    <Input />*/}
            {/*</div>*/}
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
