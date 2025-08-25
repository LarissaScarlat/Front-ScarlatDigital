import React from "react";
import Contabilidade from "../Simbolos/Contabilidade";
import ButtonUni from "../Button/ButtonUniversal";

function SectionContabel() {
  return (
    <div
      className="
        inline-flex
        justify-center items-center
        pt-20 pb-[100px]
        px-[390px]
      "
    >
      <div className="content">
        <Contabilidade />

        <article className="text-wrap">
          <h2>Contabilidade que</h2>
          <h2>impulsiona, não apenas</h2>
          <h2>organiza</h2>
        </article>

        <article className="text-wrap">
          <p className="!max-w-[560px] !w-auto !text-left !m-0">
            Nossa contabilidade estratégica vai além dos números – ela revela
            oportunidades, otimiza tributos e acelera decisões inteligentes.
            Transformamos dados em{" "}
            <span className="destaque">PODER DE DECISÃO.</span>
          </p>
        </article>

        <div className="mt-6">
          <ButtonUni>Quero uma contabilidade inteligente</ButtonUni>
        </div>
      </div>
    </div>
  );
}

export default SectionContabel;

