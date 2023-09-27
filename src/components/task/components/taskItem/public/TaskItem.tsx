import { FC } from 'react';
import { clsMix } from '../../../../../lib/clsx/Clsx.ts';
import { useTaskItem } from '../hook/useTaskItem.ts';
import { ITaskItemProps } from '../interface/ITaskItem.ts';
import { Col, Row } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export const TaskItem: FC<ITaskItemProps> = ({
    item,
    completeTodo,
    deleteTodo,
}) => {
    const { text, id, tag, isCompleted } = item;
    const { handleDelete, handleComplete } = useTaskItem({
        id,
        isCompleted,
        deleteTodo,
        completeTodo,
    });

    return (
        <Row
            className='task-item'
            gutter={[10, 10]}
            justify={'space-between'}
            onClick={handleComplete}
        >
            <Col
                span={12}
                className={clsMix(
                    'task-item__title',
                    { 'title-complete': isCompleted },
                    []
                )}
            >
                {text}
            </Col>
            <Col span={10} className='task-item__tag'>
                {tag?.map((item, index) => (
                    <div key={index}>{item.text}</div>
                ))}
            </Col>
            <Col span={2} onClick={handleDelete}>
                <DeleteOutlined
                    twoToneColor={'#eb2f96'}
                    className='icon-action'
                />
            </Col>
        </Row>
    );
};
