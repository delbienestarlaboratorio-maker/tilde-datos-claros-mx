"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import MunicipalityTable from "@/components/ui/MunicipalityTable";
import AdBanner from "@/components/ui/AdBanner";

// State GeoJSON centroids for markers
const ESTADOS = [
  { id: "01", name: "Aguascalientes", lat: 21.88, lng: -102.29, abbr: "AGS" },
  { id: "02", name: "Baja California", lat: 30.84, lng: -115.28, abbr: "BC" },
  { id: "03", name: "Baja California Sur", lat: 26.04, lng: -111.66, abbr: "BCS" },
  { id: "04", name: "Campeche", lat: 19.83, lng: -90.53, abbr: "CAM" },
  { id: "05", name: "Coahuila", lat: 27.06, lng: -101.71, abbr: "COAH" },
  { id: "06", name: "Colima", lat: 19.24, lng: -103.72, abbr: "COL" },
  { id: "07", name: "Chiapas", lat: 16.75, lng: -92.64, abbr: "CHIS" },
  { id: "08", name: "Chihuahua", lat: 28.63, lng: -106.09, abbr: "CHIH" },
  { id: "09", name: "Ciudad de México", lat: 19.43, lng: -99.13, abbr: "CDMX" },
  { id: "10", name: "Durango", lat: 24.03, lng: -104.65, abbr: "DGO" },
  { id: "11", name: "Guanajuato", lat: 21.02, lng: -101.26, abbr: "GTO" },
  { id: "12", name: "Guerrero", lat: 17.44, lng: -99.55, abbr: "GRO" },
  { id: "13", name: "Hidalgo", lat: 20.09, lng: -98.76, abbr: "HGO" },
  { id: "14", name: "Jalisco", lat: 20.66, lng: -103.35, abbr: "JAL" },
  { id: "15", name: "Estado de México", lat: 19.35, lng: -99.64, abbr: "MEX" },
  { id: "16", name: "Michoacán", lat: 19.77, lng: -101.19, abbr: "MICH" },
  { id: "17", name: "Morelos", lat: 18.68, lng: -99.23, abbr: "MOR" },
  { id: "18", name: "Nayarit", lat: 21.75, lng: -104.84, abbr: "NAY" },
  { id: "19", name: "Nuevo León", lat: 25.67, lng: -100.31, abbr: "NL" },
  { id: "20", name: "Oaxaca", lat: 17.07, lng: -96.73, abbr: "OAX" },
  { id: "21", name: "Puebla", lat: 19.04, lng: -98.21, abbr: "PUE" },
  { id: "22", name: "Querétaro", lat: 20.59, lng: -100.39, abbr: "QRO" },
  { id: "23", name: "Quintana Roo", lat: 19.18, lng: -88.48, abbr: "QROO" },
  { id: "24", name: "San Luis Potosí", lat: 22.15, lng: -100.98, abbr: "SLP" },
  { id: "25", name: "Sinaloa", lat: 24.81, lng: -107.39, abbr: "SIN" },
  { id: "26", name: "Sonora", lat: 29.07, lng: -110.96, abbr: "SON" },
  { id: "27", name: "Tabasco", lat: 17.99, lng: -92.95, abbr: "TAB" },
  { id: "28", name: "Tamaulipas", lat: 24.27, lng: -98.84, abbr: "TAM" },
  { id: "29", name: "Tlaxcala", lat: 19.32, lng: -98.24, abbr: "TLAX" },
  { id: "30", name: "Veracruz", lat: 19.17, lng: -96.14, abbr: "VER" },
  { id: "31", name: "Yucatán", lat: 20.97, lng: -89.59, abbr: "YUC" },
  { id: "32", name: "Zacatecas", lat: 22.77, lng: -102.58, abbr: "ZAC" },
];

