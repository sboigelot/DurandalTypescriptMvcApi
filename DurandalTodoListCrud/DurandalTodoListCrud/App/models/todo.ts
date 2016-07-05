import http = require("plugins/http")
import ko = require("knockout")
module TodoModule {
    export class Todo {
        public title: KnockoutObservable<string> = ko.observable<string>();
        public priority: KnockoutObservable<number> = ko.observable<number>();
        public description: KnockoutObservable<string> = ko.observable<string>();
        public dueDate: KnockoutObservable<Date> = ko.observable<Date>();

         constructor(title: string, priority?: number, description?: string, dueDate?: Date) {
             this.title(title);
             this.priority(priority | 0);
             this.description(description);
             this.dueDate(dueDate);
         }
     }

     export class TodoList {
         public items: KnockoutObservableArray<Todo> = ko.observableArray<Todo>();

         public save = (): JQueryPromise<any> => {
             return http.post("/api/Todo", http.toJSON(this.items)).
                 fail((e) => {
                     console.log("save faled " + e);
                 }).
                 done((e, d) => {
                     console.log("save done " + e + " " + d);
                 });
         }

         public load(): JQueryPromise<any> {
             return http.get("/api/Todo").
                 fail((e) => {
                     console.log("load faled " + e);
                 }).
                 done((data, result) => {
                     console.log("load done " + data + " " + result);

                     //while I don't know how to use ko.mapping in typescript with durandal
                     //this.items(ko.mapping.fromJSON(data));
                     this.items([]);
                     var items = JSON.parse(data);
                     items.forEach((item) => {
                         var mappedTodo: Todo = new Todo(item.title,
                             item.priority,
                             item.description,
                             item.dueDate);
                         this.items.push(mappedTodo);
                     });
             });
         }
     }
}
export = TodoModule 