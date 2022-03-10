import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product/Product'


const products = [
    {id: '1', name: 'book1' , description: 'hey im book 1', image:'https://m.media-amazon.com/images/I/51y08lCeLUL._SL500_.jpg',price:600},
    {id: '2', name: 'book2' , description: 'hey im book 2', image:'https://m.media-amazon.com/images/I/51Td98yZa7L._SL500_.jpg',price:780}
]

const Products = () => {
  return (
    <main>
        <Grid container justify='center' spacing={4}>
            {products.map(product=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
  )
}

export default Products
