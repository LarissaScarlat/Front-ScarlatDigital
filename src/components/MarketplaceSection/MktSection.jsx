import React from "react";
import Marketplace from "../Simbolos/Marketplace";
import ButtonUni from "../Button/ButtonUniversal";


function MktSection() {
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
        <Marketplace />

        <article className="text-wrap">
          <h2>Domine os marketplaces</h2>
          <h2>e multiplique seus lucros</h2>
        </article>

        <article className="text-wrap">
          <p className="!max-w-[560px] !w-auto !text-left !m-0">
            Seus produtos perdidos na multidão do marketplace?{" "}
            <span className="destaque">JAMAIS NOVAMENTE.</span>
          </p>
          <br></br>
          <br></br>
          <p className="!max-w-[560px] !w-auto !text-left !m-0 mt-2">
            Nossa estratégia proprietária posiciona sua marca no topo dos
            resultados, otimiza suas vendas e transforma visitantes em clientes
            fiéis.
          </p>
        </article>

        <div className="mt-6">
          <ButtonUni>Quero dominar o marketplace</ButtonUni>
        </div>
      </div>
    </div>
  );
}

export default MktSection;


