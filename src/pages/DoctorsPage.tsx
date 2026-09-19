import SEO from '@/components/SEO';
import Reveal from '@/components/Reveal';
import { doctors } from '@/data/doctors';
import DoctorCard from '@/components/DoctorCard';
import SectionHeading from '@/components/SectionHeading';
import { breadcrumbSchema } from '@/data/navigation';

export default function DoctorsPage() {
  return (
    <>
      <SEO
        title="Our Doctors"
        description="Meet the experienced doctors at United Mediclinic. General practitioners, Unani physician, orthopedic surgeon, and ENT specialist."
        path="/doctors"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Doctors', path: '/doctors' },
        ])}
      />

      <section className="bg-hero-radial pt-16 lg:pt-24 pb-12">
        <div className="container-wide">
          <Reveal>
            <span className="eyebrow flex items-center gap-2">
              <span className="w-8 h-px bg-brand-500" />
              Our Medical Team
            </span>
            <h1 className="text-display-xl font-display font-extrabold text-ink-900 mt-5 text-balance">
              Meet Our Doctors
            </h1>
            <p className="text-lg text-ink-500 mt-5 max-w-2xl leading-relaxed">
              Experienced professionals dedicated to your health. Our team brings together expertise
              across general medicine, Unani medicine, orthopaedics, and ENT.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-section-cool">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {doctors.map((doctor, i) => (
              <Reveal key={doctor.id} delay={i * 100}>
                <DoctorCard doctor={doctor} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
