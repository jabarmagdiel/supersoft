export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  deliverables: string[];
  techStack: string[];
  highlight: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  focus: string;
  activities: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  clientType: string;
  image: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  isDemo: boolean;
}

export const BRAND_DATA = {
  name: "SuperSoft",
  descriptor: "Software Company",
  slogan: "Transformamos ideas en soluciones digitales.",
  tagline: "Páginas web, sistemas ERP y software a medida construidos con Laravel y tecnologías modernas.",
  valueProposition:
    "Desarrollamos tecnología práctica y de alto impacto: landing pages comerciales, sistemas ERP y CRM a medida, y automatizaciones diseñadas exactamente para las necesidades de tu negocio.",
  contactEmail: "contacto@supersoft.com.bo",
  phone: "+591 70000000",
  whatsappNumber: "59170000000",
  location: "Bolivia · Proyección Internacional",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "paginas-web-landing",
    number: "01",
    title: "Páginas Web y Landing Pages",
    description:
      "Diseñamos y desarrollamos sitios web y landing pages de alto impacto, enfocadas en captar clientes, posicionar tu marca en Google y convertir visitantes en ventas.",
    image: "/assets/images/service-web.jpg",
    deliverables: [
      "Diseño moderno y 100% adaptable a celulares",
      "Optimización SEO para destacar en Google",
      "Botón directo a WhatsApp y formularios de contacto",
      "Carga ultra rápida y panel autoadministrable",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "SEO", "Analytics"],
    highlight: "Sitios atractivos que no solo se ven profesionales, sino que generan consultas y ventas reales todos los días.",
  },
  {
    id: "sistemas-erp",
    number: "02",
    title: "Sistemas ERP a Medida (Laravel)",
    description:
      "Centraliza y toma el control total de tu empresa: gestión de inventarios, compras, ventas, facturación y caja chica en una plataforma segura y accesible desde cualquier lugar.",
    image: "/assets/images/service-enterprise.jpg",
    deliverables: [
      "Control de stock y multi-sucursales en tiempo real",
      "Punto de venta (POS) y emisión de comprobantes",
      "Cierres de caja y reportes de rentabilidad",
      "Roles, permisos y auditoría de usuarios",
    ],
    techStack: ["Laravel 11", "MySQL", "Livewire / React", "Tailwind CSS"],
    highlight: "Dile adiós al caos de hojas de cálculo desactualizadas y mantén tu inventario y finanzas siempre al día.",
  },
  {
    id: "sistemas-crm",
    number: "03",
    title: "Sistemas CRM y Gestión de Clientes",
    description:
      "Organiza a tu equipo comercial con un CRM diseñado a la medida de tu proceso de ventas. Haz seguimiento a prospectos, cotizaciones y clientes sin perder oportunidades.",
    image: "/assets/images/project-fintech.jpg",
    deliverables: [
      "Embudo de ventas visual (Pipeline tipo Kanban)",
      "Historial completo de clientes y conversaciones",
      "Generador de cotizaciones en PDF al instante",
      "Recordatorios de seguimiento y alertas de cierre",
    ],
    techStack: ["Laravel", "Vue / React", "MySQL", "PDF Generator"],
    highlight: "Aumenta la tasa de cierre de tu equipo comercial y ten claridad de cada cotización en curso.",
  },
  {
    id: "software-a-medida",
    number: "04",
    title: "Desarrollo de Software a Medida en Laravel",
    description:
      "Desarrollamos aplicaciones web personalizadas utilizando Laravel, el framework PHP líder mundial por su robustez, seguridad nativa y velocidad de desarrollo.",
    image: "/assets/images/service-software.jpg",
    deliverables: [
      "Arquitectura limpia con Laravel y Eloquent ORM",
      "Base de datos relacional MySQL optimizada",
      "Paneles de administración seguros y rápidos",
      "APIs RESTful para conectar con otras apps",
    ],
    techStack: ["Laravel 11", "PHP 8.3", "MySQL", "REST APIs", "Docker"],
    highlight: "Software que se adapta a las reglas únicas de tu empresa, y no tu empresa adaptándose a un software rígido.",
  },
  {
    id: "automatizacion-procesos",
    number: "05",
    title: "Automatización de Procesos y WhatsApp",
    description:
      "Elimina las tareas manuales y repetitivas. Conectamos tus sistemas con WhatsApp, facturación, bancos y correos para que tu operación funcione sin errores humanos.",
    image: "/assets/images/service-cloud.jpg",
    deliverables: [
      "Notificaciones automáticas de pedidos por WhatsApp",
      "Recordatorios automáticos de cobranza y vencimientos",
      "Sincronización automática entre sistemas y hojas de cálculo",
      "Reportes ejecutivos diarios enviados directo a tu celular",
    ],
    techStack: ["Laravel Queues", "WhatsApp Business API", "Webhooks", "Cron Jobs"],
    highlight: "Ahorra decenas de horas de trabajo administrativo y responde a tus clientes en segundos de forma automática.",
  },
  {
    id: "mantenimiento-soporte",
    number: "06",
    title: "Mantenimiento, Soporte y Evolución",
    description:
      "Acompañamos a tu empresa en todo momento. Ofrecemos soporte técnico continuo, copias de seguridad periódicas y mejoras para que tu software crezca junto a tu negocio.",
    image: "/assets/images/service-integration.jpg",
    deliverables: [
      "Copias de seguridad automáticas y monitoreo constante",
      "Actualizaciones de versiones y parches de seguridad",
      "Soporte directo ante dudas o incidencias técnicas",
      "Desarrollo ágil de nuevos requerimientos",
    ],
    techStack: ["Copias en la nube", "Monitoreo 24/7", "SSL & Seguridad", "Soporte Técnico"],
    highlight: "Tranquilidad total para tu empresa: un equipo de ingenieros respalda tus operaciones tecnológicas.",
  },
];

