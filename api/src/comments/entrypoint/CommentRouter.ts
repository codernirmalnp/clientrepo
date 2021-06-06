import * as express from 'express'
import TokenValidator from './../../auth/helper/TokenValidator'
import IDocumentRepository from '../domain/ICommentRepository'
import CommentController from './CommentController'


 
export default class DocumentRouter{
    public static configure(repository:IDocumentRepository,tokenValidator:TokenValidator):express.Router{
      const router=express.Router();
      let controller=new CommentController(repository)
      router.get('/',
      (req, res) => controller.findAll(req,res))
      router.get('/:id',
      (req, res) => controller.findOne(req, res))
      router.post('/:id',
      (req, res) => controller.add(req, res))
      router.patch('/:id',
      (req, res) => controller.update(req, res))
      router.delete('/:id',
      (req, res) => controller.delete(req,res))
  
      return router;

    }
}