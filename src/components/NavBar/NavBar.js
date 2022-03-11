import React from 'react'
import { AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography } from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import makeStyle from './styles'
import logo from '../../assests/logo.png'

const NavBar = ({totalItems}) => {
  const classes = makeStyle();
  return (
    
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="Ashbookstore" height="25px" className={classes.image} />
              Ashbookstore
          </Typography>
          <div className={classes.grow}  />
          <div className={classes.button}>
            <IconButton aria-label="show cart items" color="inherit">
              <Badge badgeContent={totalItems} color='secondary'>
                  <ShoppingCart />
              </Badge>

            </IconButton>

          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar
