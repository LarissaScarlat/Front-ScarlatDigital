import React from "react";
import { ArrowUpRight } from "lucide-react";

function ButtonUni({ children, showIcon = true }) {
  return (
    <button className="cta-button">
      {children} {showIcon && <ArrowUpRight size={18} />}
    </button>
  );
}

export default ButtonUni;

/*Botão universal que pode ser reutilizado em várias partes do site. O ícone pode ser opcionalmente exibido.*/
/*O botão tem uma classe CSS "cta-button" que pode ser estilizada conforme necessário.*/
/*SE ENCONTRA NO CSS APP.JSX ENTRE A LINHA 17 E 36*/