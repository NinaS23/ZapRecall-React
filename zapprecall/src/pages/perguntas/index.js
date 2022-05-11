
import {  useState } from "react";
import "./style.css";
const logoZapPequena = "assets/logo-pequeno.png"
const seta = "assets/perguntaSeta.png"
const erro = "assets/Vector.png"
const laranja = "assets/laranjinha.png"
const verde = "assets/certo.png"

const perguntasObj = [
    {
        question: "pergunta 1",
        react:  " o React é_"
    },
    {
        question: "pergunta 2",
        react: "O que é JSX? "
    },
    {
        question: "pergunta 3",
        react : "componentes devem inicar com__"
    },
    {
        question: "pergunta 4",
        react:"podemos colocar __ dentro do JSX"
    },
    {
        question: "pergunta 5",
        react: " o ReactDom nos ajuda__"
    },
    {
        question: "pergunta 6",
        react:"usamos npm para__"
    },
    {
        question: "pergunta 7",
        react:"usamos props para__ "
    },
    {
        question: "pergunta 8",
        react:"usamos estad0 (state) para __"
    }
]
function Pergunta({question , index , react}){
    const [card , setCard] = useState(0)
    if(card === 0){
    return(
        <div key={index} className="pergunta">
            <h1 className="fonte">{question}</h1>
            <img onClick={() => setCard(1)} className="diminuir" src={seta} alt="seta de pergunt" />
        </div>
    )
    }
    if(card === 1){
        return (
            <div key={index} className="react">
            <h1 className="fonte">{react}</h1>
             <div>
                 <h3 onClick={() => setCard(2)} className="red">red</h3>
                 <h3  onClick={()=> setCard(3)}className="orange">yellow</h3>
                 <h3  onClick={ () => setCard(4)} className="green">green</h3>
             </div>
        </div>
        )
    }
    if(card === 2){
        return(
            <div key={index} className="pergunta">
            <h1 className="fonte redLine">{question}</h1>
            <img onClick={() => setCard(1)} className="diminuir" src={erro} alt="seta de pergunt" />
        </div>
        )
    }
   if(card === 3){
       return(
     <div key={index} className="pergunta">
        <h1 className="fonte orangeLine">{question}</h1>
        <img onClick={() => setCard(1)} className="diminuir" src={laranja} alt="seta de pergunt" />
    </div>
       )
    }
    if (card === 4) {
        return(
        <div key={index} className="pergunta">
            <h1 className="fonte greenLine">{question}</h1>
            <img onClick={() => setCard(1)} className="diminuir" src={verde} alt="seta de pergunt" />
        </div>
        )
    }
}
export default function Perguntas() {
    return (
        <div>
            <div>
                <img src={logoZapPequena} alt="logo zap pequena" />
                <h1>ZapRecall</h1>
            </div>
          {perguntasObj.map((perg , index)=>{
              return(
                  <Pergunta
                 question = {perg.question}
                 index = {perg.index}
                 react = {perg.react}
                 />
              )
          })}
          <footer className="finalPage">0/8 CONCLUÍDOS</footer>
        </div>
    )
}