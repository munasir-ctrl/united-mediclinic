import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Users,
  HeartPulse,
  CalendarCheck,
  Home,
  HandHeart,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const reasons = [
  {
    icon: Users,
    title: 'Experienced Doctors',
    desc: 'Qualified professionals across multiple specialities with years of clinical experience.',
  },
  {
    icon: ShieldCheck,
    title: 'Patient-Centred Approach',
    desc: 'Care that listens. We focus on understanding your concerns and explaining your options.',
  },
  {
    icon: HeartPulse,
    title: 'Multidisciplinary Care',
    desc: 'General medicine, Unani, orthopaedics and ENT — all under one roof.',
  },
  {
    icon: CalendarCheck,
    title: 'Convenient Consultation',
    desc: 'Flexible morning and evening hours, open every day for your convenience.',
  },
  {
    icon: Home,
    title: 'Home Consultation Available',
    desc: 'Healthcare that comes to you. Home visits for patients who need them.',
  },
  {
    icon: HandHeart,
    title: 'Home Care Available',
    desc: 'Continued care in the comfort of your home, when in-clinic visits are difficult.',
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-30 bg-ink-950 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Patients Choose United Mediclinic"
          subtitle="We combine experienced medical professionals with a genuine commitment to patient wellbeing."
          align="center"
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mt-14">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="group relative p-7 rounded-2xl bg-ink-900/50 border border-ink-800 hover:border-teal-700/50 hover:bg-ink-900 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-teal-500 flex items-center justify-center shadow-soft transition-transform duration-300 group-hover:scale-110">
                <reason.icon className="w-6 h-6 text-white" strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-display font-bold text-white mt-5">{reason.title}</h3>
              <p className="text-sm text-ink-400 mt-2 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
