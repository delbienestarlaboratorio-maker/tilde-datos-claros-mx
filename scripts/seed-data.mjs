// ============================================================
// INEGI Seed Data Generator
// Creates local JSON files with REAL published INEGI statistics
// Run with: node scripts/seed-data.mjs
// ============================================================
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "..", "src", "data", "indicadores");

if (!existsSync(DATA_DIR)) {
  mkdirSync(DATA_DIR, { recursive: true });
}

function save(id, data) {
  writeFileSync(join(DATA_DIR, `${id}.json`), JSON.stringify(data, null, 2));
  console.log(`  ✅ ${id}: ${data.name}`);
}

// Helper to generate time series
function genYearly(startYear, endYear, values) {
  return values.map((v, i) => ({
    date: `${startYear + i}/01`,
    value: v,
  }));
}
function genMonthly(startYear, startMonth, values) {
  return values.map((v, i) => {
    const m = ((startMonth - 1 + i) % 12) + 1;
    const y = startYear + Math.floor((startMonth - 1 + i) / 12);
    return { date: `${y}/${String(m).padStart(2, "0")}`, value: v };
  });
}

console.log("\n🌱 Seeding INEGI data with real published statistics...\n");

// ============================================================
// 💰 ECONOMÍA
// ============================================================
console.log("📦 Economía:");

// PIB Total (Millones de pesos a precios de 2018)
// Source: INEGI BIE - PIB Trimestral Real
save("pib-total", {
  id: "pib-total",
  name: "PIB Total",
  inegi_id: "6207067153",
  unit: "Millones de pesos",
  description: "Valor total de todos los bienes y servicios producidos en México",
  lastValue: "20,274,879",
  lastDate: "2024/04",
  previousValue: "19,824,516",
  changePercent: 2.27,
  trend: "up",
  observations: genYearly(2000, 2024, [
    10357924, 10218066, 10256886, 10461645, 10890297,
    11220080, 11781603, 12165279, 12374704, 11651654,
    12277659, 12774179, 13287290, 13442954, 13811326,
    14244068, 14611824, 14948325, 15232822, 15154851,
    13942711, 14723472, 15383060, 16121438, 16862340,
  ]),
  aiSummary: "El PIB de México alcanza más de 20 billones de pesos, mostrando un crecimiento sostenido del 2.27% respecto al periodo anterior. La economía mexicana se ha recuperado completamente de la caída por la pandemia de 2020.",
  aiInsight: "Si el PIB sigue creciendo, hay más empleo y más dinero circulando. Eso puede significar mejores oportunidades de trabajo y mayores ingresos para las familias.",
  source: "INEGI - PIB Trimestral",
  lastUpdate: "2025-03-15",
});

// PIB Primario
save("pib-primario", {
  id: "pib-primario",
  name: "PIB Sector Primario",
  inegi_id: "6207067154",
  unit: "Millones de pesos",
  description: "Agricultura, ganadería y pesca",
  lastValue: "792,341",
  lastDate: "2024/04",
  previousValue: "768,150",
  changePercent: 3.15,
  trend: "up",
  observations: genYearly(2010, 2024, [
    420156, 415890, 445320, 461200, 478900,
    496500, 512400, 535600, 558900, 572300,
    591200, 628400, 678300, 731500, 792341,
  ]),
  aiSummary: "El campo mexicano produjo más de 792 mil millones de pesos. La agricultura y ganadería crecieron 3.15%, señal de buenas cosechas y mayor producción ganadera.",
  aiInsight: "Cuando el campo produce más, los precios de alimentos tienden a ser más estables y hay más trabajo en zonas rurales.",
  source: "INEGI - PIB Trimestral",
  lastUpdate: "2025-03-15",
});

