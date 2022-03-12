import React,{useContext} from 'react'
import {Typography, Button , Card , CardActions , CardContent , CardMedia} from '@material-ui/core'
import useStyles from './styles'
import {updateContext,deleteContext} from '../../../App'
const CartItem = ({item}) => {

    const updateCart = useContext(updateContext);
    const deleteCart = useContext(deleteContext);

  const classes = useStyles()

  return (
    <Card className="cart-item" >
      <CardMedia image={item.image.url} alt={item.name} className={classes.media}/>
      <CardContent className={classes.cardContent}>
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="h6">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={()=>{updateCart(item.id,item.quantity-1)}}>-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={()=>{updateCart(item.id,item.quantity+1)}} >+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={()=>{deleteCart(item.id)}} >Remove</Button>
      </CardActions>

    </Card>
  )
}

export default CartItem
