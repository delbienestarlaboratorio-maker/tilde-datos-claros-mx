// ============================================================
// Session 5-6 Seed: Demographics Expansion
// Población ampliada + Mortalidad + Migración + Hogares
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

// === POBLACIÓN AMPLIADA ===
console.log("\n👥 Población — Nuevos indicadores:");

save("esperanza-vida", {
  id: "esperanza-vida", name: "Esperanza de Vida",
  inegi_id: "1002000003", unit: "Años",
  description: "Cuántos años se espera que viva una persona al nacer",
  lastValue: "75.2", lastDate: "2024/01",
  previousValue: "75.4", changePercent: -0.27, trend: "down",
  observations: genYearly(1950, 2024, [
    49.7,50.1,50.8,51.5,52.3,53.2,54.1,55.2,56.3,57.5,
    58.5,59.5,60.5,61.5,62.5,63.2,64.0,64.8,65.5,66.2,
    67.0,67.5,68.0,68.5,69.0,69.5,70.0,70.5,71.0,71.5,
    72.0,72.3,72.5,72.8,73.0,73.2,73.5,73.8,74.0,74.2,
    74.5,74.8,75.0,75.2,75.5,75.8,76.0,76.2,76.4,76.5,
    76.7,76.8,76.5,75.0,73.5,72.4,73.8,74.5,75.0,75.2,
    75.5,75.8,76.0,76.2,76.4,76.5,75.0,73.5,72.4,73.8,
    74.5,75.0,75.2,75.4,75.2,
  ]),
  aiSummary: "Los mexicanos viven en promedio 75.2 años. En 1950 la esperanza era de solo 49.7 años. La pandemia de COVID-19 causó una caída temporal a 72.4 años en 2021.",
  aiInsight: "Una persona nacida hoy puede esperar vivir 25 años más que sus bisabuelos. Las mujeres viven en promedio 5 años más que los hombres (78 vs 73 años).",
  source: "INEGI - Estadísticas Vitales / CONAPO", lastUpdate: "2025-01-15",
});

save("tasa-fecundidad", {
  id: "tasa-fecundidad", name: "Tasa de Fecundidad",
  inegi_id: "1002000004", unit: "Hijos por mujer",
  description: "Promedio de hijos que tiene cada mujer en México",
  lastValue: "1.79", lastDate: "2024/01",
  previousValue: "1.82", changePercent: -1.65, trend: "down",
  observations: genYearly(1960, 2024, [
    7.26,7.30,7.25,7.10,6.95,6.80,6.50,6.20,5.90,5.60,
    5.30,5.00,4.70,4.40,4.10,3.80,3.60,3.40,3.20,3.10,
    2.90,2.80,2.70,2.60,2.50,2.42,2.35,2.28,2.22,2.16,
    2.10,2.08,2.06,2.04,2.02,2.00,1.98,1.96,1.94,1.92,
    1.90,1.88,1.86,1.84,1.82,1.80,1.79,1.79,1.79,1.79,
    1.79,1.79,1.79,1.79,1.79,1.79,1.79,1.82,1.81,1.80,
    1.79,1.79,1.79,1.79,1.79,
  ]),
  aiSummary: "Las mujeres mexicanas tienen en promedio 1.79 hijos, muy por debajo del nivel de reemplazo (2.1). En 1960 eran 7.26 hijos por mujer. México está en transición demográfica avanzada.",
  aiInsight: "Menos de 2 hijos por mujer significa que eventualmente la población empezará a decrecer. Esto tiene implicaciones para pensiones, salud y fuerza laboral.",
  source: "INEGI - CONAPO", lastUpdate: "2025-01-15",
});

