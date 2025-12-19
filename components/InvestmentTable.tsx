import React, { useState } from 'react';
import { InvestmentItem } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface InvestmentTableProps {
  items: InvestmentItem[];
  headers: string[];
  exchangeRate?: number;
}

export const InvestmentTable: React.FC<InvestmentTableProps> = ({ items, headers, exchangeRate }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleRow = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const formatUSD = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="rounded-xl border border-border bg-black/20 overflow-hidden w-full">
      <div className="w-full">
        <table className="w-full text-[11px] sm:text-sm text-left border-collapse">
          <thead className="bg-secondary/20 text-accent uppercase text-[10px] sm:text-xs font-semibold tracking-wider">
            <tr>
              <th className="px-2 sm:px-4 py-3 pl-4 border-b border-border">{headers[0]}</th>
              <th className="px-2 sm:px-4 py-3 text-right border-b border-border">{headers[1]}</th>
              {exchangeRate && headers[2] && (
                <th className="px-2 sm:px-4 py-3 text-right border-b border-border">{headers[2]}</th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {items.map((item, index) => {
              const isExpanded = expandedIndex === index;
              const hasDetails = item.details && item.details.length > 0;
              const usdValue = exchangeRate ? item.amount / exchangeRate : 0;
              
              return (
                <React.Fragment key={index}>
                  <tr 
                    className={`
                      transition-colors 
                      ${hasDetails ? 'cursor-pointer hover:bg-white/5' : ''}
                      ${isExpanded ? 'bg-white/5' : ''}
                    `}
                    onClick={() => hasDetails && toggleRow(index)}
                  >
                    <td className="px-2 sm:px-4 py-3 text-slate-200 font-medium relative">
                      <div className="flex items-center gap-1">
                        {hasDetails && (
                          <div className="text-accent/70 shrink-0">
                            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                          </div>
                        )}
                        <div className="leading-tight">{item.category}</div>
                      </div>
                    </td>
                    <td className="px-2 sm:px-4 py-3 text-right text-white tabular-nums font-serif tracking-wide whitespace-nowrap">
                      {new Intl.NumberFormat('es-PY').format(item.amount)}
                    </td>
                    {exchangeRate && (
                      <td className="px-2 sm:px-4 py-3 text-right text-emerald-400 tabular-nums font-serif tracking-wide opacity-90 whitespace-nowrap">
                        {formatUSD(usdValue)}
                      </td>
                    )}
                  </tr>
                  {isExpanded && hasDetails && (
                    <tr className="bg-black/40 shadow-inner">
                      <td colSpan={exchangeRate ? 3 : 2} className="px-4 py-3">
                        <div className="grid gap-2 border-l border-accent/30 pl-4 py-1">
                          {item.details?.map((detail, dIdx) => (
                            <div key={dIdx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-[10px] sm:text-xs text-slate-400 gap-1 sm:gap-0">
                              <span>{detail.name}</span>
                              <span className="text-accent/80 italic">{detail.value}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};