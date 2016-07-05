import user = require("models/userdata")
class Users {
    public name: KnockoutObservable<string> = ko.observable<string>();
    public surname: KnockoutObservable<string> = ko.observable<string>();
    public phone: KnockoutObservable<string> = ko.observable<string>();
    public address: KnockoutObservable<string> = ko.observable<string>();
    public userArray: KnockoutObservableArray<user.Userdata> = ko.observableArray<user.Userdata>([
        new user.Userdata("Yildirim", "Kocdag", "5555", "AABBCC"),
        new user.Userdata("Yildirim1", "Kocdag1", "55551", "AABBCC1")
    ]);

    public addNew = () => {
        this.userArray.push(new user.Userdata(this.name(), this.surname(), this.phone(), this.address()));
        this.name("");
        this.surname("");
        this.phone("");
        this.address("");
    }

    public remove = (user: user.Userdata) => {
        this.userArray.remove(user);
    }
}
export = Users; 