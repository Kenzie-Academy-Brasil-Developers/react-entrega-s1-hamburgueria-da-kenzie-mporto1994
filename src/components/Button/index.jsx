import {useState, useEffect} from "react"
import "./styles.css"

export const Button = ({content , func}) => {

    return(
        <button className="buttonC" >
            {content}
        </button>
    )
}

