// Keywords y hashtags para Sifrah - Bisutería y accesorios Perú
// Configuración completa para búsquedas y monitoreo social

export const KEYWORDS_SIFRAH = {
  // Marca Sifrah
  marca: [
    'sifrah peru',
    'sifrah accesorios',
    'sifrah bisuteria',
    'sifrah tienda',
    'sifrah online',
    'sifrah jockey plaza',
    'sifrah precio',
    'sifrah aretes',
    'sifrah collares',
    'sifrah carteras',
  ],

  // Keywords de categoria
  categoria: [
    'bisuteria peru',
    'accesorios mujer peru',
    'tienda accesorios lima',
    'bisuteria moderna',
    'accesorios de moda',
    'joyeria fantasia peru',
    'bisuteria online peru',
    'accesorios baratos lima',
    'tienda bisuteria mall',
    'accesorios para mujer',
  ],

  // Intención de compra alta
  intencion: [
    'comprar aretes online peru',
    'collares de moda peru',
    'carteras mujer peru',
    'regalo accesorios mujer',
    'bisuteria dia de la madre',
    'accesorios san valentin regalo',
    'tienda accesorios cerca de mi',
    'bisuteria elegante peru',
    'pulseras mujer moda',
    'aretes grandes tendencia',
  ],

  // Keywords de productos
  productos: [
    'aretes argollas peru',
    'collares choker peru',
    'pulseras mujer peru',
    'anillos moda mujer',
    'carteras bandolera peru',
    'billeteras mujer peru',
    'vinchas y cintillos',
    'ganchos para cabello',
    'pashminas invierno peru',
    'lentes de sol mujer peru',
  ],

  // Competencia
  competidores: [
    'isadora accesorios peru',
    'isadora tienda online',
    'do it accesorios',
    'doit tienda peru',
    'waba shopping bisuteria',
    'amphora accesorios',
    'accesorios vs sifrah',
    'alternativa isadora',
    'bisuteria mall peru',
    'tienda accesorios mall',
  ],

  // Estilos y tendencias
  estilos: [
    'accesorios minimalistas',
    'bisuteria boho',
    'accesorios dorados tendencia',
    'aretes statement',
    'layering collares',
    'accesorios perlas',
    'bisuteria colorida',
    'accesorios plateados',
    'accesorios oficina mujer',
    'bisuteria casual',
  ],

  // Ocasiones
  ocasiones: [
    'accesorios para boda',
    'bisuteria graduacion',
    'accesorios fiesta',
    'regalo dia madre accesorios',
    'accesorios navidad',
    'bisuteria san valentin',
    'accesorios cumpleanos regalo',
    'look oficina accesorios',
  ],

  // Geografias Peru
  geografias: [
    'accesorios lima',
    'bisuteria arequipa',
    'tienda accesorios trujillo',
    'bisuteria piura',
    'accesorios chiclayo',
    'tienda bisuteria cusco',
    'accesorios huancayo',
    'bisuteria iquitos',
    'accesorios lima norte',
    'bisuteria lima sur',
  ],
};

export const HASHTAGS_SIFRAH = {
  // Core (usar siempre)
  core: [
    '#sifrah',
    '#sifrahperu',
    '#brillaconluzpropia',
    '#bisuteria',
    '#accesorios',
    '#accesoriosdemoda',
    '#modaperu',
  ],

  // Engagement (rotar)
  engagement: [
    '#fyp',
    '#parati',
    '#viral',
    '#trending',
    '#fypシ',
    '#xyzbca',
  ],

  // Nicho moda y accesorios
  moda: [
    '#ootd',
    '#outfitoftheday',
    '#fashionstyle',
    '#accessoriesoftheday',
    '#jewelrylover',
    '#bisuteriamoderna',
    '#lookdeldia',
    '#fashionperu',
    '#styleinspo',
    '#earringsaddict',
  ],

  // Local Peru
  local: [
    '#lima',
    '#peru',
    '#peruanas',
    '#limalife',
    '#hechoenelcorazon',
    '#modaperuana',
    '#tiendasperu',
    '#mallperu',
  ],

  // Productos
  productos: [
    '#aretes',
    '#collares',
    '#pulseras',
    '#carteras',
    '#anillos',
    '#vinchas',
    '#pashminas',
    '#lentesdesol',
    '#billeteras',
    '#accesorios',
  ],

  // Ocasiones
  ocasiones: [
    '#regaloperfecto',
    '#diadelamadre',
    '#sanvalentin',
    '#navidad',
    '#graduacion',
    '#fiesta',
    '#boda',
    '#regalosparaella',
  ],

  // Motivacion / Lifestyle
  lifestyle: [
    '#mujeresquebrilla',
    '#empoderada',
    '#girlpower',
    '#selfcare',
    '#confidence',
    '#beunique',
    '#loveyourself',
    '#womenempowerment',
  ],

  // Competencia (monitoreo)
  competencia: [
    '#isadora',
    '#isadoraperu',
    '#doitperu',
    '#amphora',
    '#wabashoping',
  ],
};

