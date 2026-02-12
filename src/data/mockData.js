// Mock Data para Sifrah - Dashboard Demo Comercial
// Datos simulados realistas para cadena de bisuteria y accesorios en Peru

// ============================================================================
// MOCK GA4 DATA - Google Analytics 4 simulado
// ============================================================================
export const MOCK_GA4_DATA = {
  sessions: {
    total: 95200,
    new_users: 62400,
    returning: 32800,
    avg_session_duration: '4:15',
    pages_per_session: 5.8,
    bounce_rate: 35.2,
  },

  top_pages: [
    {
      page: '/collections/bisuteria',
      title: 'Bisuteria - Sifrah',
      views: 28500,
      bounce_rate: 22,
      avg_time: '5:10',
    },
    {
      page: '/collections/carteras',
      title: 'Carteras y Billeteras - Sifrah',
      views: 18200,
      bounce_rate: 28,
      avg_time: '4:35',
    },
    {
      page: '/collections/nuevos',
      title: 'Nuevos Ingresos - Sifrah',
      views: 22600,
      bounce_rate: 20,
      avg_time: '4:48',
    },
    {
      page: '/collections/sale',
      title: 'Sale - Ofertas Sifrah',
      views: 15800,
      bounce_rate: 18,
      avg_time: '3:55',
    },
    {
      page: '/pages/nuestras-tiendas',
      title: 'Nuestras Tiendas - Sifrah',
      views: 9200,
      bounce_rate: 32,
      avg_time: '2:40',
    },
  ],

  conversions: {
    ecommerce_purchases: 1240,
    add_to_cart: 4850,
    begin_checkout: 2680,
    newsletter_signups: 1850,
    store_locator_clicks: 3200,
    whatsapp_clicks: 2100,
  },

  traffic_sources: {
    organic_search: { percentage: 22, sessions: 20944, label: 'Busqueda Organica' },
    paid_search: { percentage: 18, sessions: 17136, label: 'Google Ads' },
    social_media: { percentage: 42, sessions: 39984, label: 'Meta + TikTok Ads' },
    direct: { percentage: 12, sessions: 11424, label: 'Directo' },
    referral: { percentage: 6, sessions: 5712, label: 'Falabella/PlazaVea' },
  },

  devices: {
    mobile: { percentage: 82, sessions: 78064, label: 'Mobile' },
    desktop: { percentage: 14, sessions: 13328, label: 'Desktop' },
    tablet: { percentage: 4, sessions: 3808, label: 'Tablet' },
  },

  locations: [
    { ciudad: 'Lima', sessions: 52360, conversions: 745, percentage: 55 },
    { ciudad: 'Arequipa', sessions: 9520, conversions: 124, percentage: 10 },
    { ciudad: 'Trujillo', sessions: 7616, conversions: 99, percentage: 8 },
    { ciudad: 'Piura', sessions: 5712, conversions: 68, percentage: 6 },
    { ciudad: 'Chiclayo', sessions: 4760, conversions: 56, percentage: 5 },
    { ciudad: 'Cusco', sessions: 3808, conversions: 45, percentage: 4 },
    { ciudad: 'Huancayo', sessions: 2856, conversions: 34, percentage: 3 },
    { ciudad: 'Otras ciudades', sessions: 8568, conversions: 69, percentage: 9 },
  ],
};

