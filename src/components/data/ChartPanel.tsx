"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface ChartPanelProps {
  data: { date: string; value: number }[];
  title: string;
  color?: string;
  unit?: string;
}

function CustomTooltip({ active, payload, label, unit }: { active?: boolean; payload?: Array<{ value: number }>; label?: string; unit?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-card !rounded-lg p-3 text-xs shadow-xl">
      <p className="text-[var(--color-text-muted)] mb-1">{label}</p>
      <p className="font-heading font-bold text-white">
        {payload[0].value.toLocaleString("es-MX")} {unit}
      </p>
    </div>
  );
}

export default function ChartPanel({
  data,
  title,
  color = "#22d3ee",
  unit,
}: ChartPanelProps) {
  if (!data || data.length === 0) {
    return (
      <div className="glass-card p-6">
        <h3 className="font-heading font-semibold text-sm mb-4">{title}</h3>
        <div className="h-48 flex items-center justify-center text-[var(--color-text-muted)] text-sm">
          No hay datos disponibles para graficar
        </div>
      </div>
    );
  }

  // Only show last 24 data points for readability
  const chartData = data.slice(-24);

  return (
    <div className="glass-card p-6">
      <h3 className="font-heading font-semibold text-sm mb-4 text-[var(--color-text-secondary)]">
        {title}
      </h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.3} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(148,163,184,0.08)"
              vertical={false}
            />
            <XAxis
              dataKey="date"
              tick={{ fill: "#64748b", fontSize: 10 }}
              tickLine={false}
              axisLine={false}
              interval="preserveStartEnd"
            />
            <YAxis
              tick={{ fill: "#64748b", fontSize: 10 }}
              tickLine={false}
              axisLine={false}
              width={60}
              tickFormatter={(v: number) => v.toLocaleString("es-MX")}
            />
            <Tooltip content={<CustomTooltip unit={unit} />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              fill={`url(#gradient-${title})`}
              dot={false}
              activeDot={{ r: 4, fill: color, stroke: "#0a0a0f", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
