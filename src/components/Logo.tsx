interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: "dark" | "light";
}

export function Logo({ className = "", showText = true, variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-primary";
  const subColor = variant === "light" ? "text-gold-soft" : "text-muted-foreground";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-11 w-11 shrink-0" xmlns="http://www.w3.org/2000/svg" aria-label="WCC crest">
        <defs>
          <linearGradient id="wccGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.88 0.09 88)" />
            <stop offset="50%" stopColor="oklch(0.78 0.14 85)" />
            <stop offset="100%" stopColor="oklch(0.62 0.13 70)" />
          </linearGradient>
          <linearGradient id="wccRoyal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.32 0.13 295)" />
            <stop offset="100%" stopColor="oklch(0.18 0.1 295)" />
          </linearGradient>
        </defs>
        {/* shield */}
        <path d="M32 3 L58 12 V32 C58 47 47 56 32 61 C17 56 6 47 6 32 V12 Z"
              fill="url(#wccRoyal)" stroke="url(#wccGold)" strokeWidth="1.5" />
        {/* inner ring */}
        <circle cx="32" cy="30" r="18" fill="none" stroke="url(#wccGold)" strokeWidth="0.8" opacity="0.7" />
        {/* cross */}
        <rect x="30" y="14" width="4" height="32" fill="url(#wccGold)" />
        <rect x="22" y="22" width="20" height="4" fill="url(#wccGold)" />
        {/* rays */}
        <g stroke="url(#wccGold)" strokeWidth="0.6" opacity="0.6">
          <line x1="32" y1="48" x2="20" y2="56" />
          <line x1="32" y1="48" x2="32" y2="58" />
          <line x1="32" y1="48" x2="44" y2="56" />
        </g>
        {/* WCC letters */}
        <text x="32" y="55" textAnchor="middle" fontSize="6" fontWeight="700"
              fill="url(#wccGold)" fontFamily="serif" letterSpacing="1">WCC</text>
      </svg>
      {showText && (
        <div className="leading-tight">
          <div className={`font-display text-lg font-semibold ${textColor}`}>World Commission</div>
          <div className={`text-[10px] font-medium uppercase tracking-[0.25em] ${subColor}`}>Church · Nairobi</div>
        </div>
      )}
    </div>
  );
}
