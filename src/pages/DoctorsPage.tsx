import SEO from '@/components/SEO';
import Reveal from '@/components/Reveal';
import DoctorsSection from '@/sections/DoctorsSection';
import SectionHeading from '@/components/SectionHeading';
import { breadcrumbSchema } from '@/data/navigation';

export default function DoctorsPage() {
  return (
    <>
      <SEO
        title="Our Doctors"
        description="Meet the experienced medical team at United Mediclinic. General practitioners, Unani physicians, orthopedic surgeons, and ENT specialists dedicated to your care."
        path="/doctors"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Our Doctors', path: '/doctors' },
        ])}
      />

      <section className="bg-hero-radial pt-16 lg:pt-24 pb-12">
        <div className="container-wide">
          <Reveal>
            <span className="eyebrow flex items-center gap-2">
              <span className="w-8 h-px bg-brand-500" />
              Expert Medical Team
            </span>
            <h1 className="text-display-xl font-display font-extrabold text-ink-900 mt-5 text-balance">
              Dedicated Specialists & Practitioners
            </h1>
            <p className="text-lg text-ink-500 mt-5 max-w-2xl leading-relaxed">
              Our experienced doctors bring comprehensive clinical expertise across general medicine,
              traditional care, orthopedics, and ENT to ensure personalized health solutions for you and
              your family.
            </p>
          </Reveal>
        </div>
      </section>

      <DoctorsSection />
    </>
  );
}