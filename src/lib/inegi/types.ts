// ============================================================
// INEGI API Type Definitions
// ============================================================

export interface INEGIIndicatorResponse {
  Header: {
    Name: string;
    Email: string;
  };
  Series: INEGISerie[];
}

export interface INEGISerie {
  INDICADOR: string;
  FREQ: string;
  TOPIC: string;
  UNIT: string;
  SCLFCTR?: string;
  NOTE?: string;
  SOURCE?: string;
  LASTUPDATE?: string;
  STATUS?: string;
  OBSERVATIONS: INEGIObservation[];
}

export interface INEGIObservation {
  TIME_PERIOD: string;
  OBS_VALUE: string;
  OBS_EXCEPTION?: string;
  OBS_STATUS?: string;
  OBS_SOURCE?: string;
  OBS_NOTE?: string;
  COBER_GEO?: string;
}

// DENUE Types
export interface DENUEEstablishment {
  id: string;
  nombre: string;
  razon_social: string;
  clase_actividad: string;
  estrato: string;
  tipo_vialidad: string;
  calle: string;
  num_exterior: string;
  num_interior: string;
  colonia: string;
  codigo_postal: string;
  ubicacion: string;
  telefono: string;
  correo: string;
  sitio_web: string;
  tipo: string;
  longitud: number;
  latitud: number;
}

// App-level types
export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  indicators: IndicatorConfig[];
}

export interface IndicatorConfig {
  id: string;
  name: string;
  inegi_id: string;
  unit: string;
  description: string;
  area?: string; // "0700" national, state codes, etc.
}

export interface ProcessedIndicator {
  id: string;
  name: string;
  inegi_id: string;
  unit: string;
  description: string;
  lastValue: string;
  lastDate: string;
  previousValue?: string;
  changePercent?: number;
  trend: "up" | "down" | "stable";
  observations: { date: string; value: number }[];
  aiSummary?: string;
  aiInsight?: string;
  source: string;
  lastUpdate: string;
}

export interface StateData {
  id: string;
  name: string;
  code: string;
  value: number;
  formattedValue: string;
}
