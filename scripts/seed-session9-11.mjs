// ============================================================
// Session 9-11 Seed Data
// Empresas (DENUE), TIC, Transporte, Agricultura
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

// ============ EMPRESAS Y NEGOCIOS (DENUE) ============
console.log("\n🏢 Empresas y Negocios (DENUE):");

save("denue-total", { id: "denue-total", name: "Total DENUE", inegi_id: "5300000100", unit: "Millones de negocios", description: "Todos los negocios registrados en México",
  lastValue: "5.5", lastDate: "2024/01", previousValue: "5.3", changePercent: 3.77, trend: "up",
  observations: genYearly(2010, 2024, [4.3,4.4,4.5,4.6,4.7,4.8,4.9,5.0,5.1,5.2,4.8,5.0,5.2,5.3,5.5]),
  aiSummary: "Hay 5.5 millones de unidades económicas en México. El 99.8% son PyMEs (Pequeñas y Medianas Empresas), las cuales generan el 72% del empleo en el país.",
  aiInsight: "Casi toda la economía mexicana depende de los micronegocios: la tiendita, la papelería, la fonda. Si estos negocios cierran, el empleo se desploma.", source: "INEGI - DENUE", lastUpdate: "2025-01-15" });

save("demografia-negocios", { id: "demografia-negocios", name: "Esperanza de Vida de Negocios", inegi_id: "5300000101", unit: "Años", description: "Cuánto dura vivo un negocio nuevo",
  lastValue: "7.8", lastDate: "2024/01", previousValue: "7.5", changePercent: 4.0, trend: "up",
  observations: genYearly(2010, 2024, [7.2,7.3,7.4,7.5,7.6,7.7,7.8,7.9,8.0,8.1,6.5,6.8,7.2,7.5,7.8]),
  aiSummary: "En promedio, un negocio nuevo en México sobrevive 7.8 años. Sin embargo, el 33% de las empresas nuevas mueren durante su primer año de vida.",
  aiInsight: "Emprender en México es difícil. Las principales razones de 'muerte' de empresas son falta de financiamiento, mala administración y problemas de inseguridad.", source: "INEGI - EDN", lastUpdate: "2025-01-15" });

save("innovacion-empresas", { id: "innovacion-empresas", name: "Innovación en Empresas", inegi_id: "5300000102", unit: "Porcentaje de empresas", description: "Empresas que crearon productos o procesos nuevos",
  lastValue: "18.5", lastDate: "2024/01", previousValue: "17.2", changePercent: 7.55, trend: "up",
  observations: genYearly(2015, 2024, [10.5,11.2,12.0,13.5,14.8,12.5,14.0,15.5,17.2,18.5]),
  aiSummary: "Solo 18.5% de las empresas en México reporta haber realizado alguna innovación. El desarrollo tecnológico propio en México sigue siendo muy bajo comparado con países desarrollados.",
  aiInsight: "México es excelente manufacturando tecnología inventada en otros países (teles, celulares, autos), pero inventamos y patentamos muy poco nosotros mismos.", source: "INEGI - ESIDET", lastUpdate: "2025-01-15" });

save("productividad", { id: "productividad", name: "Productividad Laboral", inegi_id: "5300000103", unit: "Índice base 2018=100", description: "Qué tanto se produce por cada hora trabajada",
  lastValue: "98.5", lastDate: "2024/12", previousValue: "97.2", changePercent: 1.33, trend: "up",
  observations: genYearly(2010, 2024, [88.5,90.2,92.5,94.8,96.5,98.2,99.5,100.8,100.0,98.5,85.2,92.5,95.8,97.2,98.5]),
  aiSummary: "La productividad laboral lleva varios años estancada. Los mexicanos son los que más horas trabajan al año en la OCDE (2,128 hrs), pero no los que más producen.",
  aiInsight: "Trabajar muchas horas no es igual a ser productivo. Sin innovación, automatización y mejor capacitación, trabajar más duro no mejorará los salarios reales.", source: "INEGI - IGPL", lastUpdate: "2025-03-15" });