// Combinar todos los hashtags
export const ALL_HASHTAGS = [
  ...HASHTAGS_SIFRAH.core,
  ...HASHTAGS_SIFRAH.moda,
  ...HASHTAGS_SIFRAH.local,
  ...HASHTAGS_SIFRAH.productos,
  ...HASHTAGS_SIFRAH.ocasiones,
];

// Combinar keywords para Google Trends
export const ALL_KEYWORDS = [
  ...KEYWORDS_SIFRAH.marca,
  ...KEYWORDS_SIFRAH.categoria,
  ...KEYWORDS_SIFRAH.intencion,
  ...KEYWORDS_SIFRAH.productos,
];

// Keywords de alta intencion (conversion)
export const HIGH_INTENT_KEYWORDS = [
  ...KEYWORDS_SIFRAH.intencion,
  'comprar bisuteria online',
  'accesorios mujer oferta',
  'aretes baratos peru',
  'collares regalo mujer',
  'carteras mujer online peru',
  'bisuteria envio gratis',
];

// Configuración para Google Trends
export const GOOGLE_TRENDS_CONFIG = {
  keywords: ALL_KEYWORDS.slice(0, 15),
  region: 'PE',
  geo: {
    lima: 'PE-LIM',
    arequipa: 'PE-ARE',
    trujillo: 'PE-LAL',
    piura: 'PE-PIU',
  },
  category: 185, // Fashion & Accessories
  timeframe: 'now 7-d',
  refreshInterval: 3600000,
};

// Configuración para TikTok
export const TIKTOK_CONFIG = {
  hashtags: [
    ...HASHTAGS_SIFRAH.core,
    ...HASHTAGS_SIFRAH.moda.slice(0, 5),
    ...HASHTAGS_SIFRAH.local.slice(0, 3),
  ],
  region: 'PE',
  metrics: ['views', 'likes', 'shares', 'comments'],
  trending_threshold: 10000,
  sounds: [
    { name: 'Get Ready With Me sounds', category: 'GRWM Fashion' },
    { name: 'Bad Bunny - DtMF', category: 'Trendy outfit' },
    { name: 'Dua Lipa - Levitating', category: 'Fashion transition' },
    { name: 'SZA - Kill Bill', category: 'Accessory haul' },
    { name: 'Grupo 5 - Mix', category: 'Peru trending' },
  ],
};

// Configuración para Meta (Facebook/Instagram)
export const META_CONFIG = {
  hashtags: [
    ...HASHTAGS_SIFRAH.core,
    ...HASHTAGS_SIFRAH.moda,
    ...HASHTAGS_SIFRAH.local,
  ],
  pages: [
    'Sifrah Oficial',
    'Sifrah Peru',
    'Isadora Peru',
    'Do it Peru',
  ],
  groups: [
    'Moda Peru',
    'Bisuteria Lima',
    'Accesorios Mujer Peru',
    'Emprendedoras Peru',
  ],
  interests: [
    'Fashion accessories',
    'Jewelry',
    'Women fashion',
    'Online shopping',
    'Beauty and personal care',
  ],
};

// Fuentes de informacion moda y retail Peru
export const FASHION_SOURCES = [
  {
    name: 'Peru Retail',
    url: 'https://www.peru-retail.com',
    type: 'industry',
    scraping: true,
  },
  {
    name: 'Fashion Network',
    url: 'https://pe.fashionnetwork.com',
    type: 'fashion',
    scraping: true,
  },
  {
    name: 'Gestion - Retail',
    url: 'https://gestion.pe',
    type: 'business',
    scraping: true,
  },
  {
    name: 'El Comercio - Moda',
    url: 'https://elcomercio.pe/somos',
    type: 'lifestyle',
    scraping: true,
  },
];

