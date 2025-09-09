import React from "react";

import TopoMenu from "../components/Menu-Topo/NavBar.jsx";
import BotaoVerde from "../components/Simbolos/BotaoVerde.jsx";
import HeroSection from "../components/PaginaPrincipal/HeroSection.jsx";
import LogosSection from "../components/Simbolos/LogosSection.jsx";
import ServiceSection from "../components/CardsService/ServiceSection.jsx";
import MktSection from "../components/MarketplaceSection/MktSection.jsx";


function Home() {
  return (
    <>
        <TopoMenu />
        <BotaoVerde />
        <HeroSection />
        <LogosSection />
        <ServiceSection />
        <MktSection />
     
    </>
  );
}   

export default Home;