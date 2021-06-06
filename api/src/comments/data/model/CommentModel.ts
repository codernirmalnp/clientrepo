import * as mongoose from 'mongoose';
import pagination from 'mongoose-paginate-v2';
export interface CommentDoc extends mongoose.Document{
   author:string,
   post:string,
   text:string
}
const CommentSchema=new mongoose.Schema({
   author:{type:mongoose.Schema.Types.ObjectId,required:true},
   post:{type:mongoose.Schema.Types.ObjectId,ref:'Post',required:true},
   text:{type:String,required:true},
},{
    timestamps: true,
})
CommentSchema.virtual('createdBy',{
    ref:'User',
    localField:'author',
    foreignField:'_id',
    justOne:true
})
export interface CommentModel
  extends mongoose.PaginateModel<CommentDoc> {}

  CommentSchema.plugin(pagination)

  export default CommentSchema;