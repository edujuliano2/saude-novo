import React from 'react';
import { ArrowUpRight, BadgeCheck, Building2, ShieldCheck, Sparkles } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const proofCards = [
    {
      icon: <Building2 className="h-5 w-5" />,
      title: 'Quer reduzir o reajuste',
      text: 'A cotação ajuda a comparar cenários quando a renovação do plano está pressionando o orçamento da empresa.',
      accent: 'Reajuste',
    },
    {
      icon: <BadgeCheck className="h-5 w-5" />,
      title: 'Quer trocar de operadora',
      text: 'Levante alternativas com operadoras que façam sentido para o perfil da equipe e para a rede desejada.',
      accent: 'Troca',
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: 'Quer fazer cotação PME',
      text: 'Para quem ainda não tem plano, o foco é encontrar a primeira contratação com preço e cobertura equilibrados.',
      accent: 'PME',
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: 'Quer resposta rápida no WhatsApp',
      text: 'A experiência foi desenhada para transformar dados básicos em uma conversa objetiva com especialista.',
      accent: 'WhatsApp',
    },
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_#F8FAFC_0%,_#FFFFFF_100%)] pointer-events-none"></div>
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-trygg-navy-100/50 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between text-left mb-8 sm:mb-10">
          <div className="max-w-3xl space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-trygg-teal">Cenários que chegam para cotação</p>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-trygg-navy-900">
              Empresas que buscam uma decisão clara sobre o plano de saúde
            </h2>
            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
              A cotação foi pensada para mostrar rapidamente se existe espaço para reduzir custos, revisar a operadora atual ou contratar um novo plano com mais inteligência.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
            <span className="flex text-amber-400">
              <span>★★★★★</span>
            </span>
            <span className="text-sm font-semibold text-slate-500">Comparação de operadoras e retorno rápido</span>
            <ArrowUpRight className="h-4 w-4 text-slate-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
          {proofCards.map((card) => (
            <div
              key={card.title}
              className="group rounded-[24px] border border-slate-200/80 bg-white p-4 sm:p-5 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-trygg-teal/25 hover:shadow-[0_20px_50px_rgba(13,148,136,0.08)]"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-trygg-navy-900 text-white shadow-lg shadow-trygg-navy-900/15">
                  {card.icon}
                </div>
                <span className="rounded-full bg-trygg-teal/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-trygg-teal">
                  {card.accent}
                </span>
              </div>

              <h3 className="mt-4 text-base sm:text-lg font-bold text-trygg-navy-900">{card.title}</h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
