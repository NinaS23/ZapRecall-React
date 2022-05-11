import "./style.css";
const logoZapPequena = "assets/logo-pequeno.png"
const seta = "assets/perguntaSeta.png"


const perguntasObj = [
    {
        question: "pergunta 1"
    },
    {
        question: "pergunta 2"
    },
    {
        question: "pergunta 3"
    },
    {
        question: "pergunta 4"
    },
    {
        question: "pergunta 5"
    },
    {
        question: "pergunta 6"
    },
    {
        question: "pergunta 7"
    },
    {
        question: "pergunta 8"
    }
]
function Pergunta({question , index}){
    return(
        <div key={index} className="pergunta">
            <h1 className="fonte">{question}</h1>
            <img className="diminuir" src={seta} alt="seta de pergunt" />
        </div>
    )
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
                 />
              )
          })}
        </div>
    )
}