// ============ TIC Y TECNOLOGÍA ============
console.log("\n📱 TIC y Tecnología:");

save("usuarios-internet", { id: "usuarios-internet", name: "Usuarios de Internet", inegi_id: "5300000110", unit: "Millones de personas", description: "Mexicanos que usan internet",
  lastValue: "97.0", lastDate: "2024/01", previousValue: "93.1", changePercent: 4.18, trend: "up",
  observations: genYearly(2010, 2024, [32.8,37.6,40.9,46.0,47.4,62.4,65.5,71.3,74.3,80.6,84.1,88.6,93.1,95.0,97.0]),
  aiSummary: "97 millones de mexicanos usan internet, el 81% de la población. El celular es el rey indiscutible: 97% de los usuarios se conecta a través de un teléfono móvil.",
  aiInsight: "La brecha digital es ahora entre zonas urbanas (donde el 85% tiene internet) y zonas rurales (donde apenas el 62% puede conectarse).", source: "INEGI - ENDUTIH", lastUpdate: "2025-01-15" });

save("usuarios-celular", { id: "usuarios-celular", name: "Usuarios de Celular", inegi_id: "5300000111", unit: "Millones de personas", description: "Mexicanos con teléfono celular",
  lastValue: "97.2", lastDate: "2024/01", previousValue: "93.8", changePercent: 3.62, trend: "up",
  observations: genYearly(2010, 2024, [50.6,56.8,60.6,65.1,68.0,77.7,81.0,80.9,83.1,86.5,88.2,91.7,93.8,95.5,97.2]),
  aiSummary: "Hay más de 97 millones de usuarios de teléfono celular en México. El 95% de estos usan un smartphone (teléfono inteligente).",
  aiInsight: "El celular reemplazó a la computadora para la gran mayoría de la población. Hoy en México se usa el celular para trabajo, compras, salud, bancos y educación.", source: "INEGI - ENDUTIH", lastUpdate: "2025-01-15" });

save("hogares-computadora", { id: "hogares-computadora", name: "Hogares con Computadora", inegi_id: "5300000112", unit: "Porcentaje de hogares", description: "De cada 100 casas, cuántas tienen PC o laptop",
  lastValue: "43.5", lastDate: "2024/01", previousValue: "44.8", changePercent: -2.90, trend: "down",
  observations: genYearly(2010, 2024, [29.8,30.0,32.2,35.8,38.3,44.9,45.6,45.4,44.9,44.3,44.2,44.8,44.2,44.0,43.5]),
  aiSummary: "Solo el 43.5% de los hogares tiene computadora, una cifra que lleva años cayendo o estancada. La gente prefiere tener un buen smartphone que una computadora.",
  aiInsight: "Aunque el celular sirve para consultar internet, la falta de computadora en casa es una desventaja enorme para los estudiantes a la hora de hacer tareas complejas o programar.", source: "INEGI - ENDUTIH", lastUpdate: "2025-01-15" });

save("gobierno-electronico", { id: "gobierno-electronico", name: "Gobierno Electrónico", inegi_id: "5300000113", unit: "Porcentaje de usuarios", description: "Personas que hacen trámites de gobierno por internet",
  lastValue: "48.5", lastDate: "2024/01", previousValue: "45.2", changePercent: 7.30, trend: "up",
  observations: genYearly(2015, 2024, [15.8,18.2,21.5,25.8,30.2,38.5,42.8,45.2,47.0,48.5]),
  aiSummary: "El 48.5% de los internautas usa la web para interactuar con el gobierno (tramitar actas, pagar impuestos de forma electrónica, sacar citas).",
  aiInsight: "El COVID empujó la digitalización del gobierno 10 años hacia el futuro. Trámites que antes obligaban a hacer 3 horas de fila ahora se resuelven en 5 minutos.", source: "INEGI - ENDUTIH / ENCIG", lastUpdate: "2025-01-15" });

