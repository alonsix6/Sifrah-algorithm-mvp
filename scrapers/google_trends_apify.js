#!/usr/bin/env node
/**
 * Google Trends Scraper - Apify Integration
 *
 * Scraper genérico y reutilizable para múltiples clientes.
 * Los keywords se configuran en archivos JSON en /config/
 *
 * Uso:
 *   node google_trends_apify.js                    # Usa config/ucsp.json por defecto
 *   node google_trends_apify.js --client=ucsp     # Especifica cliente
 *   node google_trends_apify.js --client=otro     # Otro cliente (config/otro.json)
 *
 * Requiere:
 *   APIFY_TOKEN en archivo .env o variable de entorno
 */

import { ApifyClient } from 'apify-client';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';

// Cargar variables de entorno
config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ============================================================================
// CONFIGURACIÓN
// ============================================================================
const APIFY_TOKEN = process.env.APIFY_TOKEN;
const ACTOR_ID = 'apify/google-trends-scraper';

// Parsear argumentos de línea de comandos
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    client: 'ucsp'  // Por defecto
  };

  args.forEach(arg => {
    if (arg.startsWith('--client=')) {
      options.client = arg.split('=')[1];
    }
  });

  return options;
}

// ============================================================================
// CARGAR CONFIGURACIÓN DEL CLIENTE
// ============================================================================
async function loadClientConfig(clientName) {
  const configPath = path.join(__dirname, 'config', `${clientName}.json`);

  try {
    const content = await fs.readFile(configPath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`❌ Archivo de configuración no encontrado: ${configPath}`);
      console.error(`   Crea el archivo config/${clientName}.json con los keywords`);
      process.exit(1);
    }
    throw error;
  }
}

// ============================================================================
// SCRAPER PRINCIPAL
// ============================================================================
async function scrapeGoogleTrends(clientConfig) {
  console.log(`\n🔍 Google Trends Scraper - ${clientConfig.client}`);
  console.log('='.repeat(50));
  console.log(`📍 Región: ${clientConfig.region}`);
  console.log(`📊 Keywords: ${clientConfig.keywords.length}`);
  console.log(`⏰ Rango: ${clientConfig.timeRange}`);
  console.log('='.repeat(50));

  if (!APIFY_TOKEN) {
    console.error('\n❌ ERROR: APIFY_TOKEN no está configurado');
    console.error('   Agrega APIFY_TOKEN=tu_token al archivo .env');
    process.exit(1);
  }

  const client = new ApifyClient({ token: APIFY_TOKEN });

  try {
    console.log('\n⏳ Ejecutando actor de Apify...');
    console.log(`   Actor: ${ACTOR_ID}`);

    // Configuración del actor
    const input = {
      searchTerms: clientConfig.keywords,
      geo: clientConfig.geo || clientConfig.region,
      timeRange: clientConfig.timeRange || 'today 1-m',
      maxItems: 100,
      isPublic: true
    };

    console.log(`\n📤 Input enviado a Apify:`);
    console.log(JSON.stringify(input, null, 2));

    // Ejecutar el actor
    const run = await client.actor(ACTOR_ID).call(input);

    console.log(`\n✅ Actor ejecutado exitosamente`);
    console.log(`   Run ID: ${run.id}`);
    console.log(`   Estado: ${run.status}`);

    // Obtener resultados del dataset
    const { items } = await client.dataset(run.defaultDatasetId).listItems();

    console.log(`\n📊 Resultados obtenidos: ${items.length} items`);

    // Transformar al formato esperado por el frontend
    const transformedData = transformToFrontendFormat(items, clientConfig);

    // Guardar resultados
    await saveResults(transformedData, clientConfig);

    return transformedData;

  } catch (error) {
    console.error('\n❌ Error ejecutando Apify:', error.message);

    if (error.message.includes('402')) {
      console.error('   → Sin créditos en Apify. Verifica tu plan.');
    } else if (error.message.includes('401')) {
      console.error('   → Token de Apify inválido. Verifica APIFY_TOKEN.');
    }

    throw error;
  }
}

