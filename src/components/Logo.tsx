import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'default' | 'light';
}

export function LogoMark({ className = 'h-16 w-auto' }: { className?: string }) {
  return (
    <div className="flex items-center my-auto">
      <img
        src="/logo-united-mediclinic.png"
        alt="United Mediclinic Logo"
        className={`object-contain h-16 w-auto ${className}`}
      />
    </div>
  );
}

export default function Logo({ className = '', showText = false, variant = 'default' }: LogoProps) {
  return (
    <Link
      to="/"
      className={`flex items-center group ${className}`}
      aria-label="United Mediclinic — Home"
    >
      <span className="transition-transform duration-300 group-hover:scale-105 flex items-center">
        <LogoMark />
      </span>
      {showText && null}
    </Link>
  );
}