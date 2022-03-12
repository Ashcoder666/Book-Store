import React from 'react'
import { AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography } from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import makeStyle from './styles'
import logo from '../../assests/logo.png'
import {Link,useLocation} from 'react-router-dom'

const NavBar = ({totalItems}) => {
  const classes = makeStyle();
  const location = useLocation();

  
  return (
    
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" component={Link} to="/">
            <img src={logo} alt="Ashbookstore" height="25px" className={classes.image} />
              Ashbookstore
          </Typography>
          <div className={classes.grow}  />
          {location.pathname === '/'&&(

          <div className={classes.button}>
            <IconButton aria-label="show cart items" color="inherit" component={Link} to='cart'>
              <Badge badgeContent={totalItems} color='secondary' >
                  <ShoppingCart />
              </Badge>

            </IconButton>

          </div>)}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar
