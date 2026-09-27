import { motion } from 'framer-motion';
import { Phone, ArrowRight, Calendar, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clinicConfig } from '@/data/clinicConfig';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-radial pt-12 lg:pt-20 pb-16 lg:pb-24">
      {/* Decorative floating shapes */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-brand-100/30 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-teal-100/20 rounded-full blur-3xl animate-float-slower pointer-events-none" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left — content */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="eyebrow flex items-center gap-2">
                <span className="w-8 h-px bg-brand-500" />
                Compassionate Care. Experienced Doctors.
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="text-display-2xl font-display font-extrabold text-ink-900 text-balance leading-[1.05]"
            >
              Healthcare That{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-brand-600 to-teal-600 bg-clip-text text-transparent">
                  Puts You First
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-teal-400/40"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path d="M2 8 Q 100 2 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
              className="text-lg lg:text-xl text-ink-500 leading-relaxed max-w-xl text-pretty"
            >
              Comprehensive medical care from experienced doctors, with personalised attention for
              you and your family.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Link
                to="/book-appointment"
                className="group inline-flex items-center gap-2 bg-brand-600 text-white font-semibold px-7 py-3.5 rounded-xl text-base hover:bg-brand-700 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Book an Appointment
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/doctors"
                className="group inline-flex items-center gap-2 bg-white text-ink-800 font-semibold px-7 py-3.5 rounded-xl text-base border border-ink-200 hover:border-brand-300 hover:bg-brand-50/30 transition-all duration-300"
              >
                <UserRound className="w-5 h-5 text-brand-600" />
                Explore Our Doctors
              </Link>
            </motion.div>

            {/* Quick contact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 border-t border-ink-200/60 mt-2"
            >
              <span className="text-xs font-medium text-ink-400 uppercase tracking-wider">
                Call us
              </span>
              {clinicConfig.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="flex items-center gap-1.5 text-sm font-semibold text-ink-700 hover:text-brand-700 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-brand-500 group-hover:animate-pulse" />
                  {phone}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — visual composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-soft-xl border border-white/40 aspect-[4/5] lg:aspect-[5/6] bg-white">
                <img
                  src="/clinic-1.jpeg"
                  alt="Doctor consultation at United Mediclinic"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating stat card — bottom left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-2 sm:-left-6 glass rounded-2xl p-4 shadow-soft-lg border border-white/60 w-44 z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-ink-500 font-medium">Open Every Day</p>
                    <p className="text-sm font-bold text-ink-900">Patient-first care</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating spec card — top right */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-3 -right-2 sm:-right-5 glass rounded-2xl px-4 py-3 shadow-soft-lg border border-white/60 z-10"
              >
                <p className="text-2xl font-display font-extrabold text-brand-700">4</p>
                <p className="text-xs text-ink-500 font-medium">Specialities</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}