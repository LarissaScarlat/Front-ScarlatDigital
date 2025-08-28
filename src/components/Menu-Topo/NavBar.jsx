import React from "react";
import Logo from "../../assets/Logotipo/LOGO.png"; // caminho correto

function NavBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="flex justify-between items-center h-[120px] px-6 md:px-12 xl:px-[390px]">
        
        {/* Logo */}
        <img
          className="h-[120px] object-contain"
          src={Logo}
          alt="Logo"
        />

        {/* Links */}
        <nav className="flex items-center gap-6">
          <a href="#">Planilhas</a>
          <a href="#">Inicio</a>
          <a href="#">Mentoria</a>
          <a href="#">Desenvolvimento</a>
          <a href="#">Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;

