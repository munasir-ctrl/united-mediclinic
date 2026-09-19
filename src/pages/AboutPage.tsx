import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import ButtonLink from '@/components/ButtonLink';
import { HeartPulse, UserRound, Eye, Activity, ShieldCheck, Users, Home, CalendarCheck } from 'lucide-react';
import { breadcrumbSchema } from '@/data/navigation';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const values = [
  { icon: UserRound, title: 'Personalised Attention', desc: 'Every patient receives care tailored to their individual needs and circumstances.' },
  { icon: HeartPulse, title: 'Multidisciplinary Care', desc: 'General medicine, Unani medicine, orthopaedics and ENT — all under one roof.' },
  { icon: Eye, title: 'Preventive Healthcare', desc: 'We focus on prevention and early detection to support long-term wellness.' },
  { icon: Activity, title: 'Chronic Disease Management', desc: 'Ongoing care and monitoring for hypertension, diabetes and other lasting conditions.' },
  { icon: ShieldCheck, title: 'Patient-Centred Approach', desc: 'We listen, explain, and involve you in decisions about your health.' },
  { icon: Users, title: 'Experienced Doctors', desc: 'Qualified professionals with years of clinical experience across multiple specialities.' },
  { icon: Home, title: 'Home Consultation', desc: 'Healthcare that comes to you when you cannot come to us.' },
  { icon: CalendarCheck, title: 'Convenient Hours', desc: 'Open every day with morning and evening consultation times.' },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about United Mediclinic — our mission, our values, and our commitment to patient-centred healthcare."
        path="/about"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />

      {/* Hero */}
      <section className="bg-hero-radial pt-16 lg:pt-24 pb-16 lg:pb-20">
        <div className="container-wide">
          <Reveal>
            <span className="eyebrow flex items-center gap-2">
              <span className="w-8 h-px bg-brand-500" />
              About United Mediclinic
            </span>
            <h1 className="text-display-xl font-display font-extrabold text-ink-900 mt-5 text-balance max-w-3xl">
              Healthcare Built Around You
            </h1>
            <p className="text-lg text-ink-500 mt-5 max-w-2xl leading-relaxed">
              At United Mediclinic, we believe healthcare should be accessible, personal, and
              grounded in genuine expertise. Our experienced doctors provide comprehensive medical
              care across multiple specialities, with a focus on preventive health and long-term
              wellbeing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Image + intro */}
      <section className="py-16 lg:py-24 bg-section-cool">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal>
              <div className="rounded-3xl overflow-hidden shadow-soft-lg border border-ink-200/60">
                <ImagePlaceholder
                  alt="United Mediclinic — modern clinic environment"
                  aspect="aspect-[5/4]"
                  label="Our Clinic"
                />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="flex flex-col gap-5">
                <h2 className="text-display-md font-display font-bold text-ink-900">Our Mission</h2>
                <p className="text-ink-600 leading-relaxed">
                  To provide comprehensive, compassionate healthcare that is accessible to
                  individuals and families. We combine modern medical practice with traditional Unani
                  medicine, ensuring our patients have access to a wide range of treatment options.
                </p>
                <h2 className="text-display-md font-display font-bold text-ink-900 mt-4">Our Approach</h2>
                <p className="text-ink-600 leading-relaxed">
                  We take the time to understand each patient's concerns, explain diagnoses and
                  treatment options clearly, and involve patients in decisions about their care.
                  Whether it's a routine consultation or ongoing management of a chronic condition,
                  our focus is always on the person behind the patient.
                </p>
                <div className="pt-4">
                  <ButtonLink to="/doctors" variant="primary" icon="arrow">
                    Meet Our Doctors
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-30 bg-white">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For"
            subtitle="The principles that guide everything we do."
            align="center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className="flex flex-col gap-3 p-6 rounded-2xl border border-ink-200/60 hover:border-brand-200 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-50 to-teal-50 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-brand-600" strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-semibold text-ink-900">{value.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-section-cool">
        <div className="container-wide">
          <div className="flex flex-col items-center text-center gap-5">
            <h2 className="text-display-lg font-display font-extrabold text-ink-900 text-balance">
              Ready to Experience the Difference?
            </h2>
            <p className="text-lg text-ink-500 max-w-xl">
              Book an appointment with our experienced medical team today.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ButtonLink to="/book-appointment" variant="primary" size="lg" icon="arrow">
                Book an Appointment
              </ButtonLink>
              <ButtonLink to="/services" variant="ghost" size="lg">
                Explore Our Services
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
