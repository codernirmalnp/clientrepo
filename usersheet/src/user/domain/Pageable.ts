export default class PageAble<T>{
  constructor(
    public page:number,
    public pageSize:number,
    public totalPages:number,
    public data:T[]
    ){}
}