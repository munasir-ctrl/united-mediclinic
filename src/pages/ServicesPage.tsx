import SEO from '@/components/SEO';
import Reveal from '@/components/Reveal';
import { services } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import { breadcrumbSchema } from '@/data/navigation';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Our Services"
        description="United Mediclinic offers general medicine, Unani medicine, orthopaedics, and ENT services. Comprehensive healthcare for you and your family."
        path="/services"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ])}
      />

      <section className="bg-hero-radial pt-16 lg:pt-24 pb-12">
        <div className="container-wide">
          <Reveal>
            <span className="eyebrow flex items-center gap-2">
              <span className="w-8 h-px bg-brand-500" />
              Our Specialities
            </span>
            <h1 className="text-display-xl font-display font-extrabold text-ink-900 mt-5 text-balance">
              Comprehensive Medical Care
            </h1>
            <p className="text-lg text-ink-500 mt-5 max-w-2xl leading-relaxed">
              From general medicine to specialised orthopaedic and ENT care, our experienced team
              provides expert diagnosis and treatment across multiple disciplines.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-section-cool">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 100}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
