export default class Post{
    constructor(public readonly id:string,
        public readonly title:string,
        public readonly author:string,
        public readonly published:boolean,
        public readonly createdBy:string
        ){}
}