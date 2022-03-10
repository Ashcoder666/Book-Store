import React from 'react'
import {Card , CardMedia , CardContent ,CardActions , Typography ,IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'

const Product = ({product}) => {
    const classes = useStyles();
  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image} title={product.name}/>
        <CardContent>
            <div className={classes.CardContent}>
                <Typography variant='h5'>
                    {product.name}
                </Typography>
                <Typography variant='h6'>
                    {product.price}
                </Typography>
            </div>
            <Typography variant='body-2' >
                {product.description}
                </Typography>
        </CardContent>
        <CardActions>
            <IconButton>
                <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product
