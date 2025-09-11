import React from "react";
import SobreIcone from "../Simbolos/Sobre";
import ImgSobre from "./ImgSobre.jsx";  

function SectionSobre() {
  return (
    <div className="flex items-start justify-center gap-12 px-[50px]">
      
      {/* Imagem do lado esquerdo */}
      <ImgSobre />

      {/* Textos do lado direito */}
      <div className="web-desen place-content-start ml-auto justify-self-end px-[390px]">
        <SobreIcone/>

        <article className="text-wrap">
          <h2>Paixão pela inovação e</h2>
          <h2>resultado</h2>
        </article>
<br></br>
        <p className="!max-w-[800px] !w-auto !text-left !m-0 mt-2">
          Somos mais que uma empresa de serviços digitais, 
          <span className="font-bold text-[#9F9F9F]"> SOMOS CATALISADORES DE TRANSFORMAÇÃO</span>
        </p>
      <br></br>
        <p className="!max-w-[850px] !w-auto !text-left !m-0 mt-6">
          O Grupo Scarlat Digital nasceu da visão de revolucionar como empresas crescem no ambiente digital. 
          Combinamos expertise técnica de ponta com estratégia comercial agressiva, criando 
          um ecossistema completo que acelera resultados e maximiza potencial.
        </p>
      </div>
    </div>
  );
}

export default SectionSobre;
