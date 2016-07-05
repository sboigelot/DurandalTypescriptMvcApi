define(["require", "exports", "models/todo", "durandal/app"], function (require, exports, todo, app) {
    var TodoListViewModel = (function () {
        function TodoListViewModel() {
            var _this = this;
            this.todos = new todo.TodoList();
            this.editable = new todo.Todo("");
            this.addEditableClone = function () {
                var clone = new todo.Todo(_this.editable.title.peek(), _this.editable.priority.peek(), _this.editable.description.peek(), _this.editable.dueDate.peek());
                _this.todos.items.push(clone);
            };
            this.remove = function (todo) {
                _this.todos.items.remove(todo);
            };
            this.save = function () {
                _this.todos.save();
            };
            this.load = function () {
                _this.todos.load();
            };
            this.activate = function () {
                return _this.todos.load();
            };
            this.deactivate = function () {

                //TODO chain promise here
                if (app.showMessage('Would you like to save your changes?', 'Navigate', ['Yes', 'No'])) {
                    return _this.todos.save();
                }
            };
            this.todos = new todo.TodoList();
        }
        return TodoListViewModel;
    })();
    return TodoListViewModel;
});
//# sourceMappingURL=todos.js.map