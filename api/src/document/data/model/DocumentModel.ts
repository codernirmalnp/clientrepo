import * as mongoose from 'mongoose'
import pagination from 'mongoose-paginate-v2'

export interface DocumentDoc extends mongoose.Document{
    file:[],
    name:string,
    description:string
}

const DocumentSchema=new mongoose.Schema({
    name:{type:String},
    file:[],
    description:{type:String}
})
export interface DocumentModel extends mongoose.PaginateModel<DocumentDoc>{}
DocumentSchema.plugin(pagination)

export default DocumentSchema;