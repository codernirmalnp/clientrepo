import {AccessControl} from 'accesscontrol'
const ac=new AccessControl()
ac.grant('writter')
   .createOwn('post')
   .readAny('post')
   .updateOwn('post')
   .deleteOwn('post')
   .grant('admin')
   .extend('writter')
   .updateAny('post')
   .deleteAny('post')
export {ac}

   