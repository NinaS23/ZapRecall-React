import { useState } from "react";
import Perguntas from "../perguntas";
import "./style.css";
const logoZap = "/assets/logo.png"


export default function Inicio(){
    const [page , setPage ] = useState(0)
    if(page === 0){
    return(
        <div className="centro">
            <div className="centralizar">
                <img className="imgRaio" src={logoZap} alt="" />
                <h1 className="logo">ZapRecall</h1>
            </div>
            <div className="botao" onClick={() => setPage(1)}>
                <h2 className="iniciar">Iniciar Recall!</h2>
            </div>
        </div>
    )
    }
    if(page === 1){
        return(
            <Perguntas/>
        )
    }
}