import { observer } from 'mobx-react-lite';
import taskStore from '../../../store/task.tsx';
import { Button, Col, Row, Spin } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

import { TaskItem, TaskType } from '../components/';
import { useTask } from '../hook/useTask.tsx';

export const TaskList = observer(() => {
    const {
        totalTask,
        createTodo,
        completeTodo,
        deleteTodo,
        loadTodo,
    } = taskStore;
    const { textTask, setTextTask, contextHolder, handleCreate } =
        useTask({ createTodo, loadTodo });

    const renderTask = () => {
        if (totalTask.isLoading) {
            return <Spin size='large' />;
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
            <Col span={24}>
                <TaskType />
            </Col>
        );
    };
    return (
        <>
            {contextHolder}
            <div>
                <h1>Постигаю Mob x </h1>
                <Row gutter={[10, 10]}>
                    <Col span={24}>
                        <TextArea
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
                </Row>

                {renderTask()}
            </div>
        </>
    );
});
