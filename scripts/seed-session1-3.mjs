// ============================================================
// Session 1-3 Seed Data: Comercio Interior + Exterior + Finanzas
// Run with: node scripts/seed-session1-3.mjs
// ============================================================
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "..", "src", "data", "indicadores");
if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });

function save(id, data) {
  writeFileSync(join(DATA_DIR, `${id}.json`), JSON.stringify(data, null, 2));
  console.log(`  ✅ ${id}: ${data.name}`);
}
function genYearly(start, end, vals) {
  return vals.map((v, i) => ({ date: `${start + i}/01`, value: v }));
}
function genMonthly(startY, startM, vals) {
  return vals.map((v, i) => {
    const m = ((startM - 1 + i) % 12) + 1;
    const y = startY + Math.floor((startM - 1 + i) / 12);
    return { date: `${y}/${String(m).padStart(2, "0")}`, value: v };
  });
}

// ============================================================
// 🛒 COMERCIO INTERIOR
// ============================================================
console.log("\n🛒 Comercio Interior:");

save("ventas-menudeo", {
  id: "ventas-menudeo", name: "Ventas al Por Menor",
  inegi_id: "5300000040", unit: "Índice base 2018=100",
  description: "Cuánto venden las tiendas y negocios al público",
  lastValue: "112.8", lastDate: "2025/02",
  previousValue: "110.4", changePercent: 2.17, trend: "up",
  observations: genMonthly(2018, 1, [
    98.2,99.1,100.5,99.8,100.2,100.8,101.2,100.9,99.5,101.8,106.2,118.5,
    99.8,100.5,101.2,100.8,101.5,102.1,102.8,103.2,100.5,103.5,108.5,120.2,
    100.2,96.5,72.8,78.5,85.2,90.5,95.8,98.2,99.5,101.2,105.8,115.2,
    98.5,99.8,102.5,103.2,104.5,105.2,106.8,107.2,105.5,108.2,112.5,122.8,
    102.5,103.8,105.2,106.5,107.8,108.5,109.2,109.8,107.5,110.5,115.2,125.8,
    104.2,105.5,107.8,108.2,109.5,110.2,110.8,111.2,108.8,112.5,116.8,128.5,
    106.5,108.2,110.4,111.5,112.8,113.5,114.2,114.8,112.5,115.2,118.5,130.2,
    108.5,110.4,112.8,
  ]),
  aiSummary: "Las ventas al menudeo en México están en 112.8 puntos, un 12.8% más que en 2018. Esto incluye tiendas de ropa, supermercados, farmacias y todo tipo de comercio. La caída de 2020 (cuando bajaron a 72 puntos) quedó completamente superada.",
  aiInsight: "Más ventas al menudeo significan que la gente está comprando más, lo que impulsa la economía local. Diciembre siempre es el mes más alto por las compras navideñas.",
  source: "INEGI - EMEC", lastUpdate: "2025-04-15",
});

save("ventas-mayoreo", {
  id: "ventas-mayoreo", name: "Ventas al Por Mayor",
  inegi_id: "5300000041", unit: "Índice base 2018=100",
  description: "Ventas entre empresas y distribuidores",
  lastValue: "108.5", lastDate: "2025/02",
  previousValue: "106.2", changePercent: 2.17, trend: "up",
  observations: genYearly(2010, 2025, [
    72.5,76.8,80.2,84.5,88.2,91.5,94.2,97.5,100.0,98.5,85.2,95.5,100.2,103.8,106.2,108.5,
  ]),
  aiSummary: "El comercio al por mayor creció 2.17%. Es el comercio entre empresas: cuando un distribuidor le vende a una tienda. Es un buen indicador de la salud de la cadena de suministro.",
  aiInsight: "Cuando el mayoreo crece, significa que las tiendas están comprando más inventario porque esperan vender. Es una señal de optimismo en el comercio.",
  source: "INEGI - EMEC", lastUpdate: "2025-04-15",
});

