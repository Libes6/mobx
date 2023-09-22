import {action, computed, makeObservable, observable} from "mobx";




export interface ITask{
    name:string
    id:number
    isCompleted:boolean
}
class TaskStore{
    task=[{name:'Выучить уже React',isCompleted:false,id:1}];
    count=0
    get total(){
        return this.task
    }
    get totalCount(){
        return this.count
    }
    constructor() {
        makeObservable(this,{
            task:observable,
            count:observable,
            totalCount:computed,
            total:computed,
            createTodo:action,
            deleteTodo:action,
            completeTodo:action,
        })
    }

    completeTodo = (id:number)=>{
        this.task = this.task.map(task => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task))

    }
    createTodo = (values:string)=>{
        this.task.push({
            name:values,id:Number(this.task.length+1),isCompleted:false,
        })
    }
    deleteTodo =(id:number)=>{
        this.task = this.task.filter(task => task.id !== id)
    }
}


const taskStore = new TaskStore();

export default taskStore;
export {TaskStore}