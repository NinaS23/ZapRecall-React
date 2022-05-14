import { useState } from "react"


export default function Footer({feito , total,setTotal , etapa}){
 
    

    return (
        <footer className="finalPage"> {feito} / {total} CONCLUÍDOS</footer>
    )
}