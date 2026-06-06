import React from 'react';
import { BadgeCheck, ShieldCheck, TrendingDown, Handshake, Headset, Wallet } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <BadgeCheck className="h-6 w-6" />,
      title: 'Comparação entre operadoras',
      desc: 'Veja em um único fluxo os cenários de Unimed, Bradesco, SulAmérica, Amil, Hapvida e outras opções.',
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: 'Revisão contratual',
      desc: 'Entenda se o contrato atual ainda faz sentido para o perfil de vidas e para o reajuste praticado.',
    },
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: 'Redução de custos',
      desc: 'Use a cotação para enxergar oportunidade de economia antes da renovação ou da primeira contratação.',
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: 'Apoio na negociação',
      desc: 'Leve mais segurança para negociar com a operadora atual ou comparar propostas novas.',
    },
    {
      icon: <Headset className="h-6 w-6" />,
      title: 'Atendimento especializado',
      desc: 'Receba orientação para quem precisa decidir rápido sem travar o RH no processo.',
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: 'Processo sem custo',
      desc: 'Você envia os dados uma vez e recebe a análise sem custo pelo WhatsApp.',
    },
  ];

  return (
    <section id="beneficios" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left space-y-3 mb-8 sm:mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-trygg-teal">O que a cotação entrega</p>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-trygg-navy-900">
            Menos ruído, mais clareza para decidir sobre o plano
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
            A estrutura foi montada para responder as dúvidas que mais travam a conversão: preço, operadora, troca e tempo de retorno.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {benefits.map((benefit, idx) => (
            <div
              key={benefit.title}
            className="group rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F8FAFC_100%)] p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-trygg-teal/20 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-trygg-teal/10 text-trygg-teal transition-transform duration-300 group-hover:scale-110">
              {benefit.icon}
            </div>
            <div className="mt-5">
              <div className="mb-2 inline-flex rounded-full bg-slate-900/5 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                0{idx + 1}
              </div>
                <h3 className="text-base sm:text-lg font-bold text-trygg-navy-900">{benefit.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">{benefit.desc}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};
