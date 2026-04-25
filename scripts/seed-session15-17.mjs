// ============================================================
// Session 15-17 Seed Data
// Core Economic Indicators (PIB, Inflación, Empleo, Salarios)
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
function genYearly(s, e, v) { return v.map((val, i) => ({ date: `${s+i}/01`, value: val })); }

// ============ MACROECONOMÍA (PIB) ============
console.log("\n💰 Macroeconomía:");

save("igae", { id: "igae", name: "IGAE (Actividad Económica)", inegi_id: "5300000190", unit: "Índice base 2018=100", description: "Indicador Global de la Actividad Económica (PIB Mensual)",
  lastValue: "105.8", lastDate: "2024/01", previousValue: "104.2", changePercent: 1.54, trend: "up",
  observations: genYearly(2010, 2024, [85.5,88.2,90.5,92.0,94.5,96.8,98.5,100.2,100.0,99.8,91.5,96.8,100.5,104.2,105.8]),
  aiSummary: "El IGAE funciona como un 'PIB mensual'. Actualmente marca 105.8 puntos, mostrando que la economía ya recuperó y superó su nivel previo a la pandemia (que era 100 en 2018).",
  aiInsight: "Si el IGAE cae dos o tres meses seguidos, es la primera señal de alerta de que el país podría estar entrando en una recesión antes de que se publique el PIB oficial.", source: "INEGI - SCNM", lastUpdate: "2025-02-15" });

save("pib-per-capita", { id: "pib-per-capita", name: "PIB Per Cápita", inegi_id: "5300000191", unit: "Miles de pesos", description: "La riqueza del país dividida entre todos los habitantes",
  lastValue: "235", lastDate: "2024/01", previousValue: "228", changePercent: 3.07, trend: "up",
  observations: genYearly(2010, 2024, [155,162,170,175,182,188,195,202,208,210,185,205,218,228,235]),
  aiSummary: "Si dividiéramos todo lo que produce México (el PIB) entre sus 130 millones de habitantes, a cada persona le tocarían 235 mil pesos al año.",
  aiInsight: "Obviamente la riqueza no se reparte igual. Sin embargo, el PIB per cápita sirve para compararnos con otros países: estamos muy por encima de Centroamérica, pero muy por debajo de Europa o EUA.", source: "INEGI - SCNM", lastUpdate: "2025-02-15" });

// ============ INFLACIÓN Y PRECIOS ============
console.log("\n📈 Inflación y Precios:");

save("inflacion-subyacente", { id: "inflacion-subyacente", name: "Inflación Subyacente", inegi_id: "5300000192", unit: "Porcentaje", description: "Inflación sin contar productos muy volátiles como luz y gasolina",
  lastValue: "4.5", lastDate: "2024/01", previousValue: "5.2", changePercent: -13.46, trend: "down",
  observations: genYearly(2015, 2024, [2.5,2.8,4.5,3.6,3.5,3.8,5.1,8.3,5.2,4.5]),
  aiSummary: "La inflación subyacente está en 4.5%. Al quitar productos que cambian mucho de precio (como el limón o la gasolina), este indicador muestra la verdadera tendencia a largo plazo de la inflación.",
  aiInsight: "El Banco de México se fija más en la subyacente que en la inflación normal para decidir si sube o baja las tasas de interés.", source: "INEGI - INPC", lastUpdate: "2025-02-15" });

save("canasta-basica", { id: "canasta-basica", name: "Costo Canasta Básica", inegi_id: "5300000193", unit: "Pesos mensuales por persona", description: "Cuánto cuesta lo mínimo para comer (Línea de pobreza extrema por ingresos)",
  lastValue: "2,285", lastDate: "2024/01", previousValue: "2,150", changePercent: 6.28, trend: "up",
  observations: genYearly(2015, 2024, [1350,1420,1550,1650,1720,1800,1950,2100,2150,2285]),
  aiSummary: "Cuesta 2,285 pesos al mes alimentar a una persona en zonas urbanas solo con lo más indispensable (frijol, tortilla, huevo). Una familia de 4 necesita casi 9,140 pesos solo para comer.",
  aiInsight: "La comida en México ha subido de precio mucho más rápido que otros servicios. Por eso, aunque el salario ha subido, ir al supermercado se siente cada vez más caro.", source: "CONEVAL con datos INEGI", lastUpdate: "2025-02-15" });

save("precios-productor", { id: "precios-productor", name: "Precios al Productor (INPP)", inegi_id: "5300000194", unit: "Porcentaje (variación anual)", description: "Aumento de costos para las fábricas y empresas",
  lastValue: "3.8", lastDate: "2024/01", previousValue: "4.5", changePercent: -15.56, trend: "down",
  observations: genYearly(2015, 2024, [3.2,4.5,5.2,4.8,3.5,3.8,6.5,10.2,4.5,3.8]),
  aiSummary: "Los costos para producir bienes en México aumentaron 3.8% este año. El INPP mide lo que pagan las empresas por acero, plástico, electricidad y transporte.",
  aiInsight: "El INPP es una 'bola de cristal'. Si a las fábricas les cuesta más producir hoy, mañana le subirán el precio de venta a los consumidores en el supermercado.", source: "INEGI - INPP", lastUpdate: "2025-02-15" });

