import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { clinicConfig } from '@/data/clinicConfig';
import Reveal from '@/components/Reveal';

const ease = [0.22, 1, 0.36, 1] as const;

export default function AppointmentCTA() {
  return (
    <section className="py-20 lg:py-30 bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-teal-600 p-10 lg:p-16"
        >
          {/* Decorative pattern */}
          <div className="absolute inset-0 bg-grid-faint bg-grid-32 opacity-[0.07] pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 flex items-center gap-2 justify-center lg:justify-start">
                <span className="w-8 h-px bg-white/40" />
                Ready When You Are
              </span>
              <h2 className="text-display-lg font-display font-extrabold text-white text-balance">
                Book Your Appointment Today
              </h2>
              <p className="text-lg text-white/80 max-w-xl">
                Take the first step towards better health. Our team is ready to provide the care you
                need.
              </p>
            </div>

            <Reveal delay={200} className="flex flex-col gap-3 shrink-0">
              <Link
                to="/book-appointment"
                className="group inline-flex items-center gap-2 bg-white text-brand-700 font-semibold px-8 py-4 rounded-xl text-lg hover:bg-brand-50 shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Book an Appointment
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${clinicConfig.phones[0]}`}
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-lg border border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                Call {clinicConfig.phones[0]}
              </a>
            </Reveal>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