const STATE_DATA = {
  AGS: { pob: 1.4, pib: 1.4, ns: "Alto", bg: "/estados/bg-industrial.png" },
  BC: { pob: 3.7, pib: 3.5, ns: "Muy Alto", bg: "/estados/bg-desert.png" },
  BCS: { pob: 0.8, pib: 0.8, ns: "Bajo", bg: "/estados/bg-beach.png" },
  CAM: { pob: 0.9, pib: 3.4, ns: "Bajo", bg: "/estados/bg-jungle.png" },
  COAH: { pob: 3.1, pib: 3.6, ns: "Muy Alto", bg: "/estados/bg-desert.png" },
  COL: { pob: 0.7, pib: 0.6, ns: "Medio", bg: "/estados/bg-beach.png" },
  CHIS: { pob: 5.5, pib: 1.5, ns: "Bajo", bg: "/estados/bg-jungle.png" },
  CHIH: { pob: 3.7, pib: 3.6, ns: "Muy Alto", bg: "/estados/bg-desert.png" },
  CDMX: { pob: 9.2, pib: 15.3, ns: "Alto", bg: "/estados/bg-city.png" },
  DGO: { pob: 1.8, pib: 1.2, ns: "Medio", bg: "/estados/bg-mountains.png" },
  GTO: { pob: 6.1, pib: 4.2, ns: "Alto", bg: "/estados/bg-colonial.png" },
  GRO: { pob: 3.5, pib: 1.4, ns: "Bajo", bg: "/estados/bg-beach.png" },
  HGO: { pob: 3.1, pib: 1.6, ns: "Medio", bg: "/estados/bg-mountains.png" },
  JAL: { pob: 8.3, pib: 7.3, ns: "Muy Alto", bg: "/estados/bg-city.png" },
  MEX: { pob: 16.9, pib: 9.1, ns: "Alto", bg: "/estados/bg-industrial.png" },
  MICH: { pob: 4.7, pib: 2.5, ns: "Medio", bg: "/estados/bg-colonial.png" },
  MOR: { pob: 1.9, pib: 1.1, ns: "Bajo", bg: "/estados/bg-colonial.png" },
  NAY: { pob: 1.2, pib: 0.7, ns: "Bajo", bg: "/estados/bg-beach.png" },
  NL: { pob: 5.7, pib: 8.3, ns: "Muy Alto", bg: "/estados/bg-city.png" },
  OAX: { pob: 4.1, pib: 1.5, ns: "Bajo", bg: "/estados/bg-colonial.png" },
  PUE: { pob: 6.5, pib: 3.2, ns: "Alto", bg: "/estados/bg-colonial.png" },
  QRO: { pob: 2.3, pib: 2.3, ns: "Muy Alto", bg: "/estados/bg-colonial.png" },
  QROO: { pob: 1.8, pib: 1.5, ns: "Bajo", bg: "/estados/bg-beach.png" },
  SLP: { pob: 2.8, pib: 2.2, ns: "Alto", bg: "/estados/bg-desert.png" },
  SIN: { pob: 3.0, pib: 2.1, ns: "Medio", bg: "/estados/bg-beach.png" },
  SON: { pob: 2.9, pib: 3.4, ns: "Muy Alto", bg: "/estados/bg-desert.png" },
  TAB: { pob: 2.4, pib: 2.5, ns: "Medio", bg: "/estados/bg-jungle.png" },
  TAM: { pob: 3.5, pib: 2.8, ns: "Alto", bg: "/estados/bg-beach.png" },
  TLAX: { pob: 1.3, pib: 0.6, ns: "Bajo", bg: "/estados/bg-colonial.png" },
  VER: { pob: 8.0, pib: 4.4, ns: "Medio", bg: "/estados/bg-jungle.png" },
  YUC: { pob: 2.3, pib: 1.5, ns: "Alto", bg: "/estados/bg-ruins.png" },
  ZAC: { pob: 1.6, pib: 0.9, ns: "Medio", bg: "/estados/bg-mountains.png" },
};

