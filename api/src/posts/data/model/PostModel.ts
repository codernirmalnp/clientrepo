import * as mongoose from 'mongoose';
import pagination from 'mongoose-paginate-v2';
export interface PostDoc extends mongoose.Document{
   author:string,
   title:string,
   body:string,
   published:boolean,
   careatedBy:string
}
const PostSchema=new mongoose.Schema({
   author:{type:mongoose.Schema.Types.ObjectId,required:true},
   title:{type:String,required:true},
   body:{type:String,required:true},
   published:{type:Boolean,required:false}  
},{
    timestamps: true,
})
PostSchema.virtual('createdBy',{
    ref:'User',
    localField:'role',
    foreignField:'_id',
    justOne:true
})
export interface PostModel
  extends mongoose.PaginateModel<PostDoc> {}

  PostSchema.plugin(pagination)

  export default PostSchema;