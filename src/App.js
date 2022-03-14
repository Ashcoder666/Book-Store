import React from 'react'
import Navbar from './components/NavBar/NavBar'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Checkout from './components/CheckoutForm/CheckOut/Checkout'
import {commerce} from './lib/commerce'
import {useState,useEffect} from 'react'
import './app.css'
import {BrowserRouter,Routes,Route} from'react-router-dom'
export const updateContext = React.createContext()
export const deleteContext = React.createContext()
export const emptyContext = React.createContext()

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

const handleUpdateCartQty = async(productId,quantity)=>{
  const response = await commerce.cart.update(productId,{quantity});
  setCart(response.cart)
}

const handleRemoveFromCart = async (productId)=>{
    const response = await commerce.cart.remove(productId);
    setCart(response.cart)
}

const handleEmptyCart = async () => {
  const response = await commerce.cart.empty();

  setCart(response.cart);
};

  useEffect(()=>{
    fetchProducts();
    fetchCart();
  },[])

 

  return (

    <BrowserRouter>
   
    <div className="App">
        <Navbar totalItems={cart.total_items} />
        <emptyContext.Provider value={handleEmptyCart}>
        <updateContext.Provider  value={ handleUpdateCartQty}>
            <deleteContext.Provider value={handleRemoveFromCart}>
        <Routes>
        <Route path="/" element={  <Products products={products} onAddToCart={handleToAddCart}/> } /> 
         
            <Route path="/cart" element={<Cart cart={cart} />} />


            <Route path='/checkout' element={<Checkout />}/>
           
      
        

        </Routes>

        </deleteContext.Provider>
          </updateContext.Provider>
          </emptyContext.Provider>
        
    </div>
    </BrowserRouter>
  );
}

export default App;
