import * as express from 'express'
import multer from 'multer'


const multerStorage=multer.diskStorage({
    destination:(req:express.Request,file:any,cb:any)=>{
        cb(null,'public')
    },
    filename:(req:express.Request,file:any,cb:any)=>{
        const ext=file.mimetype.split('/')[1]
        cb(null,`${Date.now()}.${ext}`)

    }
})
const limits={fileSize:1000*1000*4}
const filter=(req:Express.Request,file:any,cb:any)=>{
    console.error(file.mimetype)
    if(file.mimetype==='application/pdf' || file.memetype==='application/docx' || file.memetype==='aplication/xlsx'){
        cb(null, true);
    }
    else{
        cb(null, false);
        return cb(new Error('Only .pdf, .docx and .xlsx format allowed!'));
    }
}

const upload=multer(
    {
        storage:multerStorage,
        fileFilter:filter,
        limits

    }
).single('file')

export {upload}

