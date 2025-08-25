import React from "react";
import ButtonUni from "../Button/ButtonUniversal.jsx"; 


function HeroSection() {
  return (
    
    <section className="hero">
     
      <div className="hero-content">
          <div class="flex justify-center ...">
                  <article class="text-wrap">
                      <h1>Transoforme seu negócio em uma</h1>
                      <h1>Maquina de vendas no digital</h1>
                    </article>
          </div>
              <div class="flex justify-center ...">
                      <p>
                        O <strong>Grupo Scarlat Digital</strong> é a solução completa que empresas
                                visionárias escolhem para dominar o mercado digital. 
                          <strong> Marketing, tecnologia</strong> e gestão financeira em um só lugar.
                      </p>
              </div>
          <br></br>
          <br></br>

  
                  <div class="flex justify-center ...">
                            <ButtonUni>Falar com Especialista</ButtonUni>
                            
                  </div>
      </div>
    </section>
    
  );  
}

export default HeroSection;