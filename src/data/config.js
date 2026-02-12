// Configuracion general del Sifrah Algorithm
// Textos, mensajes, secciones y configuracion de UI

// ============================================================================
// BRAND CONFIGURATION - Configuracion de marca Sifrah
// ============================================================================
export const BRAND_CONFIG = {
  name: 'Sifrah Algorithm',
  tagline: 'Inteligencia de Mercado - Accesorios & Bisuteria',
  subtitle: 'Optimizacion automatica de inversion digital en awareness, ecommerce y retail',
  product: 'Bisuteria y Accesorios 2026',
  market: 'Peru Nacional (+90 tiendas)',
  client: 'Sifrah Peru',
  version: '1.0.0',
  slogan: 'Brilla con Luz Propia',
  founded: 2016,
};

// ============================================================================
// LAYER TITLES - Titulos y descripciones de las 4 capas
// ============================================================================
export const LAYER_CONFIG = {
  data: {
    id: 'data',
    name: 'Captura de Senales',
    subtitle: 'Monitoreo en tiempo real del ecosistema digital de moda y accesorios',
    description: 'Busqueda, Tendencia, Intencion, Engagement',
    icon: 'Search',
    color: 'from-sifrah-pink to-sifrah-darkPink',
  },
  decision: {
    id: 'decision',
    name: 'Inteligencia de Mercado',
    subtitle: 'Insights automaticos para optimizar inversion en awareness y ventas',
    description: 'Analisis y definicion de estrategia',
    icon: 'Target',
    color: 'from-sifrah-darkPink to-sifrah-cyan',
  },
  execution: {
    id: 'execution',
    name: 'Activacion Estrategica',
    subtitle: 'Distribucion inteligente de presupuesto y contenidos',
    description: 'Implementacion en tiempo real',
    icon: 'Zap',
    color: 'from-sifrah-cyan to-sifrah-emerald',
  },
  optimization: {
    id: 'optimization',
    name: 'Performance & Optimizacion',
    subtitle: 'Resultados en tiempo real y ajustes automaticos',
    description: 'Evaluacion y redistribucion',
    icon: 'TrendingUp',
    color: 'from-sifrah-emerald to-sifrah-pink',
  },
};

// ============================================================================
// KEY MESSAGES - Mensajes clave de comunicacion Sifrah
// ============================================================================
export const KEY_MESSAGES = {
  brilla: {
    title: 'Brilla con Luz Propia',
    message: 'Accesorios que potencian tu estilo unico y personal',
    description: 'Bisuteria moderna y versatil para cada momento',
  },
  tendencia: {
    title: 'Siempre a la Moda',
    message: '+6,000 productos nuevos al ano, tendencias globales',
    description: 'Colecciones que se renuevan constantemente',
  },
  accesible: {
    title: 'Moda Accesible',
    message: 'Ticket promedio S/50, accesorios para todos los estilos',
    description: 'Calidad y diseno a precios justos',
  },
  experiencia: {
    title: 'Experiencia de Compra',
    message: '+90 tiendas en todo el Peru y tienda online',
    description: 'Omnicanalidad: tienda fisica, ecommerce y marketplaces',
  },
  comunidad: {
    title: 'Comunidad Sifrah',
    message: 'Creada por mujeres, para mujeres que brillan',
    description: 'Una marca peruana con 10 anos de historia',
  },
};

