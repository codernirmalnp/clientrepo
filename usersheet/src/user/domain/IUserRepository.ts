
import PageAble from './Pageable'
import User from './User'
import {UserDoc} from './../data/model/UserModel'

export default  interface IUserRepository{
    find(page:number,limit:number):Promise<PageAble<User>>
    findById(id:string):Promise<User>
    add(name:string,email:string,address:string,phone:string,companyName:string):Promise<UserDoc>
    update(id:string,name?:string,email?:string,address?:string,phone?:string,companyName?:string):Promise<UserDoc>
    delete(id:string):Promise<string>
    

}