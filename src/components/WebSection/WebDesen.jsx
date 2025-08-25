import React from "react";
import ButtonUni from "../Button/ButtonUniversal";
import ProgramadorWeb from "../Simbolos/Programador";

function WebDesenTexto() {
  return (
    <div className="web-desen place-content-start ml-auto justify-self-end px-[390px]">
      <ProgramadorWeb />

      <article className="text-wrap">
        <h2>Programas customizados</h2>
        <h2>que automatizam seu</h2>
        <h2>sucesso</h2>
      </article>

       <p className="!max-w-[560px] !w-auto !text-left !m-0 mt-2">
        Desenvolvemos programas e sistemas sob medida que automatizam processos,
        eliminam gargalos e maximizam eficiência. Nossa abordagem high-tech
        transforma complexidade em simplicidade.
      </p>
        <br></br>
      <ButtonUni>Quero saber mais</ButtonUni>
    </div>
  );
}

export default WebDesenTexto;
