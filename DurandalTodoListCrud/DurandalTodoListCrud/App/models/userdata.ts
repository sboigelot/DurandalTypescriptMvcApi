module UserModule {
    export class Userdata {
        public name: KnockoutObservable<string> = ko.observable<string>();
        public surname: KnockoutObservable<string> = ko.observable<string>();
        public phone: KnockoutObservable<string> = ko.observable<string>();
        public address: KnockoutObservable<string> = ko.observable<string>();
        constructor(name: string, surname: string, phone: string, address: string) {
            this.name(name);
            this.surname(surname);
            this.phone(phone);
            this.address(address);
        }
    }
}
export = UserModule 