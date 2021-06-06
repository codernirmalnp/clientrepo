const mongoose=require('mongoose')
const {Schema}=mongoose
const FolderSchema=Schema({
    name:String,
    createdOn:Date,
    _user:{type:Schema.Types.ObjectId,ref:'User'},
    _parentFolder:{type:Schema.Types.ObjectId,ref:'Folder'}
})
FolderSchema.statics.findOneOrCreate=function findOneOrCreate(condition,doc){
    const self=this
    const newDocument=doc
    return new Promise((resolve,reject)=>{
        return self.findOne(condition)
        .then((result)=>{
            if(result){
                return resolve(result)
            }
            return self.create(newDocument).then(result=>{
                return resolve(result)
            }).catch((err)=>{
                return reject(err)
            })
        })
    })

}
mongoose.model('Folder',FolderSchema)