
import {Log,User,UserManager} from 'oidc-client'
import {Constants} from '../helpers/BankConstants'
const constant=new Constants()
console.log(constant)
export class AuthService{
    public userManager:UserManager
    constructor(){
        const settings={
            authority:Constants.stsAuthority,
            client_id:Constants.bankidClientId,
            redirect_uri :"https://localhost:4200/bankid/callback",
            silent_redirect_uri: `${Constants.clientRoot}silent-renew.html`,
            post_logout_redirect_uri: `${Constants.clientRoot}`,
            response_type: Constants.bankidResponseType,
            scope: Constants.bankidScope
        }
        this.userManager=new UserManager(settings)
        Log.logger = console;
        Log.level = Log.INFO;

      

        }
        public getUser():Promise<User | null>{
            return this.userManager.getUser();
        }
        public login():Promise<void>{
            return this.userManager.signinRedirect()

        }
        public renewToken():Promise<User>{
            return this.userManager.signinSilent()

        }
        public logout(){
            return this.userManager.signoutRedirect()
        }

    }
