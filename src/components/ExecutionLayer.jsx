import { useState } from 'react';
import { DollarSign, TrendingUp, Target, Zap, Calendar, PlayCircle, AlertTriangle, ShoppingBag, ChevronDown, ChevronUp, MessageCircle, Rocket, CheckCircle, ArrowRight, AlertCircle, FileText, Globe, Star, Lightbulb, CalendarDays } from 'lucide-react';
import { BUDGET_ALLOCATION, SERVICIOS_PERFORMANCE, SEDES_PERFORMANCE } from '../data/mockData';
import { LAYER_CONFIG } from '../data/config';

export default function ExecutionLayer() {
  // Helper function to get monthly period (1st to today)
  const getMonthlyPeriod = () => {
    const now = new Date();
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return `1-${now.getDate()} ${monthNames[now.getMonth()]} ${now.getFullYear()}`;
  };

  const monthlyPeriod = getMonthlyPeriod();

  const [showAllServicios, setShowAllServicios] = useState(false);

  const getStatusColor = (status) => {
    if (status === 'overperforming') return { bg: 'bg-sifrah-emerald/10', border: 'border-sifrah-emerald/30', text: 'text-sifrah-emerald', badge: 'bg-sifrah-emerald/20' };
    if (status === 'performing') return { bg: 'bg-sifrah-cyan/10', border: 'border-sifrah-cyan/30', text: 'text-sifrah-cyan', badge: 'bg-sifrah-cyan/20' };
    if (status === 'ontrack') return { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400', badge: 'bg-yellow-500/20' };
    return { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400', badge: 'bg-red-500/20' };
  };

  const getStatusIcon = (status) => {
    if (status === 'overperforming') return <Rocket className="w-2.5 h-2.5 sm:w-3 sm:h-3" />;
    if (status === 'performing') return <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3" />;
    if (status === 'ontrack') return <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />;
    return <AlertCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3" />;
  };

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 lg:p-6 border border-sifrah-border">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-sifrah-textDark mb-1 sm:mb-2">
              {LAYER_CONFIG.execution.name}
            </h2>
            <p className="text-xs sm:text-sm text-sifrah-textMedium">
              {LAYER_CONFIG.execution.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-sifrah-emerald/20 text-sifrah-emerald px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg">
              <CalendarDays className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">{monthlyPeriod}</span>
            </div>
            <span className="px-2 sm:px-3 py-1 bg-sifrah-emerald text-white rounded-full text-xs sm:text-sm font-medium flex items-center gap-1">
              <PlayCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              Live
            </span>
          </div>
        </div>
      </div>

      {/* Budget Overview */}
      <div className="bg-sifrah-pink text-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
              <DollarSign className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold">Presupuesto Mensual Sifrah</h3>
              <p className="text-white/90 mt-0.5 sm:mt-1 text-xs sm:text-sm">Distribucion inteligente por canal digital</p>
            </div>
          </div>

          <div className="text-left sm:text-center lg:text-right">
            <div className="flex items-baseline gap-1 sm:gap-2">
              <span className="text-base sm:text-lg lg:text-xl text-white/80">$</span>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">{(BUDGET_ALLOCATION.total_budget / 1000).toFixed(0)}K</span>
            </div>
            <p className="text-white/80 mt-1 sm:mt-2 text-xs sm:text-sm">Total presupuesto mensual</p>
          </div>
        </div>

        {/* Budget Progress */}
        <div className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
            <span className="text-xs sm:text-sm font-medium">Ejecucion del mes</span>
            <span className="text-lg sm:text-xl font-bold">
              ${(Object.values(BUDGET_ALLOCATION.distribution).reduce((sum, ch) => sum + ch.amount, 0)).toLocaleString()}
            </span>
          </div>
          <div className="w-full h-2 sm:h-3 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: '100%' }}></div>
          </div>
          <p className="text-xs text-white/70 mt-1.5 sm:mt-2">100% del presupuesto asignado</p>
        </div>
      </div>

      {/* Budget Allocation by Channel */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 lg:p-6 border border-sifrah-border">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sifrah-cyan rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
            <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-sifrah-textDark">Distribucion por Canal Digital</h3>
            <p className="text-xs sm:text-sm text-sifrah-textMedium">Performance y asignacion para awareness, ecommerce y retail</p>
          </div>
        </div>

        <div className="grid gap-3 sm:gap-4">
          {Object.entries(BUDGET_ALLOCATION.distribution).map(([key, channel]) => {
            const colors = getStatusColor(channel.status);
            return (
              <div key={key} className={`p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl border-2 ${colors.bg} ${colors.border}`}>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                      <h4 className="font-bold text-sifrah-textDark text-sm sm:text-base">
                        {key === 'meta_ads' ? 'Meta Ads (FB + IG)' :
                         key === 'google_search' ? 'Google Search' :
                         key === 'tiktok_ads' ? 'TikTok Ads' :
                         key === 'google_display' ? 'Google Display' :
                         key === 'influencers' ? 'Influencers' : key}
                      </h4>
                      <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold flex items-center gap-1 ${colors.badge} ${colors.text}`}>
                        {getStatusIcon(channel.status)} {channel.status.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-sifrah-textMedium mb-2 sm:mb-3">
                      <strong>KPI Principal:</strong> {channel.kpi}
                    </p>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
                      <div>
                        <p className="text-sifrah-textMedium">Target</p>
                        <p className="font-semibold text-sifrah-textDark">{channel.target}</p>
                      </div>
                      <div>
                        <p className="text-sifrah-textMedium">Performance Actual</p>
                        <p className={`font-semibold ${colors.text}`}>{channel.current_performance}</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-left sm:text-center lg:text-right lg:min-w-[180px] pt-2 sm:pt-0 border-t sm:border-t-0 border-sifrah-border lg:border-none">
                    <div className="flex lg:flex-col items-center lg:items-end gap-2 lg:gap-0">
                      <div className="lg:mb-2">
                        <span className="text-lg sm:text-xl lg:text-2xl font-bold text-sifrah-textDark">{channel.percentage}%</span>
                      </div>
                      <div className="text-base sm:text-lg lg:text-xl font-bold text-sifrah-pink lg:mb-1">
                        ${channel.amount.toLocaleString()}
                      </div>
                    </div>
                    <p className="text-[10px] sm:text-xs text-sifrah-textMedium hidden lg:block">del presupuesto total</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-3 sm:mt-4">
                  <div className="w-full h-1.5 sm:h-2 bg-sifrah-lightGray rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        channel.status === 'overperforming' ? 'bg-sifrah-emerald' :
                        channel.status === 'performing' ? 'bg-sifrah-cyan' :
                        channel.status === 'ontrack' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${channel.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Optimization Recommendations */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 lg:p-6 border border-sifrah-border">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sifrah-amber rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-sifrah-textDark">Recomendaciones de Optimizacion</h3>
            <p className="text-xs sm:text-sm text-sifrah-textMedium">Ajustes sugeridos basados en performance</p>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {BUDGET_ALLOCATION.recommendations.map((rec, idx) => (
            <div key={idx} className={`p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl border-2 ${
              rec.type === 'increase' ? 'bg-sifrah-emerald/10 border-sifrah-emerald/30' :
              rec.type === 'decrease' ? 'bg-red-500/10 border-red-500/30' :
              'bg-sifrah-cyan/10 border-sifrah-cyan/30'
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold ${
                    rec.type === 'increase' ? 'bg-sifrah-emerald/30 text-sifrah-emerald' :
                    rec.type === 'decrease' ? 'bg-red-500/30 text-red-400' :
                    'bg-sifrah-cyan/30 text-sifrah-cyan'
                  }`}>
                    {rec.type === 'increase' ? 'AUMENTAR' :
                     rec.type === 'decrease' ? 'REDUCIR' : 'MANTENER'}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-sifrah-textDark uppercase">
                    {rec.channel === 'tiktok_ads' ? 'TikTok Ads' :
                     rec.channel === 'meta_ads' ? 'Meta Ads' :
                     rec.channel === 'google_display' ? 'Google Display' : rec.channel}
                  </span>
                </div>
                {rec.from && rec.to && (
                  <div className="text-left sm:text-right">
                    <span className="text-[10px] sm:text-xs text-sifrah-textMedium">Cambio</span>
                    <p className="font-bold text-sifrah-textDark text-sm sm:text-base">{rec.from}% → {rec.to}%</p>
                  </div>
                )}
              </div>

              <p className="text-sifrah-textDark font-medium text-xs sm:text-sm lg:text-base mb-2">{rec.reason}</p>
              {rec.impact && (
                <p className="text-xs sm:text-sm text-sifrah-emerald font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                  Impacto: {rec.impact}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Servicios Performance */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 lg:p-6 border border-sifrah-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sifrah-pink rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-sifrah-textDark">Performance por Linea de Producto</h3>
              <p className="text-xs sm:text-sm text-sifrah-textMedium">Rendimiento de campana por categoria de producto</p>
            </div>
          </div>
          <button
            onClick={() => setShowAllServicios(!showAllServicios)}
            className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-sifrah-pink text-white rounded-lg hover:bg-sifrah-darkPink transition-colors text-xs sm:text-sm font-medium w-full sm:w-auto"
          >
            {showAllServicios ? (
              <>
                <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" />
                Mostrar top 4
              </>
            ) : (
              <>
                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                Mostrar todos ({SERVICIOS_PERFORMANCE.length})
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {SERVICIOS_PERFORMANCE
            .slice(0, showAllServicios ? SERVICIOS_PERFORMANCE.length : 4)
            .map((servicio, idx) => {
            return (
              <div key={servicio.id} className={`p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl border-2 ${
                idx < 2 ? 'bg-sifrah-softPink border-sifrah-pink/30' : 'bg-sifrah-snow border-sifrah-border'
              }`}>
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h4 className="font-bold text-sifrah-textDark text-sm sm:text-base">{servicio.nombre}</h4>
                  {idx < 2 && (
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-sifrah-softPink text-sifrah-pink flex items-center gap-1">
                      <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> TOP
                    </span>
                  )}
                </div>

                <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-sifrah-textMedium">Ventas Ecommerce</span>
                    <span className="font-semibold text-sifrah-textDark">{servicio.ventas_ecommerce}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-sifrah-textMedium">Ordenes</span>
                    <span className="font-semibold text-sifrah-emerald">{servicio.ecommerce.orders}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-sifrah-textMedium">CPA</span>
                    <span className="font-semibold text-sifrah-pink">${servicio.ecommerce.cpa}</span>
                  </div>
                </div>

                {/* Ecommerce Metrics */}
                <div className="pt-2 sm:pt-3 border-t border-sifrah-border mb-2 sm:mb-3">
                  <p className="text-[10px] sm:text-xs font-semibold text-sifrah-textMedium mb-1.5 sm:mb-2 flex items-center gap-1">
                    <ShoppingBag className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Ecommerce
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[10px] sm:text-xs">
                    <div>
                      <p className="text-sifrah-textMedium">Conv. Rate</p>
                      <p className="font-semibold text-sifrah-emerald">{servicio.ecommerce.conversion_rate}%</p>
                    </div>
                    <div>
                      <p className="text-sifrah-textMedium">Ticket Prom.</p>
                      <p className="font-semibold text-sifrah-textDark">S/{servicio.avg_ticket}</p>
                    </div>
                  </div>
                </div>

                {/* Retail Metrics */}
                <div className="pt-2 sm:pt-3 border-t border-sifrah-border">
                  <p className="text-[10px] sm:text-xs font-semibold text-sifrah-textMedium mb-1.5 sm:mb-2 flex items-center gap-1">
                    <Globe className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-sifrah-emerald" />
                    Retail (Tiendas)
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[10px] sm:text-xs">
                    <div>
                      <p className="text-sifrah-textMedium">Alcance</p>
                      <p className="font-semibold text-sifrah-textDark">{(servicio.retail.alcance / 1000).toFixed(0)}K</p>
                    </div>
                    <div>
                      <p className="text-sifrah-textMedium">Impresiones</p>
                      <p className="font-semibold text-sifrah-emerald">{(servicio.retail.impresiones / 1000000).toFixed(1)}M</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Timing Recommendations */}
      <div className="bg-sifrah-cyan text-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <Calendar className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
          <h3 className="text-base sm:text-lg font-bold">Timing Optimo de Campana</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5">
            <h4 className="font-bold text-sm sm:text-base mb-2 sm:mb-3">Mejores horarios del dia</h4>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                <span className="text-white/90 text-xs sm:text-sm">10:00 - 1:00 PM (Mid-morning)</span>
                <span className="px-2 py-0.5 sm:py-1 bg-white/20 rounded text-xs sm:text-sm font-bold w-fit">+35%</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                <span className="text-white/90 text-xs sm:text-sm">1:00 - 3:00 PM (Lunch break)</span>
                <span className="px-2 py-0.5 sm:py-1 bg-white/20 rounded text-xs sm:text-sm font-bold w-fit">+20%</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                <span className="text-white/90 text-xs sm:text-sm">7:00 - 10:00 PM (Noche)</span>
                <span className="px-2 py-0.5 sm:py-1 bg-sifrah-emerald/30 rounded text-xs sm:text-sm font-bold w-fit">+55%</span>
              </div>
            </div>
            <p className="text-[10px] sm:text-xs text-white/70 mt-2 sm:mt-3">Pico maximo: 7-10 PM navegacion nocturna</p>
          </div>

          <div className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5">
            <h4 className="font-bold text-sm sm:text-base mb-2 sm:mb-3">Mejores dias de la semana</h4>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                <span className="text-white/90 text-xs sm:text-sm">Viernes</span>
                <span className="px-2 py-0.5 sm:py-1 bg-sifrah-emerald/30 rounded text-xs sm:text-sm font-bold w-fit">Muy Alta</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                <span className="text-white/90 text-xs sm:text-sm">Sabado</span>
                <span className="px-2 py-0.5 sm:py-1 bg-white/20 rounded text-xs sm:text-sm font-bold w-fit">Alta</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                <span className="text-white/90 text-xs sm:text-sm">Miercoles</span>
                <span className="px-2 py-0.5 sm:py-1 bg-white/20 rounded text-xs sm:text-sm font-bold w-fit">Media</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white/20 rounded-lg sm:rounded-xl">
          <p className="text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
            <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4" /> Estacionalidad Sifrah:
          </p>
          <p className="text-xs sm:text-sm">Mayo (Dia de la Madre - pico maximo), Dic-Ene (Navidad/Ano Nuevo), Jul (Fiestas Patrias), Feb (San Valentin). Marzo es el mes mas bajo - reducir budget 20%.</p>
        </div>
      </div>
    </div>
  );
}
