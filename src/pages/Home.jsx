import React from "react";

import TopoMenu from "../components/Menu-Topo/NavBar.jsx";
import BotaoVerde from "../components/Simbolos/BotaoVerde.jsx";
import HeroSection from "../components/PaginaPrincipal/HeroSection.jsx";
import LogosSection from "../components/Simbolos/LogosSection.jsx";

function Home() {
  return (
    <>
        <TopoMenu />
        <BotaoVerde />
        <HeroSection />
        <LogosSection />
     
    </>
  );
}   

export default Home;