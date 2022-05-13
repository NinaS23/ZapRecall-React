import { useState } from "react"


export default function Footer({etapa}){
    const [count , setCount] = useState(0)
    const [total , setTotal] = useState(8)
    
    function AjustarContador(){
        if(etapa === 2){
             setCount(count + 1)
             setTotal(total - 1)
        }
    }
    return (
        <footer onClick={AjustarContador} className="finalPage"> {count} / {total} CONCLUÍDOS</footer>
    )
}