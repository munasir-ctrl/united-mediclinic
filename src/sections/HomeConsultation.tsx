import { motion } from 'framer-motion';
import { Home, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clinicConfig } from '@/data/clinicConfig';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

const ease = [0.22, 1, 0.36, 1] as const;

export default function HomeConsultation() {
  return (
    <section className="py-20 lg:py-30 bg-white">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-teal-600 p-8 lg:p-16">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-300/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 flex items-center gap-2">
                <span className="w-8 h-px bg-white/40" />
                Home Consultation
              </span>
              <h2 className="text-display-lg font-display font-extrabold text-white text-balance">
                Healthcare That Comes To You
              </h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                For patients who are unable to visit the clinic, we offer home consultation and home
                care services. Our medical team brings professional care to your doorstep.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2.5 rounded-xl text-sm font-medium text-white border border-white/20">
                  <Home className="w-4 h-4" />
                  Home Consultation Available
                </span>
                {clinicConfig.homeConsultation.homeCare && (
                  <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2.5 rounded-xl text-sm font-medium text-white border border-white/20">
                    <Home className="w-4 h-4" />
                    Home Care Available
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/book-appointment"
                  state={{ message: 'I would like to request a home consultation.' }}
                  className="group inline-flex items-center gap-2 bg-white text-brand-700 font-semibold px-7 py-3.5 rounded-xl text-base hover:bg-brand-50 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  Request Home Consultation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={`tel:${clinicConfig.phones[0]}`}
                  className="inline-flex items-center gap-2 text-white font-semibold px-5 py-3.5 rounded-xl text-base border border-white/30 hover:bg-white/10 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call to Enquire
                </a>
              </div>
            </div>

            {/* Visual side */}
            <Reveal delay={200} className="hidden lg:block">
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-10 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease }}
                  >
                    <Home className="w-32 h-32 text-white/30" strokeWidth={1} />
                  </motion.div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
