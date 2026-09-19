import { motion } from 'framer-motion';
import { ShieldCheck, Users, Stethoscope, Home, CalendarDays } from 'lucide-react';

const items = [
  { icon: Users, label: 'Experienced Medical Team' },
  { icon: ShieldCheck, label: 'Patient-Centred Care' },
  { icon: Stethoscope, label: 'Multiple Specialities' },
  { icon: Home, label: 'Home Consultation Available' },
  { icon: CalendarDays, label: 'Open Every Day' },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function TrustStrip() {
  return (
    <section className="border-y border-ink-200/60 bg-white">
      <div className="container-wide py-6 lg:py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-brand-600" strokeWidth={1.8} />
              </div>
              <span className="text-sm font-medium text-ink-700 leading-tight">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
