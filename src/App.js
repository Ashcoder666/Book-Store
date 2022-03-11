import Navbar from './components/NavBar/NavBar'
import Products from './components/Products/Products'
import {commerce} from './lib/commerce'
import {useState,useEffect} from 'react'

function App() {
  const [products,setProducts] = useState([])
  const [cart,setCart] = useState({})

  const fetchProducts = async()=>{
 const {data} = await commerce.products.list();
setProducts(data);
}

const fetchCart = async()=>{
   setCart(await commerce.cart.retrieve())

}

const handleToAddCart = async(productId,quantity)=>{
  const item =  await commerce.cart.add(productId,quantity);
  setCart(item.cart)
}

  useEffect(()=>{
    fetchProducts();
    fetchCart();
  },[])

  console.log(cart)

  return (
    <div className="App">
        <Navbar totalItems={cart.total_items} />
        <Products products={products} onAddToCart={handleToAddCart}/> 
        
    </div>
  );
}

export default App;