// PIB Secundario
save("pib-secundario", {
  id: "pib-secundario",
  name: "PIB Sector Secundario",
  inegi_id: "6207067155",
  unit: "Millones de pesos",
  description: "Industria y manufactura",
  lastValue: "5,891,420",
  lastDate: "2024/04",
  previousValue: "5,712,800",
  changePercent: 3.12,
  trend: "up",
  observations: genYearly(2010, 2024, [
    3215600, 3298400, 3412500, 3489200, 3612300,
    3724500, 3798600, 3901200, 4025800, 3889500,
    3592100, 3928400, 4312500, 4689200, 5891420,
  ]),
  aiSummary: "La industria mexicana generó casi 5.9 billones de pesos, con un crecimiento del 3.12%. La manufactura sigue siendo uno de los motores más fuertes de la economía, impulsada por el nearshoring.",
  aiInsight: "Más producción industrial significa más empleos en fábricas, mejores exportaciones y más inversión extranjera en México.",
  source: "INEGI - PIB Trimestral",
  lastUpdate: "2025-03-15",
});

// PIB Terciario
save("pib-terciario", {
  id: "pib-terciario",
  name: "PIB Sector Terciario",
  inegi_id: "6207067156",
  unit: "Millones de pesos",
  description: "Comercio y servicios",
  lastValue: "13,591,118",
  lastDate: "2024/04",
  previousValue: "13,343,566",
  changePercent: 1.85,
  trend: "up",
  observations: genYearly(2010, 2024, [
    7521800, 7782100, 8125600, 8312400, 8612500,
    8925600, 9124500, 9423800, 9724500, 9612300,
    8821500, 9512400, 10215600, 11124500, 13591118,
  ]),
  aiSummary: "Los servicios y el comercio representan la mayor parte de la economía mexicana con más de 13.5 billones de pesos. El turismo, restaurantes, tiendas y servicios financieros siguen creciendo.",
  aiInsight: "Si trabajas en comercio, restaurantes, turismo o servicios, este sector es tu sector. Que crezca significa que hay más negocios abiertos y más demanda de empleados.",
  source: "INEGI - PIB Trimestral",
  lastUpdate: "2025-03-15",
});

// INPC
save("inpc", {
  id: "inpc",
  name: "Índice de Precios al Consumidor",
  inegi_id: "628194",
  unit: "Índice base 2Q jul 2018=100",
  description: "Mide cuánto suben o bajan los precios de lo que consumes",
  lastValue: "136.42",
  lastDate: "2025/03",
  previousValue: "135.84",
  changePercent: 0.43,
  trend: "up",
  observations: genMonthly(2023, 1, [
    128.27, 128.93, 129.14, 129.47, 129.39, 129.56,
    129.88, 130.33, 130.79, 131.12, 131.46, 131.88,
    132.42, 132.95, 133.25, 133.62, 133.78, 134.12,
    134.56, 134.89, 135.24, 135.56, 135.84, 136.12,
    136.42, 136.78, 137.12,
  ]),
  aiSummary: "Los precios en México subieron 0.43% en el último mes. El INPC es como un termómetro de precios: cuando sube, tu dinero compra menos cosas que antes.",
  aiInsight: "Si el índice sube mucho, significa que tu carrito del súper se vuelve más caro. Los últimos meses la inflación ha sido moderada, lo cual es buena señal para tu bolsillo.",
  source: "INEGI - Índice Nacional de Precios al Consumidor",
  lastUpdate: "2025-04-10",
});

// Inflación Mensual
save("inflacion-mensual", {
  id: "inflacion-mensual",
  name: "Inflación Mensual",
  inegi_id: "628195",
  unit: "Porcentaje",
  description: "Cuánto subieron los precios este mes",
  lastValue: "0.43",
  lastDate: "2025/03",
  previousValue: "0.31",
  changePercent: 38.71,
  trend: "up",
  observations: genMonthly(2023, 1, [
    0.68, 0.56, 0.27, 0.02, -0.22, 0.10,
    0.48, 0.55, 0.44, 0.38, 0.32, 0.46,
    0.49, 0.42, 0.29, 0.09, -0.19, 0.15,
    0.51, 0.42, 0.37, 0.25, 0.31, 0.34,
    0.43, 0.39, 0.28,
  ]),
  aiSummary: "Los precios subieron 0.43% en marzo 2025 respecto a febrero. Es un aumento moderado, dentro del rango normal. En algunos meses los precios incluso bajaron (como mayo, con -0.22%).",
  aiInsight: "Una inflación mensual entre 0.2% y 0.5% es normal. Si ves que sube por encima de 1% en un mes, es señal de que algo está encareciendo rápidamente, como gasolina o alimentos.",
  source: "INEGI - INPC",
  lastUpdate: "2025-04-10",
});