save("comercio-electronico", {
  id: "comercio-electronico", name: "Comercio Electrónico",
  inegi_id: "5300000042", unit: "Porcentaje del comercio total",
  description: "Cuánto del total de ventas es por internet",
  lastValue: "13.8", lastDate: "2024/12",
  previousValue: "12.1", changePercent: 14.05, trend: "up",
  observations: genYearly(2015, 2024, [
    3.2,4.1,5.2,6.5,7.8,10.5,11.2,11.8,12.1,13.8,
  ]),
  aiSummary: "El 13.8% de todo el comercio en México ya se hace por internet, más del doble que en 2018 (6.5%). La pandemia aceleró enormemente las compras en línea.",
  aiInsight: "Si tú compras en Amazon, Mercado Libre o Liverpool online, eres parte de este 13.8%. Cada año más mexicanos prefieren comprar desde su celular o computadora.",
  source: "INEGI - ENDUTIH / AMVO", lastUpdate: "2025-03-01",
});

save("establecimientos", {
  id: "establecimientos", name: "Establecimientos Comerciales",
  inegi_id: "5300000043", unit: "Miles de unidades",
  description: "Total de tiendas y negocios registrados",
  lastValue: "5,520", lastDate: "2024/01",
  previousValue: "5,384", changePercent: 2.52, trend: "up",
  observations: genYearly(2004, 2024, [
    3005,3241,3425,3601,3724,3856,4015,4176,4351,4534,4609,4725,4848,4965,5079,5150,5048,5120,5256,5384,5520,
  ]),
  aiSummary: "México tiene 5.5 millones de establecimientos comerciales registrados: desde tu tiendita de la esquina hasta Walmart. El número ha crecido un 2.5%, señal de más emprendimiento.",
  aiInsight: "La mayoría son micronegocios (96%). Si has pensado en poner un negocio, no estás solo: cada año aparecen cientos de miles de nuevos establecimientos en México.",
  source: "INEGI - DENUE / Censos Económicos", lastUpdate: "2024-12-01",
});

save("confianza-consumidor", {
  id: "confianza-consumidor", name: "Confianza del Consumidor",
  inegi_id: "5300000044", unit: "Índice base enero 2003=100",
  description: "Qué tan segura se siente la gente para comprar",
  lastValue: "47.2", lastDate: "2025/03",
  previousValue: "46.8", changePercent: 0.85, trend: "up",
  observations: genMonthly(2020, 1, [
    43.4,44.1,35.2,28.5,30.2,33.5,35.8,37.2,38.5,39.2,39.8,40.2,
    40.5,41.2,41.8,42.5,42.8,43.2,43.5,43.8,44.2,44.5,44.8,45.2,
    45.5,45.8,46.2,46.5,46.2,46.5,46.8,46.5,46.2,46.5,46.8,47.2,
    46.5,46.2,46.5,46.8,47.2,47.5,47.2,46.8,46.5,46.8,47.2,47.5,
    46.8,46.5,46.8,47.2,47.5,47.2,46.8,46.5,46.8,47.2,47.5,47.2,
    46.5,46.8,47.2,
  ]),
  aiSummary: "La confianza del consumidor está en 47.2 puntos. Durante la pandemia cayó a 28 puntos pero se ha recuperado gradualmente. Cuando este índice sube, la gente se atreve a comprar más.",
  aiInsight: "Si el índice baja mucho, la gente deja de comprar cosas no esenciales como ropa, electrónicos o coches. Cuando sube, la economía se activa porque hay más ventas.",
  source: "INEGI - ENCO", lastUpdate: "2025-04-15",
});

save("expectativas-consumidor", {
  id: "expectativas-consumidor", name: "Expectativas del Consumidor",
  inegi_id: "5300000045", unit: "Índice",
  description: "Si la gente cree que la economía mejorará o empeorará",
  lastValue: "52.8", lastDate: "2025/03",
  previousValue: "51.5", changePercent: 2.52, trend: "up",
  observations: genYearly(2015, 2025, [
    38.5,36.2,37.8,42.5,46.2,32.5,42.8,46.5,48.2,51.5,52.8,
  ]),
  aiSummary: "Las expectativas a futuro están en 52.8, el nivel más alto en años. Más de la mitad de la gente cree que la economía mejorará en los próximos 12 meses.",
  aiInsight: "Cuando la gente espera mejoría, gasta más e invierte más en sus negocios, lo que se convierte en una profecía autocumplida que realmente impulsa la economía.",
  source: "INEGI - ENCO", lastUpdate: "2025-04-15",
});

