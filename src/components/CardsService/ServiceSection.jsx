import React from "react";
import ServicesGrid from "./ServicesGrid";


function serviceSection() {
return (
  <div>
    <div className="service-section h-[400px] flex flex-col justify-center text-center">
      <article>
        <h2>Pare de perde tempo e dinheiro com </h2>
        <h2>fornecedores fragmentados.</h2>
      </article>
      
      <div className="flex justify-center ... h-[30px]">
        <p>
          Nossa expertise integrada acelera seus resultados enquanto você foca no que realmente importa: <span className="destaque">CRESCER.</span>
        </p>
      </div>
    </div>
    <ServicesGrid />
    
  </div>
);
}

export default serviceSection;