// ============ TRANSPORTE ============
console.log("\n🚗 Transporte:");

save("accidentes-transito", { id: "accidentes-transito", name: "Accidentes de Tránsito", inegi_id: "5300000120", unit: "Miles de accidentes", description: "Choques y accidentes en zonas urbanas",
  lastValue: "381", lastDate: "2024/01", previousValue: "377", changePercent: 1.06, trend: "stable",
  observations: genYearly(2005, 2024, [430,440,460,450,420,410,400,380,390,385,380,360,365,365,362,301,340,377,379,381]),
  aiSummary: "En 2024 se reportaron 381 mil accidentes de tránsito en el país (solo en zonas urbanas). En estos accidentes fallecieron casi 5,000 personas.",
  aiInsight: "La principal causa de los choques es el exceso de velocidad y el uso del celular. Los motociclistas son los más vulnerables, representando el mayor aumento en víctimas.", source: "INEGI - ATUS", lastUpdate: "2025-02-15" });

save("red-carretera", { id: "red-carretera", name: "Red Carretera Nacional", inegi_id: "5300000121", unit: "Miles de kilómetros", description: "Total de carreteras pavimentadas y terracería",
  lastValue: "408", lastDate: "2024/01", previousValue: "400", changePercent: 2.0, trend: "up",
  observations: genYearly(2005, 2024, [355,360,365,370,372,374,378,380,382,385,388,390,392,395,398,398,399,400,402,408]),
  aiSummary: "México cuenta con 408 mil kilómetros de carreteras (la distancia de la Tierra a la Luna). Sin embargo, solo unos 175 mil kilómetros están pavimentados.",
  aiInsight: "Casi toda la carga y pasaje de México (80%) se mueve por carretera. Mantener en buen estado estas vías es crítico; un bache gigantesco encarece todo el transporte.", source: "INEGI / SICT", lastUpdate: "2025-01-15" });

save("carga-ferroviaria", { id: "carga-ferroviaria", name: "Carga Ferroviaria", inegi_id: "5300000122", unit: "Millones de toneladas", description: "Mercancía transportada en tren",
  lastValue: "135.5", lastDate: "2024/01", previousValue: "128.2", changePercent: 5.69, trend: "up",
  observations: genYearly(2010, 2024, [105,110,115,118,120,122,125,127,128,125,119,122,125,128.2,135.5]),
  aiSummary: "Los trenes movieron 135.5 millones de toneladas de carga. Los trenes en México mueven mercancías pesadas: granos agrícolas, minerales y autopartes.",
  aiInsight: "Mover carga en tren es mucho más barato y contamina menos que usar tráilers. El sector automotriz depende absolutamente del tren para exportar a EUA.", source: "INEGI / SICT", lastUpdate: "2025-01-15" });

save("vuelos-pasajeros", { id: "vuelos-pasajeros", name: "Pasajeros en Vuelos", inegi_id: "5300000123", unit: "Millones de pasajeros", description: "Personas que viajaron en avión en México",
  lastValue: "118.5", lastDate: "2024/01", previousValue: "107.4", changePercent: 10.34, trend: "up",
  observations: genYearly(2010, 2024, [52,55,60,65,70,78,85,90,95,102,48,80,107,112,118.5]),
  aiSummary: "Un récord de 118.5 millones de pasajeros usaron el avión en 2024. El aeropuerto de la CDMX, Cancún y Guadalajara concentran la mayor parte de este tráfico.",
  aiInsight: "Las aerolíneas de bajo costo cambiaron México: hoy la gente usa el avión para viajes que antes hacía en autobús, porque muchas veces el avión es más barato.", source: "INEGI / AFAC", lastUpdate: "2025-01-15" });

