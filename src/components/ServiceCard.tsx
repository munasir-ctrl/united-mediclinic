import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  Stethoscope,
  Leaf,
  Bone,
  Ear,
  type LucideIcon,
} from 'lucide-react';
import type { Service } from '@/data/services';

const iconMap: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  leaf: Leaf,
  bone: Bone,
  ear: Ear,
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Stethoscope;

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group relative flex flex-col bg-white border border-ink-200/80 rounded-2xl p-6 lg:p-7 transition-all duration-300 hover:shadow-soft-lg hover:border-brand-200 hover:-translate-y-1 overflow-hidden"
    >
      {/* Subtle gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-teal-50/0 group-hover:from-brand-50/40 group-hover:to-teal-50/20 transition-all duration-500 pointer-events-none" />

      {/* Icon */}
      <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-brand-500 to-teal-500 flex items-center justify-center shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
      </div>

      {/* Title */}
      <h3 className="relative text-xl font-display font-bold text-ink-900 mt-5">
        {service.title}
      </h3>

      {/* Description */}
      <p className="relative text-sm text-ink-500 mt-2 leading-relaxed line-clamp-3">
        {service.shortDescription}
      </p>

      {/* Key areas */}
      <ul className="relative mt-4 flex flex-col gap-1.5">
        {service.areas.slice(0, 3).map((area) => (
          <li key={area} className="text-xs text-ink-400 flex items-center gap-2">
            <span className="w-1 h-1 bg-teal-500 rounded-full shrink-0" />
            {area}
          </li>
        ))}
      </ul>

      {/* Explore */}
      <span className="relative mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:text-brand-800 transition-colors">
        Explore
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