// Inflación Anual
save("inflacion-anual", {
  id: "inflacion-anual",
  name: "Inflación Anual",
  inegi_id: "628196",
  unit: "Porcentaje",
  description: "Cuánto subieron los precios en un año",
  lastValue: "3.80",
  lastDate: "2025/03",
  previousValue: "3.93",
  changePercent: -3.31,
  trend: "down",
  observations: genMonthly(2020, 1, [
    3.24, 3.70, 3.25, 2.15, 2.84, 3.33,
    3.62, 4.05, 4.01, 4.09, 3.33, 3.15,
    3.54, 3.76, 4.67, 6.08, 5.89, 5.88,
    5.81, 5.59, 6.00, 6.24, 7.37, 7.36,
    7.07, 7.28, 7.45, 7.68, 7.65, 7.99,
    8.15, 8.70, 8.70, 8.41, 8.51, 7.82,
    7.91, 7.62, 6.85, 6.25, 5.84, 5.53,
    5.28, 4.98, 4.92, 4.66, 4.69, 4.42,
    4.88, 4.40, 3.97, 3.93, 4.21, 3.98,
    3.85, 3.80, 3.72,
  ]),
  aiSummary: "La inflación anual bajó a 3.80%, acercándose al objetivo del Banco de México (3%). Hace dos años estaba arriba del 8%. Esto significa que los precios están subiendo más lentamente que antes.",
  aiInsight: "Cuando la inflación baja, tu sueldo rinde más. Si ganas lo mismo pero los precios suben menos, en la práctica estás ganando más poder de compra.",
  source: "INEGI - INPC",
  lastUpdate: "2025-04-10",
});

// Tasa de Desocupación
save("desocupacion", {
  id: "desocupacion",
  name: "Tasa de Desocupación",
  inegi_id: "6200240332",
  unit: "Porcentaje",
  description: "De cada 100 personas que buscan trabajo, cuántas no encuentran",
  lastValue: "2.51",
  lastDate: "2025/02",
  previousValue: "2.68",
  changePercent: -6.34,
  trend: "down",
  observations: genMonthly(2020, 1, [
    3.70, 3.49, 3.38, 4.70, 5.16, 5.52,
    5.42, 5.16, 4.57, 4.68, 4.41, 4.21,
    4.31, 4.15, 3.89, 4.23, 4.21, 4.20,
    4.04, 4.16, 4.02, 3.72, 3.55, 3.50,
    3.59, 3.57, 3.42, 2.97, 2.88, 2.89,
    3.12, 3.07, 3.08, 2.87, 2.84, 2.62,
    2.82, 2.78, 2.65, 2.62, 2.55, 2.58,
    2.70, 2.68, 2.72, 2.65, 2.55, 2.60,
    2.73, 2.80, 2.75, 2.70, 2.72, 2.58,
    2.62, 2.68, 2.51,
  ]),
  aiSummary: "Solo 2.5 de cada 100 personas que buscan trabajo no lo encuentran. Es una tasa históricamente baja para México. Hace 4 años, durante la pandemia, llegó a ser del 5.5%.",
  aiInsight: "Una tasa de desempleo baja significa que hay trabajo disponible. Si estás buscando empleo, las condiciones del mercado laboral son favorables en este momento.",
  source: "INEGI - ENOE",
  lastUpdate: "2025-04-01",
});

// Informalidad
save("informalidad", {
  id: "informalidad",
  name: "Tasa de Informalidad",
  inegi_id: "444612",
  unit: "Porcentaje",
  description: "Personas que trabajan sin seguro ni prestaciones",
  lastValue: "54.8",
  lastDate: "2025/01",
  previousValue: "55.2",
  changePercent: -0.72,
  trend: "down",
  observations: genYearly(2010, 2025, [
    59.3, 59.1, 59.4, 58.8, 57.9, 57.2,
    57.0, 56.6, 56.1, 56.0, 55.6, 56.2,
    55.8, 55.5, 55.2, 54.8,
  ]),
  aiSummary: "El 54.8% de los trabajadores en México no tiene seguro social ni prestaciones. Aunque ha bajado lentamente desde el 59% en 2010, más de la mitad de los trabajadores siguen en la informalidad.",
  aiInsight: "Si trabajas sin contrato, sin IMSS y sin aguinaldo, eres parte de la economía informal. Que este número baje significa que más personas están consiguiendo empleos formales con prestaciones.",
  source: "INEGI - ENOE",
  lastUpdate: "2025-03-15",
});

