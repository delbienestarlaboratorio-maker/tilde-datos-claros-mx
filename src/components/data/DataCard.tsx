"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SmartText from "@/components/ui/SmartText";

interface DataCardProps {
  title: string;
  value: string;
  unit: string;
  description: string;
  trend?: "up" | "down" | "stable";
  changePercent?: number;
  lastDate?: string;
  href?: string;
  color?: string;
  index?: number;
}

export default function DataCard({
  title,
  value,
  unit,
  description,
  trend,
  changePercent,
  lastDate,
  href,
  color = "var(--color-accent-cyan)",
  index = 0,
}: DataCardProps) {
  const trendIcon = trend === "up" ? "↑" : trend === "down" ? "↓" : "→";
  const trendColor = trend === "up" ? "#ef4444" : trend === "down" ? "#22c55e" : "#94a3b8";

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.35 }}
      className="glass-card p-5 hover-lift h-full flex flex-col"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-heading text-sm font-semibold text-[var(--color-text-secondary)] leading-tight flex-1 pr-2">
          {title}
        </h3>
        {changePercent !== undefined && (
          <span
            className="text-xs font-bold px-2 py-1 rounded-full shrink-0"
            style={{
              color: trendColor,
              backgroundColor: `${trendColor}15`,
            }}
          >
            {trendIcon} {Math.abs(changePercent)}%
          </span>
        )}
      </div>

      <div className="mb-3">
        <span className="text-2xl font-heading font-bold" style={{ color }}>
          {value}
        </span>
        <span className="text-xs text-[var(--color-text-muted)] ml-2">
          {unit}
        </span>
      </div>

      <p className="text-xs text-[var(--color-text-muted)] leading-relaxed flex-1">
        <SmartText text={description} color={color} />
      </p>

      {lastDate && (
        <p className="text-[10px] text-[var(--color-text-muted)] mt-3 pt-3 border-t border-[var(--color-border-subtle)]">
          📅 Último dato: {lastDate}
        </p>
      )}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
