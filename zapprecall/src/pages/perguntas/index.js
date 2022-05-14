
import { useState } from "react";
import "./style.css";


const seta = "assets/perguntaSeta.png"
const setinha = "assets/setinha.png"



   export default function Perguntas({funçao, icone , setIcone,  question, index, react, resp ,  }) {
        const [card, setCard] = useState({
            etapa: 0,
            resultado: "",

        })
         
        const { etapa, resultado } = card;
        if (etapa === 0) {
            return (
                <div key={index} className="pergunta">
                    <h1 className="fonte">{question}</h1>
                    <img onClick={() => setCard({ ...card, etapa: 1 })} className="diminuir" src={seta} alt="seta de pergunt" />
                </div>
            )
        }
        if (etapa === 1) {
            return (
                <div key={index} className="react">
                    <h1 className="fonte">{react}</h1>
                    <img className="seta" onClick={() => setCard({ ...card, etapa: 2 })} src={setinha} alt="seta de pergunt" />
                </div>
            )
        }
        if (etapa === 2) {
        
            const botoes = [
                { texto: "Não lembrei", resultado: "erro"  },
                { texto: "Quase não lembrei", resultado: "duvida" },
                { texto: "Zap!", resultado: "acerto" }
            ]
          
            return (
                <div  key={index} className="react">
                    <p>{resp}</p>
                    <div onClick={funçao} className="botoes">
                        {
                            botoes.map(({ texto, resultado }) => {
                                return (
                                    <button
                                        key={resultado}
                                        className={resultado}
                                        onClick={() => setCard({ etapa: 3, resultado   })}
                                        


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
        if (resultado === "erro") {
          
            return (
                <>
                    <div key={index} className="pergunta">
                        <h1 className={` fonte Icone${resultado}`}>{question}</h1>
                        <img  className="imgResposta" src="assets/Vector.png" alt="" />
                    </div>
                   
                </>
            )
        
           
        }
        if (resultado === "acerto") {
        
            return (
                <div key={index} className="pergunta">
                    <h1 className={` fonte Icone${resultado}`}>{question}</h1>
                    <img className="imgResposta" src="assets/certo.png" alt="" />
                </div>
            )
        }
        if (resultado === "duvida") {
            
            return(
            <div key={index} className="pergunta">
                <h1 className={` fonte Icone${resultado}`}>{question}</h1>
                <img  className="imgResposta" src="assets/laranja.png" alt="" />
            </div>
           )
       }
       if(resultado === "erro"){
           setIcone("erro")
       }
     
    }
