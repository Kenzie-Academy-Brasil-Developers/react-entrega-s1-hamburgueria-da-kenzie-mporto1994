import {useState, useEffect} from "react"
import "./styles.css"
import {Button} from "../Button"

export const ProductCard = ({prod,func}) => {
    // console.log(prod)



    return(
        <div className="ProductCardDiv">
            <figure>
                <img src={prod.img} alt="" />
            </figure>
            <div className="dataDiv">
                <h3>{prod.name}</h3>
                <p className="categoryP">{prod.category}</p>
                <p className="priceP">R$ <span>{prod.price}</span></p> 
                <Button content="Adicionar" func={func} funcParams={prod}/>
            </div>
            
        </div>
    )
}

