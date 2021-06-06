import {Mongoose,PaginateResult} from 'mongoose'
import IUserRepository from './../../domain/IUserRepository';
import User from './../../domain/User'
import Pageable from './../../domain/Pageable';
import UserSchema,{UserModel,UserDoc} from './../model/UserModel';

export default class DocumentRepository implements IUserRepository{
  constructor(private readonly client:Mongoose){}
  public async find(page:number,pageSize:number):Promise<Pageable<User>>{
    const model=this.client.model<UserDoc>("User",UserSchema) as UserModel ;
    const pageOptions={page:page,limit:pageSize, sort: { _id: -1 }}
    const pageResults = await model.paginate({}, pageOptions).catch((err:any) => null)
    return this.documentFromPageResults(pageResults);

  }
  public async findById(id:string):Promise<User>{
    const userlist=this.client.model<UserDoc>("User",UserSchema)
    const user=await userlist.findOne({_id:id})
    if(!user) return Promise.reject("Cannot find Document")
    return new User(user.id,user.name,user.email,user.address,user.phone,user.companyName)

  }

  public async add(name:string,email:string,address:string,phone:string,companyName:string):Promise<UserDoc>{
    const userDoc=this.client.model<UserDoc>("User",UserSchema)
    const user= new userDoc({name:name,email:email,address:address,phone:phone,companyName:companyName})
    await user.save();
    if(!user) return Promise.reject("Something went Wrong")
    return Promise.resolve(user)
  }
  public async update(id:string,name?:string,email?:string,address?:string,phone?:string,companyName?:string):Promise<UserDoc>{
    const updateDocument=this.client.model<UserDoc>("User",UserSchema)
    let user = {name:'',email:'',address:'',phone:'',companyName:''};
    await updateDocument.findOne({ _id:id }, (err:any, result:any) => {
      if (err) {
         return user;
      }
      if (result != null) {
        user= result;
      }
    });
   
    const result=await updateDocument.findOneAndUpdate({ _id:id },{
      $set: {
        name: name ? name : user.name,
        email:email ? email:user.email,
        address:address ? address:user.address,
        phone:phone ? phone:user.phone,
        companyName:companyName ? companyName:user.companyName
      }
    },
    { new: true,useFindAndModify:false })

 
    if(!result) return Promise.reject("Something went Wrong")
    return Promise.resolve(result)
    
  }
  public async delete(id:string):Promise<string>{
    const deleteUser=this.client.model<UserDoc>("User",UserSchema)
    const  user=await deleteUser.findOne({_id:id})
    if(!user) return Promise.reject("User not found")
    await deleteUser.findOneAndDelete({_id:id},{useFindAndModify:false})
    return Promise.resolve("Category deleted SuccessFully")
  }

  

  private documentFromPageResults(
    pageResults: PaginateResult<UserDoc> | null
  ) {
    if (pageResults === null || pageResults.docs.length === 0)
      return Promise.reject('Users not found')

    const results = pageResults.docs.map<User>(
      (model) =>
        new User(
          model.id,
          model.name,
          model.email,
          model.address,
          model.phone,
          model.companyName
        
        )
    )

    return new Pageable<User>(
      pageResults.page ?? 0,
      pageResults.limit,
      pageResults.totalPages,
      results
    )
  }

 

}
