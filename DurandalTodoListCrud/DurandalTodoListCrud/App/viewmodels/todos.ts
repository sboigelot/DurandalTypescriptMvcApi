import todo = require("models/todo")
import app = require("durandal/app")
class TodoListViewModel {
    
    public todos: todo.TodoList = new todo.TodoList();
    public editable: todo.Todo = new todo.Todo("");

    constructor() {
        this.todos = new todo.TodoList();
    }

    public addEditableClone = (): void => {
        
        var clone = new todo.Todo(
            this.editable.title.peek(),
            this.editable.priority.peek(),
            this.editable.description.peek(),
            this.editable.dueDate.peek()
        );
        this.todos.items.push(clone);
    }

    public remove = (todo: todo.Todo): void => {
        this.todos.items.remove(todo);
    }

    public save = (): void => {
        this.todos.save();
    }

    public load = (): void => {
        this.todos.load();
    }

    public activate = (): JQueryPromise<any> => {
        return this.todos.load();
    }

    public deactivate = (): JQueryPromise<any> => {
        if (app.showMessage('Would you like to save your changes?', 'Navigate', ['Yes', 'No'])) {
            return this.todos.save();
        }
    }
}
export = TodoListViewModel;