// ============================================================================
// DATA SOURCES - Configuracion de fuentes de datos
// ============================================================================
export const DATA_SOURCES_CONFIG = {
  googleTrends: {
    enabled: true,
    name: 'Google Trends',
    description: 'Tendencias de busqueda de bisuteria y accesorios en tiempo real',
    icon: 'TrendingUp',
    color: 'text-sifrah-cyan',
    bgColor: 'bg-sifrah-lightGray',
    region: 'PE',
    category: 'Fashion & Accessories',
    interval: 'hourly',
    status: 'active',
    geo: ['Lima', 'Arequipa', 'Trujillo', 'Piura'],
  },
  tiktok: {
    enabled: true,
    name: 'TikTok',
    description: 'Contenido viral de moda, accesorios y tendencias',
    icon: 'Video',
    color: 'text-sifrah-pink',
    bgColor: 'bg-sifrah-lightGray',
    scraping: 'public',
    status: 'active',
  },
  meta: {
    enabled: true,
    name: 'Meta Platforms',
    description: 'Facebook e Instagram insights de moda y accesorios',
    icon: 'Share2',
    color: 'text-sifrah-cyan',
    bgColor: 'bg-sifrah-lightGray',
    platforms: ['Facebook', 'Instagram'],
    status: 'active',
  },
  youtube: {
    enabled: true,
    name: 'YouTube',
    description: 'Videos de styling, lookbooks y tendencias de accesorios',
    icon: 'Youtube',
    color: 'text-sifrah-pink',
    bgColor: 'bg-sifrah-lightGray',
    status: 'active',
  },
  moda: {
    enabled: true,
    name: 'Portales de Moda',
    description: 'Peru Retail, Gestion, Fashion Network, portales especializados',
    icon: 'Globe',
    color: 'text-sifrah-emerald',
    bgColor: 'bg-sifrah-lightGray',
    sources: ['Peru Retail', 'Fashion Network', 'Gestion'],
    status: 'active',
  },
  ga4: {
    enabled: false,
    name: 'Google Analytics 4',
    description: 'Trafico web y conversiones ecommerce',
    icon: 'BarChart3',
    color: 'text-sifrah-pink',
    bgColor: 'bg-sifrah-lightGray',
    mock_data: true,
    status: 'active',
  },
};

// ============================================================================
// CHANNELS - Canales de activacion
// ============================================================================
export const CHANNELS_CONFIG = {
  meta_ads: {
    name: 'Meta Ads',
    icon: 'Share2',
    color: 'text-sifrah-cyan',
    bgColor: 'bg-sifrah-lightGray',
    primary_kpi: 'Awareness + Ventas Ecommerce',
    description: 'Instagram y Facebook Ads',
    subchannels: ['Awareness Ads', 'Catalog Sales', 'Traffic to sifrah.com'],
  },
  google_search: {
    name: 'Google Search',
    icon: 'Search',
    color: 'text-sifrah-emerald',
    bgColor: 'bg-sifrah-lightGray',
    primary_kpi: 'Conversiones Ecommerce',
    description: 'Campanas Brand, Generic, Competitor',
  },
  google_display: {
    name: 'Google Display',
    icon: 'Monitor',
    color: 'text-sifrah-pink',
    bgColor: 'bg-sifrah-lightGray',
    primary_kpi: 'Awareness + Remarketing',
    description: 'Red de display de Google',
  },
  tiktok_ads: {
    name: 'TikTok Ads',
    icon: 'Video',
    color: 'text-sifrah-pink',
    bgColor: 'bg-sifrah-lightGray',
    primary_kpi: 'Awareness + Engagement Jovenes',
    description: 'In-Feed y TopView ads',
  },
  influencers: {
    name: 'Influencers',
    icon: 'Users',
    color: 'text-sifrah-gold',
    bgColor: 'bg-sifrah-lightGray',
    primary_kpi: 'UGC + Brand Awareness',
    description: 'Micro y macro influencers de moda',
  },
};