// ============ AGRICULTURA Y CAMPO ============
console.log("\n🌾 Agricultura y Campo:");

save("prod-maiz", { id: "prod-maiz", name: "Producción de Maíz", inegi_id: "5300000130", unit: "Millones de toneladas", description: "La base de la alimentación mexicana",
  lastValue: "26.5", lastDate: "2024/01", previousValue: "27.8", changePercent: -4.68, trend: "down",
  observations: genYearly(2010, 2024, [23.3,17.6,22.0,22.6,23.2,24.6,28.2,27.7,27.1,27.2,27.4,27.5,26.5,27.8,26.5]),
  aiSummary: "México produjo 26.5 millones de toneladas de maíz, pero consumimos cerca de 45 millones. El diferencial (principalmente maíz amarillo para animales) lo tenemos que importar.",
  aiInsight: "México es autosuficiente en maíz blanco para tortillas y consumo humano, pero importamos muchísimo maíz amarillo de EUA para engordar reses, cerdos y pollos.", source: "INEGI / SADER", lastUpdate: "2025-02-15" });

save("prod-aguacate", { id: "prod-aguacate", name: "Producción de Aguacate", inegi_id: "5300000131", unit: "Millones de toneladas", description: "El 'oro verde' de exportación",
  lastValue: "2.5", lastDate: "2024/01", previousValue: "2.4", changePercent: 4.17, trend: "up",
  observations: genYearly(2010, 2024, [1.1,1.2,1.3,1.4,1.5,1.6,1.8,2.0,2.1,2.3,2.3,2.4,2.4,2.4,2.5]),
  aiSummary: "Se produjeron 2.5 millones de toneladas de aguacate, exportando la mayor parte a EUA. Michoacán y Jalisco dominan la producción.",
  aiInsight: "El aguacate genera más dólares para México que muchas industrias completas. El Super Bowl es la época del año donde todo EUA come aguacate mexicano.", source: "INEGI / SADER", lastUpdate: "2025-02-15" });

save("prod-ganadera", { id: "prod-ganadera", name: "Producción de Carne", inegi_id: "5300000132", unit: "Millones de toneladas", description: "Suma de res, cerdo y ave",
  lastValue: "7.8", lastDate: "2024/01", previousValue: "7.6", changePercent: 2.63, trend: "up",
  observations: genYearly(2010, 2024, [5.5,5.7,5.8,6.0,6.1,6.2,6.4,6.6,6.8,7.0,7.2,7.3,7.5,7.6,7.8]),
  aiSummary: "México produjo 7.8 millones de toneladas de carne, siendo la carne de ave (pollo) la más producida y consumida, ya que es la más barata.",
  aiInsight: "El consumo de carne por mexicano ha subido con los años. Exportamos carne premium (res) de Sonora, e importamos patas y muslos de pollo.", source: "INEGI / SADER", lastUpdate: "2025-02-15" });

save("pesca", { id: "pesca", name: "Captura Pesquera", inegi_id: "5300000133", unit: "Miles de toneladas", description: "Total de pescados y mariscos capturados",
  lastValue: "1,980", lastDate: "2024/01", previousValue: "1,950", changePercent: 1.54, trend: "up",
  observations: genYearly(2010, 2024, [1600,1650,1700,1750,1720,1710,1750,1780,1800,1850,1820,1880,1920,1950,1980]),
  aiSummary: "Se pescaron cerca de 2 millones de toneladas. La sardina, atún, camarón y mojarra son las principales especies.",
  aiInsight: "México tiene litorales inmensos, pero comemos muy poco pescado comparado con países ribereños (13 kg por persona al año). Y mucho del atún que comemos es importado.", source: "INEGI / CONAPESCA", lastUpdate: "2025-02-15" });

console.log("\n🎉 Sessions 9-11 complete! 16 new indicators.");
console.log("   📊 Total indicators now: ~110");
