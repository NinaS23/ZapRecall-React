import "./style.css";
const  acerto  = "../../public/assets/certo.png"
const erro = "../../public/assets/Vector.png";
const duvida = "../../public/assets/laranjinha.png"




const Festinha = "assets/party.png"
const Triste= "assets/sad.png"



function Icone (props) {
  const icones = {
    acerto: acerto,
    erro: erro,
    duvida: duvida ,
    festinha: <img src={Festinha} alt="festinha" />,
    triste: <img src={Triste} alt="triste" />
  };

  const {icone} = props;
  const css =<img src={icone} alt="" />;
  return css;
}
export default Icone;