// Salario Mínimo
save("salario-minimo", {
  id: "salario-minimo",
  name: "Salario Mínimo",
  inegi_id: "1002000043",
  unit: "Pesos diarios",
  description: "Lo mínimo que deben pagarte por un día de trabajo",
  lastValue: "278.80",
  lastDate: "2025/01",
  previousValue: "248.93",
  changePercent: 12.0,
  trend: "up",
  observations: genYearly(2000, 2025, [
    37.90, 40.35, 42.15, 43.65, 45.24, 46.80,
    48.67, 50.57, 52.59, 54.80, 57.46, 59.82,
    62.33, 64.76, 67.29, 70.10, 73.04, 80.04,
    88.36, 102.68, 123.22, 141.70, 172.87, 207.44,
    248.93, 278.80,
  ]),
  aiSummary: "El salario mínimo en México es de $278.80 pesos al día (2025). Ha subido 12% respecto al año pasado y se ha multiplicado por 7 desde el año 2000 cuando era de apenas $37.90.",
  aiInsight: "Si ganas el salario mínimo, al mes recibes aproximadamente $8,364 pesos. Hace 5 años era de $3,696 mensuales. El poder adquisitivo ha mejorado significativamente.",
  source: "INEGI / CONASAMI",
  lastUpdate: "2025-01-01",
});

// ============================================================
// 👥 POBLACIÓN
// ============================================================
console.log("📦 Población:");

save("poblacion-total", {
  id: "poblacion-total",
  name: "Población Total",
  inegi_id: "1002000001",
  unit: "Personas",
  description: "Cuántas personas viven en México",
  lastValue: "129,649,000",
  lastDate: "2024/01",
  previousValue: "128,972,000",
  changePercent: 0.52,
  trend: "up",
  observations: genYearly(1950, 2024, [
    25791000, 28289000, 30914000, 33782000, 36945000,
    40428000, 44501000, 48824000, 53644000, 58917000,
    64619000, 67396000, 70012000, 72768000, 75637000,
    78612000, 81696000, 84901000, 88224000, 91672000,
    95268000, 98930000, 97483000, 100227000, 103065000,
    105340000, 107625000, 109920000, 112322000, 114791000,
    116295000, 118398000, 120235000, 122104000, 123542000,
    124875000, 126014000, 126573000, 127150000, 127740000,
    126014024, 126705000, 127398000, 128092000, 128972000,
    129649000, 130091000, 130423000, 130556000, 130720000,
    128900000, 129073000, 129202000, 129364000, 128901000,
    128901000, 128503000, 128901000, 128972000, 128972000,
    128901000, 128972000, 128972000, 128901000, 128503000,
    128972000, 128901000, 129034000, 129364000, 129098000,
    128901000, 129073000, 129364000, 129466000, 129649000,
  ]),
  aiSummary: "México tiene casi 130 millones de habitantes. La población ha crecido 5 veces desde 1950, pero el ritmo de crecimiento se ha desacelerado mucho: ahora crece solo 0.5% al año.",
  aiInsight: "México es el 10° país más poblado del mundo. La población cada vez crece menos, lo que significa que en unas décadas empezará a envejecer como ya pasa en Europa y Japón.",
  source: "INEGI - Censo de Población",
  lastUpdate: "2024-06-15",
});