// Dynamic import for Leaflet (SSR-safe)
function LeafletMap({
  onStateSelect,
  selectedState,
}: {
  onStateSelect: (state: typeof ESTADOS[0]) => void;
  selectedState: typeof ESTADOS[0] | null;
}) {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<unknown>(null);
  const markersRef = useRef<unknown[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!mapRef.current || leafletMapRef.current) return;

    // Dynamically import Leaflet on client side only
    import("leaflet").then((L) => {
      // Fix default icon paths for webpack
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      // Create map centered on Mexico
      const map = L.map(mapRef.current!, {
        center: [23.6345, -102.5528],
        zoom: 5,
        zoomControl: true,
        scrollWheelZoom: true,
        attributionControl: true,
      });

      // CartoDB Dark Matter tile layer — looks premium + free + no API key
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
        }
      ).addTo(map);

      // Custom marker icon
      const defaultIcon = L.divIcon({
        className: "custom-marker",
        html: `<div style="
          width: 12px; height: 12px;
          background: rgba(34, 211, 238, 0.8);
          border: 2px solid rgba(34, 211, 238, 1);
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(34, 211, 238, 0.5);
        "></div>`,
        iconSize: [12, 12],
        iconAnchor: [6, 6],
      });

      const selectedIcon = L.divIcon({
        className: "custom-marker-selected",
        html: `<div style="
          width: 18px; height: 18px;
          background: rgba(167, 139, 250, 0.9);
          border: 3px solid rgba(167, 139, 250, 1);
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(167, 139, 250, 0.6);
          animation: pulse 2s ease-in-out infinite;
        "></div>`,
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      });

      // Add state markers
      const markers: unknown[] = [];
      ESTADOS.forEach((estado) => {
        const marker = L.marker([estado.lat, estado.lng], {
          icon: defaultIcon,
        })
          .addTo(map)
          .bindPopup(
            `<div style="
              font-family: 'Outfit', sans-serif;
              padding: 4px;
              min-width: 160px;
            ">
              <div style="font-weight: 700; font-size: 14px; color: #22d3ee; margin-bottom: 4px;">
                ${estado.name}
              </div>
              <div style="font-size: 11px; color: #94a3b8;">
                Código INEGI: ${estado.id}
              </div>
              <div style="font-size: 11px; color: #94a3b8;">
                ${estado.abbr} • ${estado.lat.toFixed(2)}°, ${estado.lng.toFixed(2)}°
              </div>
            </div>`,
            {
              className: "dark-popup",
            }
          );

        marker.on("click", () => {
          onStateSelect(estado);
          // Update all marker icons
          markers.forEach((m, idx) => {
            const mkr = m as L.Marker;
            mkr.setIcon(
              ESTADOS[idx].id === estado.id ? selectedIcon : defaultIcon
            );
          });
        });

        markers.push(marker);
      });

      markersRef.current = markers;
      leafletMapRef.current = map;
      setLoaded(true);

      // Invalidate size after mount
      setTimeout(() => {
        (map as L.Map).invalidateSize();
      }, 100);
    });

    return () => {
      if (leafletMapRef.current) {
        (leafletMapRef.current as L.Map).remove();
        leafletMapRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update selected marker when prop changes
  useEffect(() => {
    if (!leafletMapRef.current || !loaded) return;

    import("leaflet").then((L) => {
      const map = leafletMapRef.current as L.Map;

      const defaultIcon = L.divIcon({
        className: "custom-marker",
        html: `<div style="
          width: 12px; height: 12px;
          background: rgba(34, 211, 238, 0.8);
          border: 2px solid rgba(34, 211, 238, 1);
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(34, 211, 238, 0.5);
        "></div>`,
        iconSize: [12, 12],
        iconAnchor: [6, 6],
      });

      const selectedIconStyle = L.divIcon({
        className: "custom-marker-selected",
        html: `<div style="
          width: 18px; height: 18px;
          background: rgba(167, 139, 250, 0.9);
          border: 3px solid rgba(167, 139, 250, 1);
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(167, 139, 250, 0.6);
        "></div>`,
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      });

      markersRef.current.forEach((m, idx) => {
        const marker = m as L.Marker;
        marker.setIcon(
          selectedState && ESTADOS[idx].id === selectedState.id
            ? selectedIconStyle
            : defaultIcon
        );
      });

      if (selectedState) {
        map.flyTo([selectedState.lat, selectedState.lng], 7, {
          duration: 1.2,
        });
      }
    });
  }, [selectedState, loaded]);

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-bg-surface)] z-10">
          <div className="text-center">
            <div className="w-10 h-10 border-2 border-[var(--color-accent-cyan)] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm text-[var(--color-text-muted)]">
              Cargando mapa...
            </p>
          </div>
        </div>
      )}
      <div ref={mapRef} className="w-full h-full" style={{ minHeight: 500 }} />
    </div>
  );
}

