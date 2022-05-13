
  
import {  useState } from "react";
import "./style.css";
import Icone from "../../Icones";
import Footer from "../footer";
const logoZapPequena = "assets/logo-pequeno.png"
const seta = "assets/perguntaSeta.png"
const setinha = "assets/setinha.png"

const perguntasObj = [
    {
        question: "pergunta 1",
        react:  " o React é_",
        resp : "Uma biblioteca JavaScript para construção de interfaces" 
    },
    {
        question: "pergunta 2",
        react: "O que é JSX? ",
        resp:"Uma extensão de linguagem do JavaScript" 
    },
    {
        question: "pergunta 3",
        react : "componentes devem inicar com__",
        resp: "Letra maiúscula"
    },
    {
        question: "pergunta 4",
        react:"podemos colocar __ dentro do JSX",
        resp:"Expressões" ,
    },
    {
        question: "pergunta 5",
        react: " o ReactDom nos ajuda__",
        resp:"Interagindo com a DOM para colocar componentes React na tela"
    },
    {
        question: "pergunta 6",
        react:"usamos npm para__",
        resp:"Gerenciar os pacotes necessários e suas dependências"
    },
    {
        question: "pergunta 7",
        react:"usamos props para__ ",
        resp:"Passar diferentes informações para componentes"
    },
    {
        question: "pergunta 8",
        react:"usamos estad0 (state) para __",
        resp:"Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
]
export default function Perguntas({resultado , etapa}) {
function Pergunta({question , index , react , resp , feito }){
    const [card , setCard] = useState({
        etapa: 0,
        resultado: "",
      
      })

    const {etapa, resultado} = card;
    if(etapa === 0){
    return(
        <div key={index} className="pergunta">
            <h1 className="fonte">{question}</h1>
            <img onClick={()=>setCard({...card, etapa: 1})} className="diminuir" src={seta} alt="seta de pergunt" />
        </div>
    )
    }
    if(etapa === 1){
        return (
            <div key={index} className="react">
            <h1 className="fonte">{react}</h1>
            <img className="seta" onClick={() => setCard({...card, etapa: 2})} src={setinha} alt="seta de pergunt" />
        </div>
        )
    }
if( etapa === 2){
    const botoes = [
        { texto: "Não lembrei", resultado: "erro" },
        { texto: "Quase não lembrei", resultado: "duvida"  },
        { texto: "Zap!", resultado: "acerto" }
    ]
    return (
          <div key={index} className="react">
          <p>{resp}</p>
          <div className="botoes">
          {
            botoes.map(({texto, resultado  }) => {
              return (
                <button 
                  key={resultado}
                  className={resultado} 
                  onClick={()=>  setCard({ etapa: 3 , resultado} )}
                  feito={resultado}
                  
                   
                   

                >
                  {texto}
                </button>
              )
            })
         

          }
            
          </div>
        </div>
      )
     
  }
    if(etapa === 3){
        
        return (
            <>
                <div key={index} className="pergunta">
                    <h1 className={` fonte Icone${resultado}`}>{question}</h1>
                   <Icone icone={resultado} />
                </div>
              
            </>
        )
    }
    const info = {resultado , etapa}
     return info;
}

    return (
        <div className="centroPergunta">
            <div className="agrupar">
                <img className ="logoPequena" src={logoZapPequena} alt="logo zap pequena" />
                <h1 className="name">ZapRecall</h1>
            </div>
          {perguntasObj.map((perg , index)=>{
              return(
                  <Pergunta
                 question = {perg.question}
                 index = {perg.index}
                 react = {perg.react}
                 resp = {perg.resp}
                 />
              )
          })}
         <Footer resultado={resultado} etapa={etapa} />
        </div>
    )
}