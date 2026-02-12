import { useState, useEffect } from 'react';
import { Search, TrendingUp, Video, Share2, Gem, RefreshCw, ChevronDown, ChevronUp, BarChart3, Info, Music, Target, DollarSign, Layers, Lightbulb, Users, Globe, MapPin, Eye, Clock, MousePointer, Smartphone, Monitor, ExternalLink, Calendar } from 'lucide-react';

export default function DataLayer() {
  // Helper function to get current week info
  const getWeekPeriod = () => {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const days = Math.floor((now - startOfYear) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil((days + startOfYear.getDay() + 1) / 7);

    // Get Monday of current week
    const dayOfWeek = now.getDay();
    const monday = new Date(now);
    monday.setDate(now.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

    // Get Sunday of current week
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    const formatDate = (date) => date.getDate();
    const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();

    return {
      weekNumber,
      range: `${formatDate(monday)}-${formatDate(sunday)} ${month} ${year}`
    };
  };

  const weekPeriod = getWeekPeriod();

  const [trendsData, setTrendsData] = useState(null);
  const [tiktokData, setTiktokData] = useState(null);
  const [metaData, setMetaData] = useState(null);
  const [ga4Data, setGA4Data] = useState(null);
  const [mlData, setMLData] = useState(null);
  const [mlInsights, setMLInsights] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefresh, setLastRefresh] = useState(null);

  const [expandedSections, setExpandedSections] = useState({
    trends: false,
    tiktok: false,
    meta: false,
    ga4: false
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsRefreshing(true);
    try {
      const basePath = `/data`;
      const [trends, tiktok, meta, ga4, mlPredictions, mlInsightsData] = await Promise.all([
        fetch(`${basePath}/trends/latest.json`).then(r => r.json()).catch(() => null),
        fetch(`${basePath}/tiktok/latest.json`).then(r => r.json()).catch(() => null),
        fetch(`${basePath}/meta/latest.json`).then(r => r.json()).catch(() => null),
        fetch(`${basePath}/mock/ga4_data.json`).then(r => r.json()).catch(() => null),
        fetch(`${basePath}/ml/predictions.json`).then(r => r.json()).catch(() => null),
        fetch(`${basePath}/ml/insights.json`).then(r => r.json()).catch(() => null)
      ]);

      setTrendsData(trends);
      setTiktokData(tiktok);
      setMetaData(meta);
      setGA4Data(ga4);
      setMLData(mlPredictions);
      setMLInsights(mlInsightsData);
      setLastRefresh(new Date());
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const getInsightIcon = (type) => {
    const iconMap = {
      trend: TrendingUp,
      social: Users,
      tiktok: Video,
      intent: Target,
      budget: DollarSign,
      multi_source: Layers
    };
    return iconMap[type] || Lightbulb;
  };

  // Calculate scores for accessories metrics
  const calculateScores = () => {
    if (mlData?.scores?.individual) {
      return {
        overall: mlData.scores.overall?.toFixed(1) || '8.2',
        search: mlData.scores.individual.search?.final?.toFixed(1) || '8.5',
        trend: mlData.scores.individual.trend?.final?.toFixed(1) || '7.8',
        social: mlData.scores.individual.social?.final?.toFixed(1) || '8.0',
        intent: mlData.scores.individual.intent?.final?.toFixed(1) || '8.8',
        isML: true,
        weights: mlData.scores.weights
      };
    }

    // Mock accessories scores
    return {
      overall: '8.2',
      search: '8.5',
      trend: '7.8',
      social: '8.0',
      intent: '8.8',
      isML: false
    };
  };

  const scores = calculateScores();

  // Generate accessories insights - exactly 4 sources: Google Trends, TikTok, Meta, GA4
  const generateInsights = () => {
    // Always return exactly 4 insights, one per source
    return [
      {
        source: 'Google Trends',
        IconComponent: Search,
        text: '"Bisutería Lima" lidera búsquedas con 92/100 de interés y +85% de crecimiento. 5 keywords en tendencia explosiva en los últimos 3 meses.',
      },
      {
        source: 'TikTok',
        IconComponent: Video,
        text: '#accessorytok alcanza 2.5B views globales. #tendencia2026 crece +180% en LATAM. Contenido de styling tiene engagement 9.2/10.',
      },
      {
        source: 'Meta',
        IconComponent: Share2,
        text: 'Sentimiento social muy positivo. 60% de los topics tienen sentimiento positivo. "Regalos San Valentín" genera 52K menciones.',
      },
      {
        source: 'GA4',
        IconComponent: BarChart3,
        text: '68,500 usuarios generaron 1,850 compras (2.7% conversión). Página "/nueva-colección" lidera con 5.47% de tasa de conversión.',
      },
    ];
  };

  // Multi-source insight (separate)
  const multiSourceInsight = {
    source: 'Análisis Multi-Fuente',
    IconComponent: Layers,
    text: 'Las 4 fuentes confirman alta demanda estacional (San Valentín / Día de la Madre). La combinación de búsquedas rising (+85%), engagement social alto (8.5/10), contenido viral en TikTok y conversiones web en aumento indica momento óptimo para inversión. Oportunidad de capturar clientas que buscan accesorios únicos y artesanales frente a marcas masivas mediante posicionamiento premium-artesanal.',
    recommendation: 'Recomendación: Incrementar presupuesto Meta Ads 20% y lanzar campaña "Regala con Estilo 2026" con influencers micro de moda.'
  };

  const insights = generateInsights();

  // Expanded GA4 pages data
  const ga4Pages = [
    { page: '/nueva-colección', title: 'Nueva Colección Sifrah', views: 18500, sessions: 15200, avgTime: '4:12', bounceRate: 28, conversions: 425, convRate: 2.80 },
    { page: '/promociones', title: 'Promociones Temporada 2026', views: 15600, sessions: 12800, avgTime: '2:58', bounceRate: 25, conversions: 380, convRate: 2.97 },
    { page: '/tienda/miraflores', title: 'Sifrah Miraflores', views: 12200, sessions: 9800, avgTime: '3:45', bounceRate: 32, conversions: 185, convRate: 1.89 },
    { page: '/ofertas-especiales', title: 'Ofertas Especiales', views: 11200, sessions: 9500, avgTime: '3:38', bounceRate: 22, conversions: 520, convRate: 5.47 },
    { page: '/aretes', title: 'Aretes y Pendientes', views: 9800, sessions: 8200, avgTime: '3:22', bounceRate: 35, conversions: 142, convRate: 1.73 },
    { page: '/collares', title: 'Collares y Cadenas', views: 8900, sessions: 7500, avgTime: '2:15', bounceRate: 42, conversions: 85, convRate: 1.13 },
    { page: '/pulseras', title: 'Pulseras y Brazaletes', views: 7200, sessions: 5800, avgTime: '4:05', bounceRate: 38, conversions: 68, convRate: 1.17 },
    { page: '/anillos', title: 'Anillos y Sortijas', views: 5400, sessions: 4200, avgTime: '4:25', bounceRate: 35, conversions: 45, convRate: 1.07 },
    { page: '/blog/tendencias', title: 'Blog: Tendencias Moda', views: 4800, sessions: 4100, avgTime: '5:32', bounceRate: 28, conversions: 32, convRate: 0.78 },
    { page: '/app', title: 'App Sifrah', views: 3200, sessions: 2800, avgTime: '2:45', bounceRate: 45, conversions: 28, convRate: 1.00 },
  ];

  // Expanded TikTok hashtags data
  const tiktokHashtags = [
    { hashtag: '#accessorytok', views: '2.5B', posts: '4.2M', growth: '+45%', region: 'Global', engagement: 8.5 },
    { hashtag: '#bisutería', views: '890M', posts: '1.8M', growth: '+62%', region: 'LATAM', engagement: 9.2 },
    { hashtag: '#modaperu', views: '125M', posts: '280K', growth: '+38%', region: 'Perú', engagement: 7.8 },
    { hashtag: '#earringsoftheday', views: '1.2B', posts: '2.8M', growth: '+28%', region: 'Global', engagement: 8.0 },
    { hashtag: '#jewelrytrends', views: '950M', posts: '2.1M', growth: '+35%', region: 'Global', engagement: 8.3 },
    { hashtag: '#tendencia2026', views: '45M', posts: '95K', growth: '+180%', region: 'LATAM', engagement: 9.5 },
    { hashtag: '#outfitinspo', views: '320M', posts: '680K', growth: '+52%', region: 'LATAM', engagement: 9.0 },
    { hashtag: '#accesorislima', views: '28M', posts: '62K', growth: '+42%', region: 'Perú', engagement: 7.5 },
  ];

  // Expanded TikTok sounds
  const tiktokSounds = [
    { name: 'Dua Lipa - Levitating', type: 'Pop', usage: '2.1M', trend: '+85%' },
    { name: 'Rosalía - BESO', type: 'Flamenco Pop', usage: '1.8M', trend: '+72%' },
    { name: 'Bad Bunny - Monaco', type: 'Reggaetón', usage: '3.2M', trend: '+45%' },
    { name: 'Karol G - TQG', type: 'Latin Pop', usage: '980K', trend: '+38%' },
    { name: 'Shakira - Copa Vacía', type: 'Pop Latino', usage: '1.5M', trend: '+95%' },
    { name: 'Yahaira Plasencia - Mix Moda', type: 'Cumbia', usage: '420K', trend: '+120%' },
  ];

  // Expanded Meta topics data
  const metaTopics = [
    { topic: 'Bisutería Lima', mentions: 45000, engagement: 8.5, sentiment: 72, growth: '+18%', brands: 'Isadora, Topitop, Sifrah' },
    { topic: 'Tendencias Accesorios', mentions: 32000, engagement: 9.2, sentiment: 92, growth: '+45%', brands: 'Zara, H&M Acc' },
    { topic: 'Aretes Artesanales', mentions: 28000, engagement: 7.8, sentiment: 78, growth: '+12%', brands: 'Etsy, Indie brands' },
    { topic: 'Regalos para Ella', mentions: 18000, engagement: 8.0, sentiment: 85, growth: '+22%', brands: 'Pandora, Tous' },
    { topic: 'Regalos San Valentín', mentions: 52000, engagement: 8.8, sentiment: 88, growth: '+185%', brands: 'Todas' },
    { topic: 'Moda Sostenible', mentions: 15000, engagement: 7.5, sentiment: 75, growth: '+15%', brands: 'Indie, Artesanal' },
  ];

  // Meta ad performance
  const metaAdPerformance = [
    { campaign: 'San Valentín 2026 - Jóvenes', platform: 'Instagram', reach: 850000, clicks: 12500, ctr: 1.47, cpl: 10.80, status: 'Activo' },
    { campaign: 'Colección Premium', platform: 'Facebook', reach: 420000, clicks: 5800, ctr: 1.38, cpl: 18.20, status: 'Activo' },
    { campaign: 'Envío Gratis', platform: 'Instagram', reach: 680000, clicks: 15200, ctr: 2.24, cpl: 8.50, status: 'Activo' },
    { campaign: 'Pack Amiga', platform: 'Facebook', reach: 280000, clicks: 3200, ctr: 1.14, cpl: 22.10, status: 'Pausado' },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header & Score Summary */}
      <div className="bg-white rounded-2xl shadow-card p-4 sm:p-6 lg:p-8 text-sifrah-textDark border border-sifrah-border">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4 sm:mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-sifrah-pink rounded-xl flex items-center justify-center flex-shrink-0">
                <Gem className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="min-w-0">
                <h2 className="text-base sm:text-xl font-bold mb-1">
                  Capa de Data - Captura de Señales
                </h2>
                <p className="text-sifrah-textMedium text-xs sm:text-base">
                  Monitoreo en tiempo real del ecosistema digital de accesorios y moda en Lima
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2 bg-sifrah-cyan/20 text-sifrah-cyan px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-semibold">Sem {weekPeriod.weekNumber}</span>
              <span className="text-[10px] sm:text-xs opacity-80 hidden xs:inline">| {weekPeriod.range}</span>
            </div>
            <div className="text-right">
              <p className="text-sifrah-textMedium text-[10px] sm:text-xs uppercase font-semibold mb-0.5 sm:mb-1">Score Global</p>
              <p className="text-2xl sm:text-3xl font-bold text-sifrah-pink">{scores.overall}</p>
              <p className="text-[10px] sm:text-xs text-sifrah-textMedium">de 10.0</p>
            </div>
            <button
              onClick={loadData}
              disabled={isRefreshing}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-sifrah-softPink text-sifrah-pink rounded-lg hover:bg-sifrah-pink/30 transition disabled:opacity-50 text-sm"
            >
              <RefreshCw className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Actualizar</span>
            </button>
          </div>
        </div>

        {/* Data Sources Status */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 sm:gap-2 bg-sifrah-lightGray rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-sifrah-emerald rounded-full"></div>
            <span className="text-[10px] sm:text-xs text-sifrah-textMedium">Trends</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-sifrah-lightGray rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-sifrah-emerald rounded-full"></div>
            <span className="text-[10px] sm:text-xs text-sifrah-textMedium">TikTok</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-sifrah-lightGray rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-sifrah-emerald rounded-full"></div>
            <span className="text-[10px] sm:text-xs text-sifrah-textMedium">Meta</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-sifrah-lightGray rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-sifrah-emerald rounded-full"></div>
            <span className="text-[10px] sm:text-xs text-sifrah-textMedium">GA4</span>
          </div>
          {lastRefresh && (
            <div className="flex items-center gap-1.5 sm:gap-2 bg-sifrah-lightGray rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 ml-auto">
              <span className="text-[10px] sm:text-xs text-sifrah-textMedium">
                {lastRefresh.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Insights Clave del Mercado */}
      <div className="bg-white rounded-2xl shadow-card p-4 sm:p-6 lg:p-8 border border-sifrah-border">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sifrah-pink rounded-xl flex items-center justify-center flex-shrink-0">
            <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm sm:text-lg font-bold text-sifrah-textDark">Insights Clave del Mercado de Accesorios</h3>
            <p className="text-xs sm:text-sm text-sifrah-textMedium">Análisis automático multi-fuente</p>
          </div>
        </div>

        {/* Individual Source Insights - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
          {insights.map((insight, idx) => {
            const colorScheme =
              insight.source === 'Google Trends' ? { bg: 'bg-sifrah-cyan/10', text: 'text-sifrah-cyan', icon: 'bg-sifrah-cyan', badge: 'bg-sifrah-cyan/20 text-sifrah-cyan' } :
              insight.source === 'TikTok' ? { bg: 'bg-sifrah-emerald/10', text: 'text-sifrah-emerald', icon: 'bg-sifrah-emerald', badge: 'bg-sifrah-emerald/20 text-sifrah-textDark' } :
              insight.source === 'Meta' ? { bg: 'bg-sifrah-pink/10', text: 'text-sifrah-pink', icon: 'bg-sifrah-pink', badge: 'bg-sifrah-softPink text-sifrah-pink' } :
              insight.source === 'GA4' ? { bg: 'bg-sifrah-amber/10', text: 'text-sifrah-amber', icon: 'bg-sifrah-amber', badge: 'bg-sifrah-amber/20 text-sifrah-amber' } :
              { bg: 'bg-sifrah-cyan/10', text: 'text-sifrah-cyan', icon: 'bg-sifrah-cyan', badge: 'bg-sifrah-cyan/20 text-sifrah-cyan' };

            const sourceScore =
              insight.source === 'Google Trends' ? scores.search :
              insight.source === 'TikTok' ? scores.trend :
              insight.source === 'Meta' ? scores.social :
              insight.source === 'GA4' ? scores.intent : null;

            const InsightIcon = insight.IconComponent || Lightbulb;

            return (
              <div key={idx} className={`relative ${colorScheme.bg} rounded-xl p-3 sm:p-5 border border-sifrah-border hover:border-sifrah-pink/30 transition-all duration-300`}>
                <div className="flex items-start gap-2 sm:gap-4">
                  <div className={`w-9 h-9 sm:w-12 sm:h-12 ${colorScheme.icon} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <InsightIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                      <p className={`text-[10px] sm:text-xs font-bold ${colorScheme.text} uppercase tracking-wider`}>{insight.source}</p>
                      {sourceScore && (
                        <span className={`${colorScheme.badge} px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold`}>
                          {sourceScore}/10
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-sifrah-textMedium leading-relaxed font-medium">{insight.text}</p>
                  </div>
                </div>
                <div className={`absolute top-0 left-0 w-1 h-full ${colorScheme.icon} rounded-l-xl`}></div>
              </div>
            );
          })}
        </div>

        {/* Multi-Source Analysis - Full Width at Bottom */}
        <div className="relative bg-gradient-to-r from-sifrah-pink/20 to-sifrah-cyan/20 rounded-xl p-3 sm:p-6 border border-sifrah-pink/30">
          <div className="flex items-start gap-2 sm:gap-4">
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-sifrah-pink to-sifrah-cyan rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <Layers className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                <p className="text-xs sm:text-sm font-bold text-sifrah-pink uppercase tracking-wider">{multiSourceInsight.source}</p>
                <span className="bg-sifrah-pink/30 text-sifrah-pink px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold">
                  Consolidado
                </span>
              </div>
              <p className="text-xs sm:text-sm text-sifrah-textMedium leading-relaxed mb-2 sm:mb-3">{multiSourceInsight.text}</p>
              <div className="bg-white/50 rounded-lg p-2 sm:p-3 border border-sifrah-border">
                <p className="text-xs sm:text-sm text-sifrah-emerald font-semibold flex items-start sm:items-center gap-1.5 sm:gap-2">
                  <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span>{multiSourceInsight.recommendation}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-1 sm:w-1.5 h-full bg-gradient-to-b from-sifrah-pink to-sifrah-cyan rounded-l-xl"></div>
        </div>
      </div>

      {/* Google Trends Section */}
      <div className="bg-white rounded-xl shadow-card overflow-hidden border border-sifrah-border">
        <button
          onClick={() => toggleSection('trends')}
          className="w-full bg-sifrah-cyan text-white p-3 sm:p-4 flex items-center justify-between hover:brightness-110 transition"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <Search className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <div className="text-left min-w-0">
              <h3 className="text-sm sm:text-base font-bold">Google Trends</h3>
              <p className="text-[10px] sm:text-xs text-white/80">Keywords accesorios - Score: {scores.search}/10</p>
            </div>
          </div>
          {expandedSections.trends ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
        </button>

        {expandedSections.trends && (
          <div className="p-3 sm:p-6 space-y-3 sm:space-y-4 bg-sifrah-snow">
            <div className="bg-sifrah-cyan/10 border border-sifrah-cyan/30 rounded-lg p-3 sm:p-4 flex gap-2 sm:gap-3">
              <Info className="w-4 h-4 sm:w-5 sm:h-5 text-sifrah-cyan flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-sifrah-textMedium">
                <p className="font-semibold mb-1 text-sifrah-cyan">Cómo se calcula el score:</p>
                <p>Promedio del "interés de búsqueda" (0-100) de keywords de accesorios y bisutería monitoreadas en Perú.</p>
                <p className="mt-2 text-[10px] sm:text-xs text-sifrah-textMedium hidden sm:block">
                  <strong>Fuente:</strong> Google Trends API (Perú) - <strong>Actualización:</strong> Semanal
                </p>
              </div>
            </div>

            <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
              <table className="w-full min-w-[400px]">
                <thead className="bg-sifrah-lightGray border-b border-sifrah-border">
                  <tr>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase">Keyword</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase">Interés</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase">Crec.</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase">Trend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sifrah-border">
                  {[
                    { keyword: 'bisutería lima', interest: 82, growth: '+18%', trend: 'rising' },
                    { keyword: 'accesorios de moda', interest: 78, growth: '+25%', trend: 'rising' },
                    { keyword: 'aretes artesanales', interest: 65, growth: '+32%', trend: 'rising' },
                    { keyword: 'joyería miraflores', interest: 58, growth: '+12%', trend: 'stable' },
                    { keyword: 'collares de moda lima', interest: 52, growth: '+8%', trend: 'stable' },
                    { keyword: 'pulseras personalizadas', interest: 45, growth: '+15%', trend: 'rising' },
                    { keyword: 'accesorios surco', interest: 42, growth: '+22%', trend: 'rising' },
                    { keyword: 'regalo accesorios mujer', interest: 38, growth: '+10%', trend: 'stable' },
                  ].map((kw, idx) => (
                    <tr key={idx} className="hover:bg-sifrah-lightGray/50 transition">
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-sifrah-textDark">{kw.keyword}</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                        <span className="text-xs sm:text-sm font-bold text-sifrah-cyan">{kw.interest}/100</span>
                      </td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                        <span className="text-xs sm:text-sm font-bold text-sifrah-emerald">{kw.growth}</span>
                      </td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                        <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-full ${
                          kw.trend === 'rising' ? 'bg-sifrah-emerald/20 text-sifrah-emerald' : 'bg-sifrah-lightGray text-sifrah-textMedium'
                        }`}>
                          {kw.trend === 'rising' ? '↑' : '—'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* TikTok Section */}
      <div className="bg-white rounded-xl shadow-card overflow-hidden border border-sifrah-border">
        <button
          onClick={() => toggleSection('tiktok')}
          className="w-full bg-sifrah-emerald text-white p-3 sm:p-4 flex items-center justify-between hover:brightness-110 transition"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <Video className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <div className="text-left min-w-0">
              <h3 className="text-sm sm:text-base font-bold">TikTok Creative Center</h3>
              <p className="text-[10px] sm:text-xs text-white/80">Hashtags virales - Score: {scores.trend}/10</p>
            </div>
          </div>
          {expandedSections.tiktok ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
        </button>

        {expandedSections.tiktok && (
          <div className="p-3 sm:p-6 space-y-4 sm:space-y-6 bg-sifrah-snow">
            <div className="bg-sifrah-emerald/10 border border-sifrah-emerald/30 rounded-lg p-3 sm:p-4 flex gap-2 sm:gap-3">
              <Info className="w-4 h-4 sm:w-5 sm:h-5 text-sifrah-emerald flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-sifrah-textMedium">
                <p className="font-semibold mb-1 text-sifrah-emerald">Cómo se calcula el score:</p>
                <p>Promedio del "relevance score" (0-100) de hashtags de accesorios y moda virales.</p>
              </div>
            </div>

            {/* Hashtags Table */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-sifrah-textDark mb-2 sm:mb-3 flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sifrah-emerald" />
                Hashtags Trending Accesorios
              </h4>
              <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
                <table className="w-full min-w-[450px]">
                  <thead className="bg-sifrah-lightGray border-b border-sifrah-border">
                    <tr>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase">Hashtag</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase">Views</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase hidden sm:table-cell">Posts</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase">Crec.</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase">Región</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sifrah-border">
                    {tiktokHashtags.map((tag, idx) => (
                      <tr key={idx} className="hover:bg-sifrah-lightGray/50 transition">
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-sifrah-textDark">{tag.hashtag}</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm font-bold text-sifrah-emerald">{tag.views}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center hidden sm:table-cell">
                          <span className="text-xs sm:text-sm text-sifrah-textMedium">{tag.posts}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm font-bold text-sifrah-emerald">{tag.growth}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className={`inline-flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-full ${
                            tag.region === 'Perú' ? 'bg-sifrah-emerald/20 text-sifrah-emerald' :
                            tag.region === 'LATAM' ? 'bg-sifrah-softPink text-sifrah-pink' :
                            'bg-sifrah-lightGray text-sifrah-textMedium'
                          }`}>
                            <Globe className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            <span className="hidden sm:inline">{tag.region}</span>
                            <span className="sm:hidden">{tag.region === 'Global' ? 'GL' : tag.region === 'LATAM' ? 'LA' : 'PE'}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Trending Sounds */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-sifrah-textDark mb-2 sm:mb-3 flex items-center gap-2">
                <Music className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sifrah-emerald" />
                Sonidos Trending para Fashion Content
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
                {tiktokSounds.map((sound, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-3 sm:p-4 border border-sifrah-emerald/20 hover:border-sifrah-emerald/40 transition shadow-card">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-sifrah-emerald rounded-lg flex items-center justify-center flex-shrink-0">
                        <Music className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-xs sm:text-sm font-semibold text-sifrah-textDark truncate">{sound.name}</h5>
                        <p className="text-[10px] sm:text-xs text-sifrah-textMedium">{sound.type}</p>
                        <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
                          <span className="text-[10px] sm:text-xs font-medium text-sifrah-emerald">{sound.usage}</span>
                          <span className="text-[10px] sm:text-xs text-sifrah-pink">{sound.trend}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Meta Section */}
      <div className="bg-white rounded-xl shadow-card overflow-hidden border border-sifrah-border">
        <button
          onClick={() => toggleSection('meta')}
          className="w-full bg-sifrah-pink text-white p-3 sm:p-4 flex items-center justify-between hover:brightness-110 transition"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <Share2 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <div className="text-left min-w-0">
              <h3 className="text-sm sm:text-base font-bold">Meta/Facebook Trends</h3>
              <p className="text-[10px] sm:text-xs text-white/80">Redes sociales - Score: {scores.social}/10</p>
            </div>
          </div>
          {expandedSections.meta ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
        </button>

        {expandedSections.meta && (
          <div className="p-3 sm:p-6 space-y-4 sm:space-y-6 bg-sifrah-snow">
            <div className="bg-sifrah-pink/10 border border-sifrah-pink/30 rounded-lg p-3 sm:p-4 flex gap-2 sm:gap-3">
              <Info className="w-4 h-4 sm:w-5 sm:h-5 text-sifrah-pink flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-sifrah-textMedium">
                <p className="font-semibold mb-1 text-sifrah-pink">Cómo se calcula el score:</p>
                <p>Promedio del "engagement score" (0-10) de temas de accesorios y moda en Facebook e Instagram.</p>
              </div>
            </div>

            {/* Topics Table */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-sifrah-textDark mb-2 sm:mb-3 flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sifrah-pink" />
                Temas Trending en Redes Sociales
              </h4>
              <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
                <table className="w-full min-w-[500px]">
                  <thead className="bg-sifrah-lightGray border-b border-sifrah-border">
                    <tr>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase">Tema</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase">Menc.</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase">Eng.</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase">Sent.</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase">Crec.</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase hidden lg:table-cell">Marcas</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sifrah-border">
                    {metaTopics.map((topic, idx) => (
                      <tr key={idx} className="hover:bg-sifrah-lightGray/50 transition">
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-sifrah-textDark">{topic.topic}</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm font-bold text-sifrah-pink">{(topic.mentions / 1000).toFixed(0)}K</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm font-bold text-sifrah-textDark">{topic.engagement}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-full ${
                            topic.sentiment >= 80 ? 'bg-sifrah-emerald/20 text-sifrah-emerald' :
                            topic.sentiment >= 60 ? 'bg-sifrah-amber/20 text-sifrah-amber' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {topic.sentiment}%
                          </span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm font-bold text-sifrah-emerald">{topic.growth}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-sifrah-textMedium hidden lg:table-cell">{topic.brands}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Ad Performance */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-sifrah-textDark mb-2 sm:mb-3 flex items-center gap-2">
                <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sifrah-pink" />
                Rendimiento de Campañas Meta Ads
              </h4>
              <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
                <table className="w-full min-w-[500px]">
                  <thead className="bg-sifrah-lightGray border-b border-sifrah-border">
                    <tr>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase">Campaña</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase hidden sm:table-cell">Platf.</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase">Alcance</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase hidden sm:table-cell">Clicks</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase">CTR</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase">CPL</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sifrah-border">
                    {metaAdPerformance.map((ad, idx) => (
                      <tr key={idx} className="hover:bg-sifrah-lightGray/50 transition">
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-sifrah-textDark">{ad.campaign}</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm text-sifrah-textMedium hidden sm:table-cell">{ad.platform}</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm text-sifrah-textDark">{(ad.reach / 1000).toFixed(0)}K</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center hidden sm:table-cell">
                          <span className="text-xs sm:text-sm text-sifrah-textDark">{ad.clicks.toLocaleString()}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className={`text-xs sm:text-sm font-bold ${ad.ctr >= 1.5 ? 'text-sifrah-emerald' : 'text-sifrah-amber'}`}>{ad.ctr}%</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className={`text-xs sm:text-sm font-bold ${ad.cpl <= 12 ? 'text-sifrah-emerald' : ad.cpl <= 18 ? 'text-sifrah-amber' : 'text-red-400'}`}>${ad.cpl}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-full ${
                            ad.status === 'Activo' ? 'bg-sifrah-emerald/20 text-sifrah-emerald' : 'bg-sifrah-lightGray text-sifrah-textMedium'
                          }`}>
                            {ad.status === 'Activo' ? '●' : '○'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* GA4 Section */}
      <div className="bg-white rounded-xl shadow-card overflow-hidden border border-sifrah-border">
        <button
          onClick={() => toggleSection('ga4')}
          className="w-full bg-sifrah-amber text-white p-3 sm:p-4 flex items-center justify-between hover:brightness-110 transition"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <div className="text-left min-w-0">
              <h3 className="text-sm sm:text-base font-bold">Google Analytics 4</h3>
              <p className="text-[10px] sm:text-xs text-white/80">Conversión - Score: {scores.intent}/10</p>
            </div>
          </div>
          {expandedSections.ga4 ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
        </button>

        {expandedSections.ga4 && (
          <div className="p-3 sm:p-6 space-y-4 sm:space-y-6 bg-sifrah-snow">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
              <div className="bg-white rounded-lg p-3 sm:p-4 shadow-card border border-sifrah-border">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sifrah-textMedium" />
                  <p className="text-[10px] sm:text-xs text-sifrah-textMedium">Usuarios</p>
                </div>
                <p className="text-lg sm:text-xl font-bold text-sifrah-textDark">68.5K</p>
                <p className="text-[10px] sm:text-xs text-sifrah-emerald">+28%</p>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-4 shadow-card border border-sifrah-border">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sifrah-textMedium" />
                  <p className="text-[10px] sm:text-xs text-sifrah-textMedium">Sesiones</p>
                </div>
                <p className="text-lg sm:text-xl font-bold text-sifrah-textDark">85.2K</p>
                <p className="text-[10px] sm:text-xs text-sifrah-emerald">+32%</p>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-4 shadow-card border border-sifrah-border">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sifrah-textMedium" />
                  <p className="text-[10px] sm:text-xs text-sifrah-textMedium">Compras</p>
                </div>
                <p className="text-lg sm:text-xl font-bold text-sifrah-pink">1,850</p>
                <p className="text-[10px] sm:text-xs text-sifrah-emerald">+45%</p>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-4 shadow-card border border-sifrah-border">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sifrah-textMedium" />
                  <p className="text-[10px] sm:text-xs text-sifrah-textMedium">Conv.</p>
                </div>
                <p className="text-lg sm:text-xl font-bold text-sifrah-emerald">2.7%</p>
                <p className="text-[10px] sm:text-xs text-sifrah-textMedium">Meta: 2.5%</p>
              </div>
            </div>

            {/* Device & Traffic Source */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white rounded-lg p-3 sm:p-4 shadow-card border border-sifrah-border">
                <h4 className="text-xs sm:text-sm font-semibold text-sifrah-textDark mb-2 sm:mb-3 flex items-center gap-2">
                  <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sifrah-amber" />
                  Dispositivos
                </h4>
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-sifrah-textMedium">Mobile</span>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-20 sm:w-32 h-1.5 sm:h-2 bg-sifrah-lightGray rounded-full overflow-hidden">
                        <div className="h-full bg-sifrah-pink rounded-full" style={{ width: '78%' }}></div>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-sifrah-textDark w-8 text-right">78%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-sifrah-textMedium">Desktop</span>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-20 sm:w-32 h-1.5 sm:h-2 bg-sifrah-lightGray rounded-full overflow-hidden">
                        <div className="h-full bg-sifrah-cyan rounded-full" style={{ width: '18%' }}></div>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-sifrah-textDark w-8 text-right">18%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-sifrah-textMedium">Tablet</span>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-20 sm:w-32 h-1.5 sm:h-2 bg-sifrah-lightGray rounded-full overflow-hidden">
                        <div className="h-full bg-sifrah-emerald rounded-full" style={{ width: '4%' }}></div>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-sifrah-textDark w-8 text-right">4%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-3 sm:p-4 shadow-card border border-sifrah-border">
                <h4 className="text-xs sm:text-sm font-semibold text-sifrah-textDark mb-2 sm:mb-3 flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sifrah-amber" />
                  Fuentes de Tráfico
                </h4>
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-sifrah-textMedium">Social Media</span>
                    <span className="text-xs sm:text-sm font-bold text-sifrah-pink">35%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-sifrah-textMedium">Orgánico</span>
                    <span className="text-xs sm:text-sm font-bold text-sifrah-textDark">28%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-sifrah-textMedium">Paid</span>
                    <span className="text-xs sm:text-sm font-bold text-sifrah-textDark">25%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-sifrah-textMedium">Directo</span>
                    <span className="text-xs sm:text-sm font-bold text-sifrah-textDark">8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-sifrah-textMedium">Referencia</span>
                    <span className="text-xs sm:text-sm font-bold text-sifrah-textDark">4%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pages Table */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-sifrah-textDark mb-2 sm:mb-3 flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sifrah-amber" />
                Páginas del Sitio Web Sifrah
              </h4>
              <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
                <table className="w-full min-w-[550px]">
                  <thead className="bg-sifrah-lightGray border-b border-sifrah-border">
                    <tr>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase">Página</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase">Vistas</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase hidden sm:table-cell">Tiempo</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase hidden lg:table-cell">Rebote</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase">Conv.</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sifrah-textMedium uppercase">Tasa</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sifrah-border">
                    {ga4Pages.slice(0, 6).map((page, idx) => (
                      <tr key={idx} className="hover:bg-sifrah-lightGray/50 transition">
                        <td className="px-2 sm:px-4 py-2 sm:py-3">
                          <div>
                            <p className="text-xs sm:text-sm font-medium text-sifrah-textDark truncate max-w-[120px] sm:max-w-none">{page.title}</p>
                            <p className="text-[10px] sm:text-xs text-sifrah-textMedium hidden sm:block">{page.page}</p>
                          </div>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm text-sifrah-textDark">{(page.views / 1000).toFixed(1)}K</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center hidden sm:table-cell">
                          <span className="text-xs sm:text-sm text-sifrah-textDark">{page.avgTime}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center hidden lg:table-cell">
                          <span className={`text-xs sm:text-sm ${page.bounceRate <= 30 ? 'text-sifrah-emerald' : page.bounceRate <= 40 ? 'text-sifrah-amber' : 'text-red-400'}`}>{page.bounceRate}%</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm font-bold text-sifrah-pink">{page.conversions}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className={`text-xs sm:text-sm font-bold ${page.convRate >= 2.5 ? 'text-sifrah-emerald' : 'text-sifrah-textDark'}`}>{page.convRate}%</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Keywords Reference */}
      <div className="bg-sifrah-pink rounded-xl p-4 sm:p-6 text-white">
        <h3 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 flex items-center gap-2">
          <Gem className="w-5 h-5 sm:w-6 sm:h-6" />
          Keywords Monitoreadas - Sifrah Perú
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div>
            <p className="text-xs sm:text-sm text-white/70 mb-1.5 sm:mb-2 font-semibold">Marca Sifrah:</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 rounded-full text-xs sm:text-sm">Sifrah</span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 rounded-full text-xs sm:text-sm">Sifrah Perú</span>
            </div>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-white/70 mb-1.5 sm:mb-2 font-semibold">Mercado Accesorios:</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 rounded-full text-xs sm:text-sm">Bisutería Lima</span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 rounded-full text-xs sm:text-sm">Accesorios moda</span>
            </div>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-white/70 mb-1.5 sm:mb-2 font-semibold">Competencia:</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 rounded-full text-xs sm:text-sm">Isadora</span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 rounded-full text-xs sm:text-sm">Tous Perú</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
