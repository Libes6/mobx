import {FC, ReactHTMLElement} from 'react';
import {ITask} from "../../store/task.tsx";
import { DeleteOutlined} from "@ant-design/icons";
import * as React from "react";
import {clsMix} from "../../lib/clsx/Clsx.ts";
interface ITaskItemProps{
    item:ITask
    completeTodo:(id:number)=>void
    deleteTodo:(id:number)=>void
}
const TaskItem:FC<ITaskItemProps> = ({item,completeTodo,deleteTodo}) => {
    const {name,isCompleted,id}=item

    const handleDelete =(event:React.MouseEvent<HTMLDivElement>)=>{
        console.log(id)
        event.stopPropagation()
        deleteTodo(id)
    }

    const handleComplete =()=>{
        console.log(id)
        completeTodo(id)
    }
    const renderIcon =()=>{
        if (isCompleted){
            return <DeleteOutlined twoToneColor={'#eb2f96'} />
        }
        else {
            return <DeleteOutlined  twoToneColor={'#ee0a3c'} size={24} />
        }
    }
    return (
        <div className='task-item'  onClick={()=>handleComplete()}  >

            <div className={clsMix('task-item__title',{'title-complete':isCompleted},[])}>  <p>{name}</p></div>
            <div onClick={(event)=>handleDelete(event)}>{renderIcon()}</div>

        </div>
    );
};

export default TaskItem;