// ============================================================================
// PERFORMANCE KPIs - Metricas principales del dashboard
// ============================================================================
export const PERFORMANCE_KPIS = {
  alcance: {
    current: 3200000,
    previous: 2650000,
    change: '+20.8',
    trend: 'up',
    label: 'Alcance Total',
    description: 'Usuarios unicos impactados a nivel nacional',
  },

  impresiones: {
    current: 9800000,
    previous: 8200000,
    change: '+19.5',
    trend: 'up',
    label: 'Impresiones',
    description: 'Total de impresiones en todos los canales',
  },

  interacciones: {
    total_interactions: 385000,
    engagement_rate: 12.0,
    shares: 42500,
    trend: '+18.2%',
    trend_value: 18.2,
  },

  reproducciones: {
    current: 1850000,
    previous: 1420000,
    change: '+30.3',
    trend: 'up',
    label: 'Reproducciones Video',
    description: 'Reproducciones en Reels, TikTok y Stories',
  },

  trafico: {
    current: 95200,
    previous: 78500,
    change: '+21.3',
    trend: 'up',
    label: 'Trafico Web',
    description: 'Sesiones en sifrah.com',
  },

  inversion: {
    total_budget: 10000,
    total_spent: 9250,
    spent_percentage: 92.5,
    trend: 'on-track',
    label: 'Inversion',
    description: 'Inversion publicitaria mensual',
    currency: '$',
  },

  frecuencia: {
    current: 3.1,
    previous: 2.8,
    change: '+10.7',
    trend: 'up',
    label: 'Frecuencia',
    description: 'Veces promedio que un usuario ve el anuncio',
  },

  cpm: {
    current: 3.20,
    previous: 3.85,
    change: '-16.9',
    trend: 'down',
    label: 'CPM',
    description: 'Costo por mil impresiones',
    currency: '$',
  },

  cpm_alcance: {
    current: 2.89,
    previous: 3.10,
    change: '-6.8',
    trend: 'down',
    label: 'CPM Alcance',
    description: 'Costo por mil alcance unico',
    currency: '$',
  },

  // Solo Ecommerce
  conversiones_ecommerce: {
    current: 1240,
    previous: 985,
    change: '+25.9',
    trend: 'up',
    label: 'Conversiones Ecommerce',
    description: 'Compras completadas en canales digitales',
  },

  cpa_ecommerce: {
    current: 7.46,
    previous: 9.14,
    change: '-18.4',
    trend: 'down',
    label: 'CPA Ecommerce',
    description: 'Costo por adquisicion (solo ecommerce)',
    currency: '$',
  },

  // Retail (solo alcance e impresiones)
  alcance_retail: {
    current: 1800000,
    previous: 1500000,
    change: '+20.0',
    trend: 'up',
    label: 'Alcance Retail',
    description: 'Alcance de campanas orientadas a tiendas fisicas',
  },

  impresiones_retail: {
    current: 5200000,
    previous: 4400000,
    change: '+18.2',
    trend: 'up',
    label: 'Impresiones Retail',
    description: 'Impresiones de campanas orientadas a tiendas fisicas',
  },
};

// ============================================================================
// SIFRAH OPPORTUNITY SCORE - Indice de oportunidad moda/accesorios
// ============================================================================
export const OPPORTUNITY_SCORE = {
  current_score: 82,
  trend: '+5.2%',
  components: {
    search_interest: {
      score: 85,
      weight: 0.25,
      contribution: 21.3,
      insight: 'Busquedas de "bisuteria peru" +22% vs mes anterior',
    },
    social_engagement: {
      score: 88,
      weight: 0.20,
      contribution: 17.6,
      insight: '#accesoriosdemoda trending en TikTok, +120K views/semana en Peru',
    },
    competitor_gap: {
      score: 78,
      weight: 0.20,
      contribution: 15.6,
      insight: 'Isadora con menor presencia digital, oportunidad en ecommerce',
    },
    seasonal_index: {
      score: 90,
      weight: 0.15,
      contribution: 13.5,
      insight: 'Proximidad San Valentin = pico de demanda en accesorios regalo',
    },
    conversion_efficiency: {
      score: 80,
      weight: 0.20,
      contribution: 16.0,
      insight: 'CPA ecommerce $7.46, por debajo del target $8',
    },
  },
  recommendation: {
    message: 'Momento optimo para aumentar inversion en awareness. Tendencias de moda en TikTok alineadas con coleccion Sifrah. San Valentin acercandose impulsa demanda de regalos.',
    confidence: '89%',
    priority: 'high',
    actions: [
      'Incrementar budget TikTok 30% (contenido GRWM)',
      'Lanzar campana "Brilla en San Valentin"',
      'Activar influencers micro (10-50K) de moda',
      'Promover coleccion regalo + envio gratis en ecommerce',
    ],
  },
};

