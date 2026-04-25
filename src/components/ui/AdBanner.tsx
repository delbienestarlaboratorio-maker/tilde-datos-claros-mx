"use client";

import { useEffect } from "react";

interface AdBannerProps {
  dataAdSlot: string;
  dataAdFormat?: string;
  dataFullWidthResponsive?: boolean;
}

export default function AdBanner({
  dataAdSlot,
  dataAdFormat = "auto",
  dataFullWidthResponsive = true,
}: AdBannerProps) {
  useEffect(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const adsbygoogle = (window as any).adsbygoogle || [];
      adsbygoogle.push({});
    } catch (err: unknown) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className="w-full my-6 flex justify-center items-center overflow-hidden min-h-[90px] bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] rounded-xl relative group">
      <span className="absolute text-xs text-[var(--color-text-muted)] opacity-50 select-none z-0">
        Espacio Publicitario
      </span>
      <ins
        className="adsbygoogle relative z-10"
        style={{ display: "block", width: "100%" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive ? "true" : "false"}
      />
    </div>
  );
}
