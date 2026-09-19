import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'eyebrow',
            light && 'text-teal-300'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-display-lg font-display font-extrabold text-balance',
          light ? 'text-white' : 'text-ink-900'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-lg leading-relaxed text-pretty max-w-2xl',
            light ? 'text-white/70' : 'text-ink-500',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
