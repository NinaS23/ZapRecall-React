import Perguntas from "../pages/perguntas";
import { useState } from 'react'
import Footer from "../pages/footer";
const logoZapPequena = "assets/logo-pequeno.png"
const perguntasObj = [
    {
        question: "pergunta 1",
        react: " o React é_",
        resp: "Uma biblioteca JavaScript para construção de interfaces"
    },
    {
        question: "pergunta 2",
        react: "O que é JSX? ",
        resp: "Uma extensão de linguagem do JavaScript"
    },
    {
        question: "pergunta 3",
        react: "componentes devem inicar com__",
        resp: "Letra maiúscula"
    },
    {
        question: "pergunta 4",
        react: "podemos colocar __ dentro do JSX",
        resp: "Expressões",
    },
    {
        question: "pergunta 5",
        react: " o ReactDom nos ajuda__",
        resp: "Interagindo com a DOM para colocar componentes React na tela"
    },
    {
        question: "pergunta 6",
        react: "usamos npm para__",
        resp: "Gerenciar os pacotes necessários e suas dependências"
    },
    {
        question: "pergunta 7",
        react: "usamos props para__ ",
        resp: "Passar diferentes informações para componentes"
    },
    {
        question: "pergunta 8",
        react: "usamos estad0 (state) para __",
        resp: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
]

export default function Pergunta() {
    perguntasObj.sort(comparador);

function comparador() { 
    return Math.random() - 0.5; 
}
const [total , setTotal] = useState(8)
const [feito, setFeito] = useState(0);

   const [icone, setIcone] = useState("");
   function Contador(){
      setFeito(feito + 1)
       setTotal(total -1)
   }
    return (
        <div className="centroPergunta">
            <div className="agrupar">
                <img className="logoPequena" src={logoZapPequena} alt="logo zap pequena" />
                <h1 className="name">ZapRecall</h1>
            </div>
            {perguntasObj.map((perg, index) => {
                return (
                    <Perguntas
                        question={perg.question}
                        index={perg.index}
                        react={perg.react}
                        resp={perg.resp}
                        feito={feito} 
                        setFeito={setFeito}
                        setIcone={icone}
                       total={total}
                       setTotal={setTotal}
                       funçao={Contador}
                       
                        
                    />
                )
            })} 
             <Footer  setTotal={setTotal} total={total}  feito={feito}  setFeito={setFeito} icone={icone} setIcone={setIcone} />
        </div>
    )
}