export default function MapaPage() {
  const [selectedState, setSelectedState] = useState<typeof ESTADOS[0] | null>(null);

  return (
    <div className="pt-24 pb-16 px-4">
      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      {/* Custom popup styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .dark-popup .leaflet-popup-content-wrapper {
          background: rgba(18, 18, 26, 0.95);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          color: #e2e8f0;
        }
        .dark-popup .leaflet-popup-tip {
          background: rgba(18, 18, 26, 0.95);
          border: 1px solid rgba(148, 163, 184, 0.1);
        }
        .leaflet-control-zoom a {
          background: rgba(18, 18, 26, 0.9) !important;
          color: #e2e8f0 !important;
          border-color: rgba(148, 163, 184, 0.15) !important;
        }
        .leaflet-control-zoom a:hover {
          background: rgba(34, 211, 238, 0.2) !important;
        }
        .leaflet-control-attribution {
          background: rgba(18, 18, 26, 0.7) !important;
          color: #64748b !important;
          font-size: 10px !important;
        }
        .leaflet-control-attribution a {
          color: #22d3ee !important;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }
      `,
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Mapa de{" "}
            <span className="gradient-text">México</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Explora los datos del INEGI por estado. Haz clic en cualquier
            marcador o selecciona un estado de la lista.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Map */}
          <div className="lg:col-span-3 glass-card overflow-hidden" style={{ minHeight: 550 }}>
            <LeafletMap
              onStateSelect={setSelectedState}
              selectedState={selectedState}
            />
          </div>

          {/* State Info Panel */}
          <div className="glass-card overflow-hidden relative">
            {selectedState ? (
              <motion.div
                key={selectedState.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full h-full relative"
              >
                {/* Netflix Style Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-1000"
                  style={{ 
                    backgroundImage: `url('${STATE_DATA[selectedState.abbr as keyof typeof STATE_DATA]?.bg || ''}')`,
                    opacity: 0.4
                  }}
                />
                {/* Black Vignette Gradient Overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0A0E17] via-[#0A0E17]/80 to-transparent" />
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0A0E17]/90 via-transparent to-transparent" />
                
                {/* Content over background */}
                <div className="relative z-10 p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-violet)]/20 flex items-center justify-center">
                    <span className="font-heading font-bold text-sm text-[var(--color-accent-violet)]">
                      {selectedState.abbr}
                    </span>
                  </div>
                  <div>
                    <h2 className="font-heading text-lg font-bold text-white">
                      {selectedState.name}
                    </h2>
                    <p className="text-xs text-[var(--color-text-muted)]">
                      Entidad Federativa
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-[var(--color-border-subtle)]">
                    <span className="text-sm text-[var(--color-text-muted)]">
                      Código INEGI
                    </span>
                    <span className="text-sm font-mono text-[var(--color-accent-cyan)]">
                      {selectedState.id}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[var(--color-border-subtle)]">
                    <span className="text-sm text-[var(--color-text-muted)]">
                      Latitud
                    </span>
                    <span className="text-sm font-mono">
                      {selectedState.lat}°
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[var(--color-border-subtle)]">
                    <span className="text-sm text-[var(--color-text-muted)]">
                      Longitud
                    </span>
                    <span className="text-sm font-mono">
                      {selectedState.lng}°
                    </span>
                  </div>
                </div>

                  <div className="mt-6 space-y-3">
                    <div className="p-4 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)]">
                      <p className="text-xs text-[var(--color-accent-cyan)] font-semibold mb-2">
                        📊 Perfil Demográfico y Económico
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-[var(--color-text-muted)]">Población (2020)</span>
                          <span className="text-xs font-mono text-white">{STATE_DATA[selectedState.abbr as keyof typeof STATE_DATA]?.pob || "N/A"} millones</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-[var(--color-text-muted)]">Aportación al PIB</span>
                          <span className="text-xs font-mono text-white">{STATE_DATA[selectedState.abbr as keyof typeof STATE_DATA]?.pib || "N/A"}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-[var(--color-text-muted)]">Atractivo Nearshoring</span>
                          <span className="text-xs font-mono text-white">{STATE_DATA[selectedState.abbr as keyof typeof STATE_DATA]?.ns || "N/A"}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                <button
                  onClick={() => setSelectedState(null)}
                  className="mt-6 w-full py-2.5 rounded-lg text-xs font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.5)] uppercase tracking-wider"
                >
                  ✕ Deseleccionar
                </button>
                </div>
              </motion.div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="text-5xl mb-4">🗺️</div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-[var(--color-text-secondary)]">
                  Selecciona un estado
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  Haz clic en cualquier marcador del mapa o selecciona un estado
                  de la lista abajo.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Dynamic Municipalities Data Grid */}
        {selectedState && (
          <MunicipalityTable 
            stateId={selectedState.id}
            stateName={selectedState.name}
            stateAbbr={selectedState.abbr}
          />
        )}

        {/* States Grid */}
        <div className="mt-8">
          <h2 className="text-xl font-heading font-semibold mb-4 text-white">
            Todos los estados
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {ESTADOS.map((estado) => {
              const bgImg = STATE_DATA[estado.abbr as keyof typeof STATE_DATA]?.bg;
              return (
                <button
                  key={estado.id}
                  onClick={() => setSelectedState(estado)}
                  className={`group relative overflow-hidden rounded-xl h-24 transition-all duration-300 shadow-lg ${
                    selectedState?.id === estado.id
                      ? "ring-2 ring-[var(--color-accent-cyan)] ring-offset-2 ring-offset-[#0A0E17] scale-95"
                      : "hover:scale-105"
                  }`}
                >
                  {/* Netflix Grid Background */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${bgImg}')` }}
                  />
                  {/* Dark Vignette per button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-2 text-left z-10 text-white">
                    <span className="font-mono font-bold text-[10px] opacity-70 mb-0.5 tracking-wider">
                      {estado.abbr}
                    </span>
                    <span className="font-heading font-bold text-xs sm:text-sm leading-tight drop-shadow-md">
                      {estado.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Monetization Footer Banner */}
        <AdBanner dataAdSlot="9876543210" />

        {/* Attribution */}
        <div className="mt-8 glass-card p-4 text-center">
          <p className="text-xs text-[var(--color-text-muted)]">
            🗺️ Mapas: OpenStreetMap + CARTO Dark Matter (gratuito, sin API key) •
            📊 Fuente de datos: INEGI
          </p>
        </div>
      </div>
    </div>
  );
}
