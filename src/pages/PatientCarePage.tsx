import SEO from '@/components/SEO';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import PatientJourney from '@/sections/PatientJourney';
import HomeConsultation from '@/sections/HomeConsultation';
import HoursAndFees from '@/sections/HoursAndFees';
import ButtonLink from '@/components/ButtonLink';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, HandHeart, FileText } from 'lucide-react';
import { breadcrumbSchema } from '@/data/navigation';

const carePrinciples = [
  {
    icon: ShieldCheck,
    title: 'Safe, Evidence-Based Care',
    desc: 'Our doctors follow established medical protocols and prioritise patient safety in every consultation.',
  },
  {
    icon: HeartPulse,
    title: 'Compassionate Communication',
    desc: 'We take the time to listen, explain conditions clearly, and answer your questions.',
  },
  {
    icon: HandHeart,
    title: 'Continued Support',
    desc: 'From your first visit through follow-up care, we support you at every step of your health journey.',
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function PatientCarePage() {
  return (
    <>
      <SEO
        title="Patient Care"
        description="At United Mediclinic, patient care is at the heart of everything we do. Learn about our patient-first approach."
        path="/patient-care"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Patient Care', path: '/patient-care' },
        ])}
      />

      <section className="bg-hero-radial pt-16 lg:pt-24 pb-16">
        <div className="container-wide">
          <Reveal>
            <span className="eyebrow flex items-center gap-2">
              <span className="w-8 h-px bg-brand-500" />
              Patient Care
            </span>
            <h1 className="text-display-xl font-display font-extrabold text-ink-900 mt-5 text-balance">
              Your Health, Our Priority
            </h1>
            <p className="text-lg text-ink-500 mt-5 max-w-2xl leading-relaxed">
              At United Mediclinic, patient care is at the heart of everything we do. From your first
              appointment to ongoing support, we are committed to providing compassionate,
              professional, and personalised healthcare.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Care principles */}
      <section className="py-16 lg:py-24 bg-section-cool">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our Care Philosophy"
            title="How We Care For You"
            align="center"
          />
          <div className="grid sm:grid-cols-3 gap-5 mt-14">
            {carePrinciples.map((principle, i) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                className="flex flex-col gap-3 p-6 bg-white rounded-2xl border border-ink-200/60 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-teal-500 flex items-center justify-center shadow-soft">
                  <principle.icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-semibold text-ink-900">{principle.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PatientJourney />
      <HomeConsultation />
      <HoursAndFees />

      <section className="py-16 lg:py-24 bg-white">
        <div className="container-wide">
          <div className="flex flex-col items-center text-center gap-5">
            <h2 className="text-display-lg font-display font-extrabold text-ink-900 text-balance">
              Have Questions About Your Care?
            </h2>
            <p className="text-lg text-ink-500 max-w-xl">
              Our team is here to help. Book an appointment or contact us with any questions.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ButtonLink to="/book-appointment" variant="primary" size="lg" icon="arrow">
                Book an Appointment
              </ButtonLink>
              <ButtonLink to="/contact" variant="ghost" size="lg">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