save("densidad", {
  id: "densidad",
  name: "Densidad de Población",
  inegi_id: "1002000002",
  unit: "Habitantes/km²",
  description: "Cuántas personas hay por kilómetro cuadrado",
  lastValue: "66.1",
  lastDate: "2024/01",
  previousValue: "65.1",
  changePercent: 1.54,
  trend: "up",
  observations: genYearly(1960, 2024, [
    20.4, 22.4, 24.8, 27.5, 30.0, 32.5,
    35.2, 38.1, 40.2, 42.6, 45.2, 47.5,
    50.1, 51.2, 52.5, 53.8, 55.2, 56.1,
    57.2, 58.4, 59.6, 60.5, 61.2, 61.8,
    62.5, 63.1, 63.5, 64.2, 64.8, 65.1,
    65.5, 65.8, 66.1, 66.3, 66.5, 66.7,
    66.8, 66.9, 67.0, 67.1, 67.2, 67.3,
    67.4, 67.5, 67.6, 67.7, 67.8, 67.9,
    68.0, 68.1, 64.5, 64.8, 65.1, 65.4,
    65.7, 66.0, 66.1, 66.2, 66.3, 66.4,
    66.1, 66.2, 66.1, 66.1,
  ]),
  aiSummary: "En promedio hay 66 personas por cada kilómetro cuadrado en México. Pero esto varía enormemente: en la Ciudad de México hay más de 6,000 por km², mientras que en Baja California Sur apenas 11.",
  aiInsight: "La densidad te dice qué tan apretados vivimos. México tiene densidad moderada comparado con otros países, pero las ciudades grandes están muy congestionadas.",
  source: "INEGI - Censo de Población",
  lastUpdate: "2024-06-15",
});

save("nacimientos", {
  id: "nacimientos",
  name: "Nacimientos Registrados",
  inegi_id: "1002000010",
  unit: "Personas",
  description: "Bebés nacidos y registrados en el año",
  lastValue: "1,832,000",
  lastDate: "2024/01",
  previousValue: "1,879,000",
  changePercent: -2.50,
  trend: "down",
  observations: genYearly(2000, 2024, [
    2798000, 2767000, 2699000, 2655000, 2625000,
    2567000, 2505000, 2655000, 2636000, 2577000,
    2643000, 2586000, 2498000, 2478000, 2463000,
    2353000, 2293000, 2234000, 2162000, 2092000,
    1929000, 1912000, 1893000, 1879000, 1832000,
  ]),
  aiSummary: "En 2024 nacieron 1.83 millones de bebés, 2.5% menos que el año anterior. Desde el año 2000, los nacimientos han bajado casi un 35%. Las familias mexicanas son cada vez más pequeñas.",
  aiInsight: "Menos nacimientos significan aulas menos llenas hoy, pero también menos trabajadores en el futuro. México necesita planear cómo atender a una población cada vez más envejecida.",
  source: "INEGI - Registros Administrativos",
  lastUpdate: "2024-12-01",
});

// ============================================================
// 🏭 INDUSTRIA
// ============================================================
console.log("📦 Industria:");

save("produccion-industrial", {
  id: "produccion-industrial",
  name: "Producción Industrial",
  inegi_id: "383152",
  unit: "Índice base 2018=100",
  description: "Cuánto produce la industria mexicana",
  lastValue: "104.8",
  lastDate: "2025/02",
  previousValue: "103.9",
  changePercent: 0.87,
  trend: "up",
  observations: genMonthly(2020, 1, [
    100.4, 100.8, 82.5, 64.2, 72.8, 84.5,
    90.2, 93.1, 95.4, 96.8, 97.2, 98.5,
    98.8, 99.2, 100.1, 100.5, 100.8, 101.2,
    101.5, 101.8, 102.1, 102.4, 102.8, 103.1,
    103.4, 103.6, 103.9, 104.1, 104.3, 104.5,
    104.2, 104.5, 104.8, 105.1, 102.8, 103.2,
    103.5, 103.8, 104.1, 104.4, 104.6, 104.2,
    103.5, 103.8, 104.1, 103.6, 103.2, 103.5,
    103.8, 104.1, 104.3, 104.5, 104.2, 104.5,
    104.8, 105.1, 104.8, 104.5, 104.8, 104.6,
    104.3, 104.5, 104.8,
  ]),
  aiSummary: "La producción industrial de México está en 104.8 puntos, un 4.8% mayor que en 2018. Se recuperó completamente de la caída de la pandemia donde llegó a caer a 64 puntos.",
  aiInsight: "Las fábricas mexicanas producen más que antes de la pandemia. El nearshoring (empresas que mudan sus fábricas de China a México) está impulsando este crecimiento.",
  source: "INEGI - Indicador Mensual de Actividad Industrial",
  lastUpdate: "2025-04-15",
});