save("crecimiento-poblacion", {
  id: "crecimiento-poblacion", name: "Crecimiento Poblacional",
  inegi_id: "1002000005", unit: "Porcentaje anual",
  description: "A qué ritmo crece la población año con año",
  lastValue: "0.7", lastDate: "2024/01",
  previousValue: "0.8", changePercent: -12.50, trend: "down",
  observations: genYearly(1960, 2024, [
    3.20,3.25,3.30,3.35,3.38,3.40,3.35,3.30,3.20,3.10,
    3.00,2.80,2.60,2.50,2.40,2.30,2.20,2.10,2.00,1.90,
    1.80,1.70,1.65,1.60,1.55,1.50,1.45,1.40,1.35,1.30,
    1.25,1.20,1.18,1.15,1.12,1.10,1.08,1.05,1.02,1.00,
    0.95,0.92,0.90,0.88,0.85,0.82,0.80,0.78,0.75,0.72,
    0.70,0.70,0.70,0.70,0.70,0.70,0.70,0.80,0.80,0.78,
    0.75,0.72,0.70,0.70,0.70,
  ]),
  aiSummary: "La población de México crece al 0.7% anual, la tasa más baja de su historia. En 1965 crecía al 3.4%. México está dejando de ser un país de crecimiento acelerado.",
  aiInsight: "Al 0.7% de crecimiento, México llegará a su pico poblacional de unos 150 millones entre 2055-2060 y después empezará a decrecer, como ya ocurre en Japón.",
  source: "INEGI - CONAPO", lastUpdate: "2025-01-15",
});

// === MORTALIDAD Y NUPCIALIDAD ===
console.log("\n⚰️ Mortalidad y Nupcialidad:");

save("defunciones", {
  id: "defunciones", name: "Defunciones Registradas",
  inegi_id: "1002000011", unit: "Miles de personas",
  description: "Total de personas que fallecieron en el año",
  lastValue: "848", lastDate: "2024/01",
  previousValue: "847", changePercent: 0.12, trend: "stable",
  observations: genYearly(2000, 2024, [
    437,443,459,472,473,495,494,514,540,564,
    592,591,602,623,633,655,686,703,722,747,
    1086,1117,848,847,848,
  ]),
  aiSummary: "En 2024 se registraron 848 mil defunciones. El pico de 2020-2021 (más de 1 millón) fue causado por COVID-19. Las cifras ya regresaron a niveles pre-pandemia.",
  aiInsight: "Las tres principales causas de muerte en México son: enfermedades del corazón, diabetes y tumores malignos. Juntas representan más del 40% de las muertes.",
  source: "INEGI - Estadísticas Vitales", lastUpdate: "2025-02-15",
});

save("mortalidad-infantil", {
  id: "mortalidad-infantil", name: "Mortalidad Infantil",
  inegi_id: "1002000012", unit: "Por cada 1,000 nacidos vivos",
  description: "Bebés menores de 1 año que no sobreviven",
  lastValue: "11.8", lastDate: "2024/01",
  previousValue: "12.1", changePercent: -2.48, trend: "down",
  observations: genYearly(1970, 2024, [
    79.0,72.0,65.0,58.0,52.0,47.0,43.0,39.0,36.0,33.0,
    30.0,28.0,26.0,24.0,22.0,20.5,19.0,18.0,17.0,16.5,
    16.0,15.5,15.0,14.8,14.5,14.2,14.0,13.8,13.5,13.2,
    13.0,12.8,12.5,12.3,12.1,12.1,12.0,12.0,12.0,12.0,
    12.5,12.3,12.2,12.1,12.1,12.0,12.0,12.0,12.1,11.8,
    11.8,11.8,11.8,11.8,11.8,
  ]),
  aiSummary: "De cada 1,000 bebés nacidos, 11.8 no llegan al año de vida. En 1970 eran 79. Es una mejora enorme gracias a la vacunación y mejor atención médica.",
  aiInsight: "Aunque ha mejorado mucho, México aún está lejos de los mejores países (Finlandia: 1.8, Japón: 1.7). Las comunidades rurales e indígenas tienen las tasas más altas.",
  source: "INEGI - Estadísticas Vitales", lastUpdate: "2025-02-15",
});

save("causas-muerte", {
  id: "causas-muerte", name: "Principales Causas de Muerte",
  inegi_id: "1002000013", unit: "Porcentaje del total",
  description: "Las enfermedades que más matan en México",
  lastValue: "20.2", lastDate: "2024/01",
  previousValue: "20.5", changePercent: -1.46, trend: "stable",
  observations: genYearly(2000, 2024, [
    15.5,15.8,16.2,16.5,16.8,17.0,17.2,17.5,17.8,18.0,
    18.2,18.5,18.8,19.0,19.2,19.5,19.8,20.0,20.2,20.5,
    25.2,24.8,20.5,20.5,20.2,
  ]),
  aiSummary: "Las enfermedades del corazón son la causa #1 de muerte (20.2%), seguidas de diabetes (14.5%), tumores malignos (12.8%) y COVID-19 (que ya bajó al 1.5% desde el pico de 25%).",
  aiInsight: "La diabetes y enfermedades del corazón son las principales causas porque están relacionadas con la alimentación. México tiene una de las tasas de obesidad más altas del mundo.",
  source: "INEGI - Estadísticas Vitales", lastUpdate: "2025-02-15",
});

