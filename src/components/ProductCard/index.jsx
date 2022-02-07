import {useState, useEffect} from "react"
import "./styles.css"

export const ProductCard = ({prod}) => {
    // console.log(prod)
    return(
        <div className="ProductCardDiv">
            <figure>
                <img src={prod.img} alt="" />
            </figure>
            <div>
                <h3>{prod.name}</h3>
                <p>{prod.category}</p>
                <p>{prod.price}</p> 
            </div>
            
        </div>
    )
}

