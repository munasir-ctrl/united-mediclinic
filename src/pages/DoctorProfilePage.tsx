import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Calendar, ArrowRight, Globe, Briefcase, Stethoscope } from 'lucide-react';
import SEO from '@/components/SEO';
import Reveal from '@/components/Reveal';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import ButtonLink from '@/components/ButtonLink';
import { getDoctorBySlug } from '@/data/doctors';
import { clinicConfig } from '@/data/clinicConfig';
import { physicianSchema, breadcrumbSchema } from '@/data/navigation';

const ease = [0.22, 1, 0.36, 1] as const;

export default function DoctorProfilePage() {
  const { slug } = useParams<{ slug: string }>();
  const doctor = slug ? getDoctorBySlug(slug) : undefined;

  if (!doctor) return <Navigate to="/404" replace />;

  return (
    <>
      <SEO
        title={doctor.name}
        description={`${doctor.name} — ${doctor.specialty}. ${doctor.qualifications.join(', ')}. ${doctor.expertise.slice(0, 3).join(', ')}.`}
        path={`/doctors/${doctor.slug}`}
        type="profile"
        jsonLd={[
          physicianSchema(doctor.id),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Doctors', path: '/doctors' },
            { name: doctor.name, path: `/doctors/${doctor.slug}` },
          ]),
        ]}
      />

      {/* Breadcrumb */}
      <div className="bg-ink-50 border-b border-ink-200/60">
        <div className="container-wide py-3">
          <nav className="flex items-center gap-2 text-xs text-ink-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-700 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/doctors" className="hover:text-brand-700 transition-colors">Doctors</Link>
            <span>/</span>
            <span className="text-ink-700 font-medium">{doctor.name}</span>
          </nav>
        </div>
      </div>

      {/* Profile */}
      <section className="bg-hero-radial pt-12 lg:pt-16 pb-16 lg:pb-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Photo */}
            <Reveal className="lg:col-span-4">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-soft-lg border border-ink-200/60">
                  {doctor.photoUrl ? (
                    <img
                      src={doctor.photoUrl}
                      alt={`${doctor.name} — ${doctor.specialty}`}
                      className="w-full aspect-[4/5] object-cover"
                    />
                  ) : (
                    <ImagePlaceholder
                      alt={`${doctor.name} — ${doctor.specialty}`}
                      aspect="aspect-[4/5]"
                      label="Doctor Photo"
                    />
                  )}
                </div>
              </div>
            </Reveal>

            {/* Info */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <Reveal delay={100}>
                <span className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-3 py-1.5 rounded-full text-xs font-semibold">
                  <Stethoscope className="w-3.5 h-3.5" />
                  {doctor.specialty}
                </span>
                <h1 className="text-display-lg font-display font-extrabold text-ink-900 mt-4">
                  {doctor.name}
                </h1>

                {/* Qualifications */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {doctor.qualifications.map((qual) => (
                    <span
                      key={qual}
                      className="text-sm bg-white border border-ink-200 px-3 py-1.5 rounded-lg text-ink-700 font-medium"
                    >
                      {qual}
                    </span>
                  ))}
                </div>

                {/* Roles */}
                {doctor.roles && doctor.roles.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {doctor.roles.map((role) => (
                      <span
                        key={role}
                        className="text-sm bg-teal-50 border border-teal-200 px-3 py-1.5 rounded-lg text-teal-700 font-medium"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-ink-600 leading-relaxed mt-5 max-w-2xl">{doctor.bio}</p>
              </Reveal>

              {/* Meta cards */}
              <Reveal delay={200}>
                <div className="grid sm:grid-cols-3 gap-4 mt-2">
                  {doctor.experience && (
                    <div className="bg-white rounded-xl border border-ink-200/60 p-4">
                      <div className="flex items-center gap-2 text-ink-400 text-xs font-medium uppercase tracking-wider mb-1.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        Experience
                      </div>
                      <p className="text-sm font-semibold text-ink-900">{doctor.experience}</p>
                    </div>
                  )}
                  <div className="bg-white rounded-xl border border-ink-200/60 p-4">
                    <div className="flex items-center gap-2 text-ink-400 text-xs font-medium uppercase tracking-wider mb-1.5">
                      <Globe className="w-3.5 h-3.5" />
                      Languages
                    </div>
                    <p className="text-sm font-semibold text-ink-900">{doctor.languages.join(', ')}</p>
                  </div>
                  <div className="bg-white rounded-xl border border-ink-200/60 p-4">
                    <div className="flex items-center gap-2 text-ink-400 text-xs font-medium uppercase tracking-wider mb-1.5">
                      <Stethoscope className="w-3.5 h-3.5" />
                      Specialty
                    </div>
                    <p className="text-sm font-semibold text-ink-900">{doctor.specialty}</p>
                  </div>
                </div>
              </Reveal>

              {/* CTAs */}
              <Reveal delay={300}>
                <div className="flex flex-wrap gap-3 mt-2">
                  <ButtonLink
                    to="/book-appointment"
                    state={{ doctor: doctor.slug }}
                    variant="primary"
                    size="lg"
                    icon="arrow"
                  >
                    Book Appointment
                  </ButtonLink>
                  <ButtonLink
                    href={`tel:${clinicConfig.phones[0]}`}
                    variant="ghost"
                    size="lg"
                    icon="phone"
                  >
                    Call {clinicConfig.phones[0]}
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 lg:py-24 bg-section-cool">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-display-md font-display font-bold text-ink-900 mb-8">
              Areas of Expertise
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {doctor.expertise.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease, delay: i * 0.05 }}
                className="flex items-center gap-3 bg-white rounded-xl border border-ink-200/60 p-4 hover:border-brand-200 hover:shadow-soft transition-all duration-300"
              >
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-teal-500 flex items-center justify-center shrink-0 text-white text-xs font-bold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-medium text-ink-700">{area}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <ButtonLink to="/doctors" variant="ghost" icon="arrow">
              View All Doctors
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
