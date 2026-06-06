import React from 'react';
import { CheckCircle2, ChevronDown, ChevronRight, Minus, Plus, ShieldCheck, Star } from 'lucide-react';
import type { QuoteFormState } from '../types';

type AgeBandKey = keyof QuoteFormState['ages'];

const AGE_BANDS: Array<{ key: AgeBandKey; label: string }> = [
  { key: 'age_00_18', label: '00 a 18 anos' },
  { key: 'age_19_28', label: '19 a 28 anos' },
  { key: 'age_29_38', label: '29 a 38 anos' },
  { key: 'age_39_48', label: '39 a 48 anos' },
  { key: 'age_49_53', label: '49 a 53 anos' },
  { key: 'age_54_58', label: '54 a 58 anos' },
  { key: 'age_59_plus', label: '59 anos ou mais' },
];

interface HeroProps {
  quoteForm: QuoteFormState;
  onFormUpdate: <K extends keyof QuoteFormState>(field: K, value: QuoteFormState[K]) => void;
  onAgeChange: (key: AgeBandKey, value: string) => void;
  onPrimaryCtaClick: () => void;
  totalAgeLives: number;
}

const OPERATORS = [
  'Unimed',
  'Bradesco Saúde',
  'SulAmérica',
  'Amil',
  'Porto Saúde',
  'NotreDame Intermédica',
  'Hapvida',
  'Outra',
];

const getAgeCount = (value: string) => Number(value) || 0;

