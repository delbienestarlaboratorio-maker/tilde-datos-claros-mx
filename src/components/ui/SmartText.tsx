import React from "react";
import { GLOSSARY } from "@/lib/inegi/glossary";

// Sort by length descending to match longer multi-word phrases first
const terms = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);

// Build a dynamic regex that matches any of the glossary terms as whole words, case-insensitive
const regex = new RegExp(`\\b(${terms.join("|")})\\b`, "gi");

interface SmartTextProps {
  text?: string | null;
  color?: string;
}

export default function SmartText({
  text,
  color = "var(--color-accent-cyan)",
}: SmartTextProps) {
  if (!text) return null;

  // Split the text using the capturing regex.
  // This yields an array where matches are interleaved with the surrounding text.
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) => {
        const lowerPart = part.toLowerCase();
        const definition = GLOSSARY[lowerPart];

        if (definition) {
          return (
            <span key={i} className="relative inline-block group cursor-help mx-0.5">
              <span
                className="border-b-2 border-dotted pb-0.5 transition-colors duration-200"
                style={{ borderBottomColor: color }}
              >
                {part}{" "}
                <span className="text-[10px] opacity-70 group-hover:opacity-100 align-text-top">
                  💡
                </span>
              </span>
              {/* Tooltip Popover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 md:w-64 p-3 rounded-xl bg-[#0a0f18] border shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-translate-y-1 transition-all duration-300 z-50 text-xs text-[var(--color-text-primary)] pointer-events-none" style={{ borderColor: color }}>
                <strong className="block mb-1 text-[13px]" style={{ color }}>
                  {part}
                </strong>
                <span className="text-[var(--color-text-secondary)] leading-relaxed">
                  {definition}
                </span>
              </div>
            </span>
          );
        }

        // Just regular text
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
}
