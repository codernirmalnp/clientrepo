
import * as express from 'express'
import TokenValidator from './../../auth/helper/TokenValidator'
import IPostRepository from '../domain/IPostRepository'
import PostController from './PostController'
export default class DocumentRouter{
    public static configure(repository:IPostRepository,tokenValidator:TokenValidator):express.Router{
      const router=express.Router();
      let controller=new PostController(repository)
      router.get('/',
      (req, res) => controller.findAll(req,res))
      router.get('/:id',
      (req, res) => controller.findOne(req, res))
      router.post('/',
      (req,res,next)=>tokenValidator.validate(req,res,next),
      (req, res) => controller.add(req, res))
      router.patch('/:id',
      (req, res) => controller.update(req, res))
      router.delete('/:id',
      (req, res) => controller.delete(req,res))
      return router;

    }
}