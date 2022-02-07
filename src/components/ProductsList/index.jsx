import {useState, useEffect} from "react"
import "./styles.css"
import {ProductCard} from "../ProductCard"

export const ProductsList = ({prop}) => {
    // console.log(prop)
    return(
        <div>
            {prop.map((product, index)=><ProductCard key={index} prod={product}/>)}
        </div>
    )
}

