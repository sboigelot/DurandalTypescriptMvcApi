define(["require", "exports", "plugins/http", "knockout"], function (require, exports, http, ko) {
    var TodoModule;
    (function (TodoModule) {
        var Todo = (function () {
            function Todo(title, priority, description, dueDate) {
                this.title = ko.observable();
                this.priority = ko.observable();
                this.description = ko.observable();
                this.dueDate = ko.observable();
                this.title(title);
                this.priority(priority | 0);
                this.description(description);
                this.dueDate(dueDate);
            }
            return Todo;
        })();
        TodoModule.Todo = Todo;
        var TodoList = (function () {
            function TodoList() {
                var _this = this;
                this.items = ko.observableArray();
                this.save = function () {
                    return http.post("/api/Todo", http.toJSON(_this.items)).
                        fail(function (e) {
                        console.log("save faled " + e);
                    }).
                        done(function (e, d) {
                        console.log("save done " + e + " " + d);
                    });
                };
            }
            TodoList.prototype.load = function () {
                var _this = this;
                return http.get("/api/Todo").
                    fail(function (e) {
                    console.log("load faled " + e);
                }).
                    done(function (data, result) {
                    console.log("load done " + data + " " + result);
                    //while I don't know how to use ko.mapping in typescript with durandal
                    //this.items(ko.mapping.fromJSON(data));
                    _this.items([]);
                    var items = JSON.parse(data);
                    items.forEach(function (item) {
                        var mappedTodo = new Todo(item.title, item.priority, item.description, item.dueDate);
                        _this.items.push(mappedTodo);
                    });
                });
            };
            return TodoList;
        })();
        TodoModule.TodoList = TodoList;
    })(TodoModule || (TodoModule = {}));
    return TodoModule;
});
//# sourceMappingURL=todo.js.map