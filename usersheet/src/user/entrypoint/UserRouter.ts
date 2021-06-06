import * as express from 'express'
import IUserRepository from '../domain/IUserRepository'
import UserController from './UserController'


 
export default class DocumentRouter{
    public static configure(repository:IUserRepository):express.Router{
      const router=express.Router();
      let controller=new UserController(repository)
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
      return router;

    }
}