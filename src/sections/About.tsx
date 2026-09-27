import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, HeartPulse, UserRound, Eye, Activity } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const values = [
  { icon: UserRound, title: 'Personalised Attention', desc: 'Care tailored to each patient.' },
  { icon: HeartPulse, title: 'Multidisciplinary Care', desc: 'General medicine, Unani, orthopaedics & ENT.' },
  { icon: Eye, title: 'Preventive Healthcare', desc: 'Focus on long-term wellness.' },
  { icon: Activity, title: 'Chronic Disease Management', desc: 'Ongoing support for lasting conditions.' },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-30 bg-section-cool">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image side */}
          <Reveal className="lg:col-span-5 relative">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-soft-lg border border-ink-200/60 aspect-[4/5] bg-white">
                <img
                  src="/clinic-8.jpeg"
                  alt="United Mediclinic — modern clinic environment"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Accent shape */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-brand-400 to-teal-400 rounded-3xl opacity-20 blur-2xl -z-10" />
            </div>
          </Reveal>

          {/* Content side */}
          <div className="lg:col-span-7 flex flex-col gap-7">
            <SectionHeading
              eyebrow="About United Mediclinic"
              title="Healthcare Built Around You"
              subtitle="At United Mediclinic, we believe healthcare should be accessible, personal, and grounded in genuine expertise. Our experienced doctors provide comprehensive medical care across multiple specialities, with a focus on preventive health and long-term wellbeing."
            />

            {/* Values grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-ink-200/60 hover:border-brand-200 hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-50 to-teal-50 flex items-center justify-center shrink-0">
                    <value.icon className="w-5 h-5 text-brand-600" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-ink-900">{value.title}</h3>
                    <p className="text-xs text-ink-500 mt-0.5">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800 transition-colors mt-2"
            >
              Learn more about us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}