
import React from 'react';
import { ContentPrintable } from '../types';
import { GoldenEggLogo } from './GoldenEggLogo';

interface PrintableSummaryProps {
  content: ContentPrintable;
}

export const PrintableSummary: React.FC<PrintableSummaryProps> = ({ content }) => {
  return (
    <div className="hidden print:block fixed inset-0 z-50 bg-white text-black p-8 font-serif leading-relaxed">
      <div className="max-w-4xl mx-auto border-b-2 border-black pb-6 mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight uppercase mb-2">{content.title}</h1>
          <p className="text-lg italic text-gray-600">{content.subtitle}</p>
        </div>
        <div className="opacity-80">
          <GoldenEggLogo className="w-16 h-16" />
        </div>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-bold uppercase border-l-4 border-black pl-3 mb-3">{content.sections.overview.title}</h2>
          <p className="text-justify text-gray-800">{content.sections.overview.text}</p>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold uppercase border-l-4 border-black pl-3 mb-4">{content.sections.financials.title}</h2>
          <ul className="space-y-2">
            <li className="font-medium text-lg">• {content.sections.financials.capex}</li>
            <li className="font-medium text-lg">• {content.sections.financials.opex}</li>
            <li className="font-bold text-lg text-black">• {content.sections.financials.roi}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase border-l-4 border-black pl-3 mb-3">{content.sections.roadmap.title}</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-100 p-4 rounded">
              <p className="font-bold">{content.sections.roadmap.phase1}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <p className="font-bold">{content.sections.roadmap.phase2}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase border-l-4 border-black pl-3 mb-3">{content.sections.conclusion.title}</h2>
          <p className="text-justify text-gray-800 font-medium">{content.sections.conclusion.text}</p>
        </section>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-300 text-center text-sm text-gray-500">
        <p className="font-bold text-black text-base mb-1">{content.contact}</p>
        <p>Documento confidencial para uso exclusivo de investidores qualificados.</p>
      </div>
    </div>
  );
};
