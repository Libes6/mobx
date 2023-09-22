import {observer} from "mobx-react-lite";
import taskStore from "../../store/task.tsx";
import TaskItem from "./TaskItem.tsx";
import {Button, notification} from "antd";
import TextArea from "antd/lib/input/TextArea";
import {createContext, useMemo, useState} from "react";
import {NotificationPlacement} from "antd/lib/notification/interface";

const TaskList =observer(()=>{
    const {total,totalCount,createTodo,completeTodo,deleteTodo}=taskStore
    const [textTask, setTextTask] = useState('');
    const [api, contextHolder] = notification.useNotification();
    const openNotificationSuccess = (message:string) => {
        api.success({
            message: `Notification`,
            description: message,
        });
    };
    const openNotificationError = (message:string) => {
        api.error({
            message: `Notification`,
            description: message,
        });
    };
    const handleCreate =()=>{
        if (textTask!==''){
            createTodo(textTask)
            openNotificationSuccess('Успешно')
        }else {
            openNotificationError('Нельзя создать пустую задачу')
        }
        setTextTask('')
    }


    return (<>
            {contextHolder}
            <div>
                <h1>Постигаю Mob x </h1>
                <TextArea value={textTask} onChange={(event)=>setTextTask(event.target.value)}></TextArea>
                <Button  onClick={handleCreate}>Создать</Button>
                {total.map(item=><TaskItem key={item.id} item={item} completeTodo={completeTodo} deleteTodo={deleteTodo}/>)}
            </div>
    </>

    );
})
export default TaskList;