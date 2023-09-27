import { runInAction, makeAutoObservable } from 'mobx';
import { TodoService } from '../service/TodoServise/TodoService.ts';
import { ITodoAdd } from '../types/Todo/ITodo.ts';
import { TagTodoService } from '../service/TodoServise/TagTodoService.ts';
import { ITagStore, ITaskStore } from './interface/IStore.task.ts';

class TaskStore {
    task: ITaskStore = { item: [], isLoading: false };
    tag: ITagStore = { item: [], isLoading: false };
    get totalTask() {
        return this.task;
    }
    get totalTag() {
        return this.tag;
    }
    constructor() {
        makeAutoObservable(this);
    }

    loadTodo = (search = '') => {
        this.task.isLoading = true;
        return TodoService.getTodo(search)
            .then(data => {
                runInAction(() => {
                    this.task.item = data;
                });
            })
            .finally(() => {
                runInAction(() => {
                    this.task.isLoading = false;
                });
            });
    };
    completeTodo = (id: number, isCompleted: boolean) => {
        TodoService.completeTodo(id, isCompleted).then(() =>
            this.loadTodo()
        );
    };
    createTodo = (data: ITodoAdd) => {
        runInAction(() => {
            TodoService.addTodo(data).then(() => {
                this.loadTodo();
            });
        });
    };
    deleteTodo = (id: number) => {
        runInAction(() => {
            TodoService.deleteTodo(id).then(() => {
                this.loadTodo();
            });
        });
    };

    loadTagTodo = () => {
        this.tag.isLoading = true;

        return TagTodoService.getTag()
            .then(data => {
                runInAction(() => {
                    this.tag.item = data;
                });
            })
            .finally(() => {
                runInAction(() => {
                    this.tag.isLoading = false;
                });
            });
    };

    addTagTodo = (text: string) => {
        runInAction(() => {
            TagTodoService.addTag(text).then(() => {
                this.loadTagTodo();
            });
        });
    };
    deleteTagTodo = (id: number) => {
        runInAction(() => {
            TagTodoService.deleteTag(id).then(() => {
                this.loadTagTodo();
            });
        });
    };
}

const taskStore = new TaskStore();

export default taskStore;
export { TaskStore };
