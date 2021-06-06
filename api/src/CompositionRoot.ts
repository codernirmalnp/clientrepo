import mongoose from 'mongoose';
import redis from 'redis'
import AuthRepository from './auth/data/repository/AuthRespository';
import BcryptPasswordService from './auth/data/services/BcryptPasswordService';
import JwtTokenService from './auth/data/services/JwtTokenService'
import RedisTokenStore from './auth/data/services/RedisTokenStore'
import AuthRouter from './auth/entrypoint/AuthRouter'
import TokenValidator from './auth/helper/TokenValidator'
import PostRouter from './posts/entrypoint/PostRouter'
import PostRepository from './posts/data/repository/PostRepository';
import DocumentRouter from './document/entrypoint/DocumentRouter'
import DocumentRepository from './document/data/repo/DocumentRepository';
import CommentRouter from './comments/entrypoint/CommentRouter'
import CommentRepository from './comments/data/repository/CommentRepository'
export default class CompositionRoot {
  private static client: mongoose.Mongoose
  private static redisClient: redis.RedisClient
  public static configure() {
    this.client = new mongoose.Mongoose()
    this.redisClient = redis.createClient({
     url:'redis://redis-17153.c16.us-east-1-2.ec2.cloud.redislabs.com:17153',
     port:6379,
      password:'NqdMLDBNsUHWMMPYnfYx3ibXvyGa5YFe',
   
   })
 
 
    const connectionStr = encodeURI(process.env.DEV_DB as string)

    this.redisClient.on('error', (err) => {
     console.log("Error " + err)
     });
  this.redisClient.on("ready",(data)=>{
   console.log("Connected")
 })

   
    this.client.connect(connectionStr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
 }

  public static authRouter() {
    const repository = new AuthRepository(this.client)
    const tokenService = new JwtTokenService(process.env.ACCESS_TOKEN_SECRET as string,process.env.REFRESH_TOKEN_SECRET as string)
    const passwordService = new BcryptPasswordService()
    const tokenStore = new RedisTokenStore(this.redisClient)
    const tokenValidator = new TokenValidator(tokenService, tokenStore)

    return AuthRouter.configure(
      repository,
      tokenService,
      tokenStore,
      passwordService,
      tokenValidator,
    
    
    )
  }


  public static postRouter(){
    const repository=new PostRepository(this.client)
    const tokenService=new JwtTokenService(process.env.ACCESS_TOKEN_SECRET as string,process.env.REFRESH_TOKEN_SECRET as string)
    const tokenStore=new RedisTokenStore(this.redisClient)
    const tokenValidator=new TokenValidator(tokenService,tokenStore)
    return PostRouter.configure(repository,tokenValidator)
  }
  public static documentRouter(){
    const repository=new DocumentRepository(this.client)
    const tokenService=new JwtTokenService(process.env.ACCESS_TOKEN_SECRET as string,process.env.REFRESH_TOKEN_SECRET as string)
    const tokenStore=new RedisTokenStore(this.redisClient)
    const tokenValidator=new TokenValidator(tokenService,tokenStore)
    return DocumentRouter.configure(repository,tokenValidator)
  }

  public static commentRouter(){ 
    const repository=new CommentRepository(this.client)
    const tokenService=new JwtTokenService(process.env.ACCESS_TOKEN_SECRET as string,process.env.REFRESH_TOKEN_SECRET as string)
    const tokenStore=new RedisTokenStore(this.redisClient)
    const tokenValidator=new TokenValidator(tokenService,tokenStore)
    return CommentRouter.configure(repository,tokenValidator)

  }
}