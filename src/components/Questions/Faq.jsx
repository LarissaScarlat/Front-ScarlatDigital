import React from "react";
import { Plus } from "lucide-react";
import FaqQuestion from "../Simbolos/FaqQuestion.jsx";

function Faq() {
  return (
    <div className="faqcontainer pt-20">
      <div className="content">
        <FaqQuestion />

        <article className="text-wrap mb-6 w-full  pb-[100px] px-[390px] flex flex-col items-start">
          <h2>Perguntas</h2>
          <h2>frequentes</h2>
        </article>

        {/* Pergunta n° 1 */}
        <div className="w-[600px] ml-auto mr-[390px] ">
          <div className="flex items-center justify-between border-b border-neutral-700 py-4">
            <p className="text-base text-neutral-50 ">
              Qual a diferença do Grupo Scarlat para outras agências?
            </p>
            <Plus size={20} className="shrink-0 text-neutral-200 " />
          </div>
        </div>
        { /*Pergunta n° 2 */}
         <div className="w-[600px] ml-auto mr-[390px]">
          <div className="flex items-center justify-between border-b border-neutral-700 py-4">
            <p className="text-base text-neutral-50">
              Vocês trabalham com todos os tipos de marketplace?
            </p>
            <Plus size={20} className="shrink-0 text-neutral-200" />
          </div>
          <p className=""> Sim. Dominamos Amazon, Mercado Livre, Shopee, Magazine Luiza, Casas Bahia e todos os principais marketplaces. Nossa expertise abrange desde otimização de produtos até gestão completa de vendas e logística. </p>
        </div>
        { /*Pergunta n° 3 */}
         <div className="w-[600px] ml-auto mr-[390px]">
          <div className="flex items-center justify-between border-b border-neutral-700 py-4">
            <p className="text-base text-neutral-50">
              Qual o investimento mínimo para começar?
            </p>
            <Plus size={20} className="shrink-0 text-neutral-200" />
          </div>
        </div>
        { /*Pergunta n° 4 */}
         <div className="w-[600px] ml-auto mr-[390px]">
          <div className="flex items-center justify-between border-b border-neutral-700 py-4">
            <p className="text-base text-neutral-50">
              Em quanto tempo vejo os primeiros resultados?
            </p>
            <Plus size={20} className="shrink-0 text-neutral-200" />
          </div>
        </div>
        { /*Pergunta n° 5 */}
         <div className="w-[600px] ml-auto mr-[390px]">
          <div className="flex items-center justify-between border-b border-neutral-700 py-4">
            <p className="text-base text-neutral-50">
              Como funciona o processo de implementação?
            </p>
            <Plus size={20} className="shrink-0 text-neutral-200" />
          </div>
        </div>
        { /*Pergunta n° 6 */}
         <div className="w-[600px] ml-auto mr-[390px]">
          <div className="flex items-center justify-between border-b border-neutral-700 py-4">
            <p className="text-base text-neutral-50">
              Preciso ter conhecimento técnico para trabalhar com vocês?
            </p>
            <Plus size={20} className="shrink-0 text-neutral-200" />
          </div>
        </div>
        { /*Pergunta n° 7 */}
         <div className="w-[600px] ml-auto mr-[390px]">
          <div className="flex items-center justify-between border-b border-neutral-700 py-4">
            <p className="text-base text-neutral-50">
              Qual o nível de suporte oferecido?
            </p>
            <Plus size={20} className="shrink-0 text-neutral-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;