// Tiendas Sifrah (para monitoreo por region)
export const TIENDAS_SIFRAH = [
  {
    id: 1,
    nombre: 'Sifrah Jockey Plaza',
    slug: 'jockey-plaza',
    ciudad: 'Lima',
    keywords: ['accesorios jockey plaza', 'bisuteria jockey', 'sifrah jockey'],
    hashtags: ['#JockeyPlaza', '#SifrahJockey'],
  },
  {
    id: 2,
    nombre: 'Sifrah Real Plaza Salaverry',
    slug: 'real-plaza-salaverry',
    ciudad: 'Lima',
    keywords: ['accesorios real plaza', 'bisuteria salaverry', 'sifrah real plaza'],
    hashtags: ['#RealPlaza', '#SifrahRealPlaza'],
  },
  {
    id: 3,
    nombre: 'Sifrah Mega Plaza',
    slug: 'mega-plaza',
    ciudad: 'Lima',
    keywords: ['accesorios mega plaza', 'bisuteria lima norte', 'sifrah mega plaza'],
    hashtags: ['#MegaPlaza', '#LimaNorte'],
  },
  {
    id: 4,
    nombre: 'Sifrah Real Plaza Arequipa',
    slug: 'arequipa',
    ciudad: 'Arequipa',
    keywords: ['accesorios arequipa', 'bisuteria arequipa', 'sifrah arequipa'],
    hashtags: ['#Arequipa', '#SifrahArequipa'],
  },
  {
    id: 5,
    nombre: 'Sifrah Real Plaza Trujillo',
    slug: 'trujillo',
    ciudad: 'Trujillo',
    keywords: ['accesorios trujillo', 'bisuteria trujillo', 'sifrah trujillo'],
    hashtags: ['#Trujillo', '#SifrahTrujillo'],
  },
  {
    id: 6,
    nombre: 'Sifrah Open Plaza Piura',
    slug: 'piura',
    ciudad: 'Piura',
    keywords: ['accesorios piura', 'bisuteria piura', 'sifrah piura'],
    hashtags: ['#Piura', '#SifrahPiura'],
  },
  {
    id: 7,
    nombre: 'Sifrah Real Plaza Chiclayo',
    slug: 'chiclayo',
    ciudad: 'Chiclayo',
    keywords: ['accesorios chiclayo', 'bisuteria chiclayo', 'sifrah chiclayo'],
    hashtags: ['#Chiclayo', '#SifrahChiclayo'],
  },
  {
    id: 8,
    nombre: 'Sifrah Real Plaza Cusco',
    slug: 'cusco',
    ciudad: 'Cusco',
    keywords: ['accesorios cusco', 'bisuteria cusco', 'sifrah cusco'],
    hashtags: ['#Cusco', '#SifrahCusco'],
  },
  {
    id: 9,
    nombre: 'Sifrah Real Plaza Huancayo',
    slug: 'huancayo',
    ciudad: 'Huancayo',
    keywords: ['accesorios huancayo', 'bisuteria huancayo', 'sifrah huancayo'],
    hashtags: ['#Huancayo', '#SifrahHuancayo'],
  },
  {
    id: 10,
    nombre: 'Sifrah Plaza Norte',
    slug: 'plaza-norte',
    ciudad: 'Lima',
    keywords: ['accesorios plaza norte', 'bisuteria lima norte', 'sifrah plaza norte'],
    hashtags: ['#PlazaNorte', '#SifrahPlazaNorte'],
  },
  {
    id: 11,
    nombre: 'Sifrah Mall del Sur',
    slug: 'mall-del-sur',
    ciudad: 'Lima',
    keywords: ['accesorios mall del sur', 'bisuteria lima sur', 'sifrah mall del sur'],
    hashtags: ['#MallDelSur', '#LimaSur'],
  },
  {
    id: 12,
    nombre: 'Sifrah Mall Aventura SJL',
    slug: 'mall-aventura-sjl',
    ciudad: 'Lima',
    keywords: ['accesorios mall aventura', 'bisuteria lima este', 'sifrah sjl'],
    hashtags: ['#MallAventura', '#LimaEste'],
  },
];

export default {
  KEYWORDS_SIFRAH,
  HASHTAGS_SIFRAH,
  ALL_HASHTAGS,
  ALL_KEYWORDS,
  HIGH_INTENT_KEYWORDS,
  GOOGLE_TRENDS_CONFIG,
  TIKTOK_CONFIG,
  META_CONFIG,
  FASHION_SOURCES,
  TIENDAS_SIFRAH,
};
