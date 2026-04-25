// ============================================================
// Category + Subcategory Taxonomy — INEGI Data Organization
// ============================================================
import type { Category } from "./types";

export const CATEGORIES: Category[] = [
  {
    id: "economia",
    slug: "economia",
    name: "Economía",
    description: "PIB, inflación, empleo, salarios y actividad económica del país",
    icon: "💰",
    color: "#22d3ee",
    gradient: "from-cyan-500 to-blue-600",
    subcategories: [
      {
        id: "pib",
        slug: "pib",
        name: "Producto Interno Bruto",
        description: "La riqueza total que produce México",
        indicators: [
          { id: "pib-total", name: "PIB Total", inegi_id: "6207067153", unit: "Millones de pesos", description: "Valor total de todos los bienes y servicios producidos en México" },
          { id: "pib-primario", name: "PIB Sector Primario", inegi_id: "6207067154", unit: "Millones de pesos", description: "Agricultura, ganadería y pesca" },
          { id: "pib-secundario", name: "PIB Sector Secundario", inegi_id: "6207067155", unit: "Millones de pesos", description: "Industria y manufactura" },
          { id: "pib-terciario", name: "PIB Sector Terciario", inegi_id: "6207067156", unit: "Millones de pesos", description: "Comercio y servicios" },
          { id: "igae", name: "IGAE", inegi_id: "5300000190", unit: "Índice", description: "Indicador Global de la Actividad Económica (PIB Mensual)" },
          { id: "pib-per-capita", name: "PIB Per Cápita", inegi_id: "5300000191", unit: "Pesos por persona", description: "La riqueza del país dividida entre todos los habitantes" },
        ],
      },
      {
        id: "inflacion",
        slug: "inflacion",
        name: "Inflación y Precios",
        description: "Cómo cambian los precios de lo que compras",
        indicators: [
          { id: "inpc", name: "Inflación General (INPC)", inegi_id: "5300000040", unit: "Porcentaje anual", description: "Cuánto subieron los precios respecto al año pasado" },
          { id: "inflacion-subyacente", name: "Inflación Subyacente", inegi_id: "5300000041", unit: "Porcentaje anual", description: "Inflación sin contar cosas volátiles como comida y energía" },
          { id: "canasta-basica", name: "Costo de la Canasta Básica", inegi_id: "5300000042", unit: "Pesos", description: "Dinero mínimo para comer en México al mes" },
          { id: "uma", name: "Valor de la UMA", inegi_id: "5300000043", unit: "Pesos", description: "Medida que sustituyó al salario mínimo para multas" },
          { id: "inpp", name: "Índice de Precios al Productor (INPP)", inegi_id: "5300000461", unit: "Porcentaje anual", description: "Aumento de costos para fábricas y empresas" },
        ],
      },
      {
        id: "empleo",
        slug: "empleo",
        name: "Empleo y Ocupación",
        description: "Trabajo, desempleo y salarios en México",
        indicators: [
          { id: "desocupacion", name: "Tasa de Desocupación", inegi_id: "6200240332", unit: "Porcentaje", description: "De cada 100 personas que buscan trabajo, cuántas no encuentran" },
          { id: "informalidad", name: "Tasa de Informalidad", inegi_id: "444612", unit: "Porcentaje", description: "Personas que trabajan sin seguro ni prestaciones" },
          { id: "subocupacion", name: "Tasa de Subocupación", inegi_id: "5300000195", unit: "Porcentaje", description: "Personas que necesitan trabajar más horas pero no las consiguen" },
          { id: "plaza-mujeres", name: "Participación Laboral Femenina", inegi_id: "5300000196", unit: "Porcentaje", description: "Mujeres que trabajan o buscan empleo" },
          { id: "trabajo-infantil", name: "Trabajo Infantil", inegi_id: "5300000197", unit: "Millones de niños", description: "Menores de edad que trabajan" },
          { id: "trabajadores-cuenta-propia", name: "Trabajadores por Cuenta Propia", inegi_id: "5300000240", unit: "Porcentaje", description: "Gente que es su propio jefe" },
          { id: "jornada-laboral", name: "Jornada Laboral Mayor a 48h", inegi_id: "5300000241", unit: "Porcentaje", description: "Trabajadores que laboran más de lo legal a la semana" },
          { id: "condiciones-criticas", name: "Condiciones Críticas de Ocupación", inegi_id: "5300000242", unit: "Porcentaje", description: "Trabajan mucho y ganan poco o viceversa" },
          { id: "huelgas", name: "Huelgas Estalladas", inegi_id: "5300000243", unit: "Unidades", description: "Huelgas laborales activas en el país" },
          { id: "sindicalizacion", name: "Tasa de Sindicalización", inegi_id: "5300000244", unit: "Porcentaje", description: "Trabajadores pertenecientes a un sindicato" },
        ],
      },
      {
        id: "economia-cuidado",
        slug: "economia-cuidado",
        name: "Economía del Cuidado",
        description: "Trabajo no remunerado en hogares",
        indicators: [
          { id: "trabajo-no-remunerado", name: "Valor del Trabajo No Remunerado", inegi_id: "5300000460", unit: "Porcentaje del PIB", description: "Lo que valdrían económicamente los quehaceres del hogar y cuidados familiares" },
        ],
      },
      {
        id: "salarios",
        slug: "salarios",
        name: "Salarios",
        description: "Cuánto ganan los mexicanos",
        indicators: [
          { id: "salario-minimo", name: "Salario Mínimo", inegi_id: "1002000043", unit: "Pesos diarios", description: "Lo mínimo que deben pagarte por un día de trabajo" },
          { id: "salario-promedio", name: "Salario Promedio (IMSS)", inegi_id: "5300000198", unit: "Pesos mensuales", description: "Cuánto ganan en promedio los trabajadores formales" },
          { id: "brecha-salarial", name: "Brecha Salarial de Género", inegi_id: "5300000199", unit: "Porcentaje", description: "Diferencia de sueldo entre hombres y mujeres" },
        ],
      },
      {
        id: "comercio-interior",
        slug: "comercio-interior",
        name: "Comercio Interior",
        description: "Ventas, tiendas y compras de los mexicanos",
        indicators: [
          { id: "ventas-menudeo", name: "Ventas al Por Menor", inegi_id: "5300000040", unit: "Índice base 2018=100", description: "Cuánto venden las tiendas y negocios al público" },
          { id: "ventas-mayoreo", name: "Ventas al Por Mayor", inegi_id: "5300000041", unit: "Índice base 2018=100", description: "Ventas entre empresas y distribuidores" },
          { id: "comercio-electronico", name: "Comercio Electrónico", inegi_id: "5300000042", unit: "Porcentaje del comercio", description: "Cuánto del total de ventas es por internet" },
          { id: "establecimientos", name: "Establecimientos Comerciales", inegi_id: "5300000043", unit: "Unidades", description: "Total de tiendas y negocios registrados" },
          { id: "confianza-consumidor", name: "Confianza del Consumidor", inegi_id: "5300000044", unit: "Índice", description: "Qué tan segura se siente la gente para comprar" },
          { id: "expectativas-consumidor", name: "Expectativas del Consumidor", inegi_id: "5300000045", unit: "Índice", description: "Si la gente cree que la economía mejorará o empeorará" },
          { id: "ingresos-bienes", name: "Ingresos por Suministro de Bienes", inegi_id: "5300000046", unit: "Índice base 2018=100", description: "Dinero generado por la venta de productos" },
        ],
      },
      {
        id: "comercio-exterior",
        slug: "comercio-exterior",
        name: "Comercio Exterior",
        description: "Lo que México vende y compra al mundo",
        indicators: [
          { id: "exportaciones", name: "Exportaciones Totales", inegi_id: "5300000050", unit: "Millones de dólares", description: "Todo lo que México le vende al extranjero" },
          { id: "importaciones", name: "Importaciones Totales", inegi_id: "5300000051", unit: "Millones de dólares", description: "Todo lo que México compra del extranjero" },
          { id: "balanza-comercial", name: "Balanza Comercial", inegi_id: "5300000052", unit: "Millones de dólares", description: "Si vendimos más de lo que compramos (o al revés)" },
          { id: "export-petroleras", name: "Exportaciones Petroleras", inegi_id: "5300000053", unit: "Millones de dólares", description: "Ventas de petróleo y derivados al extranjero" },
          { id: "export-no-petroleras", name: "Exportaciones No Petroleras", inegi_id: "5300000054", unit: "Millones de dólares", description: "Todo lo que vendemos que no es petróleo" },
          { id: "export-manufactura", name: "Exportaciones Manufactureras", inegi_id: "5300000055", unit: "Millones de dólares", description: "Productos de fábrica que vendemos al mundo" },
          { id: "socios-comerciales", name: "Comercio con EUA", inegi_id: "5300000056", unit: "Porcentaje del total", description: "Cuánto de nuestro comercio es con Estados Unidos" },
        ],
      },
      {
        id: "finanzas",
        slug: "finanzas",
        name: "Finanzas y Sistema Financiero",
        description: "Dinero, tipo de cambio y remesas",
        indicators: [
          { id: "tipo-cambio", name: "Tipo de Cambio", inegi_id: "5300000060", unit: "Pesos por dólar", description: "Cuántos pesos mexicanos cuesta un dólar" },
          { id: "tiie", name: "Tasa TIIE", inegi_id: "5300000061", unit: "Porcentaje anual", description: "La tasa de interés de referencia en México" },
          { id: "remesas", name: "Remesas Familiares", inegi_id: "5300000062", unit: "Millones de dólares", description: "Dinero que envían los mexicanos desde el extranjero" },
          { id: "ied", name: "Inversión Extranjera Directa", inegi_id: "5300000063", unit: "Millones de dólares", description: "Dinero que invierten las empresas extranjeras en México" },
          { id: "reservas-internacionales", name: "Reservas Internacionales", inegi_id: "5300000064", unit: "Millones de dólares", description: "Ahorros del país para emergencias económicas" },
          { id: "deuda-publica", name: "Deuda Pública", inegi_id: "5300000065", unit: "Porcentaje del PIB", description: "Cuánto debe el gobierno respecto a lo que produce el país" },
          { id: "finanzas-estatales", name: "Finanzas Públicas Estatales", inegi_id: "5300000066", unit: "Millones de pesos", description: "Ingresos y gastos de los gobiernos de los estados" },
        ],
      },
      {
        id: "banca-personal",
        slug: "banca-personal",
        name: "Banca y Finanzas Personales",
        description: "Créditos, inclusión financiera y afore",
        indicators: [
          { id: "inclusion-financiera", name: "Inclusión Financiera", inegi_id: "5300000250", unit: "Porcentaje", description: "Adultos con al menos un producto financiero" },
          { id: "cuentas-bancarias", name: "Cuentas Bancarias", inegi_id: "5300000251", unit: "Millones", description: "Cuentas de débito o nómina activas" },
          { id: "tarjetas-credito", name: "Tarjetas de Crédito", inegi_id: "5300000252", unit: "Millones", description: "Plásticos de crédito circulando" },
          { id: "morosidad", name: "Morosidad Bancaria (IMOR)", inegi_id: "5300000253", unit: "Porcentaje", description: "Créditos que la gente dejó de pagar" },
          { id: "afores", name: "Ahorro en AFOREs", inegi_id: "5300000254", unit: "Billones de pesos", description: "Total de ahorro para el retiro de los mexicanos" },
          { id: "seguros-gastos", name: "Seguros de Gastos Médicos", inegi_id: "5300000255", unit: "Porcentaje", description: "Porcentaje de personas con seguro médico privado" },
        ],
      },
      {
        id: "servicios-comercio",
        slug: "servicios-comercio",
        name: "Sector Servicios",
        description: "Servicios profesionales, comida y esparcimiento",
        indicators: [
          { id: "pib-servicios", name: "PIB de Servicios Profesionales", inegi_id: "5300000260", unit: "Millones de pesos", description: "Despachos, software, consultorías" },
          { id: "pib-restaurantes", name: "PIB de Restaurantes y Hoteles", inegi_id: "5300000261", unit: "Millones de pesos", description: "Producción económica de la venta de comida preparada" },
        ],
      },
      {
        id: "turismo-extendido",
        slug: "turismo-extendido",
        name: "Turismo (Extendido)",
        description: "Pasajeros, ocupación y gasto promedio",
        indicators: [
          { id: "gasto-promedio-turista", name: "Gasto Promedio por Turista", inegi_id: "5300000270", unit: "Dólares", description: "Cuánto gasta cada extranjero al visitar México" },
          { id: "cruceristas", name: "Pasajeros en Cruceros", inegi_id: "5300000271", unit: "Millones de pasajeros", description: "Extranjeros llegando en barco a puertos turísticos" },
          { id: "excursionistas", name: "Excursionistas Fronterizos", inegi_id: "5300000272", unit: "Millones de personas", description: "Personas que cruzan la frontera por el día (shopping, médicos)" },
        ],
      },
      {
        id: "empresas",
        slug: "empresas",
        name: "Empresas y Negocios",
        description: "Directorio de empresas (DENUE) y productividad",
        indicators: [
          { id: "denue-total", name: "Total DENUE", inegi_id: "5300000100", unit: "Millones de negocios", description: "Todos los negocios registrados en México" },
          { id: "demografia-negocios", name: "Esperanza de Vida de Negocios", inegi_id: "5300000101", unit: "Años", description: "Cuánto dura vivo un negocio nuevo" },
          { id: "innovacion-empresas", name: "Innovación en Empresas", inegi_id: "5300000102", unit: "Porcentaje", description: "Empresas que crearon productos o procesos nuevos" },
          { id: "productividad", name: "Productividad Laboral", inegi_id: "5300000103", unit: "Índice", description: "Qué tanto se produce por cada hora trabajada" },
        ],
      },
      {
        id: "turismo",
        slug: "turismo",
        name: "Turismo",
        description: "Visitantes, hoteles y divisas turísticas",
        indicators: [
          { id: "turistas-internacionales", name: "Turistas Internacionales", inegi_id: "5300000070", unit: "Millones de personas", description: "Extranjeros que visitan México" },
          { id: "ocupacion-hotelera", name: "Ocupación Hotelera", inegi_id: "5300000071", unit: "Porcentaje", description: "De cada 100 cuartos de hotel, cuántos están ocupados" },
          { id: "divisas-turismo", name: "Divisas por Turismo", inegi_id: "5300000072", unit: "Millones de dólares", description: "Cuánto dinero dejan los turistas en México" },
          { id: "turismo-domestico", name: "Turismo Doméstico", inegi_id: "5300000073", unit: "Millones de viajes", description: "Viajes que hacen los mexicanos dentro del país" },
          { id: "turismo-pib", name: "Turismo como % del PIB", inegi_id: "5300000074", unit: "Porcentaje", description: "Cuánto del dinero del país viene del turismo" },
        ],
      },
    ],
  },
  {
    id: "poblacion",
    slug: "poblacion",
    name: "Población",
    description: "Cuántos somos, dónde vivimos y cómo cambiamos",
    icon: "👥",
    color: "#a78bfa",
    gradient: "from-violet-500 to-purple-600",
    subcategories: [
      {
        id: "censo",
        slug: "censo",
        name: "Censo de Población",
        description: "Conteo de todos los habitantes de México",
        indicators: [
          { id: "poblacion-total", name: "Población Total", inegi_id: "1002000001", unit: "Personas", description: "Cuántas personas viven en México" },
          { id: "densidad", name: "Densidad de Población", inegi_id: "1002000002", unit: "Hab/km²", description: "Cuántas personas hay por kilómetro cuadrado" },
          { id: "esperanza-vida", name: "Esperanza de Vida", inegi_id: "1002000003", unit: "Años", description: "Cuántos años se espera que viva una persona al nacer" },
          { id: "tasa-fecundidad", name: "Tasa de Fecundidad", inegi_id: "1002000004", unit: "Hijos por mujer", description: "Promedio de hijos que tiene cada mujer en México" },
          { id: "crecimiento-poblacion", name: "Crecimiento Poblacional", inegi_id: "1002000005", unit: "Porcentaje anual", description: "A qué ritmo crece la población año con año" },
        ],
      },
      {
        id: "natalidad",
        slug: "natalidad",
        name: "Natalidad y Mortalidad",
        description: "Nacimientos, defunciones y causas de muerte",
        indicators: [
          { id: "nacimientos", name: "Nacimientos Registrados", inegi_id: "1002000010", unit: "Personas", description: "Bebés nacidos y registrados en el año" },
          { id: "defunciones", name: "Defunciones Registradas", inegi_id: "1002000011", unit: "Personas", description: "Total de personas que fallecieron en el año" },
          { id: "mortalidad-infantil", name: "Mortalidad Infantil", inegi_id: "1002000012", unit: "Por cada 1,000 nacidos", description: "Bebés menores de 1 año que no sobreviven" },
          { id: "causas-muerte", name: "Principales Causas de Muerte", inegi_id: "1002000013", unit: "Porcentaje", description: "Las enfermedades que más matan en México" },
          { id: "mortalidad-materna", name: "Mortalidad Materna", inegi_id: "5300000310", unit: "Por cada 100 mil nacimientos", description: "Madres que mueren en el parto" },
          { id: "suicidios", name: "Suicidios", inegi_id: "5300000311", unit: "Personas", description: "Fallecimientos por lesiones autoinfligidas" },
          { id: "matrimonios", name: "Matrimonios Registrados", inegi_id: "1002000014", unit: "Miles", description: "Parejas que se casaron legalmente" },
          { id: "divorcios", name: "Divorcios Registrados", inegi_id: "1002000015", unit: "Miles", description: "Parejas que se divorciaron legalmente" },
        ],
      },
      {
        id: "migracion",
        slug: "migracion",
        name: "Migración",
        description: "Movimiento de personas dentro y fuera del país",
        indicators: [
          { id: "emigracion-eua", name: "Emigración a EUA", inegi_id: "1002000020", unit: "Millones de personas", description: "Mexicanos viviendo en Estados Unidos" },
          { id: "migracion-interestatal", name: "Migración Interestatal", inegi_id: "1002000021", unit: "Miles de personas", description: "Personas que se mudaron a otro estado" },
          { id: "deportaciones", name: "Deportaciones", inegi_id: "1002000022", unit: "Miles de personas", description: "Mexicanos devueltos por EUA" },
          { id: "migracion-retorno", name: "Migración de Retorno", inegi_id: "1002000023", unit: "Miles de personas", description: "Mexicanos que regresan del extranjero a vivir" },
        ],
      },
      {
        id: "hogares",
        slug: "hogares",
        name: "Hogares y Familias",
        description: "Cómo viven y se organizan las familias mexicanas",
        indicators: [
          { id: "total-hogares", name: "Total de Hogares", inegi_id: "1002000030", unit: "Millones", description: "Cuántos hogares hay en México" },
          { id: "tamano-hogar", name: "Tamaño Promedio del Hogar", inegi_id: "1002000031", unit: "Personas", description: "Cuántas personas viven en cada casa en promedio" },
          { id: "jefatura-femenina", name: "Hogares con Jefatura Femenina", inegi_id: "1002000032", unit: "Porcentaje", description: "Hogares donde una mujer es la principal proveedora" },
          { id: "ingreso-hogar", name: "Ingreso Promedio por Hogar", inegi_id: "1002000033", unit: "Pesos mensuales", description: "Cuánto gana en promedio cada familia al mes" },
          { id: "gasto-hogar", name: "Gasto Promedio por Hogar", inegi_id: "1002000034", unit: "Pesos mensuales", description: "Cuánto gasta en promedio cada familia al mes" },
        ],
      },
      {
        id: "diversidad",
        slug: "diversidad",
        name: "Diversidad y Lenguas",
        description: "Pueblos indígenas, lenguas y diversidad cultural",
        indicators: [
          { id: "lenguas-indigenas", name: "Hablantes de Lengua Indígena", inegi_id: "5300000140", unit: "Millones de personas", description: "Población que habla alguna de las 68 lenguas originarias" },
          { id: "afrodescendientes", name: "Población Afrodescendiente", inegi_id: "5300000141", unit: "Millones de personas", description: "Mexicanos que se reconocen como afromexicanos" },
          { id: "religion", name: "Diversidad Religiosa", inegi_id: "5300000142", unit: "Porcentaje (Católica)", description: "Población que profesa la religión católica" },
          { id: "discapacidad", name: "Población con Discapacidad", inegi_id: "5300000143", unit: "Millones de personas", description: "Personas con alguna limitación física o mental" },
          { id: "discapacidad-motriz", name: "Discapacidad Motriz", inegi_id: "5300000320", unit: "Porcentaje", description: "Dificultad principal para caminar o moverse" },
          { id: "discapacidad-visual", name: "Discapacidad Visual", inegi_id: "5300000321", unit: "Porcentaje", description: "Dificultad o imposibilidad de ver" },
        ],
      },
      {
        id: "pobreza",
        slug: "pobreza",
        name: "Pobreza y Desigualdad",
        description: "Niveles de pobreza y distribución del ingreso",
        indicators: [
          { id: "pobreza-general", name: "Población en Pobreza", inegi_id: "5300000150", unit: "Porcentaje", description: "Mexicanos que viven en situación de pobreza (CONEVAL)" },
          { id: "pobreza-extrema", name: "Pobreza Extrema", inegi_id: "5300000151", unit: "Porcentaje", description: "Personas sin ingresos suficientes para la canasta básica" },
          { id: "coeficiente-gini", name: "Coeficiente de Gini", inegi_id: "5300000152", unit: "Índice (0-1)", description: "Nivel de desigualdad (más cerca de 1 es más desigual)" },
          { id: "clase-media", name: "Clase Media", inegi_id: "5300000153", unit: "Porcentaje", description: "Población considerada de clase media" },
        ],
      },
    ],
  },
  {
    id: "industria",
    slug: "industria",
    name: "Industria",
    description: "Producción industrial, manufactura y construcción",
    icon: "🏭",
    color: "#f97316",
    gradient: "from-orange-500 to-red-600",
    subcategories: [
      {
        id: "manufactura",
        slug: "manufactura",
        name: "Manufactura",
        description: "Lo que fabricamos en México",
        indicators: [
          { id: "produccion-industrial", name: "Producción Industrial", inegi_id: "383152", unit: "Índice", description: "Cuánto produce la industria mexicana" },
          { id: "produccion-automotriz", name: "Producción Automotriz", inegi_id: "5300000280", unit: "Millones de vehículos", description: "Autos y camionetas armadas en México" },
          { id: "exportacion-autos", name: "Exportación de Autos", inegi_id: "5300000281", unit: "Millones de vehículos", description: "Vehículos enviados al extranjero" },
          { id: "autopartes", name: "Producción de Autopartes", inegi_id: "5300000282", unit: "Millones de dólares", description: "Valor de las piezas automotrices generadas" },
          { id: "cerveza", name: "Producción de Cerveza", inegi_id: "5300000283", unit: "Millones de litros", description: "México es el mayor exportador de cerveza del mundo" },
          { id: "tequila", name: "Producción de Tequila", inegi_id: "5300000284", unit: "Millones de litros", description: "Producción nacional de nuestra bebida bandera" },
        ],
      },
      {
        id: "construccion",
        slug: "construccion",
        name: "Construcción",
        description: "Casas, edificios y obras que se construyen",
        indicators: [
          { id: "construccion-valor", name: "Valor de la Construcción", inegi_id: "383161", unit: "Millones de pesos", description: "Cuánto dinero se invierte en construir" },
          { id: "produccion-cemento", name: "Producción de Cemento", inegi_id: "5300000290", unit: "Millones de toneladas", description: "Cemento fabricado para abastecer obras" },
          { id: "otorgamiento-creditos", name: "Créditos Hipotecarios", inegi_id: "5300000291", unit: "Miles", description: "Créditos de casa entregados por bancos e INFONAVIT" },
          { id: "venta-vivienda", name: "Venta de Vivienda Nueva", inegi_id: "5300000292", unit: "Miles de casas", description: "Viviendas nuevas vendidas" },
        ],
      },
      {
        id: "mineria",
        slug: "mineria",
        name: "Minería",
        description: "Extracción de minerales y metales preciosos",
        indicators: [
          { id: "produccion-minera", name: "Producción Minera", inegi_id: "5300000080", unit: "Índice base 2018=100", description: "Cuánto se extrae de las minas mexicanas" },
          { id: "plata-produccion", name: "Producción de Plata", inegi_id: "5300000081", unit: "Toneladas", description: "México es el 1er productor de plata del mundo" },
          { id: "oro-produccion", name: "Producción de Oro", inegi_id: "5300000082", unit: "Kilogramos", description: "Cuánto oro se saca de minas mexicanas" },
          { id: "valor-mineria", name: "Valor de la Producción Minera", inegi_id: "5300000083", unit: "Miles de millones de pesos", description: "Cuánto dinero genera la minería en México" },
        ],
      },
      {
        id: "tic",
        slug: "tic",
        name: "Tecnología e Internet",
        description: "Uso de celulares, computadoras e internet gubernamental",
        indicators: [
          { id: "usuarios-internet", name: "Usuarios de Internet", inegi_id: "5300000110", unit: "Millones de personas", description: "Mexicanos que usan internet" },
          { id: "usuarios-celular", name: "Usuarios de Celular", inegi_id: "5300000111", unit: "Millones de personas", description: "Mexicanos con teléfono celular" },
          { id: "hogares-computadora", name: "Hogares con Computadora", inegi_id: "5300000112", unit: "Porcentaje", description: "De cada 100 casas, cuántas tienen PC o laptop" },
          { id: "gobierno-electronico", name: "Gobierno Electrónico", inegi_id: "5300000113", unit: "Porcentaje", description: "Personas que hacen trámites de gobierno por internet" },
          { id: "gasto-telecom", name: "Gasto en Telecomunicaciones", inegi_id: "5300000350", unit: "Pesos mensuales promedio", description: "Lo que gastan los hogares en celulares y wifi" },
          { id: "suscripciones-tv", name: "TV de Paga / Streaming", inegi_id: "5300000351", unit: "Millones de suscripciones", description: "Hogares que pagan TV por cable o plataformas" },
        ],
      },
    ],
  },
  {
    id: "salud",
    slug: "salud",
    name: "Salud",
    description: "Hospitales, enfermedades y bienestar de los mexicanos",
    icon: "🏥",
    color: "#10b981",
    gradient: "from-emerald-500 to-green-600",
    subcategories: [
      {
        id: "infraestructura",
        slug: "infraestructura-salud",
        name: "Infraestructura de Salud",
        description: "Hospitales y clínicas en México",
        indicators: [
          { id: "unidades-medicas", name: "Unidades Médicas", inegi_id: "1002000023", unit: "Unidades", description: "Hospitales y clínicas disponibles" },
          { id: "camas-hospitalarias", name: "Camas Hospitalarias", inegi_id: "1002000024", unit: "Por cada 1,000 hab", description: "Cuántas camas de hospital hay para atender enfermos" },
          { id: "medicos", name: "Médicos por Habitante", inegi_id: "1002000025", unit: "Por cada 1,000 hab", description: "Cuántos doctores hay para atendernos" },
          { id: "afiliacion-imss", name: "Afiliados al IMSS", inegi_id: "1002000026", unit: "Millones", description: "Personas con seguro social del IMSS" },
          { id: "personal-enfermeria", name: "Personal de Enfermería", inegi_id: "5300000331", unit: "Enfermeras por c/ 1,000 hab", description: "Densidad de enfermería operativa" },
          { id: "consultas-planificacion", name: "Consultas de Planificación Familiar", inegi_id: "5300000332", unit: "Millones", description: "Atención anticonceptiva y salud reproductiva" },
        ],
      },
      {
        id: "enfermedades",
        slug: "enfermedades",
        name: "Enfermedades y Prevención",
        description: "Las enfermedades que más afectan a México",
        indicators: [
          { id: "diabetes", name: "Prevalencia de Diabetes", inegi_id: "1002000027B", unit: "Porcentaje", description: "De cada 100 adultos, cuántos tienen diabetes" },
          { id: "obesidad", name: "Obesidad y Sobrepeso", inegi_id: "1002000028", unit: "Porcentaje", description: "Adultos con peso por encima de lo saludable" },
          { id: "vacunacion", name: "Cobertura de Vacunación", inegi_id: "1002000029", unit: "Porcentaje", description: "Niños con esquema de vacunación completo" },
          { id: "gasto-salud", name: "Gasto en Salud", inegi_id: "1002000030B", unit: "Porcentaje del PIB", description: "Cuánto del dinero del país se gasta en salud" },
          { id: "covid-acumulado", name: "COVID-19 Acumulado", inegi_id: "1002000031B", unit: "Miles de defunciones", description: "Total de muertes por COVID-19 en México" },
        ],
      },
      {
        id: "cultura-fisica",
        slug: "cultura-fisica",
        name: "Cultura Física / Deporte",
        description: "Módulo de práctica deportiva (MOPRADEC)",
        indicators: [
          { id: "practica-deporte", name: "Población Físicamente Activa", inegi_id: "5300000462", unit: "Porcentaje", description: "Adultos que se ejercitan en su tiempo libre" },
        ],
      },
    ],
  },
  {
    id: "educacion",
    slug: "educacion",
    name: "Educación",
    description: "Escuelas, maestros y cuántos estudian",
    icon: "📚",
    color: "#eab308",
    gradient: "from-yellow-500 to-amber-600",
    subcategories: [
      {
        id: "matricula",
        slug: "matricula",
        name: "Matrícula Escolar",
        description: "Cuántos estudiantes hay en cada nivel",
        indicators: [
          { id: "alumnos-total", name: "Alumnos Inscritos", inegi_id: "1002000027", unit: "Millones", description: "Total de estudiantes en el país" },
          { id: "escuelas", name: "Escuelas", inegi_id: "1002000040", unit: "Miles", description: "Total de escuelas en México" },
          { id: "maestros", name: "Maestros", inegi_id: "1002000041", unit: "Miles", description: "Total de profesores en el país" },
          { id: "escolaridad", name: "Grado Promedio de Escolaridad", inegi_id: "1002000042", unit: "Años", description: "Cuántos años de escuela tiene el mexicano promedio" },
          { id: "analfabetismo", name: "Analfabetismo", inegi_id: "1002000043B", unit: "Porcentaje", description: "Personas mayores de 15 años que no saben leer ni escribir" },
          { id: "abandono-escolar", name: "Abandono Escolar", inegi_id: "1002000044", unit: "Porcentaje", description: "Estudiantes que dejan la escuela sin terminar" },
          { id: "cobertura-superior", name: "Cobertura en Educación Superior", inegi_id: "1002000045", unit: "Porcentaje", description: "De cada 100 jóvenes, cuántos van a la universidad" },
          { id: "presupuesto-educacion", name: "Gasto en Educación", inegi_id: "5300000340", unit: "Porcentaje del PIB", description: "Gasto gubernamental en educación pública" },
          { id: "escuelas-publicas", name: "Escuelas Públicas vs Privadas", inegi_id: "5300000341", unit: "Porcentaje (Pública)", description: "Proporción de escuelas financiadas por el Estado" },
        ],
      },
      {
        id: "ciencia-innovacion",
        slug: "ciencia",
        name: "Ciencia e Innovación",
        description: "Investigadores, patentes y ciencia en México",
        indicators: [
          { id: "investigadores-sni", name: "Investigadores en el SNI", inegi_id: "5300000200", unit: "Miles de investigadores", description: "Gobierno pagando a científicos top" },
          { id: "patentes", name: "Patentes Otorgadas", inegi_id: "5300000201", unit: "Patentes anuales", description: "Inventos mexicanos protegidos legalmente" },
          { id: "inversion-ciencia", name: "Inversión en Ciencia y Tecnología", inegi_id: "5300000202", unit: "Porcentaje del PIB", description: "Cuánto dinero se gasta en investigar" },
        ],
      },
      {
        id: "cultura",
        slug: "cultura",
        name: "Cultura y Tiempo Libre",
        description: "Museos, zonas arqueológicas y cines",
        indicators: [
          { id: "visitantes-museos", name: "Visitantes a Museos", inegi_id: "5300000203", unit: "Millones", description: "Personas que fueron a un museo" },
          { id: "zonas-arqueologicas", name: "Zonas Arqueológicas", inegi_id: "5300000204", unit: "Millones de visitas", description: "Visitas a Teotihuacán, Chichén Itzá, etc." },
          { id: "asistencia-cine", name: "Asistencia al Cine", inegi_id: "5300000205", unit: "Millones de boletos", description: "Cuánta gente va la cine en México" },
        ],
      },
    ],
  },
  {
    id: "vivienda",
    slug: "vivienda",
    name: "Vivienda",
    description: "Hogares, servicios básicos e internet en casa",
    icon: "🏠",
    color: "#ec4899",
    gradient: "from-pink-500 to-rose-600",
    subcategories: [
      {
        id: "hogares",
        slug: "hogares",
        name: "Hogares",
        description: "Cuántos hogares hay y cómo son",
        indicators: [
          { id: "viviendas-total", name: "Total de Viviendas", inegi_id: "1002000014", unit: "Viviendas", description: "Casas habitadas en México" },
          { id: "internet", name: "Viviendas con Internet", inegi_id: "6200240302", unit: "Porcentaje", description: "De cada 100 casas, cuántas tienen internet" },
          { id: "drenaje", name: "Viviendas con Drenaje", inegi_id: "6200240303", unit: "Porcentaje", description: "Casas conectadas al sistema de drenaje" },
          { id: "electricidad", name: "Viviendas con Electricidad", inegi_id: "6200240304", unit: "Porcentaje", description: "Casas con servicio de luz eléctrica" },
          { id: "piso-tierra", name: "Viviendas con Piso de Tierra", inegi_id: "6200240305", unit: "Porcentaje", description: "Casas que aún tienen piso de tierra" },
          { id: "agua-entubada", name: "Viviendas con Agua Entubada", inegi_id: "6200240306", unit: "Porcentaje", description: "Casas con agua corriente dentro" },
        ],
      },
    ],
  },
  {
    id: "seguridad",
    slug: "seguridad",
    name: "Seguridad",
    description: "Delitos, percepción de seguridad y justicia",
    icon: "🛡️",
    color: "#6366f1",
    gradient: "from-indigo-500 to-violet-600",
    subcategories: [
      {
        id: "delitos",
        slug: "delitos",
        name: "Incidencia Delictiva",
        description: "Cuántos delitos se reportan",
        indicators: [
          { id: "carpetas", name: "Carpetas de Investigación", inegi_id: "1002000058", unit: "Carpetas", description: "Denuncias formales ante el ministerio público" },
          { id: "homicidios", name: "Tasa de Homicidios", inegi_id: "1002000059", unit: "Por cada 100,000 hab", description: "Muertes violentas intencionales" },
          { id: "percepcion-inseguridad", name: "Percepción de Inseguridad", inegi_id: "1002000060", unit: "Porcentaje", description: "Personas que se sienten inseguras en su ciudad" },
          { id: "cifra-negra", name: "Cifra Negra", inegi_id: "1002000061", unit: "Porcentaje", description: "Delitos que no se denuncian" },
        ],
      },
      {
        id: "justicia",
        slug: "justicia",
        name: "Justicia y Sistema Penitenciario",
        description: "Tribunales, prisiones y acceso a la justicia",
        indicators: [
          { id: "poblacion-reclusion", name: "Población en Reclusión", inegi_id: "1002000062", unit: "Miles de personas", description: "Cuántas personas están en prisión" },
          { id: "jueces", name: "Jueces por Habitante", inegi_id: "1002000063", unit: "Por cada 100,000 hab", description: "Cuántos jueces hay para impartir justicia" },
          { id: "corrupcion", name: "Percepción de Corrupción", inegi_id: "1002000064", unit: "Porcentaje", description: "Personas que creen que el gobierno es corrupto" },
        ],
      },
      {
        id: "gobierno-general",
        slug: "gobierno",
        name: "Gobierno y Finanzas Públicas",
        description: "Empleados públicos gubernamentales, ingresos y presupuestos",
        indicators: [
          { id: "empleados-gobierno", name: "Empleados de Gobierno", inegi_id: "5300000160", unit: "Millones", description: "Total de servidores públicos en México" },
          { id: "ingresos-municipales", name: "Ingresos Propios Municipales", inegi_id: "5300000161", unit: "Porcentaje", description: "Qué tanto dinero recaudan los municipios por sí mismos" },
          { id: "tramites-publicos", name: "Trámites Gubernamentales", inegi_id: "5300000162", unit: "Millones de solicitudes", description: "Interacciones de los ciudadanos con el gobierno" },
        ],
      },
      {
        id: "democracia",
        slug: "democracia",
        name: "Democracia y Participación",
        description: "Elecciones, padrón electoral y participación ciudadana",
        indicators: [
          { id: "padron-electoral", name: "Padrón Electoral", inegi_id: "5300000210", unit: "Millones de personas", description: "Total de mexicanos con INE para votar" },
          { id: "participacion-electoral", name: "Participación Electoral", inegi_id: "5300000211", unit: "Porcentaje", description: "Gente que salió a votar en elección presidencial" },
          { id: "confianza-ine", name: "Confianza Institucional", inegi_id: "5300000212", unit: "Porcentaje", description: "Nivel de confianza en las instituciones electorales" },
        ],
      },
    ],
  },
  {
    id: "transporte",
    slug: "transporte",
    name: "Transporte",
    description: "Vehículos, carreteras y movilidad",
    icon: "🚗",
    color: "#14b8a6",
    gradient: "from-teal-500 to-cyan-600",
    subcategories: [
      {
        id: "vehiculos",
        slug: "vehiculos",
        name: "Vehículos",
        description: "Cuántos autos y camiones hay en México",
        indicators: [
          { id: "vehiculos-motor", name: "Vehículos de Motor", inegi_id: "1002000053", unit: "Millones de vehículos", description: "Total de vehículos registrados" },
          { id: "accidentes-transito", name: "Accidentes de Tránsito", inegi_id: "5300000120", unit: "Miles", description: "Choques y accidentes en zonas urbanas" },
          { id: "red-carretera", name: "Red Carretera Nacional", inegi_id: "5300000121", unit: "Miles de kilómetros", description: "Total de carreteras pavimentadas y terracería" },
          { id: "carga-ferroviaria", name: "Carga Ferroviaria", inegi_id: "5300000122", unit: "Millones de toneladas", description: "Mercancía transportada en tren" },
          { id: "vuelos-pasajeros", name: "Pasajeros en Vuelos", inegi_id: "5300000123", unit: "Millones", description: "Personas que viajaron en avión en México" },
        ],
      },
      {
        id: "infraestructura-transporte",
        slug: "infraestructura-transporte",
        name: "Aeropuertos y Puertos",
        description: "Infraestructura para carga y pasajeros internacionales",
        indicators: [
          { id: "aeropuertos", name: "Pasajeros en Aeropuertos", inegi_id: "5300000220", unit: "Millones de pasajeros", description: "Personas volando desde o hacia México" },
          { id: "carga-maritima", name: "Carga Marítima Comercial", inegi_id: "5300000221", unit: "Millones de toneladas", description: "Mercancía movida en puertos" },
          { id: "red-carretera", name: "Red Carretera Nacional", inegi_id: "5300000463", unit: "Miles de kilómetros", description: "Extensión total de las autopistas y carreteras pavimentadas" },
          { id: "movimiento-ferreo", name: "Carga en Vías Férreas", inegi_id: "5300000464", unit: "Millones de toneladas netas", description: "Mercancía movida por tren" },
        ],
      },
    ],
  },
  {
    id: "medio-ambiente",
    slug: "medio-ambiente",
    name: "Medio Ambiente",
    description: "Agua, residuos, clima y recursos naturales",
    icon: "🌍",
    color: "#22c55e",
    gradient: "from-green-500 to-emerald-600",
    subcategories: [
      {
        id: "agua",
        slug: "agua",
        name: "Agua",
        description: "Disponibilidad y consumo de agua",
        indicators: [
          { id: "agua-potable", name: "Cobertura de Agua Potable", inegi_id: "6200240316", unit: "Porcentaje", description: "Hogares con acceso a agua potable" },
          { id: "aguas-residuales", name: "Aguas Residuales Tratadas", inegi_id: "5300000170", unit: "Porcentaje", description: "Cuánta del agua del drenaje se limpia antes de desecharse" },
        ],
      },
      {
        id: "residuos",
        slug: "residuos",
        name: "Residuos y Contaminación",
        description: "Basura, reciclaje y calidad del aire",
        indicators: [
          { id: "generacion-basura", name: "Generación de Basura", inegi_id: "5300000171", unit: "Millones de toneladas", description: "Cuánta basura producimos en México" },
          { id: "reciclaje", name: "Tasa de Reciclaje", inegi_id: "5300000172", unit: "Porcentaje", description: "Qué porcentaje de la basura se recicla" },
        ],
      },
      {
        id: "emisiones-gei",
        slug: "emisiones-gei",
        name: "Emisiones y Ambientales",
        description: "Gasto ecológico y huella de carbono",
        indicators: [
          { id: "emisiones-gei", name: "Gases de Efecto Invernadero (GEI)", inegi_id: "5300000465", unit: "Millones de toneladas equivalentes (CO2)", description: "Contaminación atmosférica total del país" },
          { id: "gasto-proteccion-ambiental", name: "Gasto en Protección Ambiental", inegi_id: "5300000466", unit: "Porcentaje del PIB", description: "Inversión para cuidar el medio ambiente (pública y privada)" },
        ],
      },
      {
        id: "clima-suelo",
        slug: "clima-suelo",
        name: "Territorio y Clima",
        description: "Uso de suelo, temperaturas y lluvias",
        indicators: [
          { id: "deforestacion", name: "Deforestación Anual", inegi_id: "5300000173", unit: "Miles de hectáreas", description: "Bosques y selvas perdidas cada año" },
          { id: "areas-protegidas", name: "Áreas Naturales Protegidas", inegi_id: "5300000174", unit: "Porcentaje del territorio", description: "Tierra dedicada a la conservación de especies" },
          { id: "temperatura", name: "Temperatura Promedio", inegi_id: "5300000175", unit: "Grados Centígrados", description: "Temperatura media anual a nivel nacional" },
        ],
      },
      {
        id: "cartografia",
        slug: "cartografia",
        name: "Cartografía y Catastro",
        description: "Mapas, censos de tierras y división territorial",
        indicators: [
          { id: "municipios", name: "Total de Municipios", inegi_id: "5300000180", unit: "Municipios", description: "La división política de México" },
          { id: "localidades", name: "Total de Localidades", inegi_id: "5300000181", unit: "Miles", description: "Pueblos, comunidades y ciudades del país" },
          { id: "predios-catastro", name: "Predios Registrados", inegi_id: "5300000182", unit: "Millones", description: "Terrenos en el catastro nacional" },
        ],
      },
      {
        id: "energia",
        slug: "energia",
        name: "Energía y Electricidad",
        description: "Generación de electricidad y petróleo",
        indicators: [
          { id: "generacion-electrica", name: "Generación de Electricidad", inegi_id: "5300000230", unit: "Teravatios-hora (TWh)", description: "Toda la luz producida anualmente" },
          { id: "energias-limpias", name: "Energías Limpias", inegi_id: "5300000231", unit: "Porcentaje", description: "Luz proveniente de fuentes renovables y limpias" },
          { id: "produccion-petroleo", name: "Producción de Petróleo", inegi_id: "5300000232", unit: "Millones de barriles diarios", description: "Crudo extraído por PEMEX y privados" },
        ],
      },
    ],
  },
  {
    id: "agricultura",
    slug: "agricultura",
    name: "Agricultura y Campo",
    description: "Producción agrícola, ganadera y pesquera",
    icon: "🌾",
    color: "#84cc16",
    gradient: "from-lime-500 to-green-600",
    subcategories: [
      {
        id: "produccion-agro",
        slug: "produccion-agro",
        name: "Producción Agropecuaria",
        description: "Lo que produce el campo mexicano",
        indicators: [
          { id: "agro-indice", name: "Índice Agropecuario", inegi_id: "383153", unit: "Índice", description: "Producción del campo y ganadería" },
          { id: "prod-maiz", name: "Producción de Maíz", inegi_id: "5300000130", unit: "Millones de toneladas", description: "La base de la alimentación mexicana" },
          { id: "prod-aguacate", name: "Producción de Aguacate", inegi_id: "5300000131", unit: "Millones de toneladas", description: "El 'oro verde' de exportación" },
          { id: "prod-ganadera", name: "Producción de Carne", inegi_id: "5300000132", unit: "Millones de toneladas", description: "Suma de res, cerdo y ave" },
          { id: "pesca", name: "Captura Pesquera", inegi_id: "5300000133", unit: "Miles de toneladas", description: "Total de pescados y mariscos capturados" },
          { id: "prod-azucar", name: "Producción de Azúcar", inegi_id: "5300000300", unit: "Millones de toneladas", description: "Azúcar extraída de caña" },
          { id: "prod-frijol", name: "Producción de Frijol", inegi_id: "5300000301", unit: "Miles de toneladas", description: "Fuente básica de proteína vegetal en México" },
          { id: "export-agroalimentarias", name: "Exportaciones Agroalimentarias", inegi_id: "5300000302", unit: "Miles de millones de dólares", description: "Todo el alimento que exportamos al mundo (aguacate, berries, tomate, cerveza)" },
          { id: "superficie-sembrada", name: "Superficie Agrícola Sembrada", inegi_id: "5300000370", unit: "Millones de hectáreas", description: "La tierra total usada en México para sembrar" },
          { id: "poblacion-rural", name: "Población Rural Dedicada al Campo", inegi_id: "5300000371", unit: "Millones de personas", description: "Campesinos y jornaleros" },
        ],
      },
      {
        id: "mineria-metales",
        slug: "mineria-metales",
        name: "Metales Estratégicos",
        description: "Oro, Plata y Cobre",
        indicators: [
          { id: "prod-plata", name: "Producción de Plata", inegi_id: "5300000380", unit: "Toneladas", description: "México es el mayor productor mundial de plata" },
          { id: "prod-oro", name: "Producción de Oro", inegi_id: "5300000381", unit: "Toneladas", description: "Extracción metálica preciosa en el país" },
          { id: "prod-cobre", name: "Producción de Cobre", inegi_id: "5300000382", unit: "Miles de toneladas", description: "Metal elemental para electrónica, cables y autos" },
          { id: "concesiones-mineras", name: "Concesiones Mineras Activas", inegi_id: "5300000383", unit: "Miles de hectáreas", description: "Tierra rentada por el gobierno a empresas para extraer metales" },
        ],
      },
      {
        id: "industria-quimica",
        slug: "industria-quimica",
        name: "Química y Derivados",
        description: "Petroquímicos, plásticos y fertilizantes",
        indicators: [
          { id: "prod-petroquimica", name: "Producción Petroquímica", inegi_id: "5300000390", unit: "Miles de toneladas", description: "Químicos derivados del petróleo" },
          { id: "prod-fertilizantes", name: "Producción de Fertilizantes", inegi_id: "5300000391", unit: "Miles de toneladas", description: "Abonos y amoniacos para el campo" },
        ],
      },
      {
        id: "macro-indicadores",
        slug: "macro",
        name: "Macro Indicadores",
        description: "Reserva Federal, CETES y Calificaciones",
        indicators: [
          { id: "tasa-cetes", name: "Tasa CETES a 28 días", inegi_id: "5300000400", unit: "Porcentaje", description: "Rendimiento del instrumento libre de riesgo del gobierno" },
          { id: "riesgo-pais", name: "Riesgo País (EMBI)", inegi_id: "5300000401", unit: "Puntos base", description: "Qué tan riesgoso ven a México los inversionistas globales" },
        ],
      },
      {
        id: "comercio-exterior-ampliado",
        slug: "comercio-exterior-ampliado",
        name: "Socios y Tratados (T-MEC)",
        description: "Comercio con USA, China y Europa",
        indicators: [
          { id: "export-usa", name: "Exportaciones a Estados Unidos", inegi_id: "5300000410", unit: "Porcentaje del total", description: "Dependencia exportadora hacia USA" },
          { id: "import-china", name: "Importaciones desde China", inegi_id: "5300000411", unit: "Millones de dólares", description: "Compras a la fábrica del mundo" },
          { id: "inversion-nearshoring", name: "Inversión por Nearshoring", inegi_id: "5300000412", unit: "Millones de dólares", description: "Fábricas que se mudan de Asia a México" },
        ],
      },
      {
        id: "vivienda-financiera",
        slug: "vivienda-financiera",
        name: "Mercado de Vivienda",
        description: "Precios de casas y rentas",
        indicators: [
          { id: "precio-vivienda", name: "Índice de Precios de Vivienda (SHF)", inegi_id: "5300000420", unit: "Índice", description: "Aumento del costo para comprar casa" },
          { id: "cartera-infonavit", name: "Créditos INFONAVIT Vigentes", inegi_id: "5300000421", unit: "Millones de cuentas", description: "Trabajadores pagando su crédito hipotecario" },
        ],
      },
      {
        id: "demografia-avanzada",
        slug: "demografia-avanzada",
        name: "Envejecimiento y Reto Demográfico",
        description: "Pirámide poblacional y tercera edad",
        indicators: [
          { id: "adultos-mayores", name: "Población Adulta Mayor", inegi_id: "5300000430", unit: "Millones de personas", description: "Personas de 60 años y más" },
          { id: "bono-demografico", name: "Población en Edad de Trabajar", inegi_id: "5300000431", unit: "Porcentaje", description: "El bono demográfico (jóvenes) que se está acabando" },
          { id: "edad-mediana", name: "Edad Mediana", inegi_id: "5300000432", unit: "Años", description: "La edad que divide al país a la mitad (más viejo que joven)" },
        ],
      },
      {
        id: "justicia-penal",
        slug: "justicia-penal",
        name: "Sistema Penal",
        description: "Cárceles, impunidad y juicios",
        indicators: [
          { id: "impunidad", name: "Tasa de Impunidad Delictiva", inegi_id: "5300000440", unit: "Porcentaje", description: "Delitos que no se resuelven" },
          { id: "presos-sin-condena", name: "Personas en Prisión sin Condena", inegi_id: "5300000441", unit: "Porcentaje de presos", description: "Presos esperando un juicio (Prisión Preventiva)" },
        ],
      },
      {
        id: "clima-extremo",
        slug: "clima-extremo",
        name: "Clima Extremo y Desastres",
        description: "Sequías, huracanes y lluvias",
        indicators: [
          { id: "sequia", name: "Municipios con Sequía", inegi_id: "5300000450", unit: "Unidades", description: "Municipios en alerta por falta de agua" },
          { id: "precipitacion", name: "Lluvia Anual", inegi_id: "5300000451", unit: "Milímetros", description: "Cantidad de agua que llueve al año" },
          { id: "huracanes", name: "Huracanes de Impacto", inegi_id: "5300000452", unit: "Unidades", description: "Ciclones tropicales que tocaron tierra" },
        ],
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getSubcategoryBySlug(
  categorySlug: string,
  subSlug: string
) {
  const cat = getCategoryBySlug(categorySlug);
  return cat?.subcategories.find((s) => s.slug === subSlug);
}

export function getAllIndicatorIds(): string[] {
  const ids: string[] = [];
  for (const cat of CATEGORIES) {
    for (const sub of cat.subcategories) {
      for (const ind of sub.indicators) {
        if (!ids.includes(ind.inegi_id)) {
          ids.push(ind.inegi_id);
        }
      }
    }
  }
  return ids;
}