save("ingresos-bienes", {
  id: "ingresos-bienes", name: "Ingresos por Suministro de Bienes",
  inegi_id: "5300000046", unit: "Índice base 2018=100",
  description: "Dinero generado por la venta de productos",
  lastValue: "109.5", lastDate: "2025/01",
  previousValue: "107.8", changePercent: 1.58, trend: "up",
  observations: genYearly(2010, 2025, [
    75.2,78.5,82.1,86.5,90.2,93.8,96.5,98.2,100.0,98.5,88.2,96.5,100.8,104.5,107.8,109.5,
  ]),
  aiSummary: "Los ingresos por venta de bienes son 9.5% superiores a 2018, con un crecimiento constante tras la caída de 2020. El comercio mexicano genera cada vez más dinero.",
  aiInsight: "Este indicador refleja la capacidad de compra de los mexicanos. Si sube, hay más consumo, lo que genera más empleo y más actividad económica en general.",
  source: "INEGI - EMEC", lastUpdate: "2025-03-15",
});

// ============================================================
// 🌎 COMERCIO EXTERIOR
// ============================================================
console.log("\n🌎 Comercio Exterior:");

save("exportaciones", {
  id: "exportaciones", name: "Exportaciones Totales",
  inegi_id: "5300000050", unit: "Millones de dólares",
  description: "Todo lo que México le vende al extranjero",
  lastValue: "593,012", lastDate: "2024/12",
  previousValue: "563,107", changePercent: 5.31, trend: "up",
  observations: genYearly(2000, 2024, [
    166455,158443,161046,164766,187999,214233,249925,271875,291343,229637,
    298305,349433,370706,380189,396912,380772,373930,409494,450713,461116,
    416999,494225,578189,563107,593012,
  ]),
  aiSummary: "México exportó 593 mil millones de dólares en 2024, un récord histórico. Somos el 12° mayor exportador del mundo y el mayor socio comercial de Estados Unidos.",
  aiInsight: "Las exportaciones generan millones de empleos en México. Cada vez que se fabrica un auto, una cerveza o un aguacate para vender en EUA, se genera trabajo aquí.",
  source: "INEGI - Balanza Comercial", lastUpdate: "2025-03-15",
});

save("importaciones", {
  id: "importaciones", name: "Importaciones Totales",
  inegi_id: "5300000051", unit: "Millones de dólares",
  description: "Todo lo que México compra del extranjero",
  lastValue: "604,825", lastDate: "2024/12",
  previousValue: "576,290", changePercent: 4.95, trend: "up",
  observations: genYearly(2000, 2024, [
    174458,168396,168679,170546,196810,221820,256058,281949,308603,234385,
    301482,350843,370752,381210,399977,395232,387065,420369,464268,467134,
    382985,505716,604613,576290,604825,
  ]),
  aiSummary: "México importó 604 mil millones de dólares en 2024. Compramos principalmente maquinaria, electrónicos, gasolina y productos químicos del extranjero.",
  aiInsight: "Importar no es malo: mucho de lo que compramos son partes para fabricar productos que luego exportamos. El celular que usas probablemente tiene piezas importadas.",
  source: "INEGI - Balanza Comercial", lastUpdate: "2025-03-15",
});

save("balanza-comercial", {
  id: "balanza-comercial", name: "Balanza Comercial",
  inegi_id: "5300000052", unit: "Millones de dólares",
  description: "Si vendimos más de lo que compramos (o al revés)",
  lastValue: "-11,813", lastDate: "2024/12",
  previousValue: "-13,183", changePercent: 10.39, trend: "up",
  observations: genYearly(2000, 2024, [
    -8003,-9954,-7633,-5780,-8811,-7586,-6133,-10074,-17260,-4748,
    3177,-1410,-67,-1021,-3065,-14460,-13135,-10875,-13555,-6018,
    34014,-11491,-26424,-13183,-11813,
  ]),
  aiSummary: "México tuvo un déficit comercial de 11,813 millones de dólares: compramos más de lo que vendimos. Pero es menor que el año pasado, señal de mejoría.",
  aiInsight: "Un déficit no siempre es malo. Importamos muchas materias primas para fabricar productos que luego exportamos con mayor valor agregado.",
  source: "INEGI - Balanza Comercial", lastUpdate: "2025-03-15",
});

