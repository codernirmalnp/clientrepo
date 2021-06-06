import User from './User';
export default interface IAuthRepository{
    add(
        name:string,
        email:string,
        type:string,
        passwordHash?: string
       
      

        ): Promise<string>
        find(email:string):Promise<User>
 
   

}