// ============================================================================
// PRODUCTOS PERFORMANCE - Rendimiento por linea de producto
// ============================================================================
export const SERVICIOS_PERFORMANCE = [
  {
    id: 1,
    nombre: 'Bisuteria',
    demanda: 'Muy Alta',
    ventas_ecommerce: 558,
    unidades: 1850,
    conversion_rate: '12.5%',
    avg_ticket: 35,
    revenue: 64750,
    trend: '+22%',
    precio: 'S/15-80',
    ecommerce: { orders: 558, conversion_rate: 12.5, cpa: 6.20 },
    retail: { alcance: 850000, impresiones: 2400000 },
  },
  {
    id: 2,
    nombre: 'Carteras y Billeteras',
    demanda: 'Alta',
    ventas_ecommerce: 248,
    unidades: 380,
    conversion_rate: '8.2%',
    avg_ticket: 65,
    revenue: 24700,
    trend: '+15%',
    precio: 'S/35-120',
    ecommerce: { orders: 248, conversion_rate: 8.2, cpa: 8.50 },
    retail: { alcance: 420000, impresiones: 1200000 },
  },
  {
    id: 3,
    nombre: 'Accesorios para Cabello',
    demanda: 'Alta',
    ventas_ecommerce: 186,
    unidades: 920,
    conversion_rate: '15.0%',
    avg_ticket: 20,
    revenue: 18400,
    trend: '+28%',
    precio: 'S/8-45',
    ecommerce: { orders: 186, conversion_rate: 15.0, cpa: 4.80 },
    retail: { alcance: 320000, impresiones: 880000 },
  },
  {
    id: 4,
    nombre: 'Pashminas y Bufandas',
    demanda: 'Media',
    ventas_ecommerce: 98,
    unidades: 210,
    conversion_rate: '7.0%',
    avg_ticket: 45,
    revenue: 9450,
    trend: '+8%',
    precio: 'S/25-80',
    ecommerce: { orders: 98, conversion_rate: 7.0, cpa: 10.20 },
    retail: { alcance: 180000, impresiones: 520000 },
  },
  {
    id: 5,
    nombre: 'Lentes y Gafas',
    demanda: 'Media-Alta',
    ventas_ecommerce: 88,
    unidades: 165,
    conversion_rate: '9.0%',
    avg_ticket: 40,
    revenue: 6600,
    trend: '+12%',
    precio: 'S/20-65',
    ecommerce: { orders: 88, conversion_rate: 9.0, cpa: 7.80 },
    retail: { alcance: 210000, impresiones: 580000 },
  },
  {
    id: 6,
    nombre: 'Belleza y Cuidado',
    demanda: 'Media',
    ventas_ecommerce: 62,
    unidades: 285,
    conversion_rate: '11.0%',
    avg_ticket: 30,
    revenue: 8550,
    trend: '+18%',
    precio: 'S/12-55',
    ecommerce: { orders: 62, conversion_rate: 11.0, cpa: 5.50 },
    retail: { alcance: 150000, impresiones: 420000 },
  },
];

// ============================================================================
// TIENDAS PERFORMANCE - Rendimiento por tienda
// ============================================================================
export const SEDES_PERFORMANCE = [
  { id: 1, nombre: 'Sifrah Jockey Plaza', ventas_mensual: 185000, ticket_promedio: 58, alcance_local: 320000, trend: 'up' },
  { id: 2, nombre: 'Sifrah Real Plaza Salaverry', ventas_mensual: 142000, ticket_promedio: 52, alcance_local: 280000, trend: 'up' },
  { id: 3, nombre: 'Sifrah Mega Plaza', ventas_mensual: 168000, ticket_promedio: 45, alcance_local: 350000, trend: 'up' },
  { id: 4, nombre: 'Sifrah Mall Aventura SJL', ventas_mensual: 125000, ticket_promedio: 42, alcance_local: 290000, trend: 'stable' },
  { id: 5, nombre: 'Sifrah Plaza Norte', ventas_mensual: 155000, ticket_promedio: 48, alcance_local: 310000, trend: 'up' },
  { id: 6, nombre: 'Sifrah Mall del Sur', ventas_mensual: 118000, ticket_promedio: 44, alcance_local: 260000, trend: 'stable' },
  { id: 7, nombre: 'Sifrah Real Plaza Arequipa', ventas_mensual: 98000, ticket_promedio: 50, alcance_local: 185000, trend: 'up' },
  { id: 8, nombre: 'Sifrah Real Plaza Trujillo', ventas_mensual: 85000, ticket_promedio: 48, alcance_local: 165000, trend: 'stable' },
  { id: 9, nombre: 'Sifrah Open Plaza Piura', ventas_mensual: 72000, ticket_promedio: 46, alcance_local: 140000, trend: 'up' },
  { id: 10, nombre: 'Sifrah Real Plaza Chiclayo', ventas_mensual: 68000, ticket_promedio: 45, alcance_local: 130000, trend: 'stable' },
  { id: 11, nombre: 'Sifrah Real Plaza Cusco', ventas_mensual: 62000, ticket_promedio: 52, alcance_local: 110000, trend: 'up' },
  { id: 12, nombre: 'Sifrah Real Plaza Huancayo', ventas_mensual: 55000, ticket_promedio: 44, alcance_local: 95000, trend: 'stable' },
];

