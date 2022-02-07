
import { useEffect, useState } from 'react';
import './App.css';
import {ProductsList} from "./components/ProductsList"
import { Header } from './components/Header';
function App() {
  const [products,setProducts]=useState([])
  const [cartProducts,setCartProducts]=useState([])

  useEffect(()=>{
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
    .then((response)=> response.json())
    .then((response)=>setProducts(response))
    .catch((err)=> console.log(err))
  },[products,cartProducts])

  return (
    <div className="App">
      <div className='Container'>
        <Header/>
        <body>
          <ProductsList prop={products}/> 
        </body>
      </div>
      
    </div>
  );
}

export default App;