export const Hero: React.FC<HeroProps> = ({
  quoteForm,
  onFormUpdate,
  onAgeChange,
  onPrimaryCtaClick,
  totalAgeLives,
}) => {
  const updateAgeCount = (key: AgeBandKey, nextValue: number) => {
    onAgeChange(key, String(Math.max(0, nextValue)));
  };

  return (
    <section
      id="cotacao"
      className="relative overflow-hidden pt-20 sm:pt-28 lg:pt-32 pb-12 sm:pb-20 lg:pb-24 bg-[radial-gradient(circle_at_top_left,_rgba(13,148,136,0.10),_transparent_34%),linear-gradient(180deg,_#F8FAFC_0%,_#FFFFFF_42%,_#F8FAFC_100%)]"
    >
      <div className="absolute inset-0 bg-grid-dots opacity-60 pointer-events-none"></div>
      <div className="absolute -top-24 right-0 w-80 h-80 bg-trygg-teal/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-trygg-navy-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-trygg-teal/15 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-trygg-teal opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-trygg-teal"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-500">
                Cotação gratuita e rápida para PME
              </span>
            </div>

            <div className="space-y-4 sm:space-y-5">
              <h1 className="max-w-3xl text-3xl sm:text-5xl lg:text-[62px] font-black leading-[1.02] tracking-tight text-trygg-navy-900">
                REDUZA OS CUSTOS DO PLANO DE SAÚDE DA SUA EMPRESA
              </h1>
              <p className="max-w-2xl text-base sm:text-xl text-slate-600 leading-relaxed">
                Compare gratuitamente as principais operadoras do mercado e descubra oportunidades reais de economia para sua empresa.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-3 max-w-2xl">
              {[
                'Cotação gratuita',
                'Atendimento especializado',
                'Comparação entre operadoras',
                'Economia potencial no plano atual',
                'Retorno rápido',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-white/85 px-3 py-2.5 shadow-sm backdrop-blur">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-trygg-teal sm:h-5 sm:w-5" />
                  <span className="text-xs font-semibold text-slate-700 sm:text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 border-t border-slate-200/80 pt-5 text-left">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4.5 w-4.5 text-trygg-teal" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Atendimento consultivo especializado</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-slate-900/5 px-3 py-1.5">
                <div className="flex text-amber-400">
                  <Star className="h-4 w-4 fill-current stroke-none" />
                  <Star className="h-4 w-4 fill-current stroke-none" />
                  <Star className="h-4 w-4 fill-current stroke-none" />
                  <Star className="h-4 w-4 fill-current stroke-none" />
                  <Star className="h-4 w-4 fill-current stroke-none" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold text-slate-500">Atendimento consultivo especializado</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5">
            <div className="rounded-[22px] border border-white/70 bg-white/90 p-3 sm:p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                  <div className="rounded-[20px] bg-[linear-gradient(180deg,_#0B192C_0%,_#102746_100%)] p-3.5 sm:p-6 text-white shadow-2xl">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.26em] sm:tracking-[0.32em] text-trygg-teal">
                          Simulador de cotação
                        </p>
                        <h2 className="mt-2 text-[1.35rem] sm:text-[2.05rem] font-black leading-tight tracking-tight text-white">
                          Preencha os dados abaixo para receber uma análise personalizada.
                        </h2>
                      </div>
                    </div>

                <div className="mt-4 sm:mt-5 space-y-3">
                  <div className="space-y-2">
                    <label className="block text-[9px] sm:text-xs font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-slate-400">
                      Sua empresa já possui plano de saúde?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {['sim', 'nao'].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            onFormUpdate('hasPlan', option as 'sim' | 'nao');
                            if (option === 'nao') {
                              onFormUpdate('operator', '');
                            }
                          }}
                          className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full border px-3 py-2 text-xs font-bold transition-all duration-200 sm:flex-none ${
                            quoteForm.hasPlan === option
                              ? 'border-trygg-teal bg-trygg-teal text-white shadow-lg shadow-trygg-teal/20'
                              : 'border-white/10 bg-white/5 text-slate-200 hover:border-white/20 hover:bg-white/10'
                          }`}
                        >
                          <span className={`h-2 w-2 rounded-full ${quoteForm.hasPlan === option ? 'bg-white' : 'bg-slate-400'}`} />
                          {option === 'sim' ? 'Sim' : 'Não'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {quoteForm.hasPlan === 'sim' && (
                    <div className="space-y-2">
                      <label htmlFor="operator" className="block text-[9px] sm:text-xs font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-slate-400">
                        Operadora atual
                      </label>
                      <select
                        id="operator"
                        value={quoteForm.operator}
                        onChange={(e) => onFormUpdate('operator', e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-medium text-white outline-none transition focus:border-trygg-teal focus:bg-white/10"
                      >
                        <option value="" className="text-slate-900">
                          Selecione
                        </option>
                        {OPERATORS.map((operator) => (
                          <option key={operator} value={operator} className="text-slate-900">
                            {operator}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="flex flex-col gap-1.5 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[9px] sm:text-xs font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-slate-400">Total de vidas informadas</p>
                    <p className="text-lg font-black text-white">{totalAgeLives}</p>
                  </div>

                  <p className="text-[10px] sm:text-[11px] leading-relaxed text-slate-300">
                    A composição etária fica logo abaixo para completar a cotação.
                  </p>

                  <details
                    id="hero-age-form"
                    open
                    className="group rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                      <div className="text-left">
                          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-slate-400">
                          Composição etária
                        </p>
                        <p className="mt-1 text-[11px] font-semibold text-white sm:text-sm">
                          Preencha as faixas etárias
                        </p>
                      </div>
                      <ChevronDown className="h-4 w-4 shrink-0 text-slate-300 transition-transform duration-300 group-open:rotate-180" />
                    </summary>

                    <div className="mt-3 space-y-2">
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {AGE_BANDS.map((band) => (
                          <div
                            key={band.key}
                            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition-colors hover:bg-white/10"
                          >
                            <div className="min-w-0 flex-1">
                              <span className="block truncate text-[10px] font-semibold text-slate-200 sm:text-sm">{band.label}</span>
                            </div>
                            <div className="flex shrink-0 items-center gap-1">
                              <button
                                type="button"
                                onClick={() => updateAgeCount(band.key, getAgeCount(quoteForm.ages[band.key]) - 1)}
                                aria-label={`Diminuir vidas em ${band.label}`}
                                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-white/20 hover:bg-white/10 hover:text-white active:scale-95"
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </button>
                              <input
                                type="number"
                                min="0"
                                inputMode="numeric"
                                value={quoteForm.ages[band.key]}
                                onChange={(e) => onAgeChange(band.key, e.target.value)}
                                className="w-14 shrink-0 rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-center text-sm font-black text-white outline-none transition placeholder:text-slate-500 focus:border-trygg-teal focus:bg-white/10"
                                placeholder="0"
                              />
                              <button
                                type="button"
                                onClick={() => updateAgeCount(band.key, getAgeCount(quoteForm.ages[band.key]) + 1)}
                                aria-label={`Aumentar vidas em ${band.label}`}
                                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-trygg-teal/30 bg-trygg-teal/15 text-trygg-teal transition hover:border-trygg-teal/50 hover:bg-trygg-teal/25 hover:text-white active:scale-95"
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-[10px] sm:text-[11px] leading-relaxed text-slate-300">
                        A soma das faixas precisa bater com o total de vidas informado para seguirmos com a cotação.
                      </p>
                    </div>
                  </details>

                  <button
                    onClick={onPrimaryCtaClick}
                    id="cta-hero-whatsapp"
                    className="group mt-1 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-emerald-500 px-4 py-3.5 text-white shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:bg-emerald-600 hover:-translate-y-0.5 active:scale-95 sm:px-5 sm:py-4"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.384 9.86-9.778.001-2.614-1.015-5.07-2.861-6.92C16.615 2.056 14.159 1.037 11.55 1.037 6.114 1.037 1.692 5.423 1.69 10.817c-.001 1.679.452 3.3 1.309 4.729L2.03 21.03l5.617-1.876zM17.67 14.87c-.29-.145-1.713-.846-1.977-.941-.264-.096-.456-.145-.648.145-.191.29-.741.94-.908 1.132-.167.19-.333.21-.623.067-.29-.145-1.226-.452-2.335-1.442-.864-.77-1.447-1.721-1.616-2.011-.17-.29-.018-.447.127-.592.13-.13.29-.339.435-.508.145-.17.19-.29.29-.483.096-.193.048-.362-.024-.508-.073-.145-.648-1.56-.888-2.138-.233-.56-.47-.482-.648-.492-.167-.008-.36-.01-.552-.01s-.504.072-.768.362c-.264.29-1.008.986-1.008 2.406 0 1.42 1.032 2.788 1.176 2.98.145.193 2.03 3.1 4.919 4.348.687.297 1.224.475 1.642.608.69.22 1.319.189 1.815.115.553-.083 1.714-.7 1.956-1.378.24-.678.24-1.258.17-1.378-.072-.12-.264-.193-.554-.339z" />
                      </svg>
                    </span>
                    <span className="text-left">
                      <span className="block text-base font-extrabold leading-tight">Solicitar Cotação Gratuita</span>
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                        Receber cotação no WhatsApp
                      </span>
                    </span>
                    <ChevronRight className="hidden sm:block h-4 w-4 opacity-80 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
