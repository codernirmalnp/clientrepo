import {Mongoose,PaginateResult} from 'mongoose'
import fs from 'fs'
import IDocumentRepository from './../../domain/IDocumentRepository';
import Document from './../../domain/Document'
import Pageable from './../../domain/Pageable';
import {document_path} from './../../../../config'
import DocumentSchema,{DocumentModel,DocumentDoc} from './../model/DocumentModel';
export default class DocumentRepository implements IDocumentRepository{
  constructor(private readonly client:Mongoose){}
  public async find(page:number,pageSize:number):Promise<Pageable<Document>>{
    const model=this.client.model<DocumentDoc>("Document",DocumentSchema) as DocumentModel ;
    const pageOptions={page:page,limit:pageSize, sort: { _id: -1 }}
    const pageResults = await model.paginate({}, pageOptions).catch((err) => null)
    return this.documentFromPageResults(pageResults);

  }
  public async findById(id:string):Promise<Document>{
    const doclist=this.client.model<DocumentDoc>("Document",DocumentSchema)
    const document=await doclist.findOne({_id:id})
    if(!document) return Promise.reject("Cannot find Document")
    return new Document(document.id,document.name,document.file,document.description)

  }

  public async add(name:string,url:string,description:string):Promise<DocumentDoc>{
    const addDoc=this.client.model<DocumentDoc>("Document",DocumentSchema)
    const document= new addDoc({name:name,file:url,description:description})
    await document.save();
    if(!document) return Promise.reject("Something went Wrong")
    return Promise.resolve(document)
  }
  public async update(id:string,url:[],name?:string,description?:string):Promise<DocumentDoc>{
    const updateDocument=this.client.model<DocumentDoc>("Document",DocumentSchema)
    let document = {name:'',file:'',description:''};
    await updateDocument.findOne({ _id:id }, (err:any, result:any) => {
      if (err) {
         return document;
      }
      if (result != null) {
        document= result;
      }
    });
   
    const result=await updateDocument.findOneAndUpdate({ _id:id },{
      $set: {
        name: name ? name : document.name,
        description: description 
          ? description
          : document.description
      },
      $push:{
         "file":{$each:url}
      }
    },
    { new: true,useFindAndModify:false })

 
    if(!result) return Promise.reject("Something went Wrong")
    return Promise.resolve(result)
    
  }
  public async delete(id:string):Promise<string>{
    const FILE_PATH='public/category/'
    const deleteCategory=this.client.model<DocumentDoc>("Document",DocumentSchema)
    const category=await deleteCategory.findOne({_id:id})
    const filepath=''
    if(fs.existsSync(FILE_PATH+'/'+filepath)) fs.unlinkSync(FILE_PATH+'/'+filepath)
    await deleteCategory.findOneAndDelete({_id:id},{useFindAndModify:false})
    return Promise.resolve("Category deleted SuccessFully")
  }

  public async deleteOne(id:string,item:string):Promise<string>{
    const FILE_PATH=document_path
    const deleteDocument=this.client.model<DocumentDoc>("Document",DocumentSchema)
    if(fs.existsSync(FILE_PATH+'/'+item)) fs.unlinkSync(FILE_PATH+'/'+item)
    const dbval=`public\\${item}`
    await deleteDocument.findByIdAndUpdate({_id:id},{$pull:{file:dbval}},{new:true})
    return Promise.resolve("Document Deleted SuccessFully")
  }

  private documentFromPageResults(
    pageResults: PaginateResult<DocumentDoc> | null
  ) {
    if (pageResults === null || pageResults.docs.length === 0)
      return Promise.reject('Document not found')

    const results = pageResults.docs.map<Document>(
      (model) =>
        new Document(
          model.id,
          model.name,
          model.file,
          model.description
        )
    )

    return new Pageable<Document>(
      pageResults.page ?? 0,
      pageResults.limit,
      pageResults.totalPages,
      results
    )
  }

 

}
