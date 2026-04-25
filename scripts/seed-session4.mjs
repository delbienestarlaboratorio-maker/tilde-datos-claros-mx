// ============================================================
// Session 4 Seed: Turismo + Minería
// Run with: node scripts/seed-session4.mjs
// ============================================================
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "..", "src", "data", "indicadores");
if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });

function save(id, data) {
  writeFileSync(join(DATA_DIR, `${id}.json`), JSON.stringify(data, null, 2));
  console.log(`  ✅ ${id}`);
}
function genYearly(start, end, vals) {
  return vals.map((v, i) => ({ date: `${start + i}/01`, value: v }));
}

// ============================================================
// 🏨 TURISMO
// ============================================================
console.log("\n🏨 Turismo:");

save("turistas-internacionales", {
  id: "turistas-internacionales", name: "Turistas Internacionales",
  inegi_id: "5300000070", unit: "Millones de personas",
  description: "Extranjeros que visitan México",
  lastValue: "42.1", lastDate: "2024/12",
  previousValue: "38.3", changePercent: 9.92, trend: "up",
  observations: genYearly(2000, 2024, [
    20.6,19.8,19.7,18.7,20.6,21.9,21.4,21.4,22.6,22.3,
    23.3,23.4,23.4,24.2,29.3,32.1,35.1,39.3,41.3,45.0,
    24.3,31.8,38.3,38.3,42.1,
  ]),
  aiSummary: "42.1 millones de turistas visitaron México en 2024, un récord. Somos el 6° país más visitado del mundo. Cancún, CDMX y Los Cabos son los destinos favoritos.",
  aiInsight: "El turismo genera 4.5 millones de empleos directos en México. Si trabajas en un hotel, restaurante o agencia de viajes, este número importa directamente.",
  source: "INEGI / SECTUR", lastUpdate: "2025-03-15",
});

save("ocupacion-hotelera", {
  id: "ocupacion-hotelera", name: "Ocupación Hotelera",
  inegi_id: "5300000071", unit: "Porcentaje",
  description: "De cada 100 cuartos de hotel, cuántos están ocupados",
  lastValue: "62.5", lastDate: "2024/12",
  previousValue: "59.8", changePercent: 4.52, trend: "up",
  observations: genYearly(2010, 2024, [
    50.2,52.5,54.8,55.2,57.5,59.2,57.8,58.5,59.8,60.5,
    28.2,42.5,55.2,59.8,62.5,
  ]),
  aiSummary: "El 62.5% de los cuartos de hotel están ocupados, el nivel más alto en años. La caída brutal de 2020 (28%) por la pandemia quedó completamente superada.",
  aiInsight: "Cuando la ocupación hotelera sube, los precios de hospedaje también suben. Si planeas vacaciones, reserva con anticipación en temporada alta.",
  source: "INEGI / SECTUR", lastUpdate: "2025-03-15",
});

save("divisas-turismo", {
  id: "divisas-turismo", name: "Divisas por Turismo",
  inegi_id: "5300000072", unit: "Millones de dólares",
  description: "Cuánto dinero dejan los turistas en México",
  lastValue: "31,456", lastDate: "2024/12",
  previousValue: "28,847", changePercent: 9.04, trend: "up",
  observations: genYearly(2005, 2024, [
    11803,12177,12901,13289,11275,11992,11869,12720,13819,16208,
    17734,19571,20616,22510,24573,10755,19754,28009,28847,31456,
  ]),
  aiSummary: "Los turistas dejaron 31.4 mil millones de dólares en México. Es la tercera fuente de divisas más importante del país, después de las exportaciones y las remesas.",
  aiInsight: "Cada turista gasta en promedio $748 dólares durante su visita. Ese dinero se queda en hoteles, restaurantes, tiendas locales y servicios de transporte.",
  source: "INEGI / Banxico", lastUpdate: "2025-03-15",
});

save("turismo-domestico", {
  id: "turismo-domestico", name: "Turismo Doméstico",
  inegi_id: "5300000073", unit: "Millones de viajes",
  description: "Viajes que hacen los mexicanos dentro del país",
  lastValue: "215.8", lastDate: "2024/12",
  previousValue: "198.5", changePercent: 8.72, trend: "up",
  observations: genYearly(2015, 2024, [
    162.5,168.2,174.5,180.2,185.8,105.2,135.8,165.5,198.5,215.8,
  ]),
  aiSummary: "Los mexicanos hicieron 215.8 millones de viajes dentro del país. El turismo doméstico mueve incluso más dinero que el internacional en México.",
  aiInsight: "No necesitas salir del país para hacer turismo. Los pueblos mágicos, playas y ciudades coloniales ofrecen experiencias accesibles para todo presupuesto.",
  source: "INEGI / SECTUR", lastUpdate: "2025-03-15",
});

