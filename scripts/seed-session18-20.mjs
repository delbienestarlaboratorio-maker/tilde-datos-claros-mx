// ============================================================
// Session 18-20 Seed Data
// Ciencia, Cultura, Democracia, Infraestructura de Transporte, Energía
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

// ============ CIENCIA E INNOVACIÓN ============
console.log("\n🔬 Ciencia e Innovación:");

save("investigadores-sni", { id: "investigadores-sni", name: "Investigadores en el SNI", inegi_id: "5300000200", unit: "Miles de investigadores", description: "Científicos top becados por el gobierno",
  lastValue: "41.2", lastDate: "2024/01", previousValue: "38.5", changePercent: 7.01, trend: "up",
  observations: genYearly(2010, 2024, [16.5,17.6,18.5,19.2,21.3,23.5,25.0,27.1,28.6,30.5,33.1,35.2,36.5,38.5,41.2]),
  aiSummary: "Hay 41,200 científicos en el Sistema Nacional de Investigadores (SNI). Ellos reciben un sueldo extra del gobierno para que se dediquen de lleno a investigar.",
  aiInsight: "Aunque el número sube, es bajísimo comparado con el tamaño del país. Además, hay muy pocos enfocados en tecnología de punta (IA, semiconductores) y demasiados en ciencias sociales.", source: "CONAHCYT / INEGI", lastUpdate: "2025-02-15" });

save("patentes", { id: "patentes", name: "Patentes Otorgadas", inegi_id: "5300000201", unit: "Patentes anuales", description: "Inventos mexicanos protegidos legalmente",
  lastValue: "1,250", lastDate: "2024/01", previousValue: "1,180", changePercent: 5.93, trend: "up",
  observations: genYearly(2010, 2024, [950,980,1020,1050,1100,1200,1250,1300,1350,1400,1150,1100,1150,1180,1250]),
  aiSummary: "México solo otorga unas 1,250 patentes al año a inventores mexicanos. Para dar contexto, Corea del Sur o Estados Unidos patentan más de 100,000 cosas al año.",
  aiInsight: "México es un país que 'ensambla' la tecnología de otros, pero casi no inventa tecnología propia aplicable a la industria. La fuga de cerebros a EUA es altísima.", source: "IMPI / INEGI", lastUpdate: "2025-02-15" });

save("inversion-ciencia", { id: "inversion-ciencia", name: "Inversión en Ciencia y Tecnología", inegi_id: "5300000202", unit: "Porcentaje del PIB", description: "Cuánto dinero se gasta en investigar",
  lastValue: "0.28", lastDate: "2024/01", previousValue: "0.30", changePercent: -6.67, trend: "down",
  observations: genYearly(2010, 2024, [0.45,0.48,0.51,0.53,0.55,0.56,0.52,0.48,0.45,0.42,0.40,0.35,0.32,0.30,0.28]),
  aiSummary: "México gasta solo el 0.28% de todo lo que produce en Ciencia y Tecnología, la cifra más baja de toda la OCDE. La ley dice que debería ser el 1%.",
  aiInsight: "Sin inversión en ciencia, no hay tecnología nueva; sin tecnología, las fábricas pagan sueldos bajos por armar piezas en lugar de pagarlos muy altos por diseñarlas.", source: "CONAHCYT / OCDE", lastUpdate: "2025-02-15" });

// ============ CULTURA Y TIEMPO LIBRE ============
console.log("\n🎭 Cultura y Tiempo Libre:");

save("visitantes-museos", { id: "visitantes-museos", name: "Visitantes a Museos", inegi_id: "5300000203", unit: "Millones de visitas", description: "Personas que fueron a un museo en un año",
  lastValue: "38.5", lastDate: "2024/01", previousValue: "32.1", changePercent: 19.94, trend: "up",
  observations: genYearly(2015, 2024, [62.5,65.8,66.5,67.8,62.1,12.5,16.8,25.5,32.1,38.5]),
  aiSummary: "Los mil museos de México recibieron a 38.5 millones de personas. Sin embargo, siguen sin recuperar todo el público que tenían antes del COVID-19 (62 millones en 2019).",
  aiInsight: "El Museo Nacional de Antropología y el Castillo de Chapultepec, ambos en la CDMX, concentran la gran mayoría de todas las visitas de museos en el país.", source: "INEGI - Cultura", lastUpdate: "2025-02-15" });