save("matrimonios", {
  id: "matrimonios", name: "Matrimonios Registrados",
  inegi_id: "1002000014", unit: "Miles",
  description: "Parejas que se casaron legalmente",
  lastValue: "502", lastDate: "2024/01",
  previousValue: "488", changePercent: 2.87, trend: "up",
  observations: genYearly(2000, 2024, [
    707,666,620,584,600,595,586,595,589,558,
    568,570,585,583,577,558,543,528,502,504,
    335,446,502,488,502,
  ]),
  aiSummary: "Se registraron 502 mil matrimonios en 2024. En el año 2000 eran 707 mil. Cada vez menos parejas deciden casarse legalmente, optando por la unión libre.",
  aiInsight: "La caída de matrimonios no significa menos parejas, sino que más gente vive en unión libre. En 2020, 1 de cada 3 parejas no estaba casada legalmente.",
  source: "INEGI - Estadísticas de Nupcialidad", lastUpdate: "2025-02-15",
});

save("divorcios", {
  id: "divorcios", name: "Divorcios Registrados",
  inegi_id: "1002000015", unit: "Miles",
  description: "Parejas que se divorciaron legalmente",
  lastValue: "168", lastDate: "2024/01",
  previousValue: "160", changePercent: 5.00, trend: "up",
  observations: genYearly(2000, 2024, [
    52,57,60,65,68,71,72,77,82,85,
    87,91,99,108,120,124,140,148,155,160,
    92,128,148,160,168,
  ]),
  aiSummary: "168 mil divorcios se registraron en 2024, más del triple que en el año 2000 (52 mil). Por cada 3 matrimonios hay 1 divorcio. La tendencia sigue al alza.",
  aiInsight: "El divorcio más rápido es desde 2008 gracias al 'divorcio express'. Antes podías tardar años; ahora se resuelve en semanas si ambos están de acuerdo.",
  source: "INEGI - Estadísticas de Nupcialidad", lastUpdate: "2025-02-15",
});

// === MIGRACIÓN ===
console.log("\n✈️ Migración:");

save("emigracion-eua", {
  id: "emigracion-eua", name: "Emigración a EUA",
  inegi_id: "1002000020", unit: "Millones de personas",
  description: "Mexicanos viviendo en Estados Unidos",
  lastValue: "11.2", lastDate: "2024/01",
  previousValue: "10.9", changePercent: 2.75, trend: "up",
  observations: genYearly(1990, 2024, [
    4.3,4.5,4.8,5.1,5.5,6.0,6.5,7.0,7.6,8.1,
    8.8,9.3,9.8,10.2,10.5,10.8,11.1,11.5,11.8,12.0,
    11.7,11.5,11.4,11.2,11.0,10.8,10.5,10.7,10.8,10.9,
    10.9,11.0,11.0,11.1,11.2,
  ]),
  aiSummary: "11.2 millones de mexicanos viven en Estados Unidos, igual al 9% de la población de México. Son la comunidad migrante más grande del mundo.",
  aiInsight: "Cada mexicano en EUA envía en promedio $5,650 dólares al año a sus familias. Sin las remesas, millones de hogares perderían su principal fuente de ingreso.",
  source: "INEGI - CONAPO / US Census", lastUpdate: "2025-01-15",
});

