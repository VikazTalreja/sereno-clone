export const useCases = [
  {
    id: 1,
    title: "AI-Driven Leak and Ignition Detection in Refineries",
    industry: "Oil & Gas",
    department: "Health, Safety & Environment (HSE), Operations",
    challenge: "Refineries are high-risk environments where undetected hydrocarbon leaks and ignition sources can lead to catastrophic fires and explosions. Traditional detection systems often fail to identify all potential hazards, especially in complex structures or due to human error.",
    solution: "Implement an AI-powered monitoring system that utilizes machine learning algorithms and computer vision to detect leaks, vapor clouds, ignition sources, and smoke in real-time. The system analyzes data from various sensors and cameras to identify anomalies and trigger immediate alerts, allowing for swift preventive actions.",
    technologiesUsed: [
      "Machine Learning for pattern recognition",
      "Computer Vision for visual monitoring",
      "Sensor data integration",
      "Real-time alerting systems"
    ],
    results: [
      "Enhanced safety by early detection of potential hazards",
      "Reduction in downtime and associated costs",
      "Compliance with safety regulations",
      "Protection of human life and environmental resources"
    ],
    deployment: "The system can be deployed on-premises within the refinery's existing infrastructure, ensuring data privacy and low latency. It integrates with current safety protocols and can be customized to specific site requirements.",
    color: "red",
    image: "/images/oil-gas.jpg",
    icons: ["chart-line", "cog", "microchip"]
  },
  {
    id: 2,
    title: "Demand Forecasting in Retail",
    industry: "Retail",
    department: "Supply Chain, Inventory Management",
    challenge: "Inaccurate demand forecasting leads to overstocking or stockouts, affecting sales and increasing holding costs. Traditional forecasting methods struggle with rapidly changing consumer behaviors.",
    solution: "Implement AI-driven demand forecasting models that analyze historical sales data, market trends, and external factors to predict future demand accurately. These models can adjust forecasts in real-time based on new data inputs.",
    technologiesUsed: [
      "Machine Learning for time series forecasting",
      "Data integration from multiple sources",
      "Visualization tools for decision support"
    ],
    results: [
      "Optimized inventory levels",
      "Reduced stockouts and overstock situations",
      "Improved customer satisfaction",
      "Increased sales and profitability"
    ],
    deployment: "The AI models can be integrated into the retailer's existing supply chain management systems, providing forecasts at various granularity levels (store, region, product category).",
        
  },
  {
    id: 3,
    title: "Dynamic Freight Pricing Intelligence for Export-Heavy Businesses",
    industry: "Steel, Cement, Agri Export, Oil & Gas",
    department: "Logistics & Sales",
    challenge: "Freight prices for containers and bulk change daily across ports. Sales teams lack visibility into optimal pricing windows and often make suboptimal pricing decisions due to outdated logistics inputs.",
    solution: "A dynamic pricing intelligence system that scrapes port prices, matches historical export margins, recommends shipping timing and pricing strategy, and integrates with customer negotiations.",
    technologiesUsed: [
      "Web scraping + LLMs",
      "pricing optimization algorithms",
      "deal history summarizers",
      "Salesforce integration"
    ],
    results: [
      "18–25% improvement in export deal margins",
      "Live pricing visibility for sales teams"
    ],
    deployment: "Cloud-native with data ingestion from port APIs and FTP feeds.",
    color: "purple",
    image: "/images/logistics.jpg",
    icons: ["truck", "chart-line", "globe"]
  },
  {
    id: 4,
    title: "Procurement Contract Intelligence & Negotiation Aid",
    industry: "Manufacturing / Construction / Energy",
    department: "Procurement & Legal",
    challenge: "Enterprises deal with thousands of suppliers and multi-year contracts with non-standard formats. Analyzing terms, obligations, risk clauses, and optimizing negotiations is slow and error-prone.",
    solution: "A GenAI-powered contract intelligence platform that reads contracts, highlights risks, benchmarks pricing, recommends negotiation levers, and generates comparative summaries with prior deals.",
    technologiesUsed: [
      "OCR + layout-aware LLMs",
      "retrieval-augmented generation (RAG)",
      "clause classification models",
      "token-level redline detection",
      "ERP integrations"
    ],
    results: [
      "35% faster contract review cycles",
      "12–18% cost reduction via improved negotiation",
      "Reduced legal overhead in multi-party contracts"
    ],
    deployment: "Cloud-native or private cloud; SAP/Oracle compatible.",

  },
  {
    id: 5,
    title: "Realtime Safety Incident Escalation via Knowledge Graphs",
    industry: "Oil & Gas",
    department: "HSE (Health, Safety, Environment)",
    challenge: "In large oil refineries and rigs, unstructured incident reports are often delayed, buried, or disconnected from historical near-miss records — increasing the likelihood of avoidable major incidents.",
    solution: "Sereno builds a real-time AI knowledge graph system that connects incident reports, safety manuals, past root-cause analyses, and sensor data. Whenever a new report is submitted, AI automatically relates it to known critical patterns and escalates immediately.",
    technologiesUsed: [
      "Temporal Knowledge Graphs",
      "NLP for unstructured incident logs",
      "Custom rule-learning AI on EHS protocols",
      "Integration with SAP HSE or internal safety systems"
    ],
    results: [
      "35% reduction in preventable safety escalations",
      "6x faster incident triage",
      "Better board reporting and compliance"
    ],
    deployment: "On-prem with optional mobile extension for field engineers.",
  }
];

// Original data format maintained for reference
// export const OriginaluseCases =[

//     usecase : 1,
//     "AI-Driven Leak and Ignition Detection in Refineries",
// 	"Industry": "Oil & Gas",
// 	"Department": "Health, Safety & Environment (HSE), Operations",
// 	"Problem Statement":
// "Refineries are high-risk environments where undetected hydrocarbon leaks and ignition sources can lead to catastrophic fires and explosions. Traditional detection systems often fail to identify all potential hazards, especially in complex structures or due to human error.",
// 	"Solution Summary":
// "Implement an AI-powered monitoring system that utilizes machine learning algorithms and computer vision to detect leaks, vapor clouds, ignition sources, and smoke in real-time. The system analyzes data from various sensors and cameras to identify anomalies and trigger immediate alerts, allowing for swift preventive actions.",
// 	"Technologies Used": [
// 	"Machine Learning for pattern recognition",
// 	"Computer Vision for visual monitoring",
// 	"Sensor data integration",
// 	"Real-time alerting systems"
//     ],
// 	"Business Outcomes": [
// 	"Enhanced safety by early detection of potential hazards",
// 	"Reduction in downtime and associated costs",
// 	"Compliance with safety regulations",
// 	"Protection of human life and environmental resources"
//     ],
// 	"Deployment":
// "The system can be deployed on-premises within the refinery's existing infrastructure, ensuring data privacy and low latency. It integrates with current safety protocols and can be customized to specific site requirements."
// ]