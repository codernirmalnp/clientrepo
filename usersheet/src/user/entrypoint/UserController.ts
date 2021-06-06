import * as express from 'express'
import IUserRepository from './../domain/IUserRepository'
export default class UserController{
    constructor(private readonly repository:IUserRepository){  }
    public async findAll(req:express.Request,res:express.Response){
        try{
            const {page,limit}={...req.query} as {page:any,limit:any}
            return this.repository.find(parseInt(page),parseInt(limit)).then(
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

            return this.repository.findById(id).then((results)=>{
                res.status(200).json(results)
            }).catch((err:Error)=>res.status(404).json({ error: err }))

        }
        catch(e){
            return res.status(400).json({ error: e })
        }
    }

    public async add(req:express.Request,res:express.Response){
        try{
            const {name,email,address,phone,companyName}=req.body
            return this.repository.add(name,email,address,phone,companyName).then((result)=>{
               return  res.status(200).json({status:true,data:result,message:"Document Created SuccessFully"})
            }).catch((err:Error)=>res.status(404).json({err}))
        }
        catch(e){
            console.log(e)
        }
    }

    public async update(req:express.Request,res:express.Response){
        try{
            const {id}=req.params
            const {name,description,file}=req.body
            const url=file.map((val:any)=>val.url)
            return this.repository.update(id,url,name,description).then((result)=>{
               return  res.status(200).json({status:true,message:"Document Updated SuccessFully"})
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