// ============================================================================
// COMPETENCIA - Competidores de accesorios
// ============================================================================
export const COMPETENCIA = [
  {
    name: 'Isadora',
    full_name: 'Isadora (Blue Star Group)',
    market_share: 22,
    tiendas: 25,
    rank: 2,
    type: 'Internacional',
    precio: 'S/30-150',
    fortalezas: ['Marca internacional', 'Diseno exclusivo', 'Presencia en malls'],
    debilidades: ['Menor cobertura nacional', 'Precio mas alto', 'Ecommerce limitado'],
  },
  {
    name: 'Do it!',
    full_name: 'Do it! (Iasacorp)',
    market_share: 18,
    tiendas: 40,
    rank: 3,
    type: 'Nacional',
    precio: 'S/15-80',
    fortalezas: ['Muchas tiendas', 'Precio accesible', 'Publico joven'],
    debilidades: ['Percepcion de menor calidad', 'Menos variedad bisuteria'],
  },
  {
    name: 'Waba Shopping',
    full_name: 'Waba Shopping',
    market_share: 8,
    tiendas: 10,
    rank: 4,
    type: 'Mayorista/Minorista',
    precio: 'S/5-60',
    fortalezas: ['Precio muy bajo', 'Gran volumen', '25 anos en mercado'],
    debilidades: ['Imagen menos premium', 'Sin ecommerce fuerte', 'Publico B2B'],
  },
  {
    name: 'Amphora',
    full_name: 'Amphora Peru',
    market_share: 6,
    tiendas: 15,
    rank: 5,
    type: 'Nacional',
    precio: 'S/40-200',
    fortalezas: ['Ropa + accesorios', 'Marca consolidada', 'NSE A/B'],
    debilidades: ['Accesorios no es core', 'Precio alto', 'Nicho limitado'],
  },
  {
    name: 'Roxana Pardo',
    full_name: 'Roxana Pardo Bisuteria Fina',
    market_share: 3,
    tiendas: 5,
    rank: 6,
    type: 'Artesanal/Premium',
    precio: 'S/80-350',
    fortalezas: ['Artesanal', 'Exclusividad', 'Bisuteria fina'],
    debilidades: ['Pocas tiendas', 'Precio alto', 'Produccion limitada'],
  },
  {
    name: 'Sifrah',
    full_name: 'Sifrah Peru',
    market_share: 35,
    tiendas: 90,
    rank: 1,
    type: 'Nacional Lider',
    precio: 'S/15-120',
    fortalezas: ['Lider en tiendas', 'Precio accesible', 'Variedad', 'Ecommerce + Marketplaces'],
    debilidades: ['Awareness digital en crecimiento', 'Expansion internacional pendiente'],
  },
];

