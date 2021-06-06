import mongoose from 'mongoose'
import UserRouter from './src/user/entrypoint/UserRouter'
import UserRepositoy from './src/user/data/Repository/UserRepository'
//need to configure  redis and mongodb
export default class CompositeRoot{
    private static client: mongoose.Mongoose
    public static configure(){
        this.client=new mongoose.Mongoose()
        const connectionString=encodeURI(process.env.DEV_DB as string)
        this.client.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
    }

    public static userRouter(){
        const  userRepo=new UserRepositoy(this.client)
         return UserRouter.configure(userRepo)
    }
     

}