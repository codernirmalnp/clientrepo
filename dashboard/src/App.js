import {Suspense,lazy} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {ThemeProvider} from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Theme from './theme'
const InitLogin=lazy(()=>import('./views/auth/initLogin'))
const Verify=lazy(()=>import('./views/auth/verify'))
const Login=lazy(()=>import('./component/MultiStep'))
const InitPassword=lazy(()=>import('./views/auth/newPassword'))
const ResetPassword=lazy(()=>import('./views/auth/reset'))
const WatchDashboard=lazy(()=>import('./views/app'))
const DropZone=lazy(()=>import('./views/app/multiple'))
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline/>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Router>
          <Switch>
            <Route path='/' exact render={
              (props)=>(
                <InitLogin {...props}/>
              )
                
              
            }/>
            <Route  path='/verify/:userId/:secret' render={
              (props)=>(
                <Verify {...props}/>
              )
            }/>

            <Route path='/login'   render={
              (props)=>(
                <Login {...props}/>
              )
            }/>

            <Route path='/password' render={
              (props)=>(
                 <InitPassword {...props}/>
              )

            }/>

            <Route path='/reset' render={
              (props)=>(
                <ResetPassword {...props}/>
              )

            }/>

            <Route path='/app' render={(props)=>(
              <WatchDashboard {...props}/>
            )}/>
              <Route path='/dropzone' render={(props)=>(
              <DropZone {...props}/>
            )}/>

           
          </Switch>
          </Router>
          <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgrssBar
            newestOnTop={false}
            closeOnLogin
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
          />
        </Suspense>
       
    </ThemeProvider>
    
  );
}

export default App;
