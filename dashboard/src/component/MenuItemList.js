import * as  MUI from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {useLocation} from 'react-router-dom'
import {DRAWER_LIST} from '../constants/menu'
import MenuItem from './MenuItem'
const useStyles=makeStyles({
    padding:{
        padding:0
    }
})
const MenuListItem=()=>{
    const classes=useStyles()
    const {pathname}=useLocation()
    console.log(DRAWER_LIST)
    return(
        <MUI.Grid>
            <MUI.List  className={classes.padding}>
               {DRAWER_LIST.map(({literal,route,Icon},index)=>(
                 
                   <MenuItem 
                   key={index}
                   Icon={Icon}
                   literal={literal}
                   route={route}
                   selected={pathname===route}
                   />
               
               ))}
            </MUI.List>
        </MUI.Grid>
    )
}
export default MenuListItem;