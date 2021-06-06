export default class Document{
    constructor(
        public readonly id:string,
        public readonly name:string,
        public readonly file:[],
        public readonly description:string
    )
    {

    }
}