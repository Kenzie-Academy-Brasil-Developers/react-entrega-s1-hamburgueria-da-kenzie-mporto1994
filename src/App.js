
import { useEffect, useState } from 'react';
import './App.css';
import {ProductsList} from "./components/ProductsList"
import { Header } from './components/Header';
import { Cart } from './components/Cart';
function App() {
  const [products,setProducts]=useState([])
  const [cartProducts,setCartProducts]=useState([])
  const [filteredProducts,setFilteredProducts]=useState([])


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
    setFilteredProducts(products.filter((item)=>item.category.toLowercase()===word.toLowercase()||item.name.toLowercase()===word.toLowercase()))
    
  }
  console.log(filteredProducts)

  return (
    <div className="App">
      <div className='Container'>
        <Header search={search}/>
        <body>
          
          <ProductsList prop={filteredProducts.length===0?products:filteredProducts} func={AddToCart}/> 
          <Cart removeAll={removeAll} prop={cartProducts} removeItem={removeItem}cartProducts={cartProducts}/>
        </body>
      </div>
      
    </div>
  );
}

export default App;
