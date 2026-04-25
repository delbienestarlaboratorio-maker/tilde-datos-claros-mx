"use client";

import { motion } from "framer-motion";

interface StatHighlightProps {
  label: string;
  value: string;
  unit?: string;
  trend?: "up" | "down" | "stable";
  changePercent?: number;
  color?: string;
  delay?: number;
}

export default function StatHighlight({
  label,
  value,
  unit,
  trend,
  changePercent,
  color = "var(--color-accent-cyan)",
  delay = 0,
}: StatHighlightProps) {
  const trendIcon =
    trend === "up" ? "↑" : trend === "down" ? "↓" : "→";
  const trendColor =
    trend === "up" ? "#ef4444" : trend === "down" ? "#22c55e" : "#94a3b8";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      className="glass-card p-6 text-center hover-lift"
    >
      <p className="text-sm text-[var(--color-text-muted)] mb-2 font-medium">
        {label}
      </p>
      <p
        className="text-3xl sm:text-4xl font-heading font-bold stat-glow mb-1"
        style={{ color }}
      >
        {value}
      </p>
      {unit && (
        <p className="text-xs text-[var(--color-text-muted)]">{unit}</p>
      )}
      {changePercent !== undefined && (
        <div className="mt-3 flex items-center justify-center gap-1">
          <span style={{ color: trendColor }} className="text-sm font-semibold">
            {trendIcon} {Math.abs(changePercent)}%
          </span>
          <span className="text-xs text-[var(--color-text-muted)]">
            vs anterior
          </span>
        </div>
      )}
    </motion.div>
  );
}