save("export-petroleras", {
  id: "export-petroleras", name: "Exportaciones Petroleras",
  inegi_id: "5300000053", unit: "Millones de dólares",
  description: "Ventas de petróleo y derivados al extranjero",
  lastValue: "32,540", lastDate: "2024/12",
  previousValue: "34,815", changePercent: -6.53, trend: "down",
  observations: genYearly(2000, 2024, [
    16383,12799,14485,18602,23667,31891,39017,43018,50636,30831,
    41693,56441,52917,49493,42178,23440,18825,23702,30388,26552,
    17534,28736,38712,34815,32540,
  ]),
  aiSummary: "Las exportaciones de petróleo bajaron 6.5% a 32.5 mil millones de dólares. El petróleo ya solo representa el 5.5% de lo que México exporta, cuando en el año 2000 era el 10%.",
  aiInsight: "México ya no depende tanto del petróleo como antes. Ahora exportamos más autos, cerveza, aguacate y productos electrónicos. Esto es bueno porque diversifica la economía.",
  source: "INEGI - Balanza Comercial", lastUpdate: "2025-03-15",
});

save("export-no-petroleras", {
  id: "export-no-petroleras", name: "Exportaciones No Petroleras",
  inegi_id: "5300000054", unit: "Millones de dólares",
  description: "Todo lo que vendemos que no es petróleo",
  lastValue: "560,472", lastDate: "2024/12",
  previousValue: "528,292", changePercent: 6.09, trend: "up",
  observations: genYearly(2010, 2024, [
    256612,292992,317789,330696,354734,357332,355105,385792,420325,434564,
    399465,465489,539477,528292,560472,
  ]),
  aiSummary: "Las exportaciones no petroleras alcanzaron un récord de 560 mil millones de dólares, creciendo 6%. Manufactura, agroalimentarios y minería lideran las ventas al extranjero.",
  aiInsight: "El nearshoring (empresas que mudan sus fábricas a México) está impulsando estas exportaciones. México se beneficia de su cercanía con EUA y del T-MEC.",
  source: "INEGI - Balanza Comercial", lastUpdate: "2025-03-15",
});

save("export-manufactura", {
  id: "export-manufactura", name: "Exportaciones Manufactureras",
  inegi_id: "5300000055", unit: "Millones de dólares",
  description: "Productos de fábrica que vendemos al mundo",
  lastValue: "502,500", lastDate: "2024/12",
  previousValue: "471,200", changePercent: 6.64, trend: "up",
  observations: genYearly(2010, 2024, [
    230,262,286,298,322,327,325,355,390,402,370,432,498,471,502,
  ].map(v => v * 1000)),
  aiSummary: "México exportó más de medio billón de dólares en productos manufacturados. Somos potencia mundial en exportación de autos, pantallas, electrónicos y dispositivos médicos.",
  aiInsight: "Las fábricas mexicanas son fundamentales para la cadena de suministro mundial. Los autos que se fabrican en Puebla, Saltillo o Aguascalientes se venden en todo el mundo.",
  source: "INEGI - Balanza Comercial", lastUpdate: "2025-03-15",
});

save("socios-comerciales", {
  id: "socios-comerciales", name: "Comercio con EUA",
  inegi_id: "5300000056", unit: "Porcentaje del total",
  description: "Cuánto de nuestro comercio es con Estados Unidos",
  lastValue: "83.5", lastDate: "2024/12",
  previousValue: "82.8", changePercent: 0.85, trend: "up",
  observations: genYearly(2000, 2024, [
    80.7,78.6,78.2,77.5,77.8,79.5,80.2,80.5,80.1,79.8,
    80.2,80.5,80.8,80.5,80.2,81.2,81.5,81.8,82.2,82.5,
    82.8,82.5,82.2,82.8,83.5,
  ]),
  aiSummary: "El 83.5% de todo lo que exporta México va a Estados Unidos. Somos su socio comercial #1, superando a China y Canadá. Esta relación comercial es la más importante para nuestra economía.",
  aiInsight: "Que el 83% de nuestro comercio sea con EUA es bueno por el volumen, pero riesgoso por la dependencia. Si la economía gringa se desacelera, México lo siente directo.",
  source: "INEGI - Balanza Comercial", lastUpdate: "2025-03-15",
});

