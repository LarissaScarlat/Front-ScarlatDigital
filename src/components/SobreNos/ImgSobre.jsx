import React from "react";
import ImgSection from "../../assets/Section/ImgSection.jpg";

function ImgSobre() {
  return (
    <div className="flex items-center">
      <img 
        src={ImgSection} 
        alt="Imagem Sobre Nós" 
        className="ml-[390px] w-[433px] h-[650px] object-cover rounded-lg" 
      />
    </div>
  );
}

export default ImgSobre;

