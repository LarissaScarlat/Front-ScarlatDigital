import React from "react";
import ButtonUni from "../Button/ButtonUniversal.jsx";

function Desenvolvimento() {
    return (
        <div>
            <div className="hero-content">
                <div class="flex justify-center ...">
                    <article class="text-wrap space-y-16">
                        <h1>Sistemas que trabalham</h1>
                        <h1>enquanto voce cresce</h1>
                    </article>
                </div>
            </div>
            <br></br>
            
            <div class="flex justify-center space-y-24 text-center">
                <p>
                    Desenvolvimento sob medida de software, aplicações, websites e automações que eliminam gargalos, reduzem custos e aceleram resultados.
                </p>
            </div>
            <br></br>
            <br></br>
            <div class="flex justify-center space-y-40">
                <ButtonUni>Fazer um orçamento</ButtonUni>
            </div>
        </div>
    );
}

export default Desenvolvimento;