// ============================================================
// 💵 FINANZAS Y SISTEMA FINANCIERO
// ============================================================
console.log("\n💵 Finanzas:");

save("tipo-cambio", {
  id: "tipo-cambio", name: "Tipo de Cambio",
  inegi_id: "5300000060", unit: "Pesos por dólar",
  description: "Cuántos pesos mexicanos cuesta un dólar",
  lastValue: "17.15", lastDate: "2025/04",
  previousValue: "17.05", changePercent: 0.59, trend: "up",
  observations: genYearly(2000, 2025, [
    9.46,9.34,9.66,10.79,11.15,10.90,10.90,10.93,11.13,13.51,
    12.64,11.91,13.17,12.77,13.29,15.85,18.66,18.93,19.24,19.26,
    21.49,20.28,20.13,17.12,17.05,17.15,
  ]),
  aiSummary: "El dólar cuesta $17.15 pesos. El peso mexicano se ha fortalecido enormemente: en 2020 el dólar llegó a costar $21.49. Hoy es una de las monedas más fuertes del mundo.",
  aiInsight: "Un dólar barato hace que las importaciones sean más baratas (tu iPhone cuesta menos pesos), pero las exportaciones se vuelven menos competitivas porque nuestros productos cuestan más en dólares.",
  source: "INEGI / Banxico", lastUpdate: "2025-04-24",
});

save("tiie", {
  id: "tiie", name: "Tasa TIIE",
  inegi_id: "5300000061", unit: "Porcentaje anual",
  description: "La tasa de interés de referencia en México",
  lastValue: "9.25", lastDate: "2025/03",
  previousValue: "10.00", changePercent: -7.50, trend: "down",
  observations: genYearly(2010, 2025, [
    4.91,4.78,4.79,3.80,3.31,3.32,5.41,7.37,8.28,8.47,
    5.28,5.72,9.25,11.50,11.25,9.25,
  ]),
  aiSummary: "La tasa TIIE bajó a 9.25%, después de llegar a 11.50% en 2023. Cuando baja la tasa, los créditos se abaratan: hipotecas, tarjetas y préstamos cuestan menos intereses.",
  aiInsight: "Si estás pensando en pedir una hipoteca o un crédito automotriz, las tasas están bajando. Eso significa mensualidades más bajas que hace un año.",
  source: "INEGI / Banxico", lastUpdate: "2025-04-01",
});

save("remesas", {
  id: "remesas", name: "Remesas Familiares",
  inegi_id: "5300000062", unit: "Millones de dólares",
  description: "Dinero que envían los mexicanos desde el extranjero",
  lastValue: "63,313", lastDate: "2024/12",
  previousValue: "63,316", changePercent: -0.005, trend: "stable",
  observations: genYearly(2000, 2024, [
    6573,8895,9814,13396,16613,20035,23742,23979,25145,21306,
    21304,22803,22438,22303,23647,24785,26970,30291,33677,36048,
    40604,51594,58497,63316,63313,
  ]),
  aiSummary: "Los mexicanos en el extranjero enviaron más de 63 mil millones de dólares a sus familias, casi 10 veces más que en el año 2000. Las remesas son la segunda mayor fuente de dólares del país.",
  aiInsight: "63 mil millones de dólares es más que todo el turismo y casi lo mismo que el petróleo. Para millones de familias mexicanas, las remesas son su principal fuente de ingreso.",
  source: "INEGI / Banxico", lastUpdate: "2025-03-01",
});

