import { motion } from 'framer-motion';
import { Clock, IndianRupee } from 'lucide-react';
import { clinicConfig } from '@/data/clinicConfig';
import SectionHeading from '@/components/SectionHeading';

const ease = [0.22, 1, 0.36, 1] as const;

export default function HoursAndFees() {
  return (
    <section id="hours" className="py-20 lg:py-30 bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink-50 to-brand-50/40 border border-ink-200/60 p-8 lg:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-600 flex items-center justify-center shadow-soft">
                <Clock className="w-6 h-6 text-white" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-ink-900">Opening Hours</h3>
                <p className="text-sm text-ink-500 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />
                  {clinicConfig.hours.note}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {/* Weekdays */}
              <div className="bg-white rounded-xl p-5 border border-ink-200/60">
                <h4 className="text-sm font-semibold text-ink-900 mb-3">Monday – Saturday</h4>
                <div className="flex items-center justify-between py-1.5 border-b border-ink-100 last:border-0">
                  <span className="text-sm text-ink-500">Morning</span>
                  <span className="text-sm font-semibold text-ink-800">{clinicConfig.hours.weekdays[0].time}</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-sm text-ink-500">Evening</span>
                  <span className="text-sm font-semibold text-ink-800">{clinicConfig.hours.weekdays[1].time}</span>
                </div>
              </div>

              {/* Sunday */}
              <div className="bg-white rounded-xl p-5 border border-ink-200/60">
                <h4 className="text-sm font-semibold text-ink-900 mb-3">Sunday</h4>
                <div className="flex items-center justify-between py-1.5 border-b border-ink-100 last:border-0">
                  <span className="text-sm text-ink-500">Morning</span>
                  <span className="text-sm font-semibold text-ink-800">{clinicConfig.hours.sunday[0].time}</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-sm text-ink-500">Evening</span>
                  <span className="text-sm font-semibold text-ink-800">{clinicConfig.hours.sunday[1].time}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Fees */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-50 to-brand-50/30 border border-ink-200/60 p-8 lg:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center shadow-soft">
                <IndianRupee className="w-6 h-6 text-white" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-ink-900">Consultation Fees</h3>
                <p className="text-sm text-ink-500 mt-0.5">Transparent healthcare pricing</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {clinicConfig.fees.map((fee) => (
                <div
                  key={fee.label}
                  className="bg-white rounded-xl p-5 border border-ink-200/60 flex items-center justify-between hover:border-teal-200 transition-colors"
                >
                  <div>
                    <h4 className="text-sm font-semibold text-ink-900">{fee.label}</h4>
                    <p className="text-xs text-ink-400 mt-0.5">{fee.note}</p>
                  </div>
                  <span className="text-2xl font-display font-extrabold text-teal-700">{fee.price}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-ink-400 mt-5 leading-relaxed">{clinicConfig.feesNote}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
