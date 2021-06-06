import Pageable from '../../auth/domain/Pageable';
import Document from './Document'
import {DocumentDoc} from './../data/model/DocumentModel'
export default interface IDocumentRepository{
     find(page:number,pageSize:number):Promise<Pageable<Document>>,
     findById(id:string):Promise<Document>,
     add(name:string,url:string,description:string):Promise<DocumentDoc>,
     update(id:string,url:[],name?:string,description?:string):Promise<DocumentDoc>,
     delete(id:string):Promise<string>,
     deleteOne(id:string,item:string):Promise<string>
}