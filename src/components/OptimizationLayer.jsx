import { TrendingUp, BarChart3, RefreshCw, Award, Target, Users, Heart, AlertCircle, ShoppingBag, Globe, FileText, CheckCircle, Lightbulb, Activity, ShoppingCart, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { PERFORMANCE_KPIS, ALERTS, COMPETITOR_INSIGHTS } from '../data/mockData';
import { LAYER_CONFIG } from '../data/config';

export default function OptimizationLayer() {
  // Helper function to get monthly period (1st to today)
  const getMonthlyPeriod = () => {
    const now = new Date();
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return `1-${now.getDate()} ${monthNames[now.getMonth()]} ${now.getFullYear()}`;
  };

  const monthlyPeriod = getMonthlyPeriod();

  // Performance últimos 7 días - Sifrah Accessories
  const performanceData = [
    { date: '14 Ene', trafico: 4200, reach: 340000, interacciones: 32500, spent: 3280 },
    { date: '15 Ene', trafico: 5100, reach: 385000, interacciones: 38200, spent: 3520 },
    { date: '16 Ene', trafico: 4600, reach: 360000, interacciones: 35100, spent: 3380 },
    { date: '17 Ene', trafico: 6300, reach: 410000, interacciones: 42800, spent: 3680 },
    { date: '18 Ene', trafico: 5800, reach: 395000, interacciones: 39600, spent: 3580 },
    { date: '19 Ene', trafico: 7200, reach: 445000, interacciones: 48500, spent: 3850 },
    { date: '20 Ene', trafico: 4900, reach: 375000, interacciones: 36200, spent: 3420 }
  ];

  // Channel performance distribution - Sifrah
  const channelData = [
    { name: 'Meta Ads', value: 40, trafico: 4800, color: '#ef008f' },
    { name: 'Google Search', value: 30, trafico: 3600, color: '#00D4FF' },
    { name: 'TikTok Ads', value: 15, trafico: 1800, color: '#10B981' },
    { name: 'Display', value: 10, trafico: 1200, color: '#F59E0B' },
    { name: 'Influencers', value: 5, trafico: 600, color: '#14B8A6' }
  ];

  // Funnel de conversión Sifrah - Ecommerce Journey
  const funnelSteps = [
    { stage: 'Alcance', value: 2500000, conversionRate: 3.5, IconComponent: Users, bgColor: 'bg-sifrah-pink' },
    { stage: 'Tráfico', value: 87500, conversionRate: 5.5, IconComponent: Globe, bgColor: 'bg-sifrah-darkPink' },
    { stage: 'Carrito', value: 4812, conversionRate: 48.0, IconComponent: ShoppingCart, bgColor: 'bg-sifrah-cyan' },
    { stage: 'Compra', value: 2310, conversionRate: null, IconComponent: CheckCircle, bgColor: 'bg-sifrah-emerald' }
  ];

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 lg:p-6 border border-sifrah-border">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-sifrah-textDark mb-1 sm:mb-2">
              {LAYER_CONFIG.optimization.name}
            </h2>
            <p className="text-xs sm:text-sm text-sifrah-textMedium">
              {LAYER_CONFIG.optimization.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-sifrah-amber/20 text-sifrah-amber px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">{monthlyPeriod}</span>
            </div>
            <span className="px-2 sm:px-3 py-1 bg-sifrah-pink text-white rounded-full text-xs sm:text-sm font-medium flex items-center gap-1">
              <RefreshCw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Auto-optimización activa</span>
              <span className="sm:hidden">Activa</span>
            </span>
          </div>
        </div>
      </div>

      {/* KPIs Principales */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {/* Alcance Total */}
        <div className="bg-sifrah-pink text-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
            <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold ${
              PERFORMANCE_KPIS.alcance.trend === 'up' ? 'bg-sifrah-emerald text-white' : 'bg-red-400'
            }`}>
              {PERFORMANCE_KPIS.alcance.change}%
            </span>
          </div>
          <h3 className="text-xs sm:text-sm font-medium text-white/80 mb-0.5 sm:mb-1">Alcance Total</h3>
          <p className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{(PERFORMANCE_KPIS.alcance.current / 1000000).toFixed(1)}M</p>
          <div className="flex items-baseline gap-2">
            <span className="text-xs sm:text-sm text-white/70">Impresiones: {(PERFORMANCE_KPIS.impresiones.current / 1000000).toFixed(1)}M</span>
          </div>
          <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-white/20">
            <div className="flex justify-between text-xs">
              <span className="text-white/70">Frecuencia</span>
              <span className="font-bold">{PERFORMANCE_KPIS.frecuencia.current}</span>
            </div>
          </div>
        </div>

        {/* Ventas Ecommerce */}
        <div className="bg-sifrah-cyan text-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
            <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold ${
              PERFORMANCE_KPIS.conversiones_ecommerce.trend === 'up' ? 'bg-sifrah-emerald text-white' : 'bg-red-400'
            }`}>
              {PERFORMANCE_KPIS.conversiones_ecommerce.change}%
            </span>
          </div>
          <h3 className="text-xs sm:text-sm font-medium text-white/80 mb-0.5 sm:mb-1">Ventas Ecommerce</h3>
          <p className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{PERFORMANCE_KPIS.conversiones_ecommerce.current.toLocaleString()}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-xs sm:text-sm text-white/70">Conversiones: {PERFORMANCE_KPIS.conversiones_ecommerce.current.toLocaleString()}</span>
          </div>
          <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-white/20">
            <div className="flex justify-between text-xs">
              <span className="text-white/70">CPA Promedio</span>
              <span className="font-bold">${PERFORMANCE_KPIS.cpa_ecommerce.current}</span>
            </div>
          </div>
        </div>

        {/* Ventas Retail */}
        <div className="bg-sifrah-emerald text-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <ShoppingBag className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
            <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold ${
              PERFORMANCE_KPIS.alcance_retail.trend === 'up' ? 'bg-white text-sifrah-emerald' : 'bg-red-400 text-white'
            }`}>
              {PERFORMANCE_KPIS.alcance_retail.change}%
            </span>
          </div>
          <h3 className="text-xs sm:text-sm font-medium text-white/80 mb-0.5 sm:mb-1">Ventas Retail</h3>
          <p className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{(PERFORMANCE_KPIS.alcance_retail.current / 1000000).toFixed(1)}M</p>
          <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
            <span className="text-xs sm:text-sm text-white/70">Alcance tiendas</span>
            <span className="text-xs bg-white/20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">{PERFORMANCE_KPIS.alcance_retail.change}%</span>
          </div>
          <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-white/20">
            <div className="flex justify-between text-xs">
              <span className="text-white/70">Impresiones</span>
              <span className="font-bold">{(PERFORMANCE_KPIS.impresiones_retail.current / 1000000).toFixed(1)}M</span>
            </div>
          </div>
        </div>

        {/* Inversión */}
        <div className="bg-white text-sifrah-textDark rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg border border-sifrah-border">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-sifrah-pink" />
            <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold bg-sifrah-emerald text-white">
              {PERFORMANCE_KPIS.inversion.spent_percentage.toFixed(0)}%
            </span>
          </div>
          <h3 className="text-xs sm:text-sm font-medium text-sifrah-textMedium mb-0.5 sm:mb-1">Inversión Ejecutada</h3>
          <p className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-sifrah-pink">${(PERFORMANCE_KPIS.inversion.total_spent / 1000).toFixed(1)}K</p>
          <div className="flex items-baseline gap-2">
            <span className="text-xs sm:text-sm text-sifrah-textMedium">de ${(PERFORMANCE_KPIS.inversion.total_budget / 1000).toFixed(0)}K total</span>
          </div>
          <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-sifrah-border">
            <div className="flex justify-between text-xs">
              <span className="text-sifrah-textMedium">CPM Promedio</span>
              <span className="font-bold text-sifrah-pink">${PERFORMANCE_KPIS.cpm.current}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Trends */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 lg:p-6 border border-sifrah-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-4 sm:mb-6">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-sifrah-textDark">Performance Ultimos 7 Dias</h3>
            <p className="text-xs sm:text-sm text-sifrah-textMedium">Evolucion de metricas clave</p>
          </div>
          <div className="flex gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-sifrah-pink"></div>
              <span className="text-sifrah-textMedium">Tráfico</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-sifrah-cyan"></div>
              <span className="text-sifrah-textMedium">Interacciones (K)</span>
            </div>
          </div>
        </div>

        <div className="w-full h-[200px] sm:h-[250px] lg:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="date" stroke="#9CA3AF" style={{ fontSize: '10px' }} tick={{ fontSize: 10 }} />
              <YAxis yAxisId="left" stroke="#9CA3AF" style={{ fontSize: '10px' }} tick={{ fontSize: 10 }} width={35} />
              <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" style={{ fontSize: '10px' }} tick={{ fontSize: 10 }} width={35} />
              <Tooltip
                contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #ef008f', borderRadius: '8px', color: '#1a1a2e', fontSize: '12px' }}
                labelStyle={{ fontWeight: 'bold', marginBottom: '8px', color: '#ef008f' }}
              />
              <Line yAxisId="left" type="monotone" dataKey="trafico" stroke="#ef008f" strokeWidth={2} dot={{ r: 3 }} />
              <Line yAxisId="right" type="monotone" dataKey="interacciones" stroke="#00D4FF" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Channel Distribution */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-sifrah-border">
        <h3 className="text-sm sm:text-base font-bold text-sifrah-textDark mb-4 sm:mb-6 lg:mb-8 text-center md:text-left">Distribución de Tráfico por Canal</h3>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-12">
          {/* Pie Chart */}
          <div className="flex-shrink-0 w-full max-w-[280px] sm:max-w-[320px]">
            <ResponsiveContainer width="100%" aspect={1}>
              <PieChart>
                <Pie
                  data={channelData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={false}
                  outerRadius="80%"
                  fill="#8884d8"
                  dataKey="value"
                >
                  {channelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #ef008f', borderRadius: '8px', color: '#1a1a2e', fontSize: '12px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Divider - only visible on desktop */}
          <div className="hidden lg:block w-px h-64 bg-sifrah-border"></div>

          {/* Legend */}
          <div className="flex-1 w-full max-w-md space-y-2 sm:space-y-3">
            {channelData.map((channel, idx) => (
              <div key={idx} className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-sifrah-snow rounded-lg hover:bg-sifrah-lightGray transition-all duration-200 border border-sifrah-border hover:border-sifrah-pink/30">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full flex-shrink-0 shadow-sm" style={{ backgroundColor: channel.color }}></div>
                  <span className="text-xs sm:text-sm font-medium text-sifrah-textDark truncate">{channel.name}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-2 sm:ml-4">
                  <span className="text-xs sm:text-sm font-bold text-sifrah-textDark">{channel.trafico}</span>
                  <span className="text-xs sm:text-sm font-bold text-white bg-sifrah-pink px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md min-w-[40px] sm:min-w-[48px] text-center">
                    {channel.value}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Funnel de Conversion - Responsive */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 lg:p-6 border border-sifrah-border">
        <h3 className="text-sm sm:text-base font-bold text-sifrah-textDark mb-4 sm:mb-6">Funnel de Conversión Ecommerce Sifrah</h3>

        {/* Mobile: Vertical Stack, Desktop: Horizontal Flow */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 sm:gap-3 lg:gap-3 overflow-x-auto pb-2 lg:pb-4">
          {funnelSteps.map((step, idx) => (
            <div key={idx} className="flex flex-row lg:flex-row items-center gap-2 sm:gap-3 flex-shrink-0">
              {/* Step Card */}
              <div className={`${step.bgColor} rounded-lg sm:rounded-xl p-3 sm:p-4 text-white shadow-md flex-1 lg:flex-initial lg:min-w-[120px] xl:min-w-[140px]`}>
                <div className="flex lg:flex-col items-center lg:text-center gap-3 lg:gap-0">
                  <div className="flex-shrink-0 lg:mb-2">
                    <step.IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                  </div>
                  <div className="flex-1 lg:flex-initial">
                    <p className="text-xs font-medium text-white/80 uppercase tracking-wide mb-0.5 sm:mb-1">{step.stage}</p>
                    <p className="text-base sm:text-lg font-bold">{step.value.toLocaleString()}</p>
                  </div>
                  {/* Mobile: Show conversion rate inline */}
                  {idx < funnelSteps.length - 1 && (
                    <div className="lg:hidden flex-shrink-0 text-right">
                      <span className="text-xs sm:text-sm font-bold bg-white/20 px-2 py-1 rounded">{step.conversionRate}%</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Arrow with conversion rate - Desktop only */}
              {idx < funnelSteps.length - 1 && (
                <div className="hidden lg:flex flex-col items-center justify-center min-w-[50px] xl:min-w-[60px]">
                  <div className="text-xs xl:text-sm font-bold text-sifrah-pink mb-1">{step.conversionRate}%</div>
                  <svg className="w-6 h-6 xl:w-8 xl:h-8 text-sifrah-textMedium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-sifrah-border">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-sifrah-softPink rounded-lg p-3 border border-sifrah-border">
              <p className="text-xs text-sifrah-textMedium mb-0.5 sm:mb-1">Conversión Global</p>
              <p className="text-lg sm:text-xl font-bold text-sifrah-pink">0.092%</p>
              <p className="text-xs text-sifrah-textMedium">Alcance → Compra</p>
            </div>
            <div className="bg-sifrah-emerald/10 rounded-lg p-3 border border-sifrah-emerald/20">
              <p className="text-xs text-sifrah-textMedium mb-0.5 sm:mb-1">Carrito → Compra</p>
              <p className="text-lg sm:text-xl font-bold text-sifrah-emerald">48.0%</p>
              <p className="text-xs text-sifrah-textMedium">Excelente conversión</p>
            </div>
            <div className="bg-sifrah-cyan/10 rounded-lg p-3 border border-sifrah-cyan/20">
              <p className="text-xs text-sifrah-textMedium mb-0.5 sm:mb-1">Tráfico → Carrito</p>
              <p className="text-lg sm:text-xl font-bold text-sifrah-cyan">5.5%</p>
              <p className="text-xs text-sifrah-textMedium">Tasa add-to-cart</p>
            </div>
          </div>
        </div>
      </div>

      {/* Alertas Automaticas */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 lg:p-6 border border-sifrah-border">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-sifrah-pink" />
          <h3 className="text-sm sm:text-base font-bold text-sifrah-textDark">Alertas del Mercado de Accesorios</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
          {ALERTS.slice(0, 3).map((alert) => (
            <div key={alert.id} className={`p-3 sm:p-4 rounded-lg border-l-4 ${
              alert.severity === 'high' ? 'bg-red-500/10 border-red-500' :
              alert.severity === 'medium' ? 'bg-yellow-500/10 border-yellow-500' :
              'bg-sifrah-cyan/10 border-sifrah-cyan'
            }`}>
              <div className="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
                <h4 className="font-bold text-sifrah-textDark text-xs sm:text-sm">{alert.title}</h4>
                <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-bold flex-shrink-0 ${
                  alert.severity === 'high' ? 'bg-red-500/30 text-red-600' :
                  alert.severity === 'medium' ? 'bg-yellow-500/30 text-yellow-600' :
                  'bg-sifrah-cyan/30 text-sifrah-cyan'
                }`}>
                  {alert.severity === 'high' ? 'ALTA' : alert.severity === 'medium' ? 'MEDIA' : 'BAJA'}
                </span>
              </div>
              <p className="text-xs text-sifrah-textMedium mb-1.5 sm:mb-2">{alert.message}</p>
              <p className="text-xs font-semibold text-sifrah-pink">
                Accion: {alert.action}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Competitor Analysis */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 lg:p-6 border border-sifrah-border">
        <h3 className="text-sm sm:text-base font-bold text-sifrah-textDark mb-3 sm:mb-4">Análisis de Competencia Accesorios</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {COMPETITOR_INSIGHTS.filter(c => c.brand !== 'Sifrah').map((comp, idx) => (
            <div key={idx} className="p-3 sm:p-4 bg-sifrah-snow border-2 border-sifrah-border rounded-lg hover:border-sifrah-pink/50 transition-colors">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="min-w-0">
                  <h4 className="font-bold text-sifrah-textDark text-sm sm:text-base truncate">{comp.brand}</h4>
                  <p className="text-xs text-sifrah-textMedium">{comp.location}</p>
                </div>
                <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-bold flex-shrink-0 ${
                  comp.threat_level === 'high' ? 'bg-red-500/30 text-red-600' :
                  comp.threat_level === 'medium' ? 'bg-yellow-500/30 text-yellow-600' :
                  'bg-green-500/30 text-green-600'
                }`}>
                  {comp.threat_level === 'high' ? 'Alta' : comp.threat_level === 'medium' ? 'Media' : 'Baja'}
                </span>
              </div>

              <p className="text-xs text-sifrah-textMedium mb-2 sm:mb-3 leading-relaxed line-clamp-2">{comp.description}</p>

              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div>
                  <p className="text-xs text-sifrah-textMedium">Share of Voice</p>
                  <p className="text-sm sm:text-base font-bold text-sifrah-textDark">{comp.share_of_voice}%</p>
                </div>
                <div>
                  <p className="text-xs text-sifrah-textMedium">Sentimiento</p>
                  <p className="text-sm sm:text-base font-bold text-sifrah-cyan">{comp.sentiment}%</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-sifrah-textMedium mb-1">Temas Trending</p>
                <div className="flex flex-wrap gap-1">
                  {comp.trending_topics.slice(0, 3).map((topic, topicIdx) => (
                    <span key={topicIdx} className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-sifrah-lightGray rounded text-xs text-sifrah-textMedium">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sifrah Comparison */}
        <div className="mt-3 sm:mt-4 p-3 sm:p-4 lg:p-5 bg-sifrah-pink text-white rounded-lg sm:rounded-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            <div className="flex-1">
              <h4 className="font-bold text-sm sm:text-base mb-1 flex items-center gap-1.5 sm:gap-2">
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                Sifrah Peru
              </h4>
              <p className="text-xs text-white/70 mb-2">Marca de accesorios y joyería con presencia ecommerce y retail en Perú</p>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <div>
                  <p className="text-xs text-white/70">Share of Voice</p>
                  <p className="text-lg sm:text-xl font-bold">15%</p>
                </div>
                <div>
                  <p className="text-xs text-white/70">Sentimiento</p>
                  <p className="text-lg sm:text-xl font-bold">80%</p>
                </div>
                <div>
                  <p className="text-xs text-white/70">Tiendas</p>
                  <p className="text-lg sm:text-xl font-bold">12</p>
                </div>
              </div>
            </div>
            <div className="sm:text-right">
              <span className="px-2 sm:px-3 py-1.5 sm:py-2 bg-white/20 rounded-lg text-xs sm:text-sm font-bold inline-block">
                Nuestra Marca
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
