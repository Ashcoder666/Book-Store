import React,{useContext} from 'react'
import {Container, Typography ,Button , Grid , CircularProgress} from '@material-ui/core'
import makeStyles from './styles'
import CartItem from './CartItem/CartItem'
import {Link} from 'react-router-dom'
import {emptyContext} from '../../App'

const Cart = ({cart}) => {

    const onEmptyCart= useContext(emptyContext)

    const classes = makeStyles()
    

    

    const EmptyCart = () => (
        <Typography variant="subtitle1">
            You have no items in your shopping cart , <Link to='/'>start adding some! </Link>
        </Typography>
    )

    const FilledCart = () => (
        <>
        <Grid container spacing={3}>
        {cart.line_items.map(item=>(
            
            <Grid item xs={12} sm={4} key={item.id}>
               <CartItem item={item} />

            </Grid>
        ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant='h4'>Subtotal :{cart.subtotal.formatted_with_symbol}</Typography>
            <div>
            <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={()=>{onEmptyCart()}} >Empty cart</Button>
          <Button component={Link}  className={classes.checkoutButton}  to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
            </div>
        </div>
        </>
    )

    if(!cart.line_items) return <CircularProgress style={{marginTop:'100px'}} size="large" color="primary"/>

  return (
   <Container>
      <div className={classes.toolbar} /> 
      <Typography variant='h3' className={classes.title} gutterBottom>
          Your Shopping Cart
      </Typography>
      {cart.line_items.length === 0 ? <EmptyCart /> : <FilledCart />}
   </Container>
  )
}

export default Cart
