import React from "react";
import SobreIcone from "../Simbolos/Sobre";


function SectionSobre() {
  return (
    <div className="web-desen place-content-start ml-auto justify-self-end px-[390px]">
      <SobreIcone/>

      <article className="text-wrap">
        <h2>Paixão pela inovação e</h2>
        <h2>resultado</h2>
        
      </article>

       <p className="!max-w-[560px] !w-auto !text-left !m-0 mt-2">
        Somos mais que uma empresa de serviços digitais, SOMOS CATALISADORES DE TRANSFORMAÇÃO.
        O Grupo Scarlat Digital nasceu da visão de revolucionar como empresas crescem no ambiente digital. 
        Combinamos expertise técnica de ponta com estratégia comercial agressiva, criando 
        um ecossistema completo que acelera resultados e maximiza potencial.
      </p>
       
      
    </div>
  );
}

export default SectionSobre;