// ============================================================================
// CRM MOCKUP - Datos simulados de campanas
// ============================================================================
export const CRM_MOCKUP = {
  campaigns: [
    {
      id: 'camp_001',
      name: 'Awareness - Brilla con Luz Propia',
      status: 'active',
      budget: 2500,
      spent: 2180,
      objetivo: 'awareness',
      alcance: 1200000,
      impresiones: 3600000,
      cpm: 0.61,
      platform: 'Meta Ads',
      audience: 'Jovenes Trendy',
    },
    {
      id: 'camp_002',
      name: 'Ecommerce - Nuevos Ingresos Febrero',
      status: 'active',
      budget: 2000,
      spent: 1750,
      objetivo: 'ecommerce',
      conversiones: 234,
      cpa: 7.48,
      platform: 'Meta Ads',
      audience: 'Profesionales con Estilo',
    },
    {
      id: 'camp_003',
      name: 'TikTok - GRWM Accesorios',
      status: 'active',
      budget: 2500,
      spent: 2100,
      objetivo: 'awareness',
      alcance: 850000,
      reproducciones: 620000,
      engagement_rate: 14.5,
      platform: 'TikTok Ads',
      audience: 'Jovenes Trendy',
    },
    {
      id: 'camp_004',
      name: 'Retail - San Valentin Tiendas',
      status: 'active',
      budget: 1500,
      spent: 1280,
      objetivo: 'retail',
      alcance: 680000,
      impresiones: 1950000,
      platform: 'Meta Ads',
      audience: 'Madres & Regaladoras',
    },
  ],
  alerts: [
    {
      type: 'success',
      message: 'Campana "TikTok GRWM" superando objetivos: engagement 14.5% vs target 10%',
      campaign_id: 'camp_003',
      timestamp: '2026-02-10T14:30:00',
    },
    {
      type: 'success',
      message: 'CPA ecommerce en $7.48, por debajo del target de $8. Excelente rendimiento.',
      campaign_id: 'camp_002',
      timestamp: '2026-02-10T13:15:00',
    },
  ],
  lead_quality: {
    avg_score: 78,
    distribution: {
      hot: 38,
      warm: 42,
      cold: 20,
    },
  },
};

// ============================================================================
// BUDGET ALLOCATION - Distribucion de presupuesto por canal
// ============================================================================
export const BUDGET_ALLOCATION = {
  total_budget: 10000,
  currency: 'USD',
  period: 'monthly',
  distribution: {
    meta_ads: {
      amount: 4000,
      percentage: 40,
      status: 'overperforming',
      kpi: 'Awareness + Conversiones Ecommerce',
      target: 'Alcance 1.5M+ / CPA < $8',
      current_performance: 'Alcance 2.1M / CPA $7.48',
      platforms: ['Instagram', 'Facebook'],
    },
    tiktok_ads: {
      amount: 2500,
      percentage: 25,
      status: 'overperforming',
      kpi: 'Awareness + Engagement Jovenes',
      target: 'Alcance 800K+ / Engagement > 10%',
      current_performance: 'Alcance 950K / Engagement 14.5%',
    },
    google_search: {
      amount: 1500,
      percentage: 15,
      status: 'performing',
      kpi: 'Conversiones Ecommerce',
      target: 'CPA < $10',
      current_performance: 'CPA $8.20',
    },
    google_display: {
      amount: 1000,
      percentage: 10,
      status: 'ontrack',
      kpi: 'Awareness + Remarketing',
      target: 'CPM < $4',
      current_performance: 'CPM $3.45',
    },
    influencers: {
      amount: 1000,
      percentage: 10,
      status: 'performing',
      kpi: 'Engagement Rate + UGC',
      target: 'Engagement > 8%',
      current_performance: '11.8%',
    },
  },
  recommendations: [
    {
      type: 'increase',
      channel: 'tiktok_ads',
      from: 25,
      to: 30,
      reason: 'Engagement 45% por encima del objetivo, contenido GRWM resonando con audiencia joven',
      impact: '+200K alcance/mes estimado',
    },
    {
      type: 'maintain',
      channel: 'meta_ads',
      reason: 'Meta Ads con excelente CPA en ecommerce y buen alcance en awareness',
      impact: 'Mantener performance actual',
    },
    {
      type: 'decrease',
      channel: 'google_display',
      from: 10,
      to: 5,
      reason: 'Display con menor impacto en awareness vs TikTok, redirigir presupuesto',
      impact: 'Redistribucion a canales mas eficientes',
    },
  ],
};

