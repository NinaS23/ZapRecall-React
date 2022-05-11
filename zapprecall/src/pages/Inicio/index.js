import { useState } from "react";
import Perguntas from "../perguntas";
const logoZap = "/assets/logo.png"


export default function Inicio(){
    const [page , setPage ] = useState(0)
    if(page === 0){
    return(
        <div>
             <img src={logoZap} alt="" />
             <h1>ZapRecall</h1>
             <div onClick={() => setPage(1)}>Iniciar Recall!</div>
       </div>
    )
    }
    if(page === 1){
        return(
            <Perguntas/>
        )
    }
}