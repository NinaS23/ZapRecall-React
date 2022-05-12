import { useState } from "react"

export default function Footer(){
    const [count , setCount] = useState(0)
    const [total , setTotal] = useState(8)
    
    return (
        <footer className="finalPage"> {count} / {total} CONCLUÍDOS</footer>
    )
}