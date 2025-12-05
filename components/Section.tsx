import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  subtitle?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, subtitle, children, className = "" }) => {
  return (
    <section className={`bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 relative overflow-hidden ${className}`}>
      {/* Decorative gradient blob */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      
      <h2 className="text-xl font-bold mb-3 flex items-center gap-3 text-white font-serif tracking-wide">
        <span className="w-2 h-2 rotate-45 bg-accent shadow-[0_0_10px_rgba(197,160,89,0.5)]"></span>
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-slate-400 text-sm md:text-base mb-6 max-w-3xl font-light">
          {subtitle}
        </p>
      )}
      
      {children}
    </section>
  );
};