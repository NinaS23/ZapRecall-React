
import "./style.css";
const logoZap = "/assets/logo.png"


export default function Inicio({page , setPage}){
    
   
    return(
        <div className="centro">
            <div className="centralizar">
                <img className="imgRaio" src={logoZap} alt="" />
                <h1 className="logo">ZapRecall</h1>
            </div>
            <div className="botao" onClick={() => setPage(true)}>
                <h2 className="iniciar">Iniciar Recall!</h2>
            </div>
        </div>
    )
   
}