// ============================================================================
// CONTENT PILLARS - Pilares de contenido Sifrah
// ============================================================================
export const CONTENT_PILLARS = [
  {
    id: 1,
    title: 'Get Ready With Me (GRWM)',
    description: 'Contenido de styling con accesorios Sifrah, outfit del dia',
    status: 'overperforming',
    performance: {
      engagement_rate: 16.8,
      reach: 620000,
      conversions: 385,
    },
    recommended_budget: 0.30,
    formats: ['Reels', 'TikTok', 'Stories', 'GRWM videos'],
  },
  {
    id: 2,
    title: 'Nuevos Ingresos y Tendencias',
    description: 'Showcasing de nuevos productos y tendencias de moda',
    status: 'performing',
    performance: {
      engagement_rate: 13.2,
      reach: 480000,
      conversions: 298,
    },
    recommended_budget: 0.25,
    formats: ['Carruseles', 'Videos cortos', 'Lookbooks'],
  },
  {
    id: 3,
    title: 'Comunidad Sifrah',
    description: 'Clientas reales, unboxing, reviews y testimoniales',
    status: 'performing',
    performance: {
      engagement_rate: 14.5,
      reach: 350000,
      conversions: 210,
    },
    recommended_budget: 0.20,
    formats: ['UGC', 'Testimoniales', 'Unboxing'],
  },
  {
    id: 4,
    title: 'Promociones y Ofertas',
    description: 'Campanas de venta, descuentos y ofertas especiales',
    status: 'ontrack',
    performance: {
      engagement_rate: 9.2,
      reach: 520000,
      conversions: 420,
    },
    recommended_budget: 0.15,
    formats: ['Ads', 'Landing pages', 'Email marketing'],
  },
  {
    id: 5,
    title: 'Tips de Estilo',
    description: 'Como combinar accesorios, tendencias y consejos de moda',
    status: 'performing',
    performance: {
      engagement_rate: 11.8,
      reach: 280000,
      conversions: 145,
    },
    recommended_budget: 0.10,
    formats: ['Infografias', 'Reels educativos', 'Guias de estilo'],
  },
];

// ============================================================================
// ALERTS - Alertas automaticas del sistema
// ============================================================================
export const ALERTS = [
  {
    id: 1,
    severity: 'high',
    title: 'Pico de demanda San Valentin',
    message: 'Busquedas de "regalo accesorios san valentin" aumentaron 120% esta semana. Momento optimo para push de campanas.',
    action: 'Aumentar budget 25% en Meta y TikTok para capturar demanda de regalos',
    timestamp: '2026-02-10T09:00:00',
  },
  {
    id: 2,
    severity: 'medium',
    title: 'Competidor con nueva coleccion',
    message: 'Isadora lanzo coleccion San Valentin con 20% descuento. Detectado en redes sociales con alto engagement.',
    action: 'Evaluar respuesta competitiva, destacar variedad y precio accesible de Sifrah',
    timestamp: '2026-02-09T15:30:00',
  },
  {
    id: 3,
    severity: 'low',
    title: 'Oportunidad en Arequipa',
    message: 'Trafico desde Arequipa crecio +40% esta semana con CPA de $5.80 en ecommerce',
    action: 'Considerar aumentar budget 20% para region Arequipa',
    timestamp: '2026-02-09T11:45:00',
  },
  {
    id: 4,
    severity: 'high',
    title: 'Contenido viral detectado',
    message: 'Video GRWM de influencer con aretes Sifrah alcanzo 800K views en TikTok organicamente',
    action: 'Amplificar con paid, negociar colaboracion continua con la creadora',
    timestamp: '2026-02-08T18:00:00',
  },
];

