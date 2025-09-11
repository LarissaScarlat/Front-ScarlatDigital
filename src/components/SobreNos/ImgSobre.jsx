import React from "react";
import ImgSection from "../../assets/Section/ImgSection.jpg";

function ImgSobre() {
  return (
    <div className="flex items-center justify-center">
      <img 
        src={ImgSection} 
        alt="Imagem Sobre Nós" 
        className="w-[433px] h-[650px] object-cover rounded-lg" 
      />
    </div>
  );
}

export default ImgSobre;