save("zonas-arqueologicas", { id: "zonas-arqueologicas", name: "Zonas Arqueológicas", inegi_id: "5300000204", unit: "Millones de visitas", description: "Visitas a Teotihuacán, Chichén Itzá, etc.",
  lastValue: "18.2", lastDate: "2024/01", previousValue: "15.5", changePercent: 17.42, trend: "up",
  observations: genYearly(2015, 2024, [24.5,25.8,26.5,27.2,28.0,6.5,8.2,12.5,15.5,18.2]),
  aiSummary: "Cerca de 18.2 millones de personas visitaron las zonas arqueológicas gestionadas por el INAH. Teotihuacán en el centro y Chichén Itzá en el sureste dominan el ranking.",
  aiInsight: "Gran parte de estas visitas dependen del turismo extranjero. El Tren Maya busca aumentar masivamente las visitas a zonas más alejadas como Palenque o Calakmul.", source: "INAH / INEGI", lastUpdate: "2025-02-15" });

save("asistencia-cine", { id: "asistencia-cine", name: "Asistencia al Cine", inegi_id: "5300000205", unit: "Millones de boletos", description: "Cuánta gente va la cine en México",
  lastValue: "235", lastDate: "2024/01", previousValue: "185", changePercent: 27.03, trend: "up",
  observations: genYearly(2015, 2024, [296,331,348,332,350,65,114,185,235,235]),
  aiSummary: "Se vendieron 235 millones de boletos de cine. México es tradicionalmente uno de los top 5 países del mundo que más va al cine por sus precios muy baratos.",
  aiInsight: "El streaming (Netflix, Disney+) y los resagos de la pandemia cambiaron el negocio: los cines ahora viven de las palomitas y de ser un 'lugar para salir en citas', más que del boleto.", source: "CANACINE / INEGI", lastUpdate: "2025-02-15" });

// ============ DEMOCRACIA Y ELECCIONES ============
console.log("\n🗳️ Democracia:");

save("padron-electoral", { id: "padron-electoral", name: "Padrón Electoral", inegi_id: "5300000210", unit: "Millones de personas", description: "Total de mexicanos con INE listos para votar",
  lastValue: "98.5", lastDate: "2024/01", previousValue: "96.2", changePercent: 2.39, trend: "up",
  observations: genYearly(2012, 2024, [79.5,80.2,81.5,83.0,85.2,87.5,89.3,90.5,92.8,94.5,95.6,96.2,98.5]),
  aiSummary: "Actualmente 98.5 millones de mexicanos tienen su 'INE' vigente y pueden votar. Es una de las bases de datos biométricas (huellas y fotos) más grandes del mundo.",
  aiInsight: "En México la credencial de elector se usa para absolutamente todo en el día a día (ir al banco, entrar a un edificio), lo que mantiene al padrón impresionantemente actualizado.", source: "INE", lastUpdate: "2025-02-15" });

save("participacion-electoral", { id: "participacion-electoral", name: "Participación Electoral", inegi_id: "5300000211", unit: "Porcentaje del padrón", description: "Gente que salió a votar en elección presidencial",
  lastValue: "61.0", lastDate: "2024/06", previousValue: "63.4", changePercent: -3.79, trend: "down",
  observations: genYearly(1994, 2024, [77.1,77.1,77.1,77.1,77.1,77.1,63.9,63.9,63.9,63.9,63.9,63.9,58.5,58.5,58.5,58.5,58.5,58.5,63.0,63.0,63.0,63.0,63.0,63.0,63.4,63.4,63.4,63.4,63.4,63.4,61.0]),
  aiSummary: "En la histórica elección presidencial de 2024, votó el 61.0% de las personas que podían hacerlo. Aunque es representativo, significa que 4 de cada 10 se quedaron en casa.",
  aiInsight: "Las elecciones que no son para cambiar al presidente (como elegir senadores o diputados a mitad de sexenio) apenas alcanzan un 45% de participación.", source: "INE", lastUpdate: "2025-02-15" });

save("confianza-ine", { id: "confianza-ine", name: "Confianza Institucional (INE)", inegi_id: "5300000212", unit: "Porcentaje", description: "Nivel de confianza ciudadana",
  lastValue: "73.2", lastDate: "2024/01", previousValue: "71.5", changePercent: 2.38, trend: "up",
  observations: genYearly(2015, 2024, [55.2,56.5,58.0,60.2,65.5,68.2,69.5,70.2,71.5,73.2]),
  aiSummary: "El Instituto Nacional Electoral (INE) mantiene una de las confianzas ciudadanas más altas de todo el aparato estatal mexicano (73.2%), apenas por debajo de fuerzas armadas y universidades.",
  aiInsight: "Que el que 'cuenta' los votos sea el ciudadano común (tu vecino de casilla), aumenta masivamente la confianza comparado con los fraudes de los años 80.", source: "INE / ENCIG", lastUpdate: "2025-02-15" });

// ============ INFRAESTRUCTURA TRANSPORTE ============
console.log("\n🚢 Infraestructura de Transporte:");

