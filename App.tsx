
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { InvestmentTable } from './components/InvestmentTable';
import { ScenarioChart } from './components/ScenarioChart';
import { PrintableSummary } from './components/PrintableSummary';
import { CONTENT, TOTAL_INVESTMENT, EXCHANGE_RATE, CONTACT_EMAIL } from './constants';
import { Language, UnitMetrics } from './types';
import { CheckCircle2, Factory, TrendingUp, AlertTriangle, FileText } from 'lucide-react';

function App() {
  const [language, setLanguage] = useState<Language>('es');
  const t = CONTENT[language];

  // Update document title based on language
  useEffect(() => {
    document.title = language === 'es' 
      ? 'Proyecto Fazenda de Ovos - 36.000 Aves' 
      : 'Projeto Fazenda de Ovos - 36.000 Aves';
  }, [language]);

  const totalInvestmentUSD = TOTAL_INVESTMENT / EXCHANGE_RATE;
  
  // Calculate total OPEX dynamically from items
  const calculatedTotalOpex = t.opex.items.reduce((acc, item) => acc + item.amount, 0);
  const totalOpexUSD = calculatedTotalOpex / EXCHANGE_RATE;

  const formatUSD = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen text-slate-200 p-2 md:p-6 lg:p-8 font-sans selection:bg-accent selection:text-black overflow-x-hidden print:overflow-visible">
      {/* Printable Component - Only visible when printing */}
      <PrintableSummary content={t.printable} />
      
      <div className="max-w-6xl mx-auto pb-12 w-full print:hidden">
        <Header 
          content={t.header} 
          language={language} 
          onLanguageChange={setLanguage} 
        />

        <main className="flex flex-col gap-8">
          
          {/* Executive Summary */}
          <Section title={t.summary.title}>
            <p className="text-slate-300 leading-relaxed mb-6 font-light">
              {t.summary.text.split('Fazenda de Ovos').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && <strong className="text-accent font-bold">Fazenda de Ovos</strong>}
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
              <div className="space-y-4 w-full min-w-0">
                 <h3 className="text-xs uppercase tracking-widest font-semibold text-accent mb-2 pl-1">{t.capex.tableTitle}</h3>
                 <div className="max-w-full">
                   <InvestmentTable 
                     items={t.capex.items} 
                     headers={t.capex.tableHeaders} 
                     exchangeRate={EXCHANGE_RATE}
                   />
                 </div>
                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-accent/10 p-4 rounded-lg border border-accent/20 mt-2 gap-2 sm:gap-0">
                    <span className="text-accent font-bold uppercase text-sm tracking-wider">{t.capex.totalLabel}</span>
                    <div className="text-left sm:text-right">
                      <div className="text-white font-bold font-serif tabular-nums text-lg sm:text-xl">{new Intl.NumberFormat('es-PY').format(TOTAL_INVESTMENT)} Gs</div>
                      <div className="text-emerald-400 font-bold font-serif tabular-nums text-base sm:text-lg">{formatUSD(totalInvestmentUSD)}</div>
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
              <div className="space-y-4 w-full min-w-0">
                <h3 className="text-xs uppercase tracking-widest font-semibold text-accent mb-2 pl-1">{t.opex.tableTitle}</h3>
                <div className="max-w-full">
                  <InvestmentTable 
                    items={t.opex.items} 
                    headers={t.opex.tableHeaders}
                    exchangeRate={EXCHANGE_RATE}
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-secondary/5 p-4 rounded-lg border border-secondary/20 mt-2 gap-2 sm:gap-0">
                  <span className="text-emerald-500 font-bold uppercase text-sm tracking-wider">Total OPEX Estimado</span>
                  <div className="text-left sm:text-right">
                    <div className="text-white font-bold font-serif tabular-nums text-lg sm:text-xl">{new Intl.NumberFormat('es-PY').format(calculatedTotalOpex)} Gs</div>
                    <div className="text-emerald-400 font-bold font-serif tabular-nums text-base sm:text-lg">{formatUSD(totalOpexUSD)}</div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 italic mt-2">{t.opex.note}</p>
              </div>

              <div className="space-y-4 w-full min-w-0">
                <h3 className="text-xs uppercase tracking-widest font-semibold text-accent mb-2 pl-1">{t.opex.unitMetricsTitle}</h3>
                <div className="bg-card/80 rounded-xl border border-border p-4 sm:p-6 space-y-4 h-full shadow-inner">
                  {(Object.keys(t.opex.unitMetrics) as Array<keyof UnitMetrics>).map((key) => (
                    <div key={key} className="flex flex-col gap-1 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                      <div className="flex justify-between items-baseline flex-wrap gap-2">
                        <span className="text-slate-400 text-sm font-medium">{t.opex.unitMetrics[key].label}</span>
                        <span className={`font-serif font-bold tracking-wide text-right ${key === 'annualProd' ? 'text-accent text-xl' : 'text-white text-base'}`}>
                          {t.opex.unitMetrics[key].value}
                        </span>
                      </div>
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
              <div className="w-full min-w-0">
                 <div className="rounded-xl border border-border bg-black/20 overflow-hidden w-full">
                   <div className="overflow-x-auto w-full">
                     <table className="w-full text-base text-left min-w-[600px]">
                       <thead className="bg-secondary/20 text-accent uppercase text-sm font-bold tracking-wider">
                         <tr>
                           <th className="px-4 py-3 whitespace-nowrap sticky left-0 bg-[#06241b] z-10 shadow-lg md:static md:shadow-none md:bg-transparent">{t.scenarios.labels.scenario}</th>
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
                             <td className="px-4 py-3 sticky left-0 bg-[#0c1613] z-10 border-r border-border/30 md:static md:border-r-0 md:bg-transparent">
                               <span className={`text-xs font-bold uppercase tracking-widest py-1 px-2 rounded-sm inline-block whitespace-nowrap border
                                 ${scenario.type === 'conservative' ? 'border-slate-600 text-slate-400' : ''}
                                 ${scenario.type === 'realistic' ? 'border-accent text-accent' : ''}
                                 ${scenario.type === 'optimistic' ? 'border-emerald-500 text-emerald-500' : ''}
                               `}>
                                 {scenario.name}
                               </span>
                             </td>
                             <td className="px-4 py-3 text-right text-slate-300 font-semibold whitespace-nowrap text-base">
                               Gs {scenario.price}
                             </td>
                             <td className="px-4 py-3 text-right text-white font-bold whitespace-nowrap tabular-nums font-serif tracking-wide text-lg">
                               {new Intl.NumberFormat('es-PY').format(scenario.utility)}
                             </td>
                             <td className="px-4 py-3 text-right text-accent font-bold whitespace-nowrap text-lg">
                               {scenario.roi}
                             </td>
                             <td className="px-4 py-3 text-right text-slate-400 whitespace-nowrap text-sm font-medium">
                               {scenario.payback}
                             </td>
                           </tr>
                         ))}
                       </tbody>
                     </table>
                   </div>
                 </div>
              </div>
              
              <div className="bg-black/20 rounded-xl p-4 border border-border w-full min-w-0">
                <h4 className="text-sm text-center text-accent uppercase tracking-widest font-bold mb-3">{t.scenarios.labels.chartTitle}</h4>
                <ScenarioChart data={t.scenarios.items} labels={t.scenarios.labels} />
                <p className="text-xs text-center text-slate-500 mt-4 max-w-xs mx-auto italic">
                  {t.scenarios.chartNote}
                </p>
              </div>
            </div>
          </Section>

          {/* Risks & Objections */}
          <Section 
            title={t.risks.title} 
            subtitle={t.risks.subtitle}
          >
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {t.risks.items.map((risk, index) => (
                <div key={index} className="bg-card/90 rounded-xl border border-white/5 p-4 hover:border-accent/30 transition-all duration-300">
                  <h3 className="font-bold text-sm text-accent mb-2 font-serif">{risk.question}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed pl-3 border-l-2 border-accent/20">
                    {risk.answer}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-5 flex gap-4 items-start shadow-lg">
              <AlertTriangle className="w-5 h-5 text-accent mt-1 shrink-0" />
              <p className="text-sm text-slate-300 italic">
                {t.risks.conclusion}
              </p>
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

          {/* Footer / CTA with Download */}
          <div className="bg-gradient-to-b from-card to-black rounded-2xl p-8 border border-border text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
             <h2 className="text-2xl md:text-3xl font-bold text-white font-serif mb-4">{t.footer.title}</h2>
             <p className="text-slate-400 mb-8 max-w-2xl mx-auto">{t.footer.text}</p>
             
             <div className="flex flex-wrap justify-center gap-4 mb-8">
               <button 
                 onClick={handlePrint}
                 className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-all shadow-lg flex items-center gap-2 transform hover:-translate-y-1"
               >
                 <FileText className="w-4 h-4" />
                 {t.printable.buttonText}
               </button>
               <a 
                 href={`mailto:${CONTACT_EMAIL}`}
                 className="px-8 py-3 bg-accent text-black font-bold rounded-full hover:bg-accent-hover transition-all shadow-lg transform hover:-translate-y-1"
               >
                 {t.footer.ctaDossier}
               </a>
             </div>
             
             <div className="text-xs text-slate-600 border-t border-white/5 pt-6 flex flex-col md:flex-row justify-center gap-2 md:gap-8">
               <span>{t.footer.location}</span>
               <span className="hidden md:inline">•</span>
               <span>{t.footer.currency}</span>
               <span className="hidden md:inline">•</span>
               <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-accent transition-colors">{CONTACT_EMAIL}</a>
             </div>
          </div>

        </main>
      </div>
    </div>
  );
}

export default App;
