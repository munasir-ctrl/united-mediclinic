import { useLocation } from 'react-router-dom';
import SEO from '@/components/SEO';
import Reveal from '@/components/Reveal';
import AppointmentForm from '@/components/AppointmentForm';
import { clinicConfig } from '@/data/clinicConfig';
import { Phone, Clock, Calendar } from 'lucide-react';
import { breadcrumbSchema } from '@/data/navigation';

export default function BookAppointmentPage() {
  const location = useLocation();
  const state = location.state as { doctor?: string; message?: string } | null;

  return (
    <>
      <SEO
        title="Book an Appointment"
        description="Book your appointment at United Mediclinic. Choose your doctor, department, and preferred time."
        path="/book-appointment"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Book Appointment', path: '/book-appointment' },
        ])}
      />

      <section className="bg-hero-radial pt-16 lg:pt-24 pb-12">
        <div className="container-wide">
          <Reveal>
            <span className="eyebrow flex items-center gap-2">
              <span className="w-8 h-px bg-brand-500" />
              Appointment
            </span>
            <h1 className="text-display-xl font-display font-extrabold text-ink-900 mt-5 text-balance">
              Book an Appointment
            </h1>
            <p className="text-lg text-ink-500 mt-5 max-w-2xl leading-relaxed">
              Fill out the form below and our team will contact you to confirm your appointment.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-section-cool">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl border border-ink-200/60 shadow-soft p-6 lg:p-10">
                <AppointmentForm preselectedDoctor={state?.doctor} />
              </div>
            </div>

            {/* Sidebar info */}
            <div className="flex flex-col gap-5">
              <div className="bg-white rounded-2xl border border-ink-200/60 p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brand-600" />
                  </div>
                  <h3 className="text-base font-semibold text-ink-900">Prefer to Call?</h3>
                </div>
                <p className="text-sm text-ink-500 mb-3">
                  You can also book an appointment by calling us directly.
                </p>
                {clinicConfig.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="block text-lg font-semibold text-brand-700 hover:text-brand-800 transition-colors mb-1"
                  >
                    {phone}
                  </a>
                ))}
              </div>

              <div className="bg-white rounded-2xl border border-ink-200/60 p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="text-base font-semibold text-ink-900">Clinic Hours</h3>
                </div>
                <div className="text-sm flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className="text-ink-500">Mon – Sat</span>
                    <span className="text-ink-800 font-medium">8 AM – 2 PM · 5 PM – 9 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-500">Sunday</span>
                    <span className="text-ink-800 font-medium">9 AM – 2 PM · 4 PM – 8 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-600 to-teal-600 rounded-2xl p-6 text-white">
                <Calendar className="w-8 h-8 mb-3" />
                <h3 className="text-base font-semibold">Need Home Consultation?</h3>
                <p className="text-sm text-white/80 mt-1.5">
                  We offer home visits for patients who are unable to come to the clinic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
