import { observer } from 'mobx-react-lite';
import taskStore from '../../../store/task.tsx';
import { Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

import { TaskItem } from '../components/taskItem/index.ts';
import { useTask } from '../hook/useTask.tsx';

export const TaskList = observer(() => {
    const { total, createTodo, completeTodo, deleteTodo } = taskStore;
    const { textTask, setTextTask, contextHolder, handleCreate } =
        useTask({ createTodo });

    return (
        <>
            {contextHolder}
            <div>
                <h1>Постигаю Mob x </h1>
                <TextArea
                    value={textTask}
                    onChange={event =>
                        setTextTask(event.target.value)
                    }
                ></TextArea>
                <Button onClick={handleCreate}>Создать</Button>
                {total.map(item => (
                    <TaskItem
                        key={item.id}
                        item={item}
                        completeTodo={completeTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </div>
        </>
    );
});
