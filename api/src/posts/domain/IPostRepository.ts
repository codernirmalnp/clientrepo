import Post from './Post'
import PageAble from './PageAble'
import { PostDoc } from '../data/model/PostModel'
export default interface IPostRepository{
    findAll(page:number,limit:number):Promise<PageAble<Post>>
    find(id:string):Promise<Post>
    add(author:string,title:string,body:string,published:boolean):Promise<PostDoc>
    update(id:string,title?:string,body?:string,published?:boolean):Promise<PostDoc>
    delete(id:string):Promise<string>
}