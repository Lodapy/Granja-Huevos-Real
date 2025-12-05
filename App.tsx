
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { InvestmentTable } from './components/InvestmentTable';
import { ScenarioChart } from './components/ScenarioChart';
import { CONTENT, TOTAL_INVESTMENT, EXCHANGE_RATE } from './constants';
import { Language } from './types';
import { CheckCircle2, Factory, TrendingUp } from 'lucide-react';

function App() {
  const [language, setLanguage] = useState<Language>('es');
  const t = CONTENT[language];

  // Update document title based on language
  useEffect(() => {
    document.title = language === 'es' 
      ? 'Proyecto Granja de Ponedoras - 36.000 Aves' 
      : 'Projeto Granja de Poedeiras - 36.000 Aves';
  }, [language]);

  const totalInvestmentUSD = TOTAL_INVESTMENT / EXCHANGE_RATE;

  const formatUSD = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="min-h-screen text-slate-200 p-4 md:p-6 lg:p-8 font-sans selection:bg-accent selection:text-black">
      <div className="max-w-6xl mx-auto pb-12">
        <Header 
          content={t.header} 
          language={language} 
          onLanguageChange={setLanguage} 
        />

        <main className="flex flex-col gap-8">
          
          {/* Executive Summary */}
          <Section title={t.summary.title}>
            <p className="text-slate-300 leading-relaxed mb-6 font-light">
              {t.summary.text.split('36.000').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && <strong className="text-white font-semibold">36.000</strong>}
                </React.Fragment>
              ))}
            </p>
            <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-5 flex gap-4 items-start shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
              <div className="p-2 bg-accent/10 rounded-full shrink-0 mt-1 border border-accent/20">
                <CheckCircle2 className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-accent mb-1 font-serif tracking-wide uppercase text-sm">{t.summary.keyPointTitle}</h3>
                <p className="text-sm text-slate-300">
                  {t.summary.keyPointText}
                </p>
              </div>
            </div>
          </Section>

          {/* CAPEX Section */}
          <Section 
            title={t.capex.title} 
            subtitle={t.capex.subtitle}
          >
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                 <h3 className="text-xs uppercase tracking-widest font-semibold text-accent mb-2 pl-1">{t.capex.tableTitle}</h3>
                 <InvestmentTable 
                   items={t.capex.items} 
                   headers={t.capex.tableHeaders} 
                   exchangeRate={EXCHANGE_RATE}
                 />
                 <div className="flex justify-between items-center bg-accent/10 p-3 rounded-lg border border-accent/20 mt-2">
                    <span className="text-accent font-bold uppercase text-xs tracking-wider">{t.capex.totalLabel}</span>
                    <div className="text-right">
                      <div className="text-white font-bold font-serif tabular-nums text-sm sm:text-base">{new Intl.NumberFormat('es-PY').format(TOTAL_INVESTMENT)} Gs</div>
                      <div className="text-emerald-400 font-bold font-serif tabular-nums text-xs sm:text-sm">{formatUSD(totalInvestmentUSD)}</div>
                    </div>
                 </div>
              </div>
              <div className="bg-card/40 p-6 rounded-xl border border-white/5 flex flex-col justify-center h-full">
                 <div className="flex items-center gap-3 mb-4 text-accent">
                    <Factory className="w-6 h-6" />
                    <span className="font-serif italic text-lg opacity-80">Modular & Escalable</span>
                 </div>
                 <p className="text-slate-400 text-sm leading-relaxed italic border-l-2 border-accent/30 pl-4">
                    {t.capex.note}
                 </p>
              </div>
            </div>
          </Section>

          {/* OPEX Section */}
          <Section 
            title={t.opex.title} 
            subtitle={t.opex.subtitle}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-widest font-semibold text-accent mb-2 pl-1">{t.opex.tableTitle}</h3>
                <InvestmentTable 
                  items={t.opex.items} 
                  headers={t.opex.tableHeaders}
                  exchangeRate={EXCHANGE_RATE}
                />
                <p className="text-xs text-slate-500 italic mt-2">{t.opex.note}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-widest font-semibold text-accent mb-2 pl-1">{t.opex.unitMetricsTitle}</h3>
                <div className="bg-card/80 rounded-xl border border-border p-6 space-y-4 h-full shadow-inner">
                  {(Object.keys(t.opex.unitMetrics) as Array<keyof typeof t.opex.unitMetrics>).map((key) => (
                    <div key={key} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0 last:pb-0">
                      <span className="text-slate-400 text-sm">{t.opex.unitMetrics[key].label}</span>
                      <span className={`font-serif font-bold tracking-wide ${key === 'annualProd' ? 'text-accent text-lg' : 'text-white'}`}>
                        {t.opex.unitMetrics[key].value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* Scenarios */}
          <Section 
            title={t.scenarios.title} 
            subtitle={t.scenarios.subtitle}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                 <div className="overflow-hidden rounded-xl border border-border bg-black/20">
                   <div className="overflow-x-auto">
                     <table className="w-full text-sm text-left">
                       <thead className="bg-secondary/20 text-accent uppercase text-xs font-semibold tracking-wider">
                         <tr>
                           <th className="px-4 py-3 whitespace-nowrap">{t.scenarios.labels.scenario}</th>
                           <th className="px-4 py-3 text-right whitespace-nowrap">{t.scenarios.labels.price}</th>
                           <th className="px-4 py-3 text-right whitespace-nowrap">{t.scenarios.labels.annualUtility}</th>
                           <th className="px-4 py-3 text-right whitespace-nowrap">{t.scenarios.labels.roi}</th>
                           <th className="px-4 py-3 text-right whitespace-nowrap">{t.scenarios.labels.payback}</th>
                         </tr>
                       </thead>
                       <tbody className="divide-y divide-border/50">
                         {t.scenarios.items.map((scenario) => (
                           <tr key={scenario.name} className={`
                             hover:bg-white/5 transition-colors
                             ${scenario.type === 'realistic' ? 'bg-accent/5' : ''}
                           `}>
                             <td className="px-4 py-3">
                               <span className={`text-[10px] font-bold uppercase tracking-widest py-1 px-2 rounded-sm inline-block whitespace-nowrap border
                                 ${scenario.type === 'conservative' ? 'border-slate-600 text-slate-400' : ''}
                                 ${scenario.type === 'realistic' ? 'border-accent text-accent' : ''}
                                 ${scenario.type === 'optimistic' ? 'border-emerald-500 text-emerald-500' : ''}
                               `}>
                                 {scenario.name}
                               </span>
                             </td>
                             <td className="px-4 py-3 text-right text-slate-300 font-medium whitespace-nowrap">
                               Gs {scenario.price}
                             </td>
                             <td className="px-4 py-3 text-right text-white font-bold whitespace-nowrap tabular-nums font-serif tracking-wide">
                               {new Intl.NumberFormat('es-PY').format(scenario.utility)}
                             </td>
                             <td className="px-4 py-3 text-right text-accent font-bold whitespace-nowrap">
                               {scenario.roi}
                             </td>
                             <td className="px-4 py-3 text-right text-slate-400 whitespace-nowrap text-xs">
                               {scenario.payback}
                             </td>
                           </tr>
                         ))}
                       </tbody>
                     </table>
                   </div>
                 </div>
              </div>
              
              <div className="bg-black/20 rounded-xl p-4 border border-border">
                <h4 className="text-xs text-center text-accent uppercase tracking-widest font-semibold mb-2">{t.scenarios.labels.chartTitle}</h4>
                <ScenarioChart data={t.scenarios.items} labels={t.scenarios.labels} />
                <p className="text-xs text-center text-slate-500 mt-4 max-w-xs mx-auto italic">
                  {t.scenarios.chartNote}
                </p>
              </div>
            </div>
          </Section>

          {/* Strategic Recommendation */}
          <Section 
            title={t.strategy.title} 
            subtitle={t.strategy.subtitle}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {t.strategy.stages.map((stage, idx) => (
                <div key={idx} className="bg-card/60 rounded-xl border border-border p-6 hover:border-accent/30 transition-colors shadow-lg group">
                  <h3 className="font-bold text-lg text-white font-serif tracking-wide mb-4 group-hover:text-accent transition-colors">
                    {stage.title}
                  </h3>
                  <ul className="space-y-3">
                    {stage.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-400 items-start">
                        <span className="w-1.5 h-1.5 rotate-45 bg-accent mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-accent/10 to-transparent border-l-4 border-accent p-6 rounded-r-xl">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                <h4 className="font-bold text-accent uppercase tracking-wider text-sm">{t.strategy.recommendationTitle}</h4>
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {t.strategy.recommendationText}
              </p>
            </div>
          </Section>

        </main>
      </div>
    </div>
  );
}

export default App;
