export default function Icon3D({ title }) {
  const colors = {
    Powersky: ["#FF7A7A", "#FFB86B"],
    LasjanFC: ["#7C7DFA", "#4CC9F0"],
    "Dubai Nile Links": ["#7BE495", "#34D399"]
  }[title] || ["#6C5CE7", "#4CC9F0"];

  const [c1, c2] = colors;
  const id = `g${c1.replace("#", "")}${c2.replace("#", "")}`;

  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden role="img" width="64" height="64">
      <defs>
        <linearGradient id={id} x1="0" x2="1">
          <stop offset="0" stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
        <filter id="f1" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#0b1220" floodOpacity="0.12"/>
        </filter>
      </defs>

      <g filter="url(#f1)">
        <rect x="8" y="14" rx="10" width="64" height="44" fill={`url(#${id})`} transform="skewX(-12) rotate(-6 40 36)" />
      </g>

      <rect x="18" y="20" rx="6" width="44" height="28" fill="white" opacity="0.06" transform="skewX(-10) rotate(-6 40 36)"/>

      <g transform="translate(28,28) rotate(-6)">
        <circle cx="6" cy="6" r="6" fill="white" opacity="0.95"/>
      </g>
    </svg>
  );
}
