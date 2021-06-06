const mongosoe=require('mongoose')
const {Schema}=mongosoe
const FileSchema=new Schema(
    {
        name:String,
        content:String,
        fileType:String,
        extension:String,
        createdOn:Date,
        _user:{type:Schema.Types.ObjectId,ref:'User'},
        _parentFloder:{type:Schema.Types.ObjectId,ref:'Folder'}
    }
)

mongosoe.model('File',FileSchema)