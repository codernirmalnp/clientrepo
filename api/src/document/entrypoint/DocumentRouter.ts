import * as express from 'express'
import TokenValidator from './../../auth/helper/TokenValidator'
import IDocumentRepository from '../domain/IDocumentRepository'
import DocumentController from './DocumentController'


 
export default class DocumentRouter{
    public static configure(repository:IDocumentRepository,tokenValidator:TokenValidator):express.Router{
      const router=express.Router();
      let controller=new DocumentController(repository)
      router.get('/',
      (req, res) => controller.findAll(req,res))
      router.get('/:id',
      (req, res) => controller.findOne(req, res))
      router.post('/',
      (req, res) => controller.add(req, res))
      router.patch('/:id',
      (req, res) => controller.update(req, res))
      router.delete('/:id',
      (req, res) => controller.delete(req,res))
      router.post('/upload',
      (req,res)=>controller.upload(req,res)
      )
      router.delete('/:id/:item',
      (req,res)=>controller.deleteOne(req,res)
      )
      return router;

    }
}