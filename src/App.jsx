import { useState } from 'react'
import './App.css'
import TopoMenu from './components/Menu-Topo/NavBar.jsx'
import BotaoVerde from './components/Simbolos/BotaoVerde.jsx'
import HeroSection from './components/PaginaPrincipal/HeroSection.jsx'
import LogosSection from './components/Simbolos/LogosSection.jsx'
import ServiceSection from './components/CardsService/ServiceSection.jsx'
import MktSection from './components/MarketplaceSection/MktSection.jsx'
import WebDesenTexto from './components/WebSection/WebDesen.jsx'
import SectionContabel from './components/ContabilidadeSection/SectionContabel.jsx'
import SectionSobre from './components/SobreNos/SectionSobre.jsx'
import Faq from './components/questions/Faq.jsx'

function App() {
  

  return (
    <>
    <TopoMenu/>
    <BotaoVerde/>
    <HeroSection/>
    <LogosSection/>
    <ServiceSection/>
    <MktSection/>
    <WebDesenTexto/>
    <SectionContabel/>
    <SectionSobre/>
    <Faq/>
    
    
    
    
    
   
    
    
    
    
    
   
  
   
    </>
  )
} 

export default App

