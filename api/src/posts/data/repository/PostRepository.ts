import {Mongoose,PaginateResult} from 'mongoose'
import IPostRepository from './../../domain/IPostRepository';
import Post from './../../domain/Post'
import PageAble from './../../domain/PageAble';
import PostSchema,{PostModel,PostDoc} from './../model/PostModel';
export default class PostRepository implements IPostRepository{
  constructor(private readonly client:Mongoose){}
  public async findAll(page:number,pageSize:number):Promise<PageAble<Post>>{
    const model=this.client.model<PostDoc>("Post",PostSchema) as PostModel ;
    const pageOptions={page:page,limit:pageSize, sort: { _id: -1 }}
    const pageResults = await model.paginate({}, pageOptions).catch((err) => null)
    return this._postFromPageResults(pageResults);

  }
  public async find(id:string):Promise<Post>{
    const posts=this.client.model<PostDoc>("Post",PostSchema)
    const post=await posts.findOne({_id:id})
    if(!post) return Promise.reject("Cannot find Post")
    return new Post(post.id,post.title,post.body,post.published,post.careatedBy)

  }

  public async add(author:string,title:string,body:string,published:boolean):Promise<PostDoc>{
    console.log(author)
    console.log(title)
    console.log(body)
    console.log(published)
    const Post=this.client.model<PostDoc>("Post",PostSchema)
    const post= new Post({author:author,title:title,body:body,published:published})
     
    await post.save();
    console.log(post)
    if(!post) return Promise.reject("Something went Wrong")
    return Promise.resolve(post)
  }
  public async update(id:string,title?:string,body?:string,published?:boolean):Promise<PostDoc>{
    const  posts=this.client.model<PostDoc>("Post",PostSchema)
    let post = {title:'',body:'',published:false};
    await posts.findOne({ _id:id }, (err:any, result:any) => {
      if (err) {
         return post;
      }
      if (result != null) {
        post= result;
      }
    });
   
    const result=await posts.findOneAndUpdate({ _id:id },{
      $set: {
        title: title ? title : post.title,
        body:body ? body:post.body,
        published:published ? published:post.published
         
      }
    },
    { new: true,useFindAndModify:false })

 
    if(!result) return Promise.reject("Something went Wrong")
    return Promise.resolve(result)
    
  }
  public async delete(id:string):Promise<string>{
    const posts=this.client.model<PostDoc>("Post",PostSchema)
    const post=await posts.findOne({_id:id})
    if(!post) return Promise.resolve("Cannot Find Post")
    await  posts.findOneAndDelete({_id:id},{useFindAndModify:false})
    return Promise.resolve("Category deleted SuccessFully")
  }

  

  private _postFromPageResults(
    pageResults: PaginateResult<PostDoc> | null
  ) {
    if (pageResults === null || pageResults.docs.length === 0)
      return Promise.reject('Document not found')

    const results = pageResults.docs.map<Post>(
      (model) =>
        new Post(
          model.id,
          model.title,
          model.body,
          model.published,
          model.careatedBy
        )
    )

    return new PageAble<Post>(
      pageResults.page ?? 0,
      pageResults.limit,
      pageResults.totalPages,
      results
    )
  }

 

}
