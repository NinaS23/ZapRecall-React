
let icon =[];

export default function Footer({ feito, total, icone }) {
    if (icone === "erro") {
        icon.push(<img src="assets/Vector.png" alt="" />)
    }
    if (feito === 8 && total === 0) {
        return (
            <>
                <footer className="finalPage">
                    <div>
                        <img src="./assets/party.png" alt="emoji festeiro" />
                        <h2>PARABÉNSSSS</h2>
                    </div>
                    <h3>Você não esqueceu de nenhum flashcard!</h3>
                    <div>{icon}</div>

                </footer>

            </>

        )
    }
    else if (feito === 8 && total > 0 && total < 8) {
        return (
            <footer className="finalPage"> {feito} / {total} aaa</footer>
        )
    } else {
        return (
            <footer className="finalPage"> {feito} / {total} CONCLUÍDOS
                <div>{icon}</div>
            </footer>
        )
    }



}