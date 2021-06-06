import {Mongoose,PaginateResult} from 'mongoose'
import ICommentRepository from './../../domain/ICommentRepository';
import Comment from './../../domain/Comment'
import PageAble from './../../domain/PageAble';
import CommentSchema,{CommentModel,CommentDoc} from './../model/CommentModel';
export default class PostRepository implements ICommentRepository{
  constructor(private readonly client:Mongoose){}
  public async findAll(page:number,pageSize:number):Promise<PageAble<Comment>>{
    const model=this.client.model<CommentDoc>("Comment",CommentSchema) as CommentModel ;
    const pageOptions={page:page,limit:pageSize, sort: { _id: -1 }}
    const pageResults = await model.paginate({}, pageOptions).catch((err) => null)
    return this._commentFromPageResults(pageResults);

  }
  public async find(id:string):Promise<Comment>{
    const comments=this.client.model<CommentDoc>("Comment",CommentSchema)
    const comment=await comments.findOne({_id:id})
    if(!comment) return Promise.reject("Cannot find Comment")
    return new Comment(comment.id,comment.author,comment.post,comment.text)

  }

  public async add(author:string,post:string,text:string):Promise<CommentDoc>{
    const Comment=this.client.model<CommentDoc>("Comment",CommentSchema)
    const comment= new Comment({author:author,post:post,text:text})
    await comment.save();
    if(!comment) return Promise.reject("Something went Wrong")
    return Promise.resolve(comment)
  }
  public async update(id:string,post?:string,text?:string):Promise<CommentDoc>{
    const  comments=this.client.model<CommentDoc>("Comment",CommentSchema)
    let comment = {post:'',text:''};
    await comments.findOne({ _id:id }, (err:any, result:any) => {
      if (err) {
         return comment;
      }
      if (result != null) {
        comment= result;
      }
    });
   
    const result=await comments.findOneAndUpdate({ _id:id },{
      $set: {
        post: post ? post : comment.post,
        text:text ? text:comment.text
         
      }
    },
    { new: true,useFindAndModify:false })

 
    if(!result) return Promise.reject("Something went Wrong")
    return Promise.resolve(result)
    
  }
  public async delete(id:string):Promise<string>{
    const comments=this.client.model<CommentDoc>("Comment",CommentSchema)
    const comment=await comments.findOne({_id:id})
    if(!comment) return Promise.resolve("Cannot Find Comment")
    await  comments.findOneAndDelete({_id:id},{useFindAndModify:false})
    return Promise.resolve("Comment deleted SuccessFully")
  }

  

  private _commentFromPageResults(
    pageResults: PaginateResult<CommentDoc> | null
  ) {
    if (pageResults === null || pageResults.docs.length === 0)
      return Promise.reject('Comment not found')

    const results = pageResults.docs.map<Comment>(
      (model) =>
        new Comment(
          model.id,
          model.author,
          model.post,
          model.text
        )
    )

    return new PageAble<Comment>(
      pageResults.page ?? 0,
      pageResults.limit,
      pageResults.totalPages,
      results
    )
  }

 

}