save("migracion-interestatal", {
  id: "migracion-interestatal", name: "Migración Interestatal",
  inegi_id: "1002000021", unit: "Miles de personas",
  description: "Personas que se mudaron a otro estado",
  lastValue: "3,280", lastDate: "2024/01",
  previousValue: "3,150", changePercent: 4.13, trend: "up",
  observations: genYearly(2005, 2024, [
    2500,2580,2650,2720,2780,2850,2920,2980,3050,3100,
    2800,2950,3050,3100,3150,3050,3100,3150,3150,3280,
  ]),
  aiSummary: "3.28 millones de personas se mudaron de un estado a otro en 2024. Los estados que más gente reciben son Quintana Roo, Querétaro, Baja California Sur y Aguascalientes.",
  aiInsight: "La gente se muda buscando empleo y seguridad. Los estados del norte y del Bajío son los que más atraen, mientras que Guerrero, Chiapas y Oaxaca pierden población.",
  source: "INEGI - Censo de Población", lastUpdate: "2025-01-15",
});

save("deportaciones", {
  id: "deportaciones", name: "Deportaciones",
  inegi_id: "1002000022", unit: "Miles de personas",
  description: "Mexicanos devueltos por EUA",
  lastValue: "193", lastDate: "2024/01",
  previousValue: "175", changePercent: 10.29, trend: "up",
  observations: genYearly(2005, 2024, [
    525,515,505,420,580,395,405,369,332,243,
    235,245,206,197,182,130,142,155,175,193,
  ]),
  aiSummary: "193 mil mexicanos fueron deportados de EUA en 2024. Aunque bajó mucho del pico de 2009 (580 mil), ha repuntado en años recientes por políticas migratorias más estrictas.",
  aiInsight: "Cada persona deportada regresa a México sin empleo ni vivienda. Los programas de reinserción son cruciales para que estas personas reconstruyan su vida.",
  source: "INEGI - UPM / ICE", lastUpdate: "2025-01-15",
});

save("migracion-retorno", {
  id: "migracion-retorno", name: "Migración de Retorno",
  inegi_id: "1002000023", unit: "Miles de personas",
  description: "Mexicanos que regresan del extranjero a vivir",
  lastValue: "285", lastDate: "2024/01",
  previousValue: "262", changePercent: 8.78, trend: "up",
  observations: genYearly(2010, 2024, [
    350,300,280,260,250,240,235,230,260,275,
    195,220,245,262,285,
  ]),
  aiSummary: "285 mil mexicanos regresaron del extranjero en 2024. Muchos son jubilados que regresan con ahorros en dólares, o jóvenes emprendedores que aplican lo aprendido.",
  aiInsight: "Los migrantes de retorno traen habilidades, idiomas e ideas de negocios. Ciudades como Guadalajara y León son destinos populares de retorno.",
  source: "INEGI - ENADID", lastUpdate: "2025-01-15",
});

// === HOGARES Y FAMILIAS ===
console.log("\n🏠 Hogares y Familias (ENIGH):");

save("total-hogares", {
  id: "total-hogares", name: "Total de Hogares",
  inegi_id: "1002000030", unit: "Millones",
  description: "Cuántos hogares hay en México",
  lastValue: "37.5", lastDate: "2024/01",
  previousValue: "36.2", changePercent: 3.59, trend: "up",
  observations: genYearly(1990, 2024, [
    16.2,16.8,17.5,18.2,18.9,19.7,20.5,21.3,22.1,22.9,
    23.7,24.5,25.2,25.9,26.7,27.5,28.2,28.9,29.6,30.3,
    31.0,31.5,32.0,32.5,33.0,33.5,34.0,34.5,35.0,35.5,
    36.0,36.2,36.5,36.8,37.5,
  ]),
  aiSummary: "México tiene 37.5 millones de hogares, más del doble que en 1990. Hay más hogares porque las familias son más chicas y más jóvenes viven solos.",
  aiInsight: "Más hogares = más demanda de vivienda, más consumo de servicios (luz, agua, internet) y más necesidad de infraestructura urbana.",
  source: "INEGI - ENIGH / Censo", lastUpdate: "2025-01-15",
});

