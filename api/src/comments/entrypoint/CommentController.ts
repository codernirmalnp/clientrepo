import * as express from 'express'
import ICommentRepository from './../domain/ICommentRepository'
export default class DocumentController{
    constructor(private readonly repository:ICommentRepository){ }
    public async findAll(req:express.Request,res:express.Response){
        try{
            const {page,limit}={...req.query} as {page:any,limit:any}
            return this.repository.findAll(parseInt(page),parseInt(limit)).then(
                    pageable=>res.status(200).json({
                        metadata:{
                            page:pageable.page,
                            pageSize:pageable.pageSize,
                            totalPages:pageable.totalPages
                        },
                        data:pageable.data
                    })
            ).catch((err:Error)=>res.status(404).json({error:err}))
        }
        catch(err){
            return res.status(400).json({ error: err })

        }
    }
    public async findOne(req:express.Request,res:express.Response){
        try{
            const {id}=req.params

            return this.repository.find(id).then((results)=>{
                res.status(200).json(results)
            }).catch((err:Error)=>res.status(404).json({ error: err }))

        }
        catch(e){
            return res.status(400).json({ error: e })
        }
    }

    public async add(req:express.Request,res:express.Response){
        try{
            const {id}=req.params
            const {post,text}=req.body
            return this.repository.add(id,post,text).then((result)=>{
               return  res.status(200).json({status:true,message:"Post Created SuccessFully",data:result})
            }).catch((err:Error)=>res.status(404).json({err}))
        }
        catch(e){
            console.log(e)
        }
    }

    public async update(req:express.Request,res:express.Response){
        try{
            const {id}=req.params
            const {post,text}=req.body
            return this.repository.update(id,post,text).then((result)=>{
               return  res.status(200).json({status:true,message:"Document Updated SuccessFully",data:result})
            }).catch((err:Error)=>res.status(404).json({err}))
        }
        catch(e){
            console.log(e)
        }
    }
    public async delete(req:express.Request,res:express.Response){
        try{
            const {id}=req.params
         
            return this.repository.delete(id).then((result)=>{
                res.status(200).json(result)
            }).catch((err:Error)=>console.log(err))
        }
        catch(e)
        {
            return res.status(400).json({error:e})
        }
    }

 

  
}