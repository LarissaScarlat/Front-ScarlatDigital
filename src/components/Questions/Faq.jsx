import React from "react";
import { Plus } from "lucide-react";
import FaqQuestion from "../Simbolos/FaqQuestion.jsx";

function Faq() {
  return (
    <div className="w-full pt-20 pb-[100px] px-[390px]">  {/* w-full e sem justify-center */}
      <div className="content">
        <FaqQuestion />

        <article className="text-wrap mb-6">
          <h2>Perguntas</h2>
          <h2>frequentes</h2>
        </article>

        {/* Linha do FAQ: texto à esquerda e + à direita */}
        <div className="w-[600px] ml-auto mr-[390px]">
          <div className="flex items-center justify-between border-b border-neutral-700 py-4">
            <p className="text-base text-neutral-50">
              Qual a diferença do Grupo Scarlat para outras agências?
            </p>
            <Plus size={20} className="shrink-0 text-neutral-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;


