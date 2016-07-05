define(["require", "exports"], function (require, exports) {
    var UserModule;
    (function (UserModule) {
        var Userdata = (function () {
            function Userdata(name, surname, phone, address) {
                this.name = ko.observable();
                this.surname = ko.observable();
                this.phone = ko.observable();
                this.address = ko.observable();
                this.name(name);
                this.surname(surname);
                this.phone(phone);
                this.address(address);
            }
            return Userdata;
        })();
        UserModule.Userdata = Userdata;
    })(UserModule || (UserModule = {}));
    return UserModule;
});
//# sourceMappingURL=userdata.js.map