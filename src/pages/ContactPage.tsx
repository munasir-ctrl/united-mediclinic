import SEO from '@/components/SEO';
import Reveal from '@/components/Reveal';
import ContactSection from '@/sections/ContactSection';
import AppointmentForm from '@/components/AppointmentForm';
import { breadcrumbSchema } from '@/data/navigation';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact United Mediclinic for appointments, enquiries, or any questions about our services."
        path="/contact"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />

      <section className="bg-hero-radial pt-16 lg:pt-24 pb-12">
        <div className="container-wide">
          <Reveal>
            <span className="eyebrow flex items-center gap-2">
              <span className="w-8 h-px bg-brand-500" />
              Get in Touch
            </span>
            <h1 className="text-display-xl font-display font-extrabold text-ink-900 mt-5 text-balance">
              Let's Take Care of Your Health
            </h1>
            <p className="text-lg text-ink-500 mt-5 max-w-2xl leading-relaxed">
              Reach out to us for appointments, enquiries, or any questions about our services.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactSection />

      {/* Quick appointment form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-wide max-w-2xl">
          <Reveal>
            <h2 className="text-display-md font-display font-bold text-ink-900 mb-2">
              Request an Appointment
            </h2>
            <p className="text-ink-500 mb-8">
              Fill out the form and we'll get back to you shortly.
            </p>
            <div className="bg-section-cool rounded-3xl border border-ink-200/60 p-6 lg:p-8">
              <AppointmentForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
