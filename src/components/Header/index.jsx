import {useState, useEffect} from "react"
import "./styles.css"
import {Button} from "../Button"
export const Header = () => {

    return(
        <header>
            <p>Burguer <span>Kenzie</span></p>
            
            <div className="PesquisarDiv">
                <input type="text" placeholder="Digitar sua Pesquisa"/>
                <Button content="pesquisar"/>
            </div>
        </header>
    )
}