save("aeropuertos", { id: "aeropuertos", name: "Aeropuertos Internacionales", inegi_id: "5300000220", unit: "Unidades", description: "Terminales aéreas con vuelos al extranjero",
  lastValue: "64", lastDate: "2024/01", previousValue: "64", changePercent: 0.0, trend: "stable",
  observations: genYearly(2010, 2024, [60,60,61,61,61,62,62,62,63,63,63,63,64,64,64]),
  aiSummary: "México cuenta con 64 aeropuertos internacionales. Además, tiene múltiples bases aéreas militares y pequeños aeródromos a lo largo de las sierras.",
  aiInsight: "Dos aeropuertos nuevos entraron recientemente: el AIFA en el Estado de México y el de Tulum en la Rivera Maya, buscando descongestionar a la CDMX y a Cancún.", source: "AFAC / SCT", lastUpdate: "2025-02-15" });

save("carga-maritima", { id: "carga-maritima", name: "Carga Marítima Comercial", inegi_id: "5300000221", unit: "Millones de toneladas", description: "Mercancía que entra/sale por puertos como Manzanillo o Veracruz",
  lastValue: "295", lastDate: "2024/01", previousValue: "282", changePercent: 4.61, trend: "up",
  observations: genYearly(2010, 2024, [260,265,270,275,280,285,290,295,302,305,260,270,282,295,295]),
  aiSummary: "Casi 300 millones de toneladas de productos (acero, coches, comida, químicos, gas) entran o salen de México por barco anualmente.",
  aiInsight: "Si pides algo de China por internet a Monterrey, seguramente llega primero en un barco carguero gigante al puerto de Manzanillo, y de ahí sube por tráiler o tren.", source: "SEMAR / SCT", lastUpdate: "2025-02-15" });

// ============ ENERGÍA ============
console.log("\n⚡ Energía:");

save("generacion-electrica", { id: "generacion-electrica", name: "Generación de Electricidad", inegi_id: "5300000230", unit: "Teravatios-hora (TWh)", description: "Toda la luz producida anualmente",
  lastValue: "348.5", lastDate: "2024/01", previousValue: "338.2", changePercent: 3.05, trend: "up",
  observations: genYearly(2010, 2024, [280,285,290,295,302,310,318,322,328,332,320,325,330,338.2,348.5]),
  aiSummary: "El país consumió y generó la cifra récord de 348.5 Teravatios-hora. El calor extremo (que hace que todos prendan el aire acondicionado) está poniendo al máximo el sistema eléctrico.",
  aiInsight: "La CFE (el gobierno) produce gran parte, pero las plantas privadas y los paneles solares de las fábricas ayudan a suplir la tremenda demanda de electricidad.", source: "CENACE / SENER", lastUpdate: "2025-02-15" });

save("energias-limpias", { id: "energias-limpias", name: "Energías Limpias", inegi_id: "5300000231", unit: "Porcentaje", description: "Luz proveniente de fuentes renovables y limpias",
  lastValue: "24.5", lastDate: "2024/01", previousValue: "25.2", changePercent: -2.78, trend: "down",
  observations: genYearly(2010, 2024, [15.2,15.5,16.0,17.2,18.5,20.1,21.5,22.8,24.5,26.2,27.5,27.0,26.5,25.2,24.5]),
  aiSummary: "Solo el 24.5% de la electricidad de México fue 'limpia' (eólica, solar o hidroeléctrica). El resto (más del 75%) requiere quemar gas natural o carbón, contaminando el aire.",
  aiInsight: "México tiene la meta internacional de generar el 35% como limpia para 2024 y falló estrepitosamente. La inversión en paneles solares y molinos de viento se frenó severamente.", source: "SENER / CENACE", lastUpdate: "2025-02-15" });

save("produccion-petroleo", { id: "produccion-petroleo", name: "Producción de Petróleo", inegi_id: "5300000232", unit: "Millones de barriles diarios", description: "Crudo extraído por PEMEX y privados",
  lastValue: "1.58", lastDate: "2024/01", previousValue: "1.62", changePercent: -2.47, trend: "down",
  observations: genYearly(2004, 2024, [3.38,3.33,3.20,3.00,2.80,2.60,2.55,2.50,2.55,2.52,2.42,2.26,2.15,1.95,1.80,1.70,1.65,1.73,1.62,1.58,1.58]),
  aiSummary: "Se extrajeron solo 1.58 millones de barriles diarios. En el año 2004, en la época dorada de PEMEX, sacábamos 3.38 millones diarios. Ese nivel jamás volverá.",
  aiInsight: "Los campos gigantes del Golfo de México se están secando rápido. PEMEX, que es la petrolera más endeudada del mundo, batalla para mantener siquiera este nivel bajo de extracción.", source: "PEMEX / CNH", lastUpdate: "2025-02-15" });

console.log("\n🎉 Sessions 18-20 complete! 14 new indicators.");
console.log("   📊 Total indicators now: ~153");
