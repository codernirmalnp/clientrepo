export default class User{
    constructor(
        public readonly id:string,
        public readonly name:string,
        public readonly email:string,
        public readonly  address:string,
        public readonly phone:string,
        public readonly companyName:string
    ){}
}