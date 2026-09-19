import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import SEO from '@/components/SEO';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { getServiceBySlug } from '@/data/services';
import { doctors } from '@/data/doctors';
import { clinicConfig } from '@/data/clinicConfig';
import { breadcrumbSchema } from '@/data/navigation';

const ease = [0.22, 1, 0.36, 1] as const;

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <Navigate to="/404" replace />;

  // Find doctors related to this service
  const relatedDoctors = doctors.filter((d) => {
    const specialty = d.specialty.toLowerCase();
    return (
      service.title.toLowerCase().includes('general') && specialty.includes('general') ||
      service.title.toLowerCase().includes('unani') && (specialty.includes('unani') || d.roles?.some(r => r.toLowerCase().includes('unani'))) ||
      service.title.toLowerCase().includes('orthopaed') && specialty.includes('orthoped') ||
      service.title.toLowerCase() === 'ent' && specialty.includes('ent')
    );
  });

  return (
    <>
      <SEO
        title={service.title}
        description={service.shortDescription}
        path={`/services/${service.slug}`}
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />

      {/* Breadcrumb */}
      <div className="bg-ink-50 border-b border-ink-200/60">
        <div className="container-wide py-3">
          <nav className="flex items-center gap-2 text-xs text-ink-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-700 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-brand-700 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-ink-700 font-medium">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-hero-radial pt-12 lg:pt-16 pb-16">
        <div className="container-wide">
          <Reveal>
            <span className="eyebrow flex items-center gap-2">
              <span className="w-8 h-px bg-brand-500" />
              Speciality
            </span>
            <h1 className="text-display-xl font-display font-extrabold text-ink-900 mt-5 text-balance">
              {service.title}
            </h1>
            <p className="text-lg text-ink-500 mt-5 max-w-3xl leading-relaxed">
              {service.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Key areas */}
      <section className="py-16 lg:py-24 bg-section-cool">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <Reveal>
              <h2 className="text-display-md font-display font-bold text-ink-900 mb-6">
                Key Areas of Care
              </h2>
              <div className="flex flex-col gap-3">
                {service.areas.map((area, i) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease, delay: i * 0.05 }}
                    className="flex items-center gap-3 bg-white rounded-xl border border-ink-200/60 p-4 hover:border-brand-200 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-teal-700" />
                    </span>
                    <span className="text-sm font-medium text-ink-700">{area}</span>
                  </motion.div>
                ))}
              </div>
            </Reveal>

            {/* Related doctors */}
            <Reveal delay={150}>
              <h2 className="text-display-md font-display font-bold text-ink-900 mb-6">
                Related Doctors
              </h2>
              {relatedDoctors.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {relatedDoctors.map((doctor) => (
                    <Link
                      key={doctor.id}
                      to={`/doctors/${doctor.slug}`}
                      className="group flex items-center gap-4 bg-white rounded-xl border border-ink-200/60 p-5 hover:border-brand-200 hover:shadow-soft transition-all duration-300"
                    >
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-ink-900 group-hover:text-brand-700 transition-colors">
                          {doctor.name}
                        </h3>
                        <p className="text-sm text-ink-500 mt-0.5">
                          {doctor.specialty} · {doctor.qualifications.join(', ')}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-ink-300 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-ink-200/60 p-6 text-center">
                  <p className="text-sm text-ink-400">
                    Doctor information for this speciality will be added soon.
                  </p>
                </div>
              )}
            </Reveal>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <ButtonLink to="/book-appointment" variant="primary" size="lg" icon="arrow">
              Book an Appointment
            </ButtonLink>
            <ButtonLink href={`tel:${clinicConfig.phones[0]}`} variant="ghost" size="lg" icon="phone">
              Call to Enquire
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
