import { Target, Users, MessageSquare, TrendingUp, Lightbulb, Zap, AlertCircle, Sparkles, Flame, BarChart3, CheckCircle, FlaskConical, Calendar } from 'lucide-react';
import { OPPORTUNITY_SCORE } from '../data/mockData';
import { LAYER_CONFIG, KEY_MESSAGES, TARGET_AUDIENCES } from '../data/config';

export default function DecisionLayer() {
  // Helper function to get monthly period (1st to today)
  const getMonthlyPeriod = () => {
    const now = new Date();
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return `1-${now.getDate()} ${monthNames[now.getMonth()]} ${now.getFullYear()}`;
  };

  const monthlyPeriod = getMonthlyPeriod();

  const recommendations = [
    {
      priority: 'high',
      category: 'Meta Ads',
      action: 'Aumentar budget TikTok 25% - CPA ecommerce 12% debajo del objetivo, audiencia joven con engagement excepcional en contenido GRWM',
      impact: '+200 ventas ecommerce/mes estimadas de jovenes 18-25',
      confidence: 94
    },
    {
      priority: 'high',
      category: 'Campana',
      action: 'Lanzar "Brilla en San Valentin" - Febrero es pico maximo de demanda de regalos y accesorios (+120% busquedas)',
      impact: '+350 conversiones estimadas primera quincena',
      confidence: 92
    },
    {
      priority: 'medium',
      category: 'Influencers',
      action: 'Activar micro-influencers moda (10-50K) - UGC de styling con accesorios Sifrah tiene 3x engagement',
      impact: '+420K alcance organico estimado',
      confidence: 88
    },
    {
      priority: 'medium',
      category: 'Promocion',
      action: 'Promocion "Envio Gratis + 20% OFF" primera quincena - Capturar demanda San Valentin vs Isadora',
      impact: 'Capturar compradoras sensibles al precio y regaladoras',
      confidence: 85
    },
    {
      priority: 'low',
      category: 'Arequipa',
      action: 'Aumentar budget 20% para Arequipa y Trujillo - CPA $2.65 vs promedio $3.20',
      impact: '+95 ventas ecommerce adicionales/mes en provincias',
      confidence: 78
    }
  ];

  const audiences = TARGET_AUDIENCES.map(aud => ({
    name: aud.name,
    size: aud.size,
    engagement: `${aud.engagement_rate}%`,
    status: 'active',
    description: aud.description + ` - ${aud.interests.slice(0, 3).join(', ')}`,
    message: aud.message,
    age_range: aud.age_range,
    cpl_target: aud.cpl_target
  }));

  const getScoreGrade = (score) => {
    if (score >= 85) return 'A+';
    if (score >= 75) return 'A';
    if (score >= 65) return 'B+';
    if (score >= 55) return 'B';
    return 'C';
  };

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 lg:p-6 border border-sifrah-border">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-sifrah-textDark mb-1 sm:mb-2">
              {LAYER_CONFIG.decision.name}
            </h2>
            <p className="text-sm sm:text-base text-sifrah-textMedium">
              {LAYER_CONFIG.decision.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-sifrah-softPink text-sifrah-pink px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">{monthlyPeriod}</span>
            </div>
            <span className="px-2 sm:px-3 py-1 bg-sifrah-pink text-white rounded-full text-xs sm:text-sm font-medium">
              IA Activa
            </span>
          </div>
        </div>
      </div>

      {/* Sifrah Opportunity Score */}
      <div className="bg-sifrah-pink text-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 mb-4 sm:mb-6 lg:mb-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
              <Zap className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">Sifrah Opportunity Score</h3>
              <p className="text-white/90 mt-0.5 sm:mt-1 text-xs sm:text-sm">Indice de oportunidad para inversion en awareness y ventas de accesorios</p>
            </div>
          </div>

          <div className="text-left sm:text-center lg:text-right w-full sm:w-auto">
            <div className="flex items-baseline gap-1 sm:gap-2">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">{OPPORTUNITY_SCORE.current_score}</span>
              <span className="text-base sm:text-lg lg:text-xl text-white/80">/100</span>
            </div>
            <div className="flex flex-wrap items-center justify-start sm:justify-center lg:justify-end gap-2 sm:gap-3 mt-2">
              <span className={`px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-lg text-sm sm:text-base font-bold ${
                OPPORTUNITY_SCORE.current_score >= 75 ? 'bg-sifrah-emerald text-white' :
                OPPORTUNITY_SCORE.current_score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
              }`}>
                Grado {getScoreGrade(OPPORTUNITY_SCORE.current_score)}
              </span>
              <span className="text-sifrah-emerald font-semibold text-xs sm:text-sm">
                {OPPORTUNITY_SCORE.trend} vs periodo anterior
              </span>
            </div>
          </div>
        </div>

        {/* Score Components */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {Object.entries(OPPORTUNITY_SCORE.components).map(([key, component]) => (
            <div key={key} className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5">
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <h4 className="font-semibold text-xs sm:text-sm text-white/80">
                  {key === 'search_interest' ? 'Interes Busqueda' :
                   key === 'social_engagement' ? 'Engagement Social' :
                   key === 'competitor_gap' ? 'Gap Competitivo' :
                   key === 'seasonal_index' ? 'Indice Estacional' :
                   key === 'conversion_efficiency' ? 'Eficiencia Conversion' : key}
                </h4>
                <span className="text-xs bg-white/20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                  {(component.weight * 100).toFixed(0)}% peso
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{component.score}</div>
              <div className="text-xs text-white/70">
                {component.insight}
              </div>
            </div>
          ))}
        </div>

        {/* Main Recommendation */}
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 lg:p-5 bg-white/20 rounded-lg sm:rounded-xl border-2 border-white/30">
          <div className="flex items-start gap-2 sm:gap-3">
            <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 sm:mt-1" />
            <div className="min-w-0">
              <p className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">Recomendacion automatica:</p>
              <p className="text-sm sm:text-base">{OPPORTUNITY_SCORE.recommendation.message}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                {OPPORTUNITY_SCORE.recommendation.actions.map((action, idx) => (
                  <span key={idx} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 rounded-lg text-xs font-medium">
                    {action}
                  </span>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-white/80 mt-2 sm:mt-3">
                Confianza: {OPPORTUNITY_SCORE.recommendation.confidence} |
                Prioridad: {OPPORTUNITY_SCORE.recommendation.priority.toUpperCase()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Recommendations */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 lg:p-6 border border-sifrah-border">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sifrah-pink rounded-lg sm:rounded-xl flex items-center justify-center">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-sifrah-textDark">Recomendaciones Estrategicas</h3>
            <p className="text-xs sm:text-sm text-sifrah-textMedium">Acciones prioritarias basadas en senales del mercado de moda y accesorios</p>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {recommendations.map((rec, idx) => (
            <div key={idx} className={`p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl border-2 ${
              rec.priority === 'high'
                ? 'bg-sifrah-pink/10 border-sifrah-pink/30'
                : rec.priority === 'medium'
                ? 'bg-yellow-500/10 border-yellow-500/30'
                : 'bg-sifrah-cyan/10 border-sifrah-cyan/30'
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
                    rec.priority === 'high'
                      ? 'bg-sifrah-pink/30 text-sifrah-pink'
                      : rec.priority === 'medium'
                      ? 'bg-yellow-500/30 text-yellow-400'
                      : 'bg-sifrah-cyan/30 text-sifrah-cyan'
                  }`}>
                    {rec.priority === 'high' ? <><Flame className="w-3 h-3" /> ALTA</> :
                     rec.priority === 'medium' ? <><Zap className="w-3 h-3" /> MEDIA</> : <><BarChart3 className="w-3 h-3" /> BAJA</>}
                  </span>
                  <span className="text-xs font-semibold text-sifrah-textMedium uppercase">{rec.category}</span>
                </div>
                <div className="text-left sm:text-right flex sm:flex-col items-center sm:items-end gap-2 sm:gap-0">
                  <p className="text-xs text-sifrah-textMedium">Confianza</p>
                  <p className="text-sm sm:text-base font-bold text-sifrah-textDark">{rec.confidence}%</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-sifrah-textDark font-medium mb-1 sm:mb-2">{rec.action}</p>
              <p className="text-xs sm:text-sm text-sifrah-emerald font-semibold flex items-center gap-1">
                <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {rec.impact}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Target Audiences */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 lg:p-6 border border-sifrah-border">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sifrah-cyan rounded-lg sm:rounded-xl flex items-center justify-center">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-sifrah-textDark">Audiencias Objetivo Sifrah</h3>
            <p className="text-xs sm:text-sm text-sifrah-textMedium">Segmentacion inteligente para awareness y ventas de accesorios 2026</p>
          </div>
        </div>

        <div className="grid gap-3 sm:gap-4">
          {audiences.map((aud, idx) => (
            <div key={idx} className="p-3 sm:p-4 lg:p-5 bg-sifrah-snow rounded-lg sm:rounded-xl border border-sifrah-border hover:border-sifrah-pink/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <h4 className="font-bold text-sifrah-textDark text-sm sm:text-base">{aud.name}</h4>
                    <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
                      aud.status === 'active' ? 'bg-sifrah-emerald/20 text-sifrah-emerald' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {aud.status === 'active' ? <><CheckCircle className="w-3 h-3" /> ACTIVA</> : <><FlaskConical className="w-3 h-3" /> TESTING</>}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-sifrah-textMedium">{aud.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 mt-3 sm:mt-4 pb-3 sm:pb-4 border-b border-sifrah-border">
                <div>
                  <p className="text-xs text-sifrah-textMedium">Tamano Potencial</p>
                  <p className="text-lg sm:text-xl font-bold text-sifrah-textDark">{aud.size}</p>
                </div>
                <div>
                  <p className="text-xs text-sifrah-textMedium">Engagement Rate</p>
                  <p className="text-lg sm:text-xl font-bold text-sifrah-cyan">{aud.engagement}</p>
                </div>
                <div>
                  <p className="text-xs text-sifrah-textMedium">CPL Target</p>
                  <p className="text-lg sm:text-xl font-bold text-sifrah-pink">${aud.cpl_target}</p>
                </div>
              </div>

              <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-sifrah-lightGray rounded-lg">
                <p className="text-xs text-sifrah-textMedium mb-0.5 sm:mb-1">Mensaje recomendado:</p>
                <p className="text-xs sm:text-sm font-semibold text-sifrah-textDark">{aud.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Pillars */}
      <div className="bg-sifrah-snow rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-sifrah-border">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-sifrah-pink" />
          <h3 className="text-base sm:text-lg font-bold text-sifrah-textDark">Pilares de Contenido Sugeridos</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-sifrah-border">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-sifrah-pink" />
              <p className="text-sifrah-textMedium text-xs sm:text-sm font-semibold">Pilar 1: {KEY_MESSAGES.brilla.title}</p>
            </div>
            <p className="text-sm sm:text-base font-bold text-sifrah-textDark mb-1 sm:mb-2">"{KEY_MESSAGES.brilla.message}"</p>
            <p className="text-sifrah-textMedium text-xs sm:text-sm mb-2 sm:mb-3">{KEY_MESSAGES.brilla.description}</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-sifrah-softPink rounded text-xs text-sifrah-textDark">Styling personal</span>
              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-sifrah-softPink rounded text-xs text-sifrah-textDark">GRWM</span>
            </div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-sifrah-border">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-sifrah-pink" />
              <p className="text-sifrah-textMedium text-xs sm:text-sm font-semibold">Pilar 2: {KEY_MESSAGES.tendencia.title}</p>
            </div>
            <p className="text-sm sm:text-base font-bold text-sifrah-textDark mb-1 sm:mb-2">"{KEY_MESSAGES.tendencia.message}"</p>
            <p className="text-sifrah-textMedium text-xs sm:text-sm mb-2 sm:mb-3">{KEY_MESSAGES.tendencia.description}</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-sifrah-softPink rounded text-xs text-sifrah-textDark">Nuevos ingresos</span>
              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-sifrah-softPink rounded text-xs text-sifrah-textDark">Tendencias</span>
            </div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-sifrah-border">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-sifrah-pink" />
              <p className="text-sifrah-textMedium text-xs sm:text-sm font-semibold">Pilar 3: {KEY_MESSAGES.comunidad.title}</p>
            </div>
            <p className="text-sm sm:text-base font-bold text-sifrah-textDark mb-1 sm:mb-2">"{KEY_MESSAGES.comunidad.message}"</p>
            <p className="text-sifrah-textMedium text-xs sm:text-sm mb-2 sm:mb-3">{KEY_MESSAGES.comunidad.description}</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-sifrah-softPink rounded text-xs text-sifrah-textDark">UGC clientas</span>
              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-sifrah-softPink rounded text-xs text-sifrah-textDark">Testimoniales</span>
            </div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-sifrah-border">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <Target className="w-4 h-4 sm:w-5 sm:h-5 text-sifrah-pink" />
              <p className="text-sifrah-textMedium text-xs sm:text-sm font-semibold">Pilar 4: {KEY_MESSAGES.experiencia.title}</p>
            </div>
            <p className="text-sm sm:text-base font-bold text-sifrah-textDark mb-1 sm:mb-2">"{KEY_MESSAGES.experiencia.message}"</p>
            <p className="text-sifrah-textMedium text-xs sm:text-sm mb-2 sm:mb-3">{KEY_MESSAGES.experiencia.description}</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-sifrah-softPink rounded text-xs text-sifrah-textDark">Tiendas</span>
              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-sifrah-softPink rounded text-xs text-sifrah-textDark">Ecommerce</span>
            </div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-sifrah-border sm:col-span-2">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-sifrah-pink" />
              <p className="text-sifrah-textMedium text-xs sm:text-sm font-semibold">Pilar 5: {KEY_MESSAGES.accesible.title}</p>
            </div>
            <p className="text-sm sm:text-base font-bold text-sifrah-textDark mb-1 sm:mb-2">"{KEY_MESSAGES.accesible.message}"</p>
            <p className="text-sifrah-textMedium text-xs sm:text-sm mb-2 sm:mb-3">{KEY_MESSAGES.accesible.description}</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-sifrah-softPink rounded text-xs text-sifrah-textDark">Precio justo</span>
              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-sifrah-softPink rounded text-xs text-sifrah-textDark">Calidad accesible</span>
              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-sifrah-softPink rounded text-xs text-sifrah-textDark">Envio gratis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