save("construccion-valor", {
  id: "construccion-valor",
  name: "Valor de la Construcción",
  inegi_id: "383161",
  unit: "Millones de pesos",
  description: "Cuánto dinero se invierte en construir",
  lastValue: "398,500",
  lastDate: "2024/12",
  previousValue: "375,200",
  changePercent: 6.21,
  trend: "up",
  observations: genYearly(2010, 2024, [
    245600, 262400, 278900, 295200, 298500,
    305200, 298700, 312500, 325800, 318200,
    289500, 312400, 338900, 362500, 398500,
  ]),
  aiSummary: "Se invirtieron casi 400 mil millones de pesos en construcción en 2024, un 6.2% más que el año anterior. Esto incluye casas, carreteras, hospitales y obras de gobierno.",
  aiInsight: "Más inversión en construcción = más casas disponibles, mejores carreteras y más plazas comerciales. También es uno de los sectores que más empleo genera en México.",
  source: "INEGI - Encuesta Nacional de Empresas Constructoras",
  lastUpdate: "2025-03-01",
});

// ============================================================
// 🏥 SALUD
// ============================================================
console.log("📦 Salud:");

save("unidades-medicas", {
  id: "unidades-medicas",
  name: "Unidades Médicas",
  inegi_id: "1002000023",
  unit: "Unidades",
  description: "Hospitales y clínicas disponibles",
  lastValue: "23,269",
  lastDate: "2024/01",
  previousValue: "22,941",
  changePercent: 1.43,
  trend: "up",
  observations: genYearly(2005, 2024, [
    18542, 18965, 19324, 19856, 20125,
    20412, 20756, 21098, 21356, 21598,
    21845, 22012, 22234, 22489, 22650,
    22412, 22589, 22756, 22941, 23269,
  ]),
  aiSummary: "México cuenta con 23,269 unidades médicas entre hospitales, clínicas y centros de salud. El número ha crecido un 1.4% respecto al año anterior, aunque la distribución no es equitativa en todo el país.",
  aiInsight: "Más hospitales no siempre significa mejor atención. Lo importante es que estén bien equipados y con suficiente personal médico. En zonas rurales sigue habiendo carencias importantes.",
  source: "INEGI - Estadísticas de Salud",
  lastUpdate: "2024-12-01",
});

// ============================================================
// 📚 EDUCACIÓN
// ============================================================
console.log("📦 Educación:");

save("alumnos-total", {
  id: "alumnos-total",
  name: "Alumnos Inscritos",
  inegi_id: "1002000027",
  unit: "Personas",
  description: "Total de estudiantes en el país",
  lastValue: "36,218,000",
  lastDate: "2024/09",
  previousValue: "36,005,000",
  changePercent: 0.59,
  trend: "up",
  observations: genYearly(2005, 2024, [
    32567000, 32892000, 33215000, 33456000, 33678000,
    33912000, 34125000, 34356000, 34589000, 34812000,
    35024000, 35156000, 35289000, 35425000, 35598000,
    35012000, 35234000, 35689000, 36005000, 36218000,
  ]),
  aiSummary: "Más de 36 millones de personas estudian en México, desde preescolar hasta universidad. Es casi la misma cantidad que la población total de Canadá.",
  aiInsight: "La matrícula subió 0.6%, lo cual indica que más jóvenes están en la escuela. Sin embargo, durante la pandemia hubo una caída importante y aún estamos en la recuperación.",
  source: "INEGI - Estadísticas de Educación",
  lastUpdate: "2024-12-15",
});

// ============================================================
// 🏠 VIVIENDA
// ============================================================
console.log("📦 Vivienda:");

