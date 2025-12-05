
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
          value: "5 a 25 meses",
          subtext: "Según precio de venta"
        },
        {
          label: "ROI anual proyectado",
          value: "48 % – 233 %",
          subtext: "Con costos actuales de balanceados"
        }
      ]
    },
    summary: {
      title: "Resumen Ejecutivo",
      text: "El proyecto “Huevos Granjeros” consiste en la implantación de tres galpones de 125 m x 12 m cada uno, para alojar un total de 36.000 ponedoras Hi-Line Brown. El diseño contempla alimentación con balanceados comerciales específicos por fase (iniciador, crecimiento, pre-postura y postura), con precios actualizados al mercado paraguayo 2025, ventilación de presión positiva y protocolos de bioseguridad.",
      keyPointTitle: "Conclusión ejecutiva",
      keyPointText: "Con los precios actuales de alimento comercial por gallina, el proyecto muestra que el costo por huevo se acerca al nivel de los precios de venta tradicionales del mercado. Por eso, el modelo se plantea en dos fases: una fase inicial de operación con alimento comercial (para aprender, ajustar y estabilizar la producción) y una fase de integración hacia atrás con formulación propia de raciones, que permite bajar de forma estructural el costo por huevo y volver el proyecto altamente rentable."
    },
    capex: {
      title: "Inversión Inicial (Gastos de Capital)",
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
      title: "Costos operativos anuales (OPEX) con sanidad real",
      subtitle: "Los costos operativos se calculan en base a precios actuales de balanceados por fase y a un esquema sanitario de 7 visitas por lote, con vacunas y vitaminas incluidas a razón de 500 Gs por pollito por visita.",
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
          category: "Sanidad (7 visitas x 500 Gs)", 
          amount: 126000000,
          details: [
            { name: "Costo/ave", value: "3.500 Gs" },
            { name: "Incluye", value: "Vacunas + Vitaminas" }
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
      unitMetricsTitle: "Indicadores unitarios actualizados",
      unitMetrics: {
        costPerBird: { label: "Costo alimento/ave", value: "≈ Gs 131.388" },
        opCostEgg: { label: "Costo alimento/huevo", value: "≈ Gs 313" },
        totalCostEgg: { label: "Costo op. total/huevo", value: "≈ Gs 335" },
        annualProd: { label: "Producción Estimada", value: "15.120.000 un." }
      },
      note: "Nota: El costo sanitario de 3.500 Gs/ave permite proteger el plantel sin presionar significativamente el costo unitario."
    },
    scenarios: {
      title: "Escenarios de precio y rentabilidad (con OPEX real actualizado)",
      subtitle: "Rentabilidad calculada con costo operativo anual total de Gs 5.071.968.000 (incluye sanidad real).",
      items: [
        { name: "Conservador", price: 400, utility: 976032000, roi: "≈ 48 %", payback: "25 meses", type: 'conservative' },
        { name: "Realista", price: 500, utility: 2488032000, roi: "≈ 122 %", payback: "9,8 meses", type: 'realistic' },
        { name: "Optimista", price: 650, utility: 4756032000, roi: "≈ 233 %", payback: "5,1 meses", type: 'optimistic' }
      ],
      labels: {
        scenario: "Escenario",
        price: "Precio Huevo",
        payback: "Payback",
        annualUtility: "Utilidad Anual",
        roi: "ROI"
      },
      interpretation: {
        title: "Lectura financiera para el inversor",
        text: "Con un costo operativo total aproximado de 335 Gs por huevo, el punto de equilibrio del proyecto se sitúa ligeramente por encima de este valor. A partir de 400 Gs por huevo, el negocio ya genera utilidad positiva.",
        bullets: [
          "A 400 Gs/huevo, el proyecto es rentable con un retorno más lento (≈ 2 años).",
          "A 500 Gs/huevo, la inversión se recupera en menos de 10 meses.",
          "A 650 Gs/huevo, el payback se aproxima a 5 meses, con un ROI muy agresivo."
        ],
        conclusion: "Estos escenarios confirman que el proyecto mantiene rentabilidad incluso bajo precios conservadores y se vuelve extraordinariamente atractivo en contextos normales y altos de mercado."
      }
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
            "Reducción potencial de custo: 25% - 30%.",
            "Ahorro anual estimado: Gs 1.200 - 1.400 millones."
          ]
        }
      ],
      recommendationTitle: "Estrategia Recomendada",
      recommendationText: "Arrancar con balanceado comercial para minimizar el riesgo operativo inicial, y utilizar los datos reales para diseñar una transición controlada hacia formulación propia."
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
          value: "5 a 25 meses",
          subtext: "Conforme preço de venda"
        },
        {
          label: "ROI anual projetado",
          value: "48 % – 233 %",
          subtext: "Com custos atuais de ração"
        }
      ]
    },
    summary: {
      title: "Resumo Executivo",
      text: "O projeto “Ovos de Granja” consiste na implantação de três galpões de 125 m x 12 m cada, para alojar um total de 36.000 poedeiras Hi-Line Brown. O design contempla alimentação com rações comerciais específicas por fase (inicial, crescimento, pré-postura e postura), com preços atualizados ao mercado paraguaio 2025.",
      keyPointTitle: "Conclusão executiva",
      keyPointText: "Com os preços atuais de ração comercial por galinha, o projeto mostra que o custo por ovo se aproxima do nível dos preços de venda tradicionais do mercado. Por isso, o modelo é planejado em duas fases: uma fase inicial de operação com ração comercial (para aprender, ajustar e estabilizar a produção) e uma fase de integração para trás com formulação própria de rações, que permite baixar de forma estrutural o custo por ovo e tornar o projeto altamente rentável."
    },
    capex: {
      title: "Investimento Inicial (Despesas de Capital)",
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
      title: "Custos operacionais anuais (OPEX) com sanidade real",
      subtitle: "Os custos operacionais são calculados com base em preços atuais de rações por fase e um esquema sanitário de 7 visitas por lote, com vacinas e vitaminas incluídas a razão de 500 Gs por pintinho por visita.",
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
          category: "Sanidade (7 visitas x 500 Gs)", 
          amount: 126000000,
          details: [
            { name: "Custo/ave", value: "3.500 Gs" },
            { name: "Inclui", value: "Vacinas + Vitaminas" }
          ]
        },
        { 
          category: "Mão de obra (6 pessoas)", 
          amount: 216000000,
          details: [
            { name: "Equipe", value: "6 Operários" },
            { name: "Encargos sociais", value: "Incluídos" }
          ]
        }
      ],
      unitMetricsTitle: "Indicadores unitários atualizados",
      unitMetrics: {
        costPerBird: { label: "Custo ração/ave", value: "≈ Gs 131.388" },
        opCostEgg: { label: "Custo ração/ovo", value: "≈ Gs 313" },
        totalCostEgg: { label: "Custo op. total/ovo", value: "≈ Gs 335" },
        annualProd: { label: "Produção Estimada", value: "15.120.000 un." }
      },
      note: "Nota: O custo sanitário de 3.500 Gs/ave permite proteger o plantel sem pressionar significativamente o custo unitário."
    },
    scenarios: {
      title: "Cenários de preço e rentabilidade (com OPEX real atualizado)",
      subtitle: "Rentabilidade calculada com custo operacional anual total de Gs 5.071.968.000 (inclui sanidade real).",
      items: [
        { name: "Conservador", price: 400, utility: 976032000, roi: "≈ 48 %", payback: "25 meses", type: 'conservative' },
        { name: "Realista", price: 500, utility: 2488032000, roi: "≈ 122 %", payback: "9,8 meses", type: 'realistic' },
        { name: "Otimista", price: 650, utility: 4756032000, roi: "≈ 233 %", payback: "5,1 meses", type: 'optimistic' }
      ],
      labels: {
        scenario: "Cenário",
        price: "Preço Ovo",
        payback: "Payback",
        annualUtility: "Lucro Anual",
        roi: "ROI"
      },
      interpretation: {
        title: "Leitura financeira para o investidor",
        text: "Com um custo operacional total aproximado de 335 Gs por ovo, o ponto de equilíbrio do projeto situa-se ligeiramente acima deste valor. A partir de 400 Gs por ovo, o negócio já gera lucro positivo.",
        bullets: [
          "A 400 Gs/ovo, o projeto é rentável com um retorno mais lento (≈ 2 anos).",
          "A 500 Gs/ovo, o investimento é recuperado em menos de 10 meses.",
          "A 650 Gs/ovo, o payback aproxima-se de 5 meses, com um ROI muito agressivo."
        ],
        conclusion: "Estes cenários confirmam que o projeto mantém rentabilidade mesmo sob preços conservadores e torna-se extraordinariamente atrativo em contextos normais e altos de mercado."
      }
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
      recommendationTitle: "Estratégia Recomendada",
      recommendationText: "Iniciar com ração comercial para minimizar o risco operacional inicial, e utilizar os dados reais para desenhar uma transição controlada para formulação própria."
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
