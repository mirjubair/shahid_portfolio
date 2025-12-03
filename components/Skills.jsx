"use client";
import { useEffect, useRef } from "react";

/* Circular skills (visible-by-default) */
const skills = [
  { name: "Visual Identity", pct: 88, color: "#6C5CE7" },
  { name: "Social Creatives", pct: 92, color: "#4CC9F0" },
  { name: "Web Graphics", pct: 82, color: "#7BE495" },
  { name: "Motion", pct: 70, color: "#FF7A7A" },
  { name: "Figma", pct: 90, color: "#FFB86B" },
  { name: "Photoshop", pct: 84, color: "#9B8CF6" },
  { name: "Illustrator", pct: 78, color: "#F6A6FF" },
  { name: "Canva", pct: 95, color: "#00C4A7" }
];

function Circular({ pct, size = 96, stroke = 8, color, label }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targetOffset = circumference * (1 - pct / 100);
    el.style.transition = "stroke-dashoffset 900ms cubic-bezier(.2,.9,.2,1)";
    const delay = Math.random() * 220;
    el.style.transitionDelay = `${delay}ms`;
    requestAnimationFrame(() => {
      el.style.strokeDashoffset = String(targetOffset);
    });
  }, [circumference, pct]);

  return (
    <div style={{ width: size, textAlign: "center" }}>
      <svg width={size} height={size}>
        <g transform={`translate(${size / 2}, ${size / 2})`}>
          <circle
            r={radius}
            cx="0"
            cy="0"
            fill="transparent"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={stroke}
          />
          <circle
            ref={ref}
            r={radius}
            cx="0"
            cy="0"
            fill="transparent"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            transform="rotate(-90)"
          />
          <text x="0" y="6" textAnchor="middle" style={{ fontSize: 12, fontWeight: 700, fill: "white" }}>
            {pct}%
          </text>
        </g>
      </svg>
      <div style={{ marginTop: 8, fontSize: 13 }}>{label}</div>
    </div>
  );
}

export default function Skills() {
  return (
    <div style={{ width: "100%" }}>
      {/* Visible panel wrapper so you can spot it quickly */}
      <div className="card" style={{ padding: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 800 }}>Skills & proficiency</div>
            <div className="small text-muted" style={{ marginTop: 6 }}>Core tools and creative areas — interactive radial charts below</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 18 }}>
          {skills.map((s) => (
            <div key={s.name} style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 8 }}>
              <Circular pct={s.pct} color={s.color} label={s.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
