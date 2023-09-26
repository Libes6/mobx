import { observer } from 'mobx-react-lite';
import taskStore from '../../../store/task.tsx';
import { Button, Col, Empty, Row, Spin } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

import { TaskItem, TaskSearch, TaskTag } from '../components/';
import { useTask } from '../hook/useTask.tsx';

export const TaskList = observer(() => {
    const {
        totalTask,
        createTodo,
        completeTodo,
        deleteTodo,
        loadTodo,
    } = taskStore;
    const {
        textTask,
        setTextTask,
        contextHolder,
        handleCreate,
        handleSearch,
    } = useTask({ createTodo, loadTodo });

    const renderTask = () => {
        if (totalTask.isLoading) {
            return <Spin size='large' />;
        }
        if (totalTask.item.length === 0) {
            return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
        }
        return totalTask.item.map(item => (
            <TaskItem
                key={item.id}
                item={item}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
            />
        ));
    };

    const renderType = () => {
        if (textTask === '') {
            return null;
        }
        return (
            <Col span={18}>
                <TaskTag />
            </Col>
        );
    };
    return (
        <>
            {contextHolder}
            <div>
                <h1>Постигаю Mob x </h1>
                <Row gutter={[0, 10]} className='task-menu'>
                    <Col span={24}>
                        <TextArea
                            className='task-menu__input-text'
                            value={textTask}
                            onChange={event =>
                                setTextTask(event.target.value)
                            }
                        ></TextArea>
                    </Col>

                    {renderType()}

                    <Col span={24}>
                        <Button onClick={handleCreate}>
                            Создать
                        </Button>
                    </Col>

                    <Col span={24}>
                        <TaskSearch
                            className='task-menu__input-search'
                            allowClear
                            onSearch={value => handleSearch(value)}
                        />
                    </Col>
                </Row>
                <div className='task-list'>{renderTask()}</div>
            </div>
        </>
    );
});
