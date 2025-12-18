
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
      description: "Proyecto en Ciudad del Este, Paraguay. Alimentación basada en precios reales de balanceados por fase (Dic 2025). Modelo diseñado para alto retorno y flujo de caja rápido.",
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
          value: "5 a 27 meses",
          subtext: "Según precio de venta"
        },
        {
          label: "ROI anual proyectado",
          value: "44 % – 229 %",
          subtext: "Con costos actuales de balanceados"
        }
      ]
    },
    summary: {
      title: "Resumen Ejecutivo",
      text: "El proyecto “Fazenda de Ovos” consiste en la implantación de tres galpones de 125 m x 12 m cada uno, para alojar un total de 36.000 ponedoras Hi-Line Brown. El diseño contempla alimentación con balanceados comerciales específicos por fase (iniciador, crecimiento, pre-postura y postura), con precios actualizados al mercado paraguayo 2025, ventilación de presión positiva y protocolos de bioseguridad.",
      keyPointTitle: "Conclusión ejecutiva",
      keyPointText: "Aun con el costo actual de balanceados, el proyecto presenta un ROI anual entre ~44 % y ~229 %, con un período de recuperación de la inversión que se ubica entre aproximadamente 5 y 27 meses según el precio de venta del huevo. Es un activo agroindustrial productivo que combina infraestructura, stock biológico y flujo de caja constante."
    },
    capex: {
      title: "Inversión inicial (CAPEX) – Construcción de galpones y equipos incluidos",
      subtitle: "La inversión se concentra en infraestructura galponera y adquisición de las 36.000 ponedoras.",
      tableTitle: "Detalle de Inversión",
      tableHeaders: ["Categoría", "Monto (Gs)", "Monto (USD)"],
      items: [
        { 
          category: "Infraestrutura (3 galpones)", 
          amount: 955947000,
          details: [
            { name: "3 Galpones 125x12m", value: "Estructura completa" },
            { name: "Equipamento", value: "Comederos, Bebederos, Silos" },
            { name: "Montaje Eléctrico", value: "Tableros y Generador" }
          ]
        },
        { 
          category: "Compra de Aves", 
          amount: 406800000,
          details: [
            { name: "36.000 Ponedoras", value: "Genética Hi-Line Brown" },
            { name: "Costo unitario", value: "Gs 9.400 / ave" },
            { name: "Servicio de Despique", value: "Incluido" }
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
      note: "El valor por gallina (Gs 9.400) refleja precios actuales. El CAPEX se recupera dentro del primer ciclo productivo. Cambio ref: 6.950 Gs/USD."
    },
    opex: {
      title: "Costos operativos anuales (OPEX) con balanceados por fase",
      subtitle: "Los costos operativos se calculan en base a los precios actuales de balanceados por fase: iniciador, crecimiento, pre-postura y postura, con consumos estándar por gallina para un ciclo completo.",
      tableTitle: "Estructura de costos operativos (anual)",
      tableHeaders: ["Concepto", "Monto Gs/año", "Monto USD/año"],
      items: [
        { 
          category: "Alimento (todas las fases)", 
          amount: 4729968000,
          details: [
            { name: "Consumo ciclo", value: "50,7 kg / ave" },
            { name: "Costo promedio", value: "Variável por fase" }
          ]
        },
        { 
          category: "Sanidad (vacunas + vitaminas)", 
          amount: 208800000,
          details: [
            { name: "Plan sanitario", value: "Completo" },
            { name: "Suplementos", value: "Incluidos" }
          ]
        },
        { 
          category: "Mano de obra (6 personas)", 
          amount: 216000000,
          details: [
            { name: "Equipo", value: "6 Operarios" },
            { name: "Cargas sociales", value: "Incluidas" }
          ]
        }
      ],
      unitMetricsTitle: "Indicadores unitarios",
      unitMetrics: {
        costPerBird: { label: "Costo alimento/ave (ciclo)", value: "≈ Gs 131.388" },
        opCostEgg: { label: "Costo alimento/huevo", value: "≈ Gs 313" },
        totalCostEgg: { label: "Costo op. total/huevo", value: "≈ Gs 341" },
        annualProd: { label: "Producción Estimada", value: "15.120.000 un." }
      },
      note: "Nota: No se incluyen energía, embalajes, impuestos ni mantenimiento. Valores reflejan escenario de referencia con balanceados por fase."
    },
    scenarios: {
      title: "Escenarios Financieros",
      subtitle: "Rentabilidade calculada con costos actualizados (OPEX ~5.154M Gs).",
      items: [
        { name: "Conservador", price: 400, utility: 893232000, roi: "≈ 44 %", payback: "27 meses", type: 'conservative' },
        { name: "Realista", price: 500, utility: 2405232000, roi: "≈ 118 %", payback: "10 meses", type: 'realistic' },
        { name: "Optimista", price: 650, utility: 4673232000, roi: "≈ 229 %", payback: "5 meses", type: 'optimistic' }
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
      chartNote: 'A 400 Gs/huevo, el proyecto es rentable (ROI 44%). A 500 Gs/huevo, el payback baja a 10 meses. A 650 Gs/huevo, recuperación en 5 meses.'
    },
    risks: {
      title: "Riesgos y Objeciones",
      subtitle: "Análisis de sensibilidad y mitigación.",
      conclusion: "El proyecto cuenta con barreras de entrada por escala y tecnificación.",
      items: [
        { question: "¿Y si sube el balanceado?", answer: "El ROI se mantiene atractivo incluso con subas del 20%." },
        { question: "¿Riesgo sanitario?", answer: "Protocolo estricto de bioseguridad y vacunación completa." }
      ]
    },
    strategy: {
      title: "Recomendación Estratégica",
      subtitle: "Fase 1 (Comercial) vs Fase 2 (Formulación Propia)",
      stages: [
        {
          title: "Fase 1: Balanceado Comercial",
          description: [
            "Inicio con balanceados diferenciados por fase.",
            "Beneficio: Calidad estable, simplicidad logística.",
            "Objetivo: Estabilizar flujo de caja (6-9 meses)."
          ]
        },
        {
          title: "Fase 2: Formulación Propia",
          description: [
            "Inversión en molino y silos tras estabilización.",
            "Reducción potencial de costo: 25% - 30%.",
            "Ahorro anual estimado: Gs 1.200 - 1.400 millones."
          ]
        }
      ],
      recommendationTitle: "Estrategia Recomendada",
      recommendationText: "Arrancar con balanceado comercial para minimizar el riesgo operativo inicial, y utilizar los datos reales para diseñar una transición controlada hacia formulación propia."
    },
    printable: {
      buttonText: "Descargar Resumen Ejecutivo (PDF)",
      title: "MEMORÁNDUM EJECUTIVO",
      subtitle: "Proyecto Fazenda de Ovos - Ciudad del Este, Paraguay - 2025",
      sections: {
        overview: {
          title: "1. Visión General",
          text: "Implementación de una unidad productiva de 36.000 ponedoras. Activos reales con flujo de caja diario."
        },
        financials: {
          title: "2. Finanzas",
          capex: "Inversión: Gs 2.039.835.000",
          opex: "Costos: Gs 5.154.768.000 / año",
          roi: "ROI: 44% - 229%"
        },
        roadmap: {
          title: "3. Ejecución",
          phase1: "Fase 1: Balanceado comercial.",
          phase2: "Fase 2: Molino propio."
        },
        conclusion: {
          title: "4. Conclusión",
          text: "Oportunidad de bajo riesgo respaldada por demanda inelástica de alimentos."
        }
      },
      contact: "Contacto: inversiones@granjarural.com"
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
      description: "Projeto em Ciudad del Este, Paraguai. Alimentação baseada em preços reais de ração por fase (Dez 2025). Modelo desenhado para alto retorno e fluxo de caixa rápido.",
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
          value: "5 a 27 meses",
          subtext: "Conforme preço de venda"
        },
        {
          label: "ROI anual projetado",
          value: "44 % – 229 %",
          subtext: "Com custos atuais de ração"
        }
      ]
    },
    summary: {
      title: "Resumo Executivo",
      text: "O projeto “Fazenda de Ovos” consiste na implantação de três galpões de 125 m x 12 m cada, para alojar um total de 36.000 poedeiras Hi-Line Brown. O design contempla alimentação com rações comerciais específicas por fase (inicial, crescimento, pré-postura e postura), com preços atualizados ao mercado paraguaio 2025.",
      keyPointTitle: "Conclusão executiva",
      keyPointText: "Mesmo com o custo atual das rações, o projeto apresenta um ROI anual entre ~44 % e ~229 %, com um período de recuperação do investimento entre aproximadamente 5 e 27 meses. É um ativo agroindustrial produtivo que combina infraestrutura, stock biológico y fluxo de caixa constante."
    },
    capex: {
      title: "Investimento Inicial (CAPEX) – Construção de galpões e equipamentos incluídos",
      subtitle: "O investimento concentra-se em infraestrutura de galpões e aquisição de 36.000 poedeiras.",
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
            { name: "Custo unitário", value: "Gs 9.400 / ave" },
            { name: "Serviço de Debicagem", value: "Incluído" }
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
      note: "O valor por galinha (Gs 9.400) reflete preços atuais. O CAPEX é recuperado dentro do primeiro ciclo produtivo. Câmbio ref: 6.950 Gs/USD."
    },
    opex: {
      title: "Custos operacionais anuais (OPEX) com ração por fase",
      subtitle: "Os custos operacionais são calculados com base nos preços atuais de rações por fase: inicial, crescimento, pré-postura e postura, com consumos padrão por galinha.",
      tableTitle: "Estrutura de custos operacionais (anual)",
      tableHeaders: ["Conceito", "Valor Gs/ano", "Valor USD/ano"],
      items: [
        { 
          category: "Ração (todas as fases)", 
          amount: 4729968000,
          details: [
            { name: "Consumo ciclo", value: "50,7 kg / ave" },
            { name: "Custo médio", value: "Variável por fase" }
          ]
        },
        { 
          category: "Sanidade (vacinas + vitaminas)", 
          amount: 208800000,
          details: [
            { name: "Plano sanitário", value: "Completo" },
            { name: "Suplementos", value: "Incluídos" }
          ]
        },
        { 
          category: "Mano de obra (6 personas)", 
          amount: 216000000,
          details: [
            { name: "Equipe", value: "6 Operários" },
            { name: "Encargos sociais", value: "Incluídos" }
          ]
        }
      ],
      unitMetricsTitle: "Indicadores unitários",
      unitMetrics: {
        costPerBird: { label: "Custo ração/ave (ciclo)", value: "≈ Gs 131.388" },
        opCostEgg: { label: "Custo ração/ovo", value: "≈ Gs 313" },
        totalCostEgg: { label: "Custo op. total/ovo", value: "≈ Gs 341" },
        annualProd: { label: "Produção Estimada", value: "15.120.000 un." }
      },
      note: "Nota: Não inclui energia, embalagens, impostos ou manutenção. Valores refletem cenário de referência com rações por fase."
    },
    scenarios: {
      title: "Cenários Financeiros",
      subtitle: "Rentabilidade calculada com custos atualizados (OPEX ~5.154M Gs).",
      items: [
        { name: "Conservador", price: 400, utility: 893232000, roi: "≈ 44 %", payback: "27 meses", type: 'conservative' },
        { name: "Realista", price: 500, utility: 2405232000, roi: "≈ 118 %", payback: "10 meses", type: 'realistic' },
        { name: "Otimista", price: 650, utility: 4673232000, roi: "≈ 229 %", payback: "5 meses", type: 'optimistic' }
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
      chartNote: "A 400 Gs/ovo, o projeto é rentável (ROI 44%). A 500 Gs/ovo, o payback baixa para 10 meses. A 650 Gs/ovo, recuperação em 5 meses."
    },
    risks: {
      title: "Riscos e Objeções",
      subtitle: "Principais dúvidas técnicas.",
      conclusion: "Forte barreira de entrada e demanda recorrente.",
      items: [
        { question: "E se o preço da ração subir?", answer: "O projeto absorve altas de até 25% mantendo ROI positivo." },
        { question: "Risco biológico?", answer: "Biossegurança nível industrial com vacinação completa." }
      ]
    },
    strategy: {
      title: "Recomendação Estratégica",
      subtitle: "Fase 1 (Comercial) vs Fase 2 (Formulação Própria)",
      stages: [
        {
          title: "Fase 1: Ração Comercial",
          description: [
            "Início com rações diferenciadas por fase.",
            "Benefício: Qualidade estável, simplicidade logística.",
            "Objetivo: Estabilizar fluxo de caixa (6-9 meses)."
          ]
        },
        {
          title: "Fase 2: Formulação Própria",
          description: [
            "Investimento em moinho e silos após estabilização.",
            "Redução potencial de custo: 25% - 30%.",
            "Economia anual estimada: Gs 1.200 - 1.400 milhões."
          ]
        }
      ],
      recommendationTitle: "Estrategia Recomendada",
      recommendationText: "Iniciar com ração comercial para minimizar o risco operacional inicial, e utilizar os dados reais para desenhar uma transição controlada para formulação própria."
    },
    printable: {
      buttonText: "Baixar Resumo Executivo (PDF)",
      title: "MEMORANDO EXECUTIVO",
      subtitle: "Projeto Fazenda de Ovos - Ciudad del Este, Paraguai - 2025",
      sections: {
        overview: {
          title: "1. Visão Geral",
          text: "Implantação de unidade produtiva de 36.000 poedeiras. Ativos físicos e fluxo diário."
        },
        financials: {
          title: "2. Financeiro",
          capex: "Investimento: Gs 2.039.835.000",
          opex: "Custos: Gs 5.154.768.000 / ano",
          roi: "ROI: 44% - 229%"
        },
        roadmap: {
          title: "3. Estratégia",
          phase1: "Fase 1: Ração comercial estável.",
          phase2: "Fase 2: Integração vertical."
        },
        conclusion: {
          title: "4. Conclusão",
          text: "Ativo agroindustrial resiliente contra inflação e variações cambiais."
        }
      },
      contact: "Contato: inversiones@granjarural.com"
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
