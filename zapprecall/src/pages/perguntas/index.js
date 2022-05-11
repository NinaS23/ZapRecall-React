
import {  useState } from "react";
import "./style.css";
const logoZapPequena = "assets/logo-pequeno.png"
const seta = "assets/perguntaSeta.png"


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
    const [card , setCard] = useState(true)
    if(card === true){
    return(
        <div key={index} className="pergunta">
            <h1 className="fonte">{question}</h1>
            <img onClick={() => setCard(false)} className="diminuir" src={seta} alt="seta de pergunt" />
        </div>
    )
    }
    if(card === false){
        return (
            <div key={index} className="pergunta">
            <h1 className="fonte">{react}</h1>
            <img onClick={() => setCard(false)} className="diminuir" src={seta} alt="seta de pergunt" />
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
          <footer>0/8 CONCLUÍDOS</footer>
        </div>
    )
}