// ============================================================================
// COMPETITOR INSIGHTS - Analisis de competencia accesorios
// ============================================================================
export const COMPETITOR_INSIGHTS = [
  {
    brand: 'Isadora',
    full_name: 'Isadora (Blue Star Group)',
    location: 'Lima + Principales malls',
    share_of_voice: 28,
    sentiment: 75,
    threat_level: 'high',
    trending_topics: ['diseno exclusivo', 'marca internacional', 'precio alto', 'poca variedad'],
    description: 'Principal competidor premium con presencia internacional',
    opportunity: 'Capturar clientes que buscan variedad y mejor precio sin sacrificar diseno',
  },
  {
    brand: 'Do it!',
    full_name: 'Do it! (Iasacorp)',
    location: 'Lima + Provincias',
    share_of_voice: 20,
    sentiment: 68,
    threat_level: 'high',
    trending_topics: ['precio bajo', 'muchas tiendas', 'calidad variable', 'publico joven'],
    description: 'Competidor directo en precio accesible con red de tiendas',
    opportunity: 'Diferenciarse en calidad y experiencia de marca',
  },
  {
    brand: 'Waba Shopping',
    full_name: 'Waba Shopping',
    location: 'Lima (Centro)',
    share_of_voice: 8,
    sentiment: 62,
    threat_level: 'medium',
    trending_topics: ['mayorista', 'precios bajos', 'centro de lima', 'variedad'],
    description: 'Importador/mayorista con presencia en Canal tradicional',
    opportunity: 'Diferenciarse con experiencia retail premium y ecommerce',
  },
  {
    brand: 'Amphora',
    full_name: 'Amphora Peru',
    location: 'Lima + Principales malls',
    share_of_voice: 12,
    sentiment: 72,
    threat_level: 'medium',
    trending_topics: ['ropa y accesorios', 'marca peruana', 'NSE alto', 'diseno propio'],
    description: 'Marca de moda con linea de accesorios como complemento',
    opportunity: 'Posicionarse como especialista vs marca generalista',
  },
  {
    brand: 'Roxana Pardo',
    full_name: 'Roxana Pardo Bisuteria Fina',
    location: 'Lima',
    share_of_voice: 5,
    sentiment: 88,
    threat_level: 'low',
    trending_topics: ['artesanal', 'exclusivo', 'bisuteria fina', 'premium'],
    description: 'Nicho artesanal de alta gama con fiel base de clientes',
    opportunity: 'No competir directamente, pero inspirar linea premium',
  },
  {
    brand: 'Sifrah',
    full_name: 'Sifrah Peru',
    location: 'Nacional (+90 tiendas)',
    share_of_voice: 32,
    sentiment: 82,
    threat_level: null,
    trending_topics: ['variedad', 'precio justo', 'muchas tiendas', 'bisuteria moderna', 'marca peruana'],
    description: 'Lider nacional en accesorios con mayor red de tiendas',
    opportunity: 'Consolidar liderazgo digital y expandir ecommerce',
  },
];

// ============================================================================
// TRENDING SOUNDS - Sonidos trending para contenido
// ============================================================================
export const TRENDING_SOUNDS = [
  { name: 'Get Ready With Me - original', type: 'GRWM', usage: 'Styling accesorios', popularity: 96 },
  { name: 'Dua Lipa - Levitating', type: 'Pop', usage: 'Fashion transition', popularity: 92 },
  { name: 'SZA - Kill Bill', type: 'R&B', usage: 'Outfit reveal', popularity: 88 },
  { name: 'Bad Bunny - DtMF', type: 'Reggaeton', usage: 'Accessory haul', popularity: 90 },
  { name: 'Grupo 5 - Mix Peruano', type: 'Cumbia', usage: 'Content peruano', popularity: 78 },
  { name: 'Aesthetic piano sounds', type: 'Aesthetic', usage: 'Unboxing premium', popularity: 85 },
];

// ============================================================================
// EXPORTS
// ============================================================================
export default {
  MOCK_GA4_DATA,
  PERFORMANCE_KPIS,
  OPPORTUNITY_SCORE,
  SERVICIOS_PERFORMANCE,
  SEDES_PERFORMANCE,
  COMPETENCIA,
  CRM_MOCKUP,
  BUDGET_ALLOCATION,
  CONTENT_PILLARS,
  ALERTS,
  COMPETITOR_INSIGHTS,
  TRENDING_SOUNDS,
};