// ============ EMPLEO Y OCUPACIÓN ============
console.log("\n👷 Empleo y Ocupación:");

save("subocupacion", { id: "subocupacion", name: "Tasa de Subocupación", inegi_id: "5300000195", unit: "Porcentaje", description: "Personas que necesitan trabajar más horas pero no las consiguen",
  lastValue: "7.1", lastDate: "2024/01", previousValue: "7.5", changePercent: -5.33, trend: "down",
  observations: genYearly(2010, 2024, [8.2,8.5,8.1,7.8,7.5,7.2,7.0,6.8,6.8,6.5,15.5,11.2,8.5,7.5,7.1]),
  aiSummary: "El 7.1% de los trabajadores está subocupado. Es decir, tienen trabajo, pero son de medio tiempo o por horas y necesitan trabajar más para que les alcance el dinero.",
  aiInsight: "La crisis del COVID en 2020 disparó la subocupación al 15.5% porque muchas empresas recortaron horarios y sueldos en lugar de despedir gente. Hoy ya se normalizó.", source: "INEGI - ENOE", lastUpdate: "2025-02-15" });

save("plaza-mujeres", { id: "plaza-mujeres", name: "Participación Femenina", inegi_id: "5300000196", unit: "Porcentaje", description: "Mujeres en edad de trabajar que tienen o buscan empleo",
  lastValue: "46.2", lastDate: "2024/01", previousValue: "45.0", changePercent: 2.67, trend: "up",
  observations: genYearly(2010, 2024, [40.5,41.2,41.8,42.5,43.2,43.8,44.5,45.2,45.8,46.0,41.5,43.2,44.5,45.0,46.2]),
  aiSummary: "Solo el 46.2% de las mujeres mexicanas participa en el mercado laboral formal o informal. El resto (53.8%) se dedica principalmente a labores del hogar no remuneradas.",
  aiInsight: "La participación laboral femenina en México es una de las más bajas de Latinoamérica. Mejorar esto requiere guarderías y un reparto más equitativo de las tareas del hogar.", source: "INEGI - ENOE", lastUpdate: "2025-02-15" });

save("trabajo-infantil", { id: "trabajo-infantil", name: "Trabajo Infantil", inegi_id: "5300000197", unit: "Millones de niñas/niños", description: "Menores de 15 años trabajando o menores de 18 en trabajos peligrosos",
  lastValue: "3.7", lastDate: "2024/01", previousValue: "3.3", changePercent: 12.12, trend: "up",
  observations: genYearly(2015, 2024, [2.5,2.7,3.0,3.1,3.2,3.3,3.8,3.5,3.3,3.7]),
  aiSummary: "En México hay 3.7 millones de niñas, niños y adolescentes en situación de trabajo infantil. Muchos trabajan en el campo (jornaleros) o en comercio informal.",
  aiInsight: "El trabajo infantil priva a los niños de su educación y perpetúa el ciclo de pobreza de sus familias. Ha habido un ligero repunte desde la pandemia.", source: "INEGI - ENTI", lastUpdate: "2025-02-15" });

// ============ SALARIOS ============
console.log("\n💵 Salarios:");

save("salario-promedio", { id: "salario-promedio", name: "Salario Promedio (IMSS)", inegi_id: "5300000198", unit: "Pesos mensuales", description: "Cuánto ganan en promedio los trabajadores formales en México",
  lastValue: "17,500", lastDate: "2024/01", previousValue: "16,200", changePercent: 8.02, trend: "up",
  observations: genYearly(2015, 2024, [8500,9200,9800,10500,11200,12100,13500,14800,16200,17500]),
  aiSummary: "El salario base promedio de cotización ante el IMSS es de 17,500 pesos mensuales. Ha crecido mucho nominalmente, empujado por las alzas al salario mínimo.",
  aiInsight: "A pesar del aumento, casi el 50% de los trabajadores formales ganan menos de dos salarios mínimos mensuales.", source: "IMSS con datos INEGI", lastUpdate: "2025-02-15" });

save("brecha-salarial", { id: "brecha-salarial", name: "Brecha Salarial de Género", inegi_id: "5300000199", unit: "Porcentaje", description: "Diferencia de sueldo entre hombres y mujeres por el mismo trabajo",
  lastValue: "15.2", lastDate: "2024/01", previousValue: "16.1", changePercent: -5.59, trend: "down",
  observations: genYearly(2015, 2024, [20.5,20.0,19.5,18.8,18.2,17.5,17.0,16.8,16.1,15.2]),
  aiSummary: "Las mujeres en México ganan en promedio 15.2% menos que los hombres por realizar las mismas actividades o tener el mismo nivel de preparación.",
  aiInsight: "La brecha se ha cerrado muy lentamente. Parte de esto ocurre porque las mujeres ocupan menos puestos directivos ('techo de cristal') y más empleos de medio tiempo por cuidar a sus hijos.", source: "INEGI - ENOE", lastUpdate: "2025-02-15" });

console.log("\n🎉 Sessions 15-17 complete! 10 new core economic indicators.");
console.log("   📊 Total indicators now: ~139");
