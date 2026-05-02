export const PORTFOLIO_DATA = {
  personal: {
    name: "Alberto García",
    role: "FullStack Developer & SRE Engineer",
    email: "garcia.simo86@gmail.com",
    phone: "678951544",
    location: "Almenara, Castellón",
    linkedin: "https://www.linkedin.com/in/alberto-miguel-garcia-simo",
  },
  
  about: "Ingeniero de Software y especialista en Observabilidad con una sólida trayectoria en el sector tecnológico. Combino mi experiencia en desarrollo FullStack (React, Angular, SpringBoot, Node.js) con un profundo conocimiento en infraestructura y monitorización avanzada (ELK Stack, Opentelemetry, Zabbix, Dynatrace). Me especializo en construir soluciones escalables, optimizar el rendimiento en entornos de alta disponibilidad y liderar la resolución de problemas complejos. Metódico, exigente con la calidad del código y firmemente comprometido con las buenas prácticas y la automatización.",
  
  skills: {
    frontend: ["JavaScript", "TypeScript", "Angular", "React", "Tailwind CSS", "Next.js"],
    backend: ["Java", "SpringBoot", "Node.js", "Arquitectura API REST"],
    database: ["MySQL", "MongoDB", "PostgreSQL"],
    tools: ["Docker", "Kubernetes", "ELK Stack", "Dynatrace", "Zabbix", "Prometheus", "Grafana", "OpenTelemetry", "GitLab CI/CD", "AWX/Spinnaker", "ServiceNow", "Jira/Confluence"]
  },
  
  experience: [
    {
      id: 1,
      title: "Técnico de Observabilidad",
      company: "Mercadona SA",
      date: "Nov 2024 - Presente",
      description: "Especialista en observabilidad gestionando Logging y Metrics con OpenTelemetry y ELK Stack. Administrador de Zabbix y creación de paneles analíticos avanzados con Grafana y Prometheus. Gestión de despliegues automatizados mediante AWX y Spinnaker. Integración y gestión operativa con ServiceNow, GitLab y la suite Atlassian (Jira y Confluence) para el control del ciclo de vida del software.",
    },
    {
      id: 2,
      title: "Técnico de Operaciones",
      company: "Mercadona SA",
      date: "Ene 2021 - Oct 2024",
      description: "Supervisión 24x7 de infraestructura de alta disponibilidad. Monitorización avanzada (OMI, Dynatrace, Kibana, Grafana) y ejecución de intervenciones en entornos Cloud (GCP, OCP) y SAP. Gestión y resolución de incidencias críticas.",
    },
    {
      id: 3,
      title: "Técnico Informático",
      company: "Pescados de Playa S.L.",
      date: "2015 - 2018",
      description: "Soporte integral a planta de producción, digitalización de procesos logísticos mediante hardware especializado y diseño de arquitectura web corporativa.",
    },
    {
      id: 4,
      title: "Técnico Informático (Prácticas)",
      company: "Levante EMV",
      date: "2015",
      description: "Soporte a usuarios, mantenimiento de equipos y gestión de incidencias de red en la redacción del periódico.",
    },
    {
      id: 5,
      title: "Técnico Informático (Prácticas)",
      company: "Ajuntament Alberic",
      date: "2015",
      description: "Soporte HelpDesk en entornos Windows/Linux, virtualización, administración básica de redes y mantenimiento del hosting web municipal.",
    }
  ],
  
  education: [
    {
      id: 1,
      title: "CFGS - Desarrollo Aplicaciones Web FullStack",
      institution: "UNIR FP",
      date: "2023 - 2025"
    },
    {
      id: 2,
      title: "Grado en Informática de Gestión",
      institution: "Universidad Politécnica de Valencia",
      date: "2015 - Pendiente"
    }
  ],

  certifications: [
    {
      id: 1,
      title: "DevOps Integral: Docker, Kubernetes, Jenkins, GitFlow CI/CD, Linux LPI",
      issuer: "Udemy",
      date: "En curso"
    },
    {
      id: 2,
      title: "Linux LPI",
      issuer: "Udemy",
      date: "En curso"
    },
    {
      id: 3,
      title: "B1 APTIS Inglés",
      issuer: "British Council",
      date: "Diciembre 2025"
    },
    {
      id: 4,
      title: "OpenTelemetry: Instrumentation for applications - LFS148",
      issuer: "Udemy",
      date: "2024"
    },
    {
      id: 5,
      title: "Mastering ElasticStack (ELK) e Introducción a la Observabilidad",
      issuer: "Udemy",
      date: "2024"
    },
    {
      id: 6,
      title: "Especialización en Docker y Kubernetes",
      issuer: "Udemy",
      date: "2024"
    }
  ],

  projects: [
    {
      id: 1,
      title: "Lógica Fit",
      category: "Arquitectura FullStack",
      description: "Aplicación web de entrenamiento personal, running y nutrición. Un proyecto nacido de mi pasión por el fitness y la programación.",
      image: "/img/p3.jpg",
      tags: ["React", "TypeScript", "PostgreSQL"],
      demoUrl: "https://logicafit.com"
    },
    {
      id: 2,
      title: "Lógica Fit Android",
      category: "Arquitectura Android",
      description: "Aplicación móvil nativa para Android del ecosistema Lógica Fit, diseñada para llevar el seguimiento deportivo a cualquier lugar.",
      image: "/img/p1.jpg",
      tags: ["Android Studio", "Mobile"],
      demoUrl: "https://drive.google.com/file/d/1ToeyyC_UvlAMg5Ry9jP9ohT1CZ6nX3vW/view?usp=drive_link"
    },
    {
      id: 3,
      title: "OrtoZen",
      category: "E-commerce",
      description: "Plataforma integral de venta de material ortopédico, que incluye un completo sistema interno para la gestión de administración y contabilidad.",
      image: "/img/p2.jpg",
      tags: ["React", "Vite", "TypeScript", "PostgreSQL"],
      demoUrl: "https://ortozen.netlify.app/"
    }
  ]
};