// ============================================================================
// TIENDAS - Ubicaciones Sifrah (representativas)
// ============================================================================
export const SEDES_CONFIG = [
  { id: 1, name: 'Sifrah Jockey Plaza', ciudad: 'Lima', region: 'Lima', type: 'Flagship' },
  { id: 2, name: 'Sifrah Real Plaza Salaverry', ciudad: 'Lima', region: 'Lima', type: 'Mall' },
  { id: 3, name: 'Sifrah Mega Plaza', ciudad: 'Lima', region: 'Lima Norte', type: 'Mall' },
  { id: 4, name: 'Sifrah Mall Aventura SJL', ciudad: 'Lima', region: 'Lima Este', type: 'Mall' },
  { id: 5, name: 'Sifrah Plaza Norte', ciudad: 'Lima', region: 'Lima Norte', type: 'Mall' },
  { id: 6, name: 'Sifrah Mall del Sur', ciudad: 'Lima', region: 'Lima Sur', type: 'Mall' },
  { id: 7, name: 'Sifrah Real Plaza Arequipa', ciudad: 'Arequipa', region: 'Arequipa', type: 'Regional' },
  { id: 8, name: 'Sifrah Real Plaza Trujillo', ciudad: 'Trujillo', region: 'La Libertad', type: 'Regional' },
  { id: 9, name: 'Sifrah Open Plaza Piura', ciudad: 'Piura', region: 'Piura', type: 'Regional' },
  { id: 10, name: 'Sifrah Real Plaza Chiclayo', ciudad: 'Chiclayo', region: 'Lambayeque', type: 'Regional' },
  { id: 11, name: 'Sifrah Real Plaza Cusco', ciudad: 'Cusco', region: 'Cusco', type: 'Regional' },
  { id: 12, name: 'Sifrah Real Plaza Huancayo', ciudad: 'Huancayo', region: 'Junin', type: 'Regional' },
];

// ============================================================================
// AUDIENCES - Audiencias objetivo
// ============================================================================
export const TARGET_AUDIENCES = [
  {
    id: 'jovenes_trendy',
    name: 'Jovenes Trendy',
    description: '18-25 anos, universitarias y primer trabajo',
    size: '~120,000',
    age_range: '18-25',
    priority: 'high',
    segments: [
      {
        name: 'Universitarias',
        size: '~70,000',
        age: '18-22',
        characteristics: ['Alto engagement redes', 'Sensibles al precio', 'Siguen tendencias TikTok'],
      },
      {
        name: 'Primer Empleo',
        size: '~50,000',
        age: '23-25',
        characteristics: ['Primer sueldo', 'Buscan accesorios para oficina', 'Compran por impulso'],
      },
    ],
    interests: ['Moda', 'TikTok trends', 'Outfits del dia', 'Bisuteria trendy'],
    message: 'Accesorios que brillan como tu: encuentra tu estilo desde S/15',
    channels: {
      'Meta Ads': 35,
      'TikTok Ads': 30,
      'Google Search': 20,
      'Influencers': 15,
    },
    engagement_rate: 16.2,
    objectives: ['awareness', 'ecommerce'],
  },
  {
    id: 'profesionales_estilo',
    name: 'Profesionales con Estilo',
    description: '26-35 anos, profesionales y emprendedoras',
    size: '~80,000',
    age_range: '26-35',
    priority: 'high',
    segments: [
      {
        name: 'Ejecutivas',
        size: '~45,000',
        age: '26-32',
        characteristics: ['Buscan elegancia', 'Compran online', 'Valoran calidad'],
      },
      {
        name: 'Emprendedoras',
        size: '~35,000',
        age: '30-35',
        characteristics: ['Imagen profesional', 'Regalos corporativos', 'Mayor ticket'],
      },
    ],
    interests: ['Bisuteria fina', 'Carteras', 'Accesorios premium', 'Look profesional'],
    message: 'Eleva tu look profesional con accesorios que hablan de ti',
    channels: {
      'Meta Ads': 40,
      'Google Search': 30,
      'Google Display': 20,
      'Influencers': 10,
    },
    engagement_rate: 11.5,
    objectives: ['ecommerce', 'retail'],
  },
  {
    id: 'madres_regalo',
    name: 'Madres & Regaladoras',
    description: '35-45 anos, madres y compradoras de regalos',
    size: '~55,000',
    age_range: '35-45',
    priority: 'medium',
    segments: [
      {
        name: 'Madres Modernas',
        size: '~30,000',
        age: '35-40',
        characteristics: ['Compran para si mismas e hijas', 'Buscan variedad', 'Valoran tienda fisica'],
      },
      {
        name: 'Compradoras de Regalos',
        size: '~25,000',
        age: '38-45',
        characteristics: ['Fechas especiales', 'Sets y packs', 'Fidelidad de marca'],
      },
    ],
    interests: ['Regalos', 'Moda madre-hija', 'Accesorios clasicos', 'Ofertas especiales'],
    message: 'El regalo perfecto que brilla: accesorios para cada momento especial',
    channels: {
      'Meta Ads': 45,
      'Google Search': 30,
      'Google Display': 15,
      'Influencers': 10,
    },
    engagement_rate: 8.9,
    objectives: ['retail', 'awareness'],
  },
];

