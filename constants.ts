
import { Content, Language } from './types';

export const TOTAL_INVESTMENT = 2039835000;
export const EXCHANGE_RATE = 6950;
export const CONTACT_EMAIL = "inversiones@granjarural.com";

export const CONTENT: Record<Language, Content> = {
  es: {
    header: {
      badge: "Proyecto de inversión · Producción avícola · Datos 2025",
      titleStart: "Granja de Ponedoras",
      titleHighlight: "36.000 aves",
      description: "Proyecto en Ciudad del Este, Paraguay. Alimentación basada en precios reales de mercado (Dic 2025). Modelo diseñado para alto retorno y flujo de caja rápido.",
      kpis: [
        {
          label: "Inversión inicial (Gastos de Capital)",
          value: "Gs 2.039.835.000 / $ 293.501",
          subtext: "3 galpones + compra de aves"
        },
        {
          label: "Producción estimada",
          value: "972.000 huevos/mes",
          subtext: "15.120.000 huevos/año"
        },
        {
          label: "Payback estimado",
          value: "3,9 a 9,5 meses",
          subtext: "Según precio de venta"
        },
        {
          label: "ROI anual proyectado",
          value: "126 % – 311 %",
          subtext: "Con costo real de alimento comercial"
        }
      ]
    },
    summary: {
      title: "Resumen Ejecutivo",
      text: "El proyecto “Huevos Granjeros” consiste en la implantación de tres galpones de 125 m x 12 m cada uno, para alojar un total de 36.000 ponedoras Hi-Line Brown. El diseño contempla alimentación balanceada comercial (precio promedio actual de Gs 2.020/kg), ventilación de presión positiva y protocolos de bioseguridad.",
      keyPointTitle: "Conclusión ejecutiva",
      keyPointText: "Con un costo de alimento real de Gs 2.020/kg y producción de 420 huevos/ave, el proyecto presenta un ROI anual > 126% y recupera la inversión en menos de un año en todos los escenarios."
    },
    capex: {
      title: "Inversión Inicial (Gastos de Capital)",
      subtitle: "La inversión se concentra en infraestructura y activos biológicos amortizáveis.",
      tableTitle: "Detalle de Inversión",
      tableHeaders: ["Categoría", "Monto (Gs)", "Monto (USD)"],
      items: [
        { 
          category: "Infraestructura (3 galpones)", 
          amount: 955947000,
          details: [
            { name: "3 Galpones 125x12m", value: "Estructura completa" },
            { name: "Equipamiento", value: "Comederos, Bebederos, Silos" },
            { name: "Montaje Eléctrico", value: "Tableros y Generador" }
          ]
        },
        { 
          category: "Compra de Aves", 
          amount: 406800000,
          details: [
            { name: "36.000 Ponedoras", value: "Genética Hi-Line Brown" },
            { name: "Servicio de Despique", value: "Incluido" },
            { name: "Logística", value: "Puesto en granja" }
          ]
        },
        {
            category: "Capital de Trabajo e Imprevistos",
            amount: 677088000,
            details: [
                { name: "Alimento Inicial", value: "Fase arranque" },
                { name: "Gastos Pre-operativos", value: "Permisos y Gestión" }
            ]
        }
      ],
      totalLabel: "Total Gastos de Capital",
      note: "El modelo es modular: cada módulo de 12.000 aves puede replicarse según demanda. Cambio ref: 6.950 Gs/USD."
    },
    opex: {
      title: "Costos Operativos (Gastos Operacionales) con Alimento Real",
      subtitle: "Cálculos basados en precios de mercado de Diciembre 2025 (Gs 2.020/kg promedio).",
      tableTitle: "Estructura de Costos Anual",
      tableHeaders: ["Categoría", "Total (Gs)", "Total (USD)"],
      items: [
        { 
          category: "Alimento Comercial", 
          amount: 3054240000,
          details: [
            { name: "Consumo anual", value: "1.512.000 kg" },
            { name: "Precio promedio", value: "2.020 Gs/kg" },
            { name: "Marca ref.", value: "Surmix / Genérico" }
          ]
        },
        { 
          category: "Sanidad", 
          amount: 208800000,
          details: [
            { name: "Vacunación", value: "Plan completo" },
            { name: "Suplementos", value: "Vitaminas" }
          ]
        },
        { 
          category: "Mano de obra", 
          amount: 216000000,
          details: [
            { name: "Equipo", value: "6 Operarios" },
            { name: "Cargas sociales", value: "Incluidas" }
          ]
        }
      ],
      unitMetricsTitle: "Indicadores Unitarios",
      unitMetrics: {
        costPerBird: { label: "Consumo anual/ave", value: "42 kg" },
        opCostEgg: { label: "Costo alimento/huevo", value: "~ Gs 202" },
        totalCostEgg: { label: "Costo operativo total/huevo", value: "~ Gs 230" },
        annualProd: { label: "Producción Anual", value: "15.120.000 un." }
      },
      note: "El alimento representa el 70–75 % del costo operativo. Datos validados con proveedores locales (Surmix, Agrofértil)."
    },
    scenarios: {
      title: "Escenarios Financieros",
      subtitle: "Rentabilidad calculada con costo de alimento real comercial.",
      items: [
        { name: "Conservador", price: 400, utility: 2568960000, roi: "126 %", payback: "9,5 meses", type: 'conservative' },
        { name: "Realista", price: 500, utility: 4080960000, roi: "200 %", payback: "6,0 meses", type: 'realistic' },
        { name: "Optimista", price: 650, utility: 6348960000, roi: "311 %", payback: "3,9 meses", type: 'optimistic' }
      ],
      labels: {
        scenario: "Escenario",
        price: "Precio Huevo",
        payback: "Payback",
        annualUtility: "Utilidad Anual",
        roi: "ROI",
        chartTitle: "Proyección de Utilidad Anual",
        chartX: "Utilidad Anual Estimada (Gs)",
        chartTooltipUtility: "Utilidad",
        months: "meses"
      },
      chartNote: 'Incluso en el escenario conservador (Gs 400), se recupera la inversión en menos de 10 meses.'
    },
    strategy: {
      title: "Recomendación Estratégica",
      subtitle: "Análisis comparativo: Alimento Comercial vs. Formulación Propia",
      stages: [
        {
          title: "Opción A: Alimento Comercial",
          description: [
            "Ventajas: Calidad consistente, menor inversión inicial, logística simple.",
            "Costo actual: ~ Gs 2.020 / kg.",
            "Impacto: Costo huevo ~ Gs 280-320."
          ]
        },
        {
          title: "Opción B: Formulación Propia",
          description: [
            "Ventajas: Reducción de costo (25-30%), control de calidad, independencia.",
            "Insumos: Maíz (1.300 Gs/kg), Soja (2.200 Gs/kg).",
            "Costo estimado: ~ Gs 1.500 / kg.",
            "Impacto: Costo huevo ~ Gs 230-260."
          ]
        }
      ],
      recommendationTitle: "Estrategia Recomendada",
      recommendationText: "Iniciar con alimento comercial para reducir riesgos operativos en el arranque. Al alcanzar escala estable, invertir en planta de balanceado propia para capturar un 30% adicional de margen."
    },
    footer: {
      title: "¿Listo para invertir en seguridad alimentaria?",
      text: "Buscamos socios estratégicos para un modelo de negocio con flujo de caja recurrente y alta demanda.",
      ctaDossier: "Solicitar Dossier",
      ctaCall: "Agendar Llamada",
      location: "Paraguay",
      currency: "Cifras en Guaraníes (Gs)"
    }
  },
  pt: {
    header: {
      badge: "Projeto de investimento · Produção avícola · Dados 2025",
      titleStart: "Ovos de galinha",
      titleHighlight: "36.000 aves",
      description: "Projeto em Ciudad del Este, Paraguai. Alimentação baseada em preços reais de mercado (Dez 2025). Modelo desenhado para alto retorno e fluxo de caixa rápido.",
      kpis: [
        {
          label: "Investimento inicial (Despesas de Capital)",
          value: "Gs 2.039.835.000 / $ 293.501",
          subtext: "3 galpões + compra de aves"
        },
        {
          label: "Produção estimada",
          value: "972.000 ovos/mês",
          subtext: "15.120.000 ovos/ano"
        },
        {
          label: "Payback estimado",
          value: "3,9 a 9,5 meses",
          subtext: "Conforme preço de venda"
        },
        {
          label: "ROI anual projetado",
          value: "126 % – 311 %",
          subtext: "Com custo real de ração comercial"
        }
      ]
    },
    summary: {
      title: "Resumo Executivo",
      text: "O projeto “Ovos de Granja” consiste na implantação de três galpões de 125 m x 12 m cada, para alojar um total de 36.000 poedeiras Hi-Line Brown. O design contempla ração balanceada comercial (preço médio atual de Gs 2.020/kg), ventilação de pressão positiva e protocolos de biossegurança.",
      keyPointTitle: "Conclusão executiva",
      keyPointText: "Com um custo de ração real de Gs 2.020/kg e produção de 420 ovos/ave, o projeto apresenta um ROI anual > 126% e recupera o investimento em menos de um ano em todos os cenários."
    },
    capex: {
      title: "Investimento Inicial (Despesas de Capital)",
      subtitle: "O investimento concentra-se em infraestrutura e ativos biológicos amortizáveis.",
      tableTitle: "Detalhe de Investimento",
      tableHeaders: ["Categoria", "Valor (Gs)", "Valor (USD)"],
      items: [
        { 
          category: "Infraestrutura (3 galpões)", 
          amount: 955947000,
          details: [
            { name: "3 Galpões 125x12m", value: "Estrutura completa" },
            { name: "Equipamento", value: "Comedouros, Bebedouros, Silos" },
            { name: "Montagem Elétrica", value: "Quadros e Gerador" }
          ]
        },
        { 
          category: "Compra de Aves", 
          amount: 406800000,
          details: [
            { name: "36.000 Poedeiras", value: "Genética Hi-Line Brown" },
            { name: "Serviço de Debicagem", value: "Incluído" },
            { name: "Logística", value: "Posto na granja" }
          ]
        },
        {
            category: "Capital de Giro e Imprevistos",
            amount: 677088000,
            details: [
                { name: "Ração Inicial", value: "Fase arranque" },
                { name: "Despesas Pré-operacionais", value: "Licenças e Gestão" }
            ]
        }
      ],
      totalLabel: "Total Despesas de Capital",
      note: "O modelo é modular: cada módulo de 12.000 aves pode ser replicado conforme demanda. Câmbio ref: 6.950 Gs/USD."
    },
    opex: {
      title: "Custos Operacionais (Despesas Operacionais) com Ração Real",
      subtitle: "Cálculos baseados em preços de mercado de Dezembro 2025 (Gs 2.020/kg médio).",
      tableTitle: "Estrutura de Custos Anual",
      tableHeaders: ["Categoria", "Total (Gs)", "Total (USD)"],
      items: [
        { 
          category: "Ração Comercial", 
          amount: 3054240000,
          details: [
            { name: "Consumo anual", value: "1.512.000 kg" },
            { name: "Preço médio", value: "2.020 Gs/kg" },
            { name: "Marca ref.", value: "Surmix / Genérico" }
          ]
        },
        { 
          category: "Sanidade", 
          amount: 208800000,
          details: [
            { name: "Vacinação", value: "Plano completo" },
            { name: "Suplementos", value: "Vitaminas" }
          ]
        },
        { 
          category: "Mão de obra", 
          amount: 216000000,
          details: [
            { name: "Equipe", value: "6 Operários" },
            { name: "Encargos sociais", value: "Incluídos" }
          ]
        }
      ],
      unitMetricsTitle: "Indicadores Unitarios",
      unitMetrics: {
        costPerBird: { label: "Consumo anual/ave", value: "42 kg" },
        opCostEgg: { label: "Custo ração/ovo", value: "~ Gs 202" },
        totalCostEgg: { label: "Custo operacional total/ovo", value: "~ Gs 230" },
        annualProd: { label: "Produção Anual", value: "15.120.000 un." }
      },
      note: "A ração representa 70–75% do custo operacional. Dados validados com fornecedores locais (Surmix, Agrofértil)."
    },
    scenarios: {
      title: "Cenários Financeiros",
      subtitle: "Rentabilidade calculada com custo de ração real comercial.",
      items: [
        { name: "Conservador", price: 400, utility: 2568960000, roi: "126 %", payback: "9,5 meses", type: 'conservative' },
        { name: "Realista", price: 500, utility: 4080960000, roi: "200 %", payback: "6,0 meses", type: 'realistic' },
        { name: "Otimista", price: 650, utility: 6348960000, roi: "311 %", payback: "3,9 meses", type: 'optimistic' }
      ],
      labels: {
        scenario: "Cenário",
        price: "Preço Ovo",
        payback: "Payback",
        annualUtility: "Lucro Anual",
        roi: "ROI",
        chartTitle: "Projeção de Lucro Anual",
        chartX: "Lucro Anual Estimado (Gs)",
        chartTooltipUtility: "Lucro",
        months: "meses"
      },
      chartNote: 'Mesmo no cenário conservador (Gs 400), recupera-se o investimento em menos de 10 meses.'
    },
    strategy: {
      title: "Recomendação Estratégica",
      subtitle: "Análise comparativa: Ração Comercial vs. Formulação Própria",
      stages: [
        {
          title: "Opção A: Ração Comercial",
          description: [
            "Vantagens: Qualidade consistente, menor investimento inicial, logística simples.",
            "Custo atual: ~ Gs 2.020 / kg.",
            "Impacto: Custo ovo ~ Gs 280-320."
          ]
        },
        {
          title: "Opção B: Formulação Própria",
          description: [
            "Vantagens: Redução de custo (25-30%), controle de qualidade, independência.",
            "Insumos: Milho (1.300 Gs/kg), Soja (2.200 Gs/kg).",
            "Custo estimado: ~ Gs 1.500 / kg.",
            "Impacto: Custo ovo ~ Gs 230-260."
          ]
        }
      ],
      recommendationTitle: "Estratégia Recomendada",
      recommendationText: "Iniciar com ração comercial para reduzir riscos operacionais no arranque. Ao alcançar escala estável, investir em fábrica de ração própria para capturar 30% adicional de margem."
    },
    footer: {
      title: "Pronto para investir em segurança alimentar?",
      text: "Buscamos parceiros estratégicos para um modelo de negócio com fluxo de caixa recorrente e alta demanda.",
      ctaDossier: "Solicitar Dossiê",
      ctaCall: "Agendar Chamada",
      location: "Paraguay",
      currency: "Valores em Guaranis (Gs)"
    }
  }
};
