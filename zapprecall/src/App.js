import { useState } from "react";
import Inicio from "./pages/Inicio";
import Pergunta from "./pergunta";


export default function App(){
    const [page ,setPage] = useState(false)
    if(page === false){
        return(
         
              <Inicio page={page} setPage={setPage}/>
     
        )
    }
    if(page === true){
        return(
         
             
           <Pergunta />
        )
    }
  
}