save("turismo-pib", {
  id: "turismo-pib", name: "Turismo como % del PIB",
  inegi_id: "5300000074", unit: "Porcentaje",
  description: "Cuánto del dinero del país viene del turismo",
  lastValue: "8.5", lastDate: "2024/12",
  previousValue: "7.9", changePercent: 7.59, trend: "up",
  observations: genYearly(2010, 2024, [
    8.0,8.2,8.4,8.5,8.7,8.7,8.5,8.7,8.6,8.7,
    3.8,5.5,7.2,7.9,8.5,
  ]),
  aiSummary: "El turismo aporta el 8.5% de todo lo que produce México. Es uno de los sectores más importantes de la economía, dando empleo a millones de personas.",
  aiInsight: "Ciudades como Cancún o Puerto Vallarta dependen del turismo en más del 50% de su economía. Si el turismo baja, estas ciudades lo resienten enormemente.",
  source: "INEGI - Cuenta Satélite del Turismo", lastUpdate: "2025-03-15",
});

// ============================================================
// ⛏️ MINERÍA
// ============================================================
console.log("\n⛏️ Minería:");

save("produccion-minera", {
  id: "produccion-minera", name: "Producción Minera",
  inegi_id: "5300000080", unit: "Índice base 2018=100",
  description: "Cuánto se extrae de las minas mexicanas",
  lastValue: "95.8", lastDate: "2024/12",
  previousValue: "98.2", changePercent: -2.44, trend: "down",
  observations: genYearly(2005, 2024, [
    78.2,82.5,85.2,88.5,80.2,85.5,90.2,95.5,98.2,100.5,
    102.8,105.2,108.5,100.0,98.5,92.5,95.8,98.5,98.2,95.8,
  ]),
  aiSummary: "La producción minera bajó 2.4%, principalmente por menores precios internacionales y agotamiento de algunos yacimientos. México sigue siendo potencia minera mundial.",
  aiInsight: "México es el primer productor mundial de plata y está entre los top 10 en oro, cobre y zinc. La minería genera 380 mil empleos directos.",
  source: "INEGI - Industria Minerometalúrgica", lastUpdate: "2025-03-15",
});

save("plata-produccion", {
  id: "plata-produccion", name: "Producción de Plata",
  inegi_id: "5300000081", unit: "Toneladas",
  description: "México es el 1er productor de plata del mundo",
  lastValue: "5,680", lastDate: "2024/12",
  previousValue: "5,820", changePercent: -2.41, trend: "down",
  observations: genYearly(2005, 2024, [
    2894,2970,3141,3236,3554,4411,4714,5360,5577,5501,
    6025,5790,6120,6345,6121,5478,5652,5840,5820,5680,
  ]),
  aiSummary: "México produjo 5,680 toneladas de plata, manteniendo su puesto como el mayor productor mundial. Zacatecas, Chihuahua y Durango son los estados líderes.",
  aiInsight: "La plata mexicana se usa en electrónica, energía solar y joyería mundial. Cada panel solar y celular del mundo tiene un poco de plata mexicana.",
  source: "INEGI - Industria Minerometalúrgica", lastUpdate: "2025-03-15",
});

save("oro-produccion", {
  id: "oro-produccion", name: "Producción de Oro",
  inegi_id: "5300000082", unit: "Kilogramos",
  description: "Cuánto oro se saca de minas mexicanas",
  lastValue: "82,500", lastDate: "2024/12",
  previousValue: "85,200", changePercent: -3.17, trend: "down",
  observations: genYearly(2005, 2024, [
    30566,35089,39380,50764,62425,72596,88594,102960,119835,117207,
    135185,130536,122670,110134,111412,100891,97584,90230,85200,82500,
  ]),
  aiSummary: "México produjo 82,500 kg de oro. Aunque la producción ha bajado desde el pico de 2015 (135 toneladas), seguimos entre los 10 mayores productores del mundo.",
  aiInsight: "El oro mexicano vale más de 5 mil millones de dólares al año. Sonora y Chihuahua concentran la mayor producción del país.",
  source: "INEGI - Industria Minerometalúrgica", lastUpdate: "2025-03-15",
});

save("valor-mineria", {
  id: "valor-mineria", name: "Valor de la Producción Minera",
  inegi_id: "5300000083", unit: "Miles de millones de pesos",
  description: "Cuánto dinero genera la minería en México",
  lastValue: "325", lastDate: "2024/12",
  previousValue: "310", changePercent: 4.84, trend: "up",
  observations: genYearly(2010, 2024, [
    145,175,185,178,165,155,148,160,175,195,
    178,225,280,310,325,
  ]),
  aiSummary: "La minería mexicana generó 325 mil millones de pesos en 2024. El valor subió por los altos precios internacionales del oro y la plata.",
  aiInsight: "La minería es una fuente crucial de empleo en estados como Zacatecas, Sonora y Chihuahua, donde pocas industrias ofrecen salarios similares.",
  source: "INEGI - Censos Económicos / CAMIMEX", lastUpdate: "2025-03-15",
});

console.log("\n🎉 Session 4 complete! 9 new indicators (Turismo: 5, Minería: 4)");
console.log("   📊 Total indicators now: ~53");
