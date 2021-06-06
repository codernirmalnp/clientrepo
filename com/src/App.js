import * as MUI from '@material-ui/core'
import {BrowserRouter} from 'react-router-dom'
import Profile from './views/profile'
import Layout from './layout'
function App() {
  return (
    
    <BrowserRouter>
    <MUI.CssBaseline/>

     <Layout>
           <Profile/>
    </Layout>
     
   </BrowserRouter>
  );
}

export default App;
