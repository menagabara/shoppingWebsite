export class User {
    constructor(
        public id: number,
        public email: string,
        public name: string,
        public password: string,
        public address: string //in case of customer, insert this field with null for now:D.
    ) {}
}
  