// ============================================================================
// TIMING - Mejores momentos para pauta
// ============================================================================
export const OPTIMAL_TIMING = {
  dayparts: [
    { name: 'Manana', hours: '8:00 - 12:00', performance: 'high', multiplier: 1.3, audience: 'Profesionales' },
    { name: 'Almuerzo', hours: '12:00 - 14:00', performance: 'very_high', multiplier: 1.5, audience: 'Oficinistas' },
    { name: 'Tarde', hours: '14:00 - 18:00', performance: 'medium', multiplier: 1.1, audience: 'Universitarias' },
    { name: 'Noche', hours: '20:00 - 23:00', performance: 'very_high', multiplier: 1.6, audience: 'Todas' },
  ],
  weekdays: [
    { name: 'Lunes', performance: 'medium', recommended: true, note: 'Inicio de semana, browsing' },
    { name: 'Martes', performance: 'medium', recommended: true, note: 'Busqueda activa' },
    { name: 'Miercoles', performance: 'high', recommended: true, note: 'Mitad de semana, compras online' },
    { name: 'Jueves', performance: 'high', recommended: true, note: 'Pre-fin de semana' },
    { name: 'Viernes', performance: 'very_high', recommended: true, note: 'Pago quincenal, compras mall' },
    { name: 'Sabado', performance: 'very_high', recommended: true, note: 'Dia de compras en tienda' },
    { name: 'Domingo', performance: 'high', recommended: true, note: 'Shopping mall familiar' },
  ],
  seasonality: [
    { month: 'Enero', demand: 'medium', note: 'Post-fiestas, liquidaciones' },
    { month: 'Febrero', demand: 'very_high', note: 'San Valentin, regalos' },
    { month: 'Marzo', demand: 'high', note: 'Vuelta a clases, accesorios' },
    { month: 'Abril', demand: 'medium', note: 'Semana Santa' },
    { month: 'Mayo', demand: 'very_high', note: 'Dia de la Madre' },
    { month: 'Junio', demand: 'medium', note: 'Dia del Padre (regalos)' },
    { month: 'Julio', demand: 'very_high', note: 'Fiestas Patrias, liquidaciones' },
    { month: 'Agosto-Sept', demand: 'medium', note: 'Primavera, nueva coleccion' },
    { month: 'Octubre', demand: 'high', note: 'Halloween, accesorios tematicos' },
    { month: 'Nov-Dic', demand: 'very_high', note: 'Black Friday, Navidad, regalos' },
  ],
};

// ============================================================================
// PRODUCTOS - Lineas de producto monitoreadas
// ============================================================================
export const SERVICIOS_CONFIG = [
  { id: 1, nombre: 'Bisuteria', revenue_pct: 45, avg_ticket: 35, conversion: 12 },
  { id: 2, nombre: 'Carteras y Billeteras', revenue_pct: 20, avg_ticket: 65, conversion: 8 },
  { id: 3, nombre: 'Accesorios para Cabello', revenue_pct: 12, avg_ticket: 20, conversion: 15 },
  { id: 4, nombre: 'Pashminas y Bufandas', revenue_pct: 8, avg_ticket: 45, conversion: 7 },
  { id: 5, nombre: 'Lentes y Gafas', revenue_pct: 8, avg_ticket: 40, conversion: 9 },
  { id: 6, nombre: 'Belleza y Cuidado', revenue_pct: 7, avg_ticket: 30, conversion: 11 },
];

