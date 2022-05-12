import "./style.css";
const  Acerto  = "../../public/assets/certo.png"
const Erro = "../../public/assets/Vector.png";
const Duvida = "../../public/assets/laranjinha.png"




const Festinha = "assets/party.png"
const Triste= "assets/sad.png"



function Icone (props) {
  const icones = {
    acerto:<img src={Acerto} alt="" />,
    erro: <img src={Erro} alt="" />,
    duvida: <img src={Duvida} alt="" />,
    festinha: <img src={Festinha} alt="festinha" />,
    triste: <img src={Triste} alt="triste" />
  };

  const {icone} = props;
  const css = `Icone ${icone}`;
  return <span className={css}>{icones[icone]}</span>
}
export default Icone;