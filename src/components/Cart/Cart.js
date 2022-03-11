import React from 'react'
import {Container, Typography ,Button , Grid} from '@material-ui/core'
import makeStyles from './styles'

const Cart = ({cart}) => {

    const classes = makeStyles()

    

    const EmptyCart = () => (
        <Typography variant="subtitle1">
            You have no items in your shopping cart , start adding some! 
        </Typography>
    )

    const FilledCart = () => (
        <>
        <Grid container spacing={3}>
        {cart.line_items.map(item=>(
            <Grid item xs={12} sm={4} key={item.id}>
                <div>{item.name}</div>

            </Grid>
        ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography varient='h4'>Subtotal :{cart.subtotal.formatted_with_symbol}</Typography>
            <div>
            <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" >Empty cart</Button>
          <Button className={classes.checkoutButton}  to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
            </div>
        </div>
        </>
    )

    if(!cart.line_items) return "loading..."

  return (
   <Container>
      <div className={classes.toolbar} /> 
      <Typography variant='h3' className={classes.title} >
          Your Shopping Cart
      </Typography>
      {cart.line_items.length === 0 ? <EmptyCart /> : <FilledCart />}
   </Container>
  )
}

export default Cart