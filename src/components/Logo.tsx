import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'default' | 'light';
}

export function LogoMark({ className = 'w-10 h-10' }: { className?: string }) {
  // Abstract mark derived from the United Mediclinic logo — blue + teal identity.
  // Cross + upward arc forming a medical/shield shape.
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0082cc" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>
      </defs>
      {/* Shield/circle base */}
      <circle cx="24" cy="24" r="22" fill="url(#logo-grad)" />
      <circle cx="24" cy="24" r="22" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      {/* Medical cross */}
      <rect x="20" y="14" width="8" height="20" rx="2" fill="white" />
      <rect x="14" y="20" width="20" height="8" rx="2" fill="white" />
      {/* Inner accent — teal */}
      <rect x="21.5" y="15.5" width="5" height="5" rx="1" fill="#14b8a6" opacity="0.9" />
    </svg>
  );
}

export default function Logo({ className = '', showText = true, variant = 'default' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-ink-900';
  const subColor = variant === 'light' ? 'text-white/60' : 'text-ink-400';

  return (
    <Link
      to="/"
      className={`flex items-center gap-3 group ${className}`}
      aria-label="United Mediclinic — Home"
    >
      <span className="transition-transform duration-300 group-hover:scale-105">
        <LogoMark className="w-10 h-10 shrink-0" />
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className={`font-display font-extrabold text-base tracking-tight ${textColor}`}>
            United Mediclinic
          </span>
          <span className={`text-[10px] font-medium uppercase tracking-[0.15em] mt-0.5 ${subColor}`}>
            Healthcare That Puts You First
          </span>
        </span>
      )}
    </Link>
  );
}
