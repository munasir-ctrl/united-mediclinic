import { cn } from '@/utils/cn';

interface ImagePlaceholderProps {
  alt: string;
  className?: string;
  aspect?: string;
  icon?: React.ReactNode;
  label?: string;
}

// Elegant placeholder for images not yet supplied (doctor photos, clinic photos, etc.)
// Clearly replaceable — just swap imageUrl in data when available.
export default function ImagePlaceholder({
  alt,
  className,
  aspect = 'aspect-[4/3]',
  icon,
  label,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-teal-50',
        'flex items-center justify-center',
        aspect,
        className
      )}
      role="img"
      aria-label={alt}
    >
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-grid-faint bg-grid-32 opacity-40" />

      {/* Floating brand shapes */}
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-100/40 rounded-full blur-2xl" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-teal-100/40 rounded-full blur-2xl" />

      {/* Center content */}
      <div className="relative flex flex-col items-center gap-3 text-ink-300">
        {icon ?? (
          <svg className="w-12 h-12 text-brand-200" viewBox="0 0 48 48" fill="none">
            <rect x="6" y="10" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="2" />
            <circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth="2" />
            <rect x="21" y="21" width="6" height="6" rx="1" fill="currentColor" opacity="0.3" />
          </svg>
        )}
        {label && <span className="text-xs font-medium text-ink-400 uppercase tracking-wider">{label}</span>}
      </div>
    </div>
  );
}