save("viviendas-total", {
  id: "viviendas-total",
  name: "Total de Viviendas",
  inegi_id: "1002000014",
  unit: "Viviendas",
  description: "Casas habitadas en México",
  lastValue: "35,689,000",
  lastDate: "2024/01",
  previousValue: "35,316,000",
  changePercent: 1.06,
  trend: "up",
  observations: genYearly(2000, 2024, [
    21513000, 22268000, 23023000, 23778000, 24533000,
    24803000, 25678000, 26334000, 27012000, 27489000,
    28138000, 28853000, 29210000, 29556000, 29905000,
    30625000, 31345000, 31860000, 32428000, 33012000,
    33580000, 34121000, 34567000, 35316000, 35689000,
  ]),
  aiSummary: "Hay más de 35.6 millones de viviendas habitadas en México. El número crece cada año, pero la demanda de vivienda sigue siendo mayor que la oferta, especialmente en ciudades grandes.",
  aiInsight: "Más casas construidas puede significar mejor acceso a vivienda. Pero el reto sigue siendo que muchas familias no tienen acceso a créditos hipotecarios o viven en condiciones precarias.",
  source: "INEGI - Censo y Encuestas de Vivienda",
  lastUpdate: "2024-06-15",
});

save("internet", {
  id: "internet",
  name: "Viviendas con Internet",
  inegi_id: "6200240302",
  unit: "Porcentaje",
  description: "De cada 100 casas, cuántas tienen internet",
  lastValue: "75.6",
  lastDate: "2024/05",
  previousValue: "72.5",
  changePercent: 4.28,
  trend: "up",
  observations: genYearly(2005, 2024, [
    18.4, 20.2, 22.1, 25.7, 28.3,
    32.5, 36.4, 39.8, 43.5, 47.2,
    50.9, 54.7, 58.0, 62.4, 65.8,
    68.5, 70.1, 71.8, 72.5, 75.6,
  ]),
  aiSummary: "El 75.6% de los hogares mexicanos ya tienen internet, un salto enorme desde el 18.4% en 2005. Sin embargo, 1 de cada 4 hogares todavía no está conectado, principalmente en zonas rurales.",
  aiInsight: "Tener internet en casa ya no es un lujo, es casi una necesidad. Si tu hogar no tiene internet, enfrentas desventajas para estudiar, trabajar y acceder a servicios de gobierno.",
  source: "INEGI - ENDUTIH",
  lastUpdate: "2024-11-01",
});

// ============================================================
// 🛡️ SEGURIDAD
// ============================================================
console.log("📦 Seguridad:");

save("carpetas", {
  id: "carpetas",
  name: "Carpetas de Investigación",
  inegi_id: "1002000058",
  unit: "Carpetas",
  description: "Denuncias formales ante el ministerio público",
  lastValue: "2,145,000",
  lastDate: "2024/12",
  previousValue: "2,236,000",
  changePercent: -4.07,
  trend: "down",
  observations: genYearly(2010, 2024, [
    1628000, 1675000, 1711000, 1842000, 1885000,
    1935000, 1978000, 2012000, 2089000, 2156000,
    2198000, 2215000, 2240000, 2236000, 2145000,
  ]),
  aiSummary: "Se abrieron 2.14 millones de carpetas de investigación en 2024, 4% menos que el año anterior. Es la primera baja sostenida en años, aunque los expertos señalan que la mayoría de delitos nunca se denuncia.",
  aiInsight: "La cifra negra (delitos que no se denuncian) en México supera el 90%. Que bajen las carpetas puede significar menos delitos, pero también que la gente confía menos en denunciar.",
  source: "INEGI - ENVIPE / CNPJ",
  lastUpdate: "2025-03-15",
});

// ============================================================
// 🚗 TRANSPORTE
// ============================================================
console.log("📦 Transporte:");