export const PILLARS_DATA = [
  {
    number: "01",
    title: "Especialistas en Laravel y Web",
    description:
      "Construimos con las tecnologías más confiables y respaldadas del mercado: Laravel, MySQL y React. Soluciones veloces, mantenibles y seguras.",
    detail: "Aprovechamos la madurez y potencia de Laravel para entregar software robusto en tiempos récord.",
  },
  {
    number: "02",
    title: "Soluciones a la Medida Real",
    description:
      "No imponemos plantillas enlatadas ni sistemas genéricos. Escuchamos cómo operas y desarrollamos la herramienta exacta que tu negocio necesita.",
    detail: "Mapeamos tus flujos de ventas, inventario y caja para crear una herramienta intuitiva que tu equipo sí usará.",
  },
  {
    number: "03",
    title: "Diseño Profesional y Claro",
    description:
      "Interfaces limpias, modernas y fáciles de utilizar tanto desde una computadora como desde un teléfono móvil.",
    detail: "Experiencias pensadas para que cualquier colaborador aprenda a usar el sistema en minutos, sin curvas frustrantes.",
  },
  {
    number: "04",
    title: "Soporte Cercano y Directo",
    description:
      "Trato humano y comunicación directa con los desarrolladores. Estamos a un mensaje de WhatsApp o llamada de distancia.",
    detail: "Sin intermediarios ni tickets de soporte interminables: comunicación ágil y resolución rápida.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Reunión de Diagnóstico",
    description: "Conversamos contigo para entender tu negocio, tus desafíos actuales y qué necesitas resolver.",
    focus: "Claridad total de necesidades y alcance",
    activities: [
      "Reunión inicial por videollamada o presencial",
      "Análisis de tus procesos y puntos de dolor",
      "Definición de funcionalidades clave",
      "Propuesta técnica y presupuesto transparente",
    ],
  },
  {
    step: "02",
    title: "Diseño y Prototipado",
    description: "Diseñamos las pantallas y definimos la estructura de la base de datos y flujos del sistema.",
    focus: "Validación visual antes de programar",
    activities: [
      "Diseño de interfaz claro y responsive",
      "Definición del modelo de datos en MySQL",
      "Aprobación conjunta de pantallas y flujos",
      "Plan de entregas por etapas",
    ],
  },
  {
    step: "03",
    title: "Desarrollo en Laravel & Web",
    description: "Programamos tu sistema o página web con código limpio, seguro y optimizado.",
    focus: "Construcción robusta y demostraciones continuas",
    activities: [
      "Desarrollo backend en Laravel 11",
      "Interfaces interactivas con React / Tailwind",
      "Integración de pasarelas, WhatsApp o APIs",
      "Avances visibles en servidores de prueba",
    ],
  },
  {
    step: "04",
    title: "Pruebas y Capacitación",
    description: "Probamos cada función junto a ti y capacitamos a tu equipo para un uso fluido.",
    focus: "Verificación rigurosa y entrenamiento del equipo",
    activities: [
      "Pruebas de pedidos, inventario y caja",
      "Capacitación guiada para administradores y cajeros",
      "Manuales y videos explicativos breves",
      "Ajustes finales de retroalimentación",
    ],
  },
  {
    step: "05",
    title: "Puesta en Marcha y Soporte",
    description: "Lanzamos tu sistema o web en producción y te acompañamos permanentemente.",
    focus: "Salida en vivo sin interrupciones y soporte continuo",
    activities: [
      "Despliegue en servidor seguro con SSL y backups",
      "Monitoreo inicial de operaciones reales",
      "Soporte directo para resolver cualquier duda",
      "Evolución y nuevas funciones cuando tu negocio lo pida",
    ],
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "sistema-erp-comercial",
    title: "Sistema ERP Comercial — Gestión de Stock, POS y Facturación",
    category: "Sistemas ERP (Laravel + MySQL)",
    clientType: "Sector Comercial & Distribución",
    image: "/assets/images/project-erp.jpg",
    problem:
      "Descuadres constantes de stock entre almacenes y sucursales, facturación manual lenta y falta de control diario de caja.",
    solution:
      "Sistema ERP a medida desarrollado en Laravel con punto de venta (POS) ágil, control multi-sucursal en tiempo real y módulo de facturación.",
    impact: "Control exacto del 100% de inventario, reducción del 80% en tiempo de facturación y reportes de ganancias al instante.",
    technologies: ["Laravel 11", "MySQL", "Livewire", "Tailwind CSS", "PDF"],
    metrics: [
      { label: "Control de Stock", value: "100%" },
      { label: "Tiempo Factura", value: "-80%" },
      { label: "Sucursales", value: "Multi-sede" },
    ],
    isDemo: false,
  },
  {
    id: "landing-page-corporativa",
    title: "Landing Page Corporativa & Posicionamiento en Google",
    category: "Páginas Web & Landing Pages",
    clientType: "Servicios Profesionales & Empresas",
    image: "/assets/images/service-web.jpg",
    problem:
      "Sitio web antiguo no adaptado a teléfonos móviles, con tiempos de carga excesivos y nula captación de nuevos clientes.",
    solution:
      "Diseño de landing page moderna de alto impacto, optimizada para SEO en Google, con llamada a la acción directa a WhatsApp y panel de administración.",
    impact: "+240% de incremento en consultas de clientes potenciales y calificación de 98/100 en Google PageSpeed.",
    technologies: ["Next.js", "React", "Tailwind CSS", "SEO", "WhatsApp API"],
    metrics: [
      { label: "Consultas Nuevas", value: "+240%" },
      { label: "PageSpeed Google", value: "98/100" },
      { label: "Carga en Celular", value: "<1 seg" },
    ],
    isDemo: false,
  },
  {
    id: "crm-ventas-whatsapp",
    title: "CRM de Ventas con Notificaciones y Cotizador WhatsApp",
    category: "Sistemas CRM & Automatización",
    clientType: "Agencia Comercial & Inmobiliaria",
    image: "/assets/images/project-fintech.jpg",
    problem:
      "Prospectos perdidos por falta de seguimiento comercial, cotizaciones hechas a mano en Word y demora de hasta 24 horas en responder.",
    solution:
      "CRM con embudo visual de prospectos, generador instantáneo de cotizaciones en PDF y envío automático con un clic por WhatsApp.",
    impact: "Aumento del 45% en cierres comerciales y cotizaciones enviadas en menos de 2 minutos durante la llamada del cliente.",
    technologies: ["Laravel", "Vue.js", "MySQL", "WhatsApp API", "PDF Generator"],
    metrics: [
      { label: "Tasa de Cierre", value: "+45%" },
      { label: "Tiempo Cotización", value: "2 min" },
      { label: "Seguimiento Leads", value: "100%" },
    ],
    isDemo: false,
  },
];
