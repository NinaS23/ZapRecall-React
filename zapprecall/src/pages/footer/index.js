import { useState } from "react"


export default function Footer({feito , setFeito,etapa}){
    const [total , setTotal] = useState(8)
    
    function AjustarContador(){
        if(feito){
           setFeito(feito + 1)
          setTotal(total - 1)
        }
        console.log(feito)
    }
    return (
        <footer onClick={AjustarContador} className="finalPage"> {feito} / {total} CONCLUÍDOS</footer>
    )
}