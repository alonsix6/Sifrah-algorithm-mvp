// Keywords y hashtags para Toyota RAV4 Híbrida - Perú
// Configuración completa para búsquedas y monitoreo social

export const KEYWORDS_TOYOTA = {
  // Producto principal
  principal: [
    'Toyota RAV4',
    'RAV4 Híbrida',
    'RAV4 Hybrid Perú',
    'Nueva RAV4 2025',
    'RAV4 2026',
    'RAV4 precio Perú',
    'Toyota RAV4 Perú',
    'RAV4 Hybrid precio',
  ],

  // Categoría SUV
  suv: [
    'SUV híbrida',
    'mejor SUV Perú',
    'SUV familiar',
    'SUV 4x4',
    'comprar SUV',
    'SUV Toyota',
    'SUV mediana',
    'SUV confiable',
    'mejor SUV híbrida',
  ],

  // Tecnología híbrida
  hibrido: [
    'auto híbrido',
    'híbridos en Perú',
    'tecnología híbrida',
    'eficiencia combustible',
    'autos ecológicos',
    'movilidad sostenible',
    'ahorro gasolina',
    'motor híbrido',
    'auto eléctrico híbrido',
    'vehículo ecológico',
  ],

  // Competencia directa
  competidores: [
    'Honda CR-V',
    'Mazda CX-5',
    'Nissan X-Trail',
    'Hyundai Tucson',
    'Kia Sportage',
    'Mitsubishi Outlander',
    'Ford Escape',
    'Volkswagen Tiguan',
  ],

  // Intención de compra
  compra: [
    'precio SUV Perú',
    'financiamiento autos',
    'concesionario Toyota',
    'Toyota Perú',
    'test drive',
    'cotizar auto',
    'crédito vehicular',
    'comprar auto',
    'auto nuevo',
  ],

  // Comparativas
  comparativas: [
    'RAV4 vs CR-V',
    'RAV4 vs Tucson',
    'mejor híbrida',
    'comparativa SUV',
    'RAV4 vs CX-5',
    'RAV4 vs X-Trail',
    'comparar SUV híbridas',
  ],

  // Features y características
  features: [
    'Toyota Safety Sense',
    'AWD',
    '4x4',
    'tracción integral',
    'bajo consumo',
    'espacio familiar',
    'maletero amplio',
    'seguridad vehicular',
  ],
};

export const HASHTAGS_TOYOTA = {
  // Principales
  principales: [
    '#ToyotaRAV4',
    '#RAV4Hybrid',
    '#ToyotaPeru',
    '#RAV4Peru',
    '#NuevaRAV4',
  ],

  // SUV
  suv: [
    '#SUVHibrida',
    '#SUVFamiliar',
    '#SUV4x4',
    '#MejorSUV',
    '#SUVToyota',
  ],

  // Híbridos y sostenibilidad
  hibrido: [
    '#Hibrido',
    '#AutosEcologicos',
    '#MovilidadSostenible',
    '#TecnologiaHibrida',
    '#EficienciaEnergetica',
    '#EcoFriendly',
    '#AutoVerde',
  ],

  // Lifestyle
  lifestyle: [
    '#VidaSustentable',
    '#AventuraUrbana',
    '#FamiliaPeruana',
    '#RoadTrip',
    '#ViajesFamiliares',
    '#EstiloDeVida',
  ],

  // Perú
  peru: [
    '#AutosEnPeru',
    '#LimaMovil',
    '#PeruAutomotriz',
    '#HechoEnPeru',
    '#Lima',
  ],

  // Performance y tecnología
  tech: [
    '#ToyotaTech',
    '#InnovacionToyota',
    '#TecnologiaAutomotriz',
    '#SafetyFirst',
  ],
};

// Combinar todos los hashtags en un array único
export const ALL_HASHTAGS = [
  ...HASHTAGS_TOYOTA.principales,
  ...HASHTAGS_TOYOTA.suv,
  ...HASHTAGS_TOYOTA.hibrido,
  ...HASHTAGS_TOYOTA.lifestyle,
  ...HASHTAGS_TOYOTA.peru,
  ...HASHTAGS_TOYOTA.tech,
];

// Combinar todas las keywords en un array único para Google Trends
export const ALL_KEYWORDS = [
  ...KEYWORDS_TOYOTA.principal,
  ...KEYWORDS_TOYOTA.suv,
  ...KEYWORDS_TOYOTA.hibrido,
  ...KEYWORDS_TOYOTA.compra,
];

// Keywords de alta intención (para priorizar en búsquedas)
export const HIGH_INTENT_KEYWORDS = [
  ...KEYWORDS_TOYOTA.compra,
  ...KEYWORDS_TOYOTA.principal.filter(k => k.includes('precio')),
  'test drive',
  'cotizar',
  'financiamiento',
];

// Configuración para Google Trends
export const GOOGLE_TRENDS_CONFIG = {
  keywords: ALL_KEYWORDS.slice(0, 15), // Máximo 15 keywords principales
  region: 'PE', // Perú
  category: 47, // Autos & Vehicles
  timeframe: 'now 7-d', // Últimos 7 días
  refreshInterval: 3600000, // 1 hora en ms
};

// Configuración para TikTok Creative Center
export const TIKTOK_CONFIG = {
  hashtags: HASHTAGS_TOYOTA.principales,
  region: 'PE',
  metrics: ['views', 'likes', 'shares', 'comments'],
  trending_threshold: 10000, // Mínimo de vistas para considerar trending
};

// Fuentes de datos automotrices Perú
export const AUTOMOTIVE_SOURCES = [
  {
    name: 'Neoauto',
    url: 'https://neoauto.com',
    type: 'marketplace',
    scraping: true,
  },
  {
    name: 'Autocosmos Perú',
    url: 'https://autocosmos.com.pe',
    type: 'reviews',
    scraping: true,
  },
  {
    name: 'Motor1 Perú',
    url: 'https://motor1.com/es',
    type: 'news',
    scraping: false,
  },
  {
    name: 'Toyota Perú Oficial',
    url: 'https://www.toyota.com.pe',
    type: 'official',
    scraping: false,
  },
];

export default {
  KEYWORDS_TOYOTA,
  HASHTAGS_TOYOTA,
  ALL_HASHTAGS,
  ALL_KEYWORDS,
  HIGH_INTENT_KEYWORDS,
  GOOGLE_TRENDS_CONFIG,
  TIKTOK_CONFIG,
  AUTOMOTIVE_SOURCES,
};
