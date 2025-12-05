import React from 'react';
import { TrendingUp, DollarSign, Activity, Egg } from 'lucide-react';
import { KPIMetric, Language } from '../types';
import { GoldenEggLogo } from './GoldenEggLogo';

interface HeaderProps {
  content: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    description: string;
    kpis: KPIMetric[];
  };
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const icons = [DollarSign, Egg, Activity, TrendingUp];

export const Header: React.FC<HeaderProps> = ({ content, language, onLanguageChange }) => {
  return (
    <header className="relative flex flex-col gap-8 p-6 md:p-10 rounded-3xl bg-gradient-to-br from-secondary/20 via-card to-black border border-border shadow-2xl mb-8 overflow-hidden group/header">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      {/* Language Toggle - Esquina Superior Derecha */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 flex bg-black/60 rounded-full p-1 border border-border backdrop-blur-md z-30">
        <button
          onClick={() => onLanguageChange('es')}
          className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
            language === 'es'
              ? 'bg-accent text-black shadow-lg shadow-accent/20'
              : 'text-slate-500 hover:text-accent'
          }`}
        >
          ES
        </button>
        <button
          onClick={() => onLanguageChange('pt')}
          className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
            language === 'pt'
              ? 'bg-accent text-black shadow-lg shadow-accent/20'
              : 'text-slate-500 hover:text-accent'
          }`}
        >
          PT
        </button>
      </div>

      <div className="flex flex-col gap-6 relative z-10">

        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <div className="relative group">
            <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
            <GoldenEggLogo className="w-16 h-16 md:w-20 md:h-20 drop-shadow-2xl relative z-10" />
          </div>
          <div className="flex flex-col opacity-90">
            <span className="text-accent text-[10px] uppercase tracking-[0.25em] font-serif font-bold">Investimento Premium</span>
            <span className="text-white font-serif text-lg md:text-xl tracking-widest border-b border-accent/30 pb-1">GRANJA RURAL</span>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 text-xs font-semibold bg-secondary/10 text-accent border border-accent/20 rounded-full px-4 py-1.5 w-fit shadow-lg backdrop-blur-md">
          <Egg className="w-3 h-3" />
          <span className="tracking-wide uppercase">{content.badge}</span>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-2 space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-serif tracking-tight">
              {content.titleStart} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#e5d09b] to-accent block sm:inline drop-shadow-sm">{content.titleHighlight}</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed border-l-2 border-secondary/50 pl-4">
              {content.description}
            </p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {content.kpis.map((kpi, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <div key={idx} className="group bg-black/40 backdrop-blur-sm border border-border p-4 rounded-xl hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">{kpi.label}</span>
                    <Icon className="w-4 h-4 text-accent opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-lg md:text-xl font-bold text-white mb-2 font-serif tracking-wide break-words">{kpi.value}</div>
                  <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-secondary/10 text-emerald-400 text-[10px] md:text-xs font-medium border border-secondary/20">
                    {kpi.subtext}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};