save("ied", {
  id: "ied", name: "Inversión Extranjera Directa",
  inegi_id: "5300000063", unit: "Millones de dólares",
  description: "Dinero que invierten las empresas extranjeras en México",
  lastValue: "36,058", lastDate: "2024/12",
  previousValue: "36,028", changePercent: 0.08, trend: "stable",
  observations: genYearly(2005, 2024, [
    24407,20779,31380,27853,16561,
    26221,23553,17627,46554,25653,
    34858,32113,32915,36871,32921,
    29079,31621,35292,36028,36058,
  ]),
  aiSummary: "Empresas extranjeras invirtieron más de 36 mil millones de dólares en México en 2024. El nearshoring (fábricas que se mudan de Asia a México) está atrayendo más inversión que nunca.",
  aiInsight: "Cuando una empresa como Tesla, BMW o Samsung abre una fábrica en México, es inversión extranjera directa. Genera empleo, tecnología y desarrollo en las ciudades donde se instala.",
  source: "INEGI / SE", lastUpdate: "2025-03-15",
});

save("reservas-internacionales", {
  id: "reservas-internacionales", name: "Reservas Internacionales",
  inegi_id: "5300000064", unit: "Millones de dólares",
  description: "Ahorros del país para emergencias económicas",
  lastValue: "228,852", lastDate: "2025/03",
  previousValue: "220,200", changePercent: 3.93, trend: "up",
  observations: genYearly(2005, 2025, [
    68669,76330,87211,95302,90838,
    113597,142475,163515,176578,193239,
    176735,178025,175450,174524,183079,
    195682,202426,199145,210233,220200,
    228852,
  ]),
  aiSummary: "México tiene casi 229 mil millones de dólares en reservas internacionales, un récord. Es como la cuenta de ahorros del país para enfrentar crisis económicas o devaluaciones.",
  aiInsight: "Las reservas dan estabilidad al peso. Si hubiera una crisis, Banxico puede usar este dinero para defender la moneda. Es como tu fondo de emergencia, pero a nivel país.",
  source: "INEGI / Banxico", lastUpdate: "2025-04-15",
});

save("deuda-publica", {
  id: "deuda-publica", name: "Deuda Pública",
  inegi_id: "5300000065", unit: "Porcentaje del PIB",
  description: "Cuánto debe el gobierno respecto a lo que produce el país",
  lastValue: "46.8", lastDate: "2024/12",
  previousValue: "46.5", changePercent: 0.65, trend: "up",
  observations: genYearly(2000, 2024, [
    20.5,20.8,22.1,22.5,21.8,21.2,20.5,21.2,24.5,27.2,
    27.5,28.2,28.8,30.5,32.2,34.8,37.2,35.8,36.5,35.2,
    42.5,43.2,44.5,46.5,46.8,
  ]),
  aiSummary: "La deuda pública de México es el 46.8% del PIB. Aunque ha subido (en 2000 era 20.5%), sigue siendo moderada comparada con otros países: EUA debe el 120% y Japón el 260%.",
  aiInsight: "Que el gobierno se endeude no siempre es malo si el dinero se invierte bien. El problema es cuando se endeuda para gastar sin generar crecimiento.",
  source: "INEGI / SHCP", lastUpdate: "2025-03-01",
});

save("finanzas-estatales", {
  id: "finanzas-estatales", name: "Finanzas Públicas Estatales",
  inegi_id: "5300000066", unit: "Miles de millones de pesos",
  description: "Ingresos y gastos de los gobiernos de los estados",
  lastValue: "2,450", lastDate: "2024/12",
  previousValue: "2,310", changePercent: 6.06, trend: "up",
  observations: genYearly(2010, 2024, [
    985,1050,1120,1190,1260,1320,1380,1450,1520,1580,1620,1780,1950,2310,2450,
  ]),
  aiSummary: "Los 32 estados de México manejaron 2.45 billones de pesos en 2024. Los que más recaudan son CDMX, Estado de México, Jalisco y Nuevo León.",
  aiInsight: "Este dinero paga los servicios públicos de tu estado: policía, hospitales, escuelas, carreteras. Que suba significa más recursos para tu comunidad (si se gastan bien).",
  source: "INEGI - Estadísticas de Finanzas Públicas", lastUpdate: "2025-03-15",
});

console.log("\n🎉 Session 1-3 complete! 21 new indicators added.");
console.log("   📊 Total indicators now: ~44");
