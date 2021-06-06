import * as mongoose from 'mongoose'
import pagination from 'mongoose-paginate-v2'
export interface UserDoc extends mongoose.Document{
   name:string,
   email:string,
   address:string,
   phone:string,
   companyName:string
}
const type={type:String}
const UserSchema=new mongoose.Schema({
    name:type,
    email:type,
    address:type,
    phone:type,
    companyName:type
})

export interface UserModel extends mongoose.PaginateModel<UserDoc>{}
UserSchema.plugin(pagination)
export default UserSchema;