// ============================================================================
// TRANSFORMAR DATOS AL FORMATO DEL FRONTEND
// ============================================================================
function transformToFrontendFormat(items, clientConfig) {
  console.log('\n🔄 Transformando datos al formato del frontend...');

  // Agrupar por keyword
  const keywordData = {};

  items.forEach(item => {
    const keyword = item.searchTerm || item.term || 'unknown';

    if (!keywordData[keyword]) {
      keywordData[keyword] = {
        keyword,
        dataPoints: [],
        regions: {},
        relatedQueries: []
      };
    }

    // Interest over time
    if (item.interestOverTime_timelineData) {
      keywordData[keyword].dataPoints.push(...item.interestOverTime_timelineData);
    }

    // Interest by region
    if (item.interestByRegion_geoMapData) {
      item.interestByRegion_geoMapData.forEach(region => {
        const regionName = region.geoName || region.name;
        const value = region.value?.[0] || region.value || 0;
        keywordData[keyword].regions[regionName] = value;
      });
    }

    // Related queries
    if (item.relatedQueries_rankedList) {
      item.relatedQueries_rankedList.forEach(list => {
        if (list.rankedKeyword) {
          keywordData[keyword].relatedQueries.push(...list.rankedKeyword.map(q => q.query));
        }
      });
    }
  });

  // Convertir al formato del frontend
  const keywords = Object.values(keywordData).map(kw => {
    // Calcular promedio de interés
    let avgInterest = 0;
    let peakScore = 0;

    if (kw.dataPoints.length > 0) {
      const values = kw.dataPoints
        .map(dp => dp.value?.[0] || dp.value || 0)
        .filter(v => typeof v === 'number');

      if (values.length > 0) {
        avgInterest = Math.round(values.reduce((a, b) => a + b, 0) / values.length);
        peakScore = Math.max(...values);
      }
    }

    // Calcular tendencia (últimos 7 días vs anteriores)
    let trend = 'stable';
    if (kw.dataPoints.length >= 14) {
      const recent = kw.dataPoints.slice(-7);
      const older = kw.dataPoints.slice(-14, -7);

      const recentAvg = recent.reduce((sum, dp) => sum + (dp.value?.[0] || 0), 0) / 7;
      const olderAvg = older.reduce((sum, dp) => sum + (dp.value?.[0] || 0), 0) / 7;

      if (recentAvg > olderAvg * 1.1) trend = 'rising';
      else if (recentAvg < olderAvg * 0.9) trend = 'falling';
    }

    // Top 5 regiones
    const topRegions = Object.entries(kw.regions)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .reduce((obj, [name, value]) => ({ ...obj, [name]: value }), {});

    return {
      keyword: kw.keyword,
      average_interest: avgInterest,
      trend,
      peak_score: peakScore,
      growth_3m: calculateGrowth(kw.dataPoints),
      top_regions: topRegions,
      rising_queries: kw.relatedQueries.slice(0, 5)
    };
  });

  return {
    timestamp: new Date().toISOString(),
    region: clientConfig.region,
    category: clientConfig.category,
    source: 'Google Trends via Apify',
    client: `${clientConfig.client} - ${clientConfig.clientFullName}`,
    keywords,
    metadata: {
      method: 'Apify apify/google-trends-scraper',
      note: 'Datos reales de Google Trends',
      timeframe: clientConfig.timeRange,
      ...clientConfig.metadata
    }
  };
}

function calculateGrowth(dataPoints) {
  if (dataPoints.length < 2) return '+0%';

  const recent = dataPoints.slice(-7);
  const older = dataPoints.slice(0, 7);

  const recentAvg = recent.reduce((sum, dp) => sum + (dp.value?.[0] || 0), 0) / Math.max(recent.length, 1);
  const olderAvg = older.reduce((sum, dp) => sum + (dp.value?.[0] || 0), 0) / Math.max(older.length, 1);

  if (olderAvg === 0) return '+0%';

  const growth = ((recentAvg - olderAvg) / olderAvg) * 100;
  const sign = growth >= 0 ? '+' : '';
  return `${sign}${Math.round(growth)}%`;
}

// ============================================================================
// GUARDAR RESULTADOS
// ============================================================================
async function saveResults(data, clientConfig) {
  // Determinar directorio de salida
  const outputDirName = clientConfig.outputDir || clientConfig.client.toLowerCase();
  const outputDir = path.join(__dirname, '../data/trends');

  await fs.mkdir(outputDir, { recursive: true });

  const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, '');
  const outputFile = path.join(outputDir, `trends_${timestamp}.json`);
  const latestFile = path.join(outputDir, 'latest.json');

  // Guardar con timestamp
  await fs.writeFile(outputFile, JSON.stringify(data, null, 2));
  console.log(`\n💾 Guardado: ${outputFile}`);

  // Guardar como latest
  await fs.writeFile(latestFile, JSON.stringify(data, null, 2));
  console.log(`💾 Guardado: ${latestFile}`);

  // Copiar a public/data para el frontend
  const publicDir = path.join(__dirname, '../public/data/trends');
  await fs.mkdir(publicDir, { recursive: true });
  await fs.writeFile(path.join(publicDir, 'latest.json'), JSON.stringify(data, null, 2));
  console.log(`💾 Guardado: ${path.join(publicDir, 'latest.json')}`);

  // Mostrar resumen
  console.log('\n📊 Resumen de resultados:');
  console.log(`   Keywords procesados: ${data.keywords.length}`);
  data.keywords.forEach(kw => {
    const trendIcon = kw.trend === 'rising' ? '↑' : kw.trend === 'falling' ? '↓' : '→';
    console.log(`   ${trendIcon} ${kw.keyword}: ${kw.average_interest}/100 (${kw.growth_3m})`);
  });
}

// ============================================================================
// EJECUCIÓN PRINCIPAL
// ============================================================================
async function main() {
  const options = parseArgs();

  console.log('🚀 Google Trends Scraper con Apify');
  console.log(`   Cliente: ${options.client}`);

  try {
    const clientConfig = await loadClientConfig(options.client);
    await scrapeGoogleTrends(clientConfig);

    console.log('\n✅ Scraping completado exitosamente');
    process.exit(0);

  } catch (error) {
    console.error('\n❌ Error fatal:', error.message);
    process.exit(1);
  }
}

main();