// ============================================================================
// METRIC CARDS - Configuracion de tarjetas metricas principales
// ============================================================================
export const METRIC_CARDS_CONFIG = [
  {
    id: 'alcance',
    title: 'Alcance Total',
    description: 'Usuarios unicos impactados a nivel nacional',
    icon: 'Eye',
    color: 'sifrah-pink',
    gradient: 'from-sifrah-pink to-sifrah-darkPink',
  },
  {
    id: 'ventas_ecommerce',
    title: 'Ventas Ecommerce',
    description: 'Conversiones en sifrah.com y marketplaces',
    icon: 'ShoppingCart',
    color: 'sifrah-emerald',
    gradient: 'from-sifrah-emerald to-sifrah-green',
  },
  {
    id: 'interacciones',
    title: 'Interacciones',
    description: 'Likes, shares, comentarios, saves',
    icon: 'Heart',
    color: 'sifrah-cyan',
    gradient: 'from-sifrah-cyan to-sifrah-electric',
  },
  {
    id: 'opportunity',
    title: 'Sifrah Opportunity Score',
    description: 'Indice de oportunidad de inversion en moda y accesorios',
    icon: 'Zap',
    color: 'sifrah-gold',
    gradient: 'from-sifrah-gold to-sifrah-amber',
  },
];

// ============================================================================
// CRM INTEGRATION - Configuracion de alertas
// ============================================================================
export const CRM_CONFIG = {
  enabled: false,
  api_key: null,
  objectives: {
    awareness: {
      metrics: ['alcance', 'impresiones', 'frecuencia', 'CPM', 'CPM_alcance'],
      kpi_primary: 'alcance',
    },
    ecommerce: {
      metrics: ['alcance', 'interacciones', 'reproducciones', 'trafico', 'inversion', 'frecuencia', 'CPM', 'CPM_alcance', 'conversiones', 'CPA'],
      kpi_primary: 'conversiones',
    },
    retail: {
      metrics: ['alcance', 'impresiones'],
      kpi_primary: 'alcance',
    },
  },
  cpa_thresholds: {
    ecommerce: {
      cpa_target: 4,
      cpa_alert: 6,
      cpa_pause: 8,
    },
  },
  conversion_tracking: {
    ecommerce_purchases: true,
    add_to_cart: true,
    website_traffic: true,
    store_visits: false,
  },
  alerts: {
    email: true,
    webhook: false,
    dashboard: true,
  },
};

// ============================================================================
// UI TEXT - Textos de interfaz
// ============================================================================
export const UI_TEXT = {
  loading: 'Cargando Sifrah Algorithm...',
  lastUpdate: 'Ultima actualizacion',
  systemActive: 'Sistema activo',
  noData: 'No hay datos disponibles',
  error: 'Error al cargar datos',
  retry: 'Reintentar',

  footer: {
    copyright: '2026 Sifrah Algorithm - Brilla con Luz Propia',
    version: 'v1.0.0',
  },

  buttons: {
    viewDetails: 'Ver detalles',
    export: 'Exportar',
    refresh: 'Actualizar',
    filter: 'Filtrar',
    expandAll: 'Mostrar todas las lineas de producto',
    collapseAll: 'Mostrar solo top 5',
  },
};

// ============================================================================
// EXPORT ALL
// ============================================================================
export default {
  BRAND_CONFIG,
  LAYER_CONFIG,
  KEY_MESSAGES,
  DATA_SOURCES_CONFIG,
  CHANNELS_CONFIG,
  SEDES_CONFIG,
  TARGET_AUDIENCES,
  OPTIMAL_TIMING,
  SERVICIOS_CONFIG,
  METRIC_CARDS_CONFIG,
  CRM_CONFIG,
  UI_TEXT,
};
