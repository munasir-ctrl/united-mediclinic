import SEO from '@/components/SEO';
import Reveal from '@/components/Reveal';
import Facilities from '@/sections/Facilities';
import SectionHeading from '@/components/SectionHeading';
import { breadcrumbSchema } from '@/data/navigation';

export default function FacilitiesPage() {
  return (
    <>
      <SEO
        title="Facilities"
        description="Explore the facilities at United Mediclinic. A modern, welcoming environment designed for patient comfort and quality care."
        path="/facilities"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Facilities', path: '/facilities' },
        ])}
      />

      <section className="bg-hero-radial pt-16 lg:pt-24 pb-12">
        <div className="container-wide">
          <Reveal>
            <span className="eyebrow flex items-center gap-2">
              <span className="w-8 h-px bg-brand-500" />
              Our Facilities
            </span>
            <h1 className="text-display-xl font-display font-extrabold text-ink-900 mt-5 text-balance">
              A Modern, Welcoming Environment
            </h1>
            <p className="text-lg text-ink-500 mt-5 max-w-2xl leading-relaxed">
              Designed for patient comfort and quality care. Explore our clinic through the gallery
              below.
            </p>
          </Reveal>
        </div>
      </section>

      <Facilities />
    </>
  );
}