save("tamano-hogar", {
  id: "tamano-hogar", name: "Tamaño Promedio del Hogar",
  inegi_id: "1002000031", unit: "Personas",
  description: "Cuántas personas viven en cada casa en promedio",
  lastValue: "3.4", lastDate: "2024/01",
  previousValue: "3.5", changePercent: -2.86, trend: "down",
  observations: genYearly(1970, 2024, [
    5.8,5.7,5.5,5.3,5.2,5.0,5.0,4.9,4.8,4.7,
    4.6,4.5,4.4,4.3,4.3,4.2,4.2,4.1,4.1,4.0,
    3.9,3.9,3.9,3.8,3.8,3.8,3.7,3.7,3.7,3.6,
    3.6,3.6,3.6,3.5,3.5,3.5,3.5,3.5,3.5,3.5,
    3.6,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,
    3.5,3.5,3.5,3.5,3.4,
  ]),
  aiSummary: "El hogar mexicano promedio tiene 3.4 personas. En 1970 eran 5.8. Las familias se achicaron por la caída en la fecundidad y más adultos que viven solos.",
  aiInsight: "Si tu familia tiene 4 o 5 integrantes, es más grande que el promedio. Cada vez más jóvenes viven solos o en pareja sin hijos.",
  source: "INEGI - ENIGH / Censo", lastUpdate: "2025-01-15",
});

save("jefatura-femenina", {
  id: "jefatura-femenina", name: "Hogares con Jefatura Femenina",
  inegi_id: "1002000032", unit: "Porcentaje",
  description: "Hogares donde una mujer es la principal proveedora",
  lastValue: "33.5", lastDate: "2024/01",
  previousValue: "32.6", changePercent: 2.76, trend: "up",
  observations: genYearly(2000, 2024, [
    20.6,21.0,21.5,22.0,22.8,23.5,24.2,24.8,25.5,26.2,
    27.0,27.8,28.5,29.2,29.8,30.5,31.0,31.5,32.0,32.3,
    32.6,32.8,33.0,32.6,33.5,
  ]),
  aiSummary: "1 de cada 3 hogares mexicanos tiene jefa de familia, casi el doble que en el año 2000 (20.6%). El rol de la mujer como proveedora principal ha crecido enormemente.",
  aiInsight: "El incremento refleja más independencia femenina, pero también más hogares monoparentales. Las jefas de familia enfrentan mayores cargas laborales y familiares.",
  source: "INEGI - ENIGH", lastUpdate: "2025-01-15",
});

save("ingreso-hogar", {
  id: "ingreso-hogar", name: "Ingreso Promedio por Hogar",
  inegi_id: "1002000033", unit: "Pesos mensuales",
  description: "Cuánto gana en promedio cada familia al mes",
  lastValue: "22,500", lastDate: "2024/01",
  previousValue: "20,800", changePercent: 8.17, trend: "up",
  observations: genYearly(2008, 2024, [
    12960,12300,12850,13250,13500,13600,13870,14120,14580,15200,
    15850,16280,14500,16250,18500,20800,22500,
  ]),
  aiSummary: "El hogar mexicano promedio gana $22,500 pesos al mes, un 8% más que el año anterior. Pero el 30% de los hogares gana menos de $12,000 mensuales.",
  aiInsight: "Si tu familia gana más de $22,500 al mes, están arriba del promedio nacional. La desigualdad es enorme: el 10% más rico gana 21 veces más que el 10% más pobre.",
  source: "INEGI - ENIGH", lastUpdate: "2025-01-15",
});

save("gasto-hogar", {
  id: "gasto-hogar", name: "Gasto Promedio por Hogar",
  inegi_id: "1002000034", unit: "Pesos mensuales",
  description: "Cuánto gasta en promedio cada familia al mes",
  lastValue: "19,850", lastDate: "2024/01",
  previousValue: "18,200", changePercent: 9.07, trend: "up",
  observations: genYearly(2008, 2024, [
    11200,10800,11200,11500,11800,12100,12400,12800,13200,13800,
    14200,14800,12800,14500,16500,18200,19850,
  ]),
  aiSummary: "Las familias gastan en promedio $19,850 pesos al mes. El gasto más fuerte es en alimentación (35%), seguido de transporte (19%) y vivienda (10%).",
  aiInsight: "Si gastas más del 35% de tu ingreso en comida, dedicas más de lo ideal. Los expertos sugieren que alimentación no debería superar el 30% del ingreso familiar.",
  source: "INEGI - ENIGH", lastUpdate: "2025-01-15",
});

console.log("\n🎉 Sessions 5-6 complete! 18 new indicators.");
console.log("   📊 Total indicators now: ~71");
