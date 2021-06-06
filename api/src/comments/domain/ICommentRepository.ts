import Comment from './Comment'
import PageAble from './PageAble'
import { CommentDoc } from '../data/model/CommentModel'
export default interface IPostRepository{
    findAll(page:number,limit:number):Promise<PageAble<Comment>>
    find(id:string):Promise<Comment>
    add(id:string,post:string,text:string):Promise<CommentDoc>
    update(id:string,post?:string,text?:string):Promise<CommentDoc>
    delete(id:string):Promise<string>
}