define(["require", "exports", "models/userdata"], function (require, exports, user) {
    var Users = (function () {
        function Users() {
            var _this = this;
            this.name = ko.observable();
            this.surname = ko.observable();
            this.phone = ko.observable();
            this.address = ko.observable();
            this.userArray = ko.observableArray([
                new user.Userdata("Yildirim", "Kocdag", "5555", "AABBCC"),
                new user.Userdata("Yildirim1", "Kocdag1", "55551", "AABBCC1")
            ]);
            this.addNew = function () {
                _this.userArray.push(new user.Userdata(_this.name(), _this.surname(), _this.phone(), _this.address()));
                _this.name("");
                _this.surname("");
                _this.phone("");
                _this.address("");
            };
            this.remove = function (user) {
                _this.userArray.remove(user);
            };
        }
        return Users;
    })();
    return Users;
});
//# sourceMappingURL=users.js.map