
import { useEffect, useState } from 'react';
import './App.css';
import {ProductsList} from "./components/ProductsList"
import { Header } from './components/Header';
import { Cart } from './components/Cart';
function App() {
  const [products,setProducts]=useState([])
  const [cartProducts,setCartProducts]=useState([])
  const [filteredProducts,setFilteredProducts]=useState(products)


  useEffect(()=>{
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
    .then((response)=> response.json())
    .then((response)=>setProducts(response))
    .catch((err)=> console.log(err))
  },[products,cartProducts])


  const AddToCart = (product) => {
    setCartProducts([...cartProducts, product])
  }

  const removeItem= (index) => {
    let newList = cartProducts;
    newList.splice(index,1)
    setCartProducts(newList)
  }

  const removeAll=()=>{
    setCartProducts([])
  }

  const search = (word) =>{
    setFilteredProducts(filteredProducts.filter((item)=>item.category.includes(word)||item.name.includes(word)))
    
  }

  return (
    <div className="App">
      <div className='Container'>
        <Header search={search}/>
        <body>
          <ProductsList prop={filteredProducts} func={AddToCart}/> 
          <Cart removeAll={removeAll} prop={cartProducts} removeItem={removeItem}cartProducts={cartProducts}/>
        </body>
      </div>
      
    </div>
  );
}

export default App;
