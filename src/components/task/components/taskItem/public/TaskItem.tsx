import { FC } from 'react';
import { clsMix } from '../../../../../lib/clsx/Clsx.ts';
import { useTaskItem } from '../hook/useTaskItem.tsx';
import { ITaskItemProps } from '../interface/ITaskItem.ts';
import { Col, Row } from 'antd';

export const TaskItem: FC<ITaskItemProps> = ({
    item,
    completeTodo,
    deleteTodo,
}) => {
    const { text, isCompleted, id, tag } = item;
    const { handleDelete, handleComplete, renderIcon } = useTaskItem({
        id,
        isCompleted,
        deleteTodo,
        completeTodo,
    });

    return (
        <Row
            gutter={[10, 10]}
            justify={'space-between'}
            onClick={() => handleComplete()}
        >
            <Col
                span={12}
                className={clsMix(
                    'task-item__title',
                    { 'title-complete': isCompleted },
                    []
                )}
            >
                <p>{text}</p>
            </Col>
            <Col span={10} className='task-item__tag-list'>
                {tag?.map((item, index) => (
                    <div key={index}>{item.text}</div>
                ))}
            </Col>
            <Col span={2} onClick={event => handleDelete(event)}>
                {renderIcon()}
            </Col>
        </Row>
    );
};
