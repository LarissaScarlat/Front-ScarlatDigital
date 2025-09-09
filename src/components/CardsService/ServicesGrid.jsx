import React from "react";
import {
  Store,
  DollarSign,
  Code2,
  Network,
  BarChart3,
  Settings,
} from "lucide-react";

const SERVICES = [
  { title: "Marketplace Mastery",
    desc: "Posicionamento estratégico e otimização completa para Mercado Livre, Shopee e principais plataformas. Transformamos seu produto em líder de vendas.",
    Icon: Store },
  { title: "Gestão Financeira Estratégica",
    desc: "Contabilidade moderna com planejamento tributário, análise de performance e consultoria ativa para maximizar seus lucros.",
    Icon: DollarSign },
  { title: "Automação Inteligente",
    desc: "Programas e sistemas customizados que automatizam processos, integram plataformas e escalam seu negócio sem limites.",
    Icon: Code2 },
  { title: "Loja Virtual Premium",
    desc: "Desenvolvimento de e-commerce de alta conversão com UX otimizada, integrações e tecnologia que vende enquanto você dorme.",
    Icon: Network },
  { title: "Transformação Digital",
    desc: "Análise completa do seu negócio e implementação de estratégias digitais que aceleram crescimento e competitividade.",
    Icon: BarChart3 },
  { title: "Traffic Management",
    desc: "Atração qualificada de prospects via SEO, SEM e estratégias omnichannel que convertem visitantes em clientes.",
    Icon: Settings },
];

function ServiceCard({ Icon, title, desc }) {
  return (
    <article
      className="card-contorno h-full flex flex-col gap-4 p-6 rounded-[20px] border border-[#2c2216] bg-[#140C00]/90" 
      role="group"
      aria-label={title}
    >
      <div className="service-icon-pill flex justify-center ">
        <Icon className="service-icon" color="#d1ad81" size={42} strokeWidth={1.8} />
      </div>

      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{desc}</p>
    </article>
  );
}

export default function ServicesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12">
      <div
        className="
          grid gap-8
          grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          items-stretch justify-items-stretch
        "
      >
        {SERVICES.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
}
