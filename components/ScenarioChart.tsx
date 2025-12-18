import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { FinancialScenario } from '../types';

interface ScenarioChartProps {
  data: FinancialScenario[];
  labels: {
    price: string;
    annualUtility: string;
    payback: string;
    chartTooltipUtility: string;
    months: string;
    chartX: string;
  }
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('es-PY', {
    style: 'currency',
    currency: 'PYG',
    maximumSignificantDigits: 3,
    notation: 'compact'
  }).format(value);
};

export const ScenarioChart: React.FC<ScenarioChartProps> = ({ data: scenarios, labels }) => {
  const getBarColor = (type: FinancialScenario['type']) => {
    switch(type) {
      case 'conservative': return '#9ca3af'; // silver/grey
      case 'realistic': return '#C5A059'; // Rolex Gold
      case 'optimistic': return '#006039'; // Rolex Green
      default: return '#94a3b8';
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const d = payload[0].payload;
      return (
        <div className="bg-card border border-accent/40 p-4 rounded shadow-xl text-sm z-50">
          <p className="font-bold text-accent mb-2 font-serif uppercase tracking-wider text-base">{d.name}</p>
          <p className="text-slate-300 mb-1">{labels.price}: <span className="text-white font-semibold">Gs {d.price}</span></p>
          <p className="text-emerald-400 font-semibold mb-1">{labels.chartTooltipUtility}: {new Intl.NumberFormat('es-PY').format(d.utility)} Gs</p>
          <p className="text-slate-400">{labels.payback}: <span className="font-medium">{d.payback}</span></p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-64 w-full mt-4">
      <ResponsiveContainer width="100%" height="100%" minWidth={0}>
        <BarChart data={scenarios} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#132e26" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fill: '#94a3b8', fontSize: 14, fontWeight: 600 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#64748b', fontSize: 13 }}
            tickFormatter={formatCurrency}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip cursor={{fill: 'rgba(255,255,255,0.03)'}} content={<CustomTooltip />} />
          <Bar dataKey="utility" radius={[2, 2, 0, 0]} barSize={50}>
            {scenarios.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(entry.type)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-center text-sm text-slate-500 mt-2 tracking-wide uppercase font-medium">{labels.chartX}</p>
    </div>
  );
};