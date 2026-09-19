import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'teal' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface ButtonLinkProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: 'arrow' | 'phone' | 'none';
  type?: 'button' | 'submit';
  disabled?: boolean;
  loading?: boolean;
  ariaLabel?: string;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-700 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5',
  teal: 'bg-teal-600 text-white hover:bg-teal-700 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5',
  secondary:
    'bg-ink-900 text-white hover:bg-ink-800 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5',
  ghost:
    'bg-transparent text-ink-700 hover:bg-ink-100 border border-ink-200 hover:border-ink-300',
  outline:
    'bg-transparent text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm',
};

const sizes: Record<Size, string> = {
  sm: 'text-sm px-4 py-2.5 gap-1.5',
  md: 'text-sm px-5 py-3 gap-2',
  lg: 'text-base px-7 py-3.5 gap-2',
};

export default function ButtonLink({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  icon = 'none',
  type = 'button',
  disabled,
  loading,
  ariaLabel,
}: ButtonLinkProps) {
  const baseClass = cn(
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 ease-out',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600',
    'disabled:opacity-50 disabled:pointer-events-none',
    'active:translate-y-0',
    variants[variant],
    sizes[size],
    className
  );

  const iconEl = () => {
    if (loading)
      return (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      );
    if (icon === 'arrow') return <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />;
    if (icon === 'phone') return <Phone className="w-4 h-4" />;
    return null;
  };

  if (href) {
    return (
      <a href={href} className={cn(baseClass, 'group')} aria-label={ariaLabel} onClick={onClick}>
        {children}
        {icon !== 'none' && iconEl()}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={cn(baseClass, 'group')} aria-label={ariaLabel} onClick={onClick}>
        {children}
        {icon !== 'none' && iconEl()}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(baseClass, 'group')}
      disabled={disabled || loading}
      aria-label={ariaLabel}
    >
      {children}
      {icon !== 'none' && iconEl()}
    </button>
  );
}
