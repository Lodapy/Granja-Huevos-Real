
export type Language = 'es' | 'pt';

export interface KPIMetric {
  label: string;
  value: string;
  subtext: string;
}

export interface InvestmentDetail {
  name: string;
  value: string;
}

export interface InvestmentItem {
  category: string;
  amount: number;
  details?: InvestmentDetail[];
}

export interface FinancialScenario {
  name: string;
  price: number;
  utility: number;
  payback: string;
  roi: string;
  type: 'conservative' | 'realistic' | 'optimistic';
}

export interface OperationalDetail {
  title: string;
  badge?: string;
  items: string[];
}

export interface StrategyStage {
  title: string;
  description: string[];
}

export interface UnitMetrics {
  costPerBird: { label: string, value: string };
  opCostEgg: { label: string, value: string };
  totalCostEgg: { label: string, value: string };
  annualProd: { label: string, value: string };
}

export interface ContentHeader {
  badge: string;
  titleStart: string;
  titleHighlight: string;
  description: string;
  kpis: KPIMetric[];
}

export interface ContentSummary {
  title: string;
  text: string;
  keyPointTitle: string;
  keyPointText: string;
}

export interface ContentCapex {
  title: string;
  subtitle: string;
  tableTitle: string;
  tableHeaders: string[];
  items: InvestmentItem[];
  totalLabel: string;
  note: string;
}

export interface ContentOpex {
  title: string;
  subtitle: string;
  tableTitle: string;
  tableHeaders: string[];
  items: InvestmentItem[];
  unitMetricsTitle: string;
  unitMetrics: UnitMetrics;
  note: string;
}

export interface ScenarioInterpretation {
  title: string;
  text: string;
  bullets: string[];
  conclusion: string;
}

export interface ContentScenarios {
  title: string;
  subtitle: string;
  items: FinancialScenario[];
  labels: {
    scenario: string;
    price: string;
    payback: string;
    annualUtility: string;
    roi: string;
  };
  interpretation: ScenarioInterpretation;
}

export interface ContentStrategy {
  title: string;
  subtitle: string;
  stages: StrategyStage[];
  recommendationTitle: string;
  recommendationText: string;
}

export interface ContentFooter {
  title: string;
  text: string;
  ctaDossier: string;
  ctaCall: string;
  location: string;
  currency: string;
}

export interface Content {
  header: ContentHeader;
  summary: ContentSummary;
  capex: ContentCapex;
  opex: ContentOpex;
  scenarios: ContentScenarios;
  strategy: ContentStrategy;
  footer: ContentFooter;
}