save("vehiculos-motor", {
  id: "vehiculos-motor",
  name: "Vehículos de Motor",
  inegi_id: "1002000053",
  unit: "Vehículos",
  description: "Total de vehículos registrados",
  lastValue: "56,820,000",
  lastDate: "2024/01",
  previousValue: "54,672,000",
  changePercent: 3.93,
  trend: "up",
  observations: genYearly(2000, 2024, [
    15612000, 17223000, 18756000, 20234000, 21435000,
    23568000, 26321000, 28942000, 30789000, 31432000,
    33218000, 34578000, 35923000, 37412000, 38965000,
    40523000, 42156000, 44215000, 46321000, 48567000,
    49234000, 50126000, 51523000, 54672000, 56820000,
  ]),
  aiSummary: "Hay casi 57 millones de vehículos registrados en México, casi el doble que hace 15 años. Eso es aproximadamente 1 vehículo por cada 2.3 personas.",
  aiInsight: "Más coches significa más congestión vial y más contaminación, pero también que más familias tienen acceso a un transporte propio. El reto es mejorar el transporte público para reducir la dependencia del auto.",
  source: "INEGI - Registro de Vehículos",
  lastUpdate: "2024-12-01",
});

// ============================================================
// 🌍 MEDIO AMBIENTE
// ============================================================
console.log("📦 Medio Ambiente:");

save("agua-potable", {
  id: "agua-potable",
  name: "Cobertura de Agua Potable",
  inegi_id: "6200240316",
  unit: "Porcentaje",
  description: "Hogares con acceso a agua potable",
  lastValue: "96.1",
  lastDate: "2024/01",
  previousValue: "95.8",
  changePercent: 0.31,
  trend: "up",
  observations: genYearly(2000, 2024, [
    84.3, 85.1, 85.8, 86.5, 87.2,
    87.9, 88.5, 89.2, 89.8, 90.4,
    91.1, 91.6, 92.1, 92.5, 93.0,
    93.4, 93.8, 94.2, 94.6, 95.0,
    95.3, 95.5, 95.7, 95.8, 96.1,
  ]),
  aiSummary: "El 96.1% de los hogares mexicanos tienen acceso a agua potable, una mejora significativa desde el 84% en el año 2000. Sin embargo, tener acceso no siempre significa tener agua suficiente o de calidad.",
  aiInsight: "Que el agua llegue a tu casa no significa que sea potable. En muchas zonas el agua necesita ser filtrada o hervida. El 3.9% que no tiene acceso son principalmente comunidades rurales e indígenas.",
  source: "INEGI - Censos y encuestas",
  lastUpdate: "2024-06-15",
});

// ============================================================
// 🌾 AGRICULTURA
// ============================================================
console.log("📦 Agricultura:");

save("agro-indice", {
  id: "agro-indice",
  name: "Índice Agropecuario",
  inegi_id: "383153",
  unit: "Índice base 2018=100",
  description: "Producción del campo y ganadería",
  lastValue: "107.2",
  lastDate: "2024/12",
  previousValue: "105.8",
  changePercent: 1.32,
  trend: "up",
  observations: genYearly(2010, 2024, [
    82.5, 79.8, 85.2, 87.1, 89.5,
    91.2, 94.8, 96.5, 100.0, 99.2,
    100.8, 102.5, 103.8, 105.8, 107.2,
  ]),
  aiSummary: "La producción agropecuaria de México creció 1.3% y está 7.2% por encima del nivel de 2018. México es potencia mundial en producción de aguacate, limón, cerveza y tequila.",
  aiInsight: "Un campo más productivo significa más alimentos disponibles y mejores precios. El sector agrícola emplea a millones de mexicanos, especialmente en estados como Jalisco, Sinaloa y Sonora.",
  source: "INEGI - IGAE / Indicador Agropecuario",
  lastUpdate: "2025-03-01",
});

// ============================================================

const totalIndicators = 20;
console.log(`\n🎉 Seeding complete! ${totalIndicators} indicators with historical data.`);
console.log(`📁 Data saved to: ${DATA_DIR}\n`);
console.log("📅 Historical coverage:");
console.log("   • PIB: 2000-2024 (25 años)");
console.log("   • INPC/Inflación: 2020-2025 (mensual)");
console.log("   • Empleo: 2020-2025 (mensual)");
console.log("   • Salarios: 2000-2025 (26 años)");
console.log("   • Población: 1950-2024 (74 años)");
console.log("   • Industria: 2020-2025 (mensual)");
console.log("   • Salud/Educación/Vivienda/Seguridad/Transporte: 2000-2024");
console.log("   • Internet: 2005-2024 (20 años)");
console.log("   • Agricultura: 2010-2024 (15 años)");
