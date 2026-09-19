import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Calendar } from 'lucide-react';
import type { Doctor } from '@/data/doctors';
import { clinicConfig } from '@/data/clinicConfig';
import ImagePlaceholder from './ImagePlaceholder';

interface DoctorCardProps {
  doctor: Doctor;
  compact?: boolean;
}

export default function DoctorCard({ doctor, compact = false }: DoctorCardProps) {
  return (
    <article className="group flex flex-col bg-white border border-ink-200/80 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-soft-lg hover:border-brand-200 hover:-translate-y-1">
      {/* Photo */}
      <div className="relative overflow-hidden">
        {doctor.photoUrl ? (
          <img
            src={doctor.photoUrl}
            alt={doctor.name}
            className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <ImagePlaceholder
            alt={`${doctor.name} — ${doctor.specialty}`}
            aspect="aspect-[4/5]"
            label={doctor.name}
          />
        )}
        {/* Specialty badge */}
        <div className="absolute top-4 left-4">
          <span className="glass px-3 py-1.5 text-xs font-semibold text-ink-800 rounded-full shadow-soft">
            {doctor.specialty}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-5 lg:p-6">
        <h3 className="text-lg font-display font-bold text-ink-900 leading-tight">
          {doctor.name}
        </h3>

        {/* Qualifications */}
        <p className="text-sm text-ink-500 mt-1.5 leading-relaxed">
          {doctor.qualifications.join(' · ')}
        </p>

        {/* Roles if any */}
        {doctor.roles && doctor.roles.length > 0 && (
          <p className="text-sm text-teal-600 font-medium mt-1">{doctor.roles.join(' · ')}</p>
        )}

        {/* Meta row */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-4 text-xs text-ink-500">
          {doctor.experience && (
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 bg-brand-500 rounded-full" />
              {doctor.experience}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 bg-teal-500 rounded-full" />
            {doctor.languages.length} languages
          </span>
        </div>

        {!compact && (
          <p className="text-sm text-ink-400 mt-3 line-clamp-2">
            {doctor.expertise.slice(0, 3).join(' · ')}
          </p>
        )}

        {/* Actions */}
        <div className="mt-auto pt-5 flex items-center gap-3">
          <Link
            to={`/doctors/${doctor.slug}`}
            className="flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800 transition-colors group/link"
          >
            View Profile
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
          </Link>
          <a
            href={`tel:${clinicConfig.phones[0]}`}
            className="ml-auto flex items-center justify-center w-9 h-9 rounded-lg bg-ink-50 text-ink-500 hover:bg-brand-50 hover:text-brand-600 transition-colors"
            aria-label={`Call to book appointment with ${doctor.name}`}
          >
            <Phone className="w-4 h-4" />
          </a>
          <Link
            to="/book-appointment"
            state={{ doctor: doctor.slug }}
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-ink-50 text-ink-500 hover:bg-teal-50 hover:text-teal-600 transition-colors"
            aria-label={`Book appointment with ${doctor.name}`}
          >
            <Calendar className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
