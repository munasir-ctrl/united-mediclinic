import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

const steps = [
  {
    num: '01',
    title: 'Book Your Consultation',
    desc: 'Schedule online or call us. Choose your preferred doctor, department, and time.',
  },
  {
    num: '02',
    title: 'Meet Your Doctor',
    desc: 'Consult with an experienced doctor who takes the time to understand your concerns.',
  },
  {
    num: '03',
    title: 'Receive Personalised Care',
    desc: 'Get a clear diagnosis and a treatment plan tailored to your specific needs.',
  },
  {
    num: '04',
    title: 'Follow-Up & Continued Support',
    desc: 'We track your progress and adjust your care as needed for long-term health.',
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function PatientJourney() {
  return (
    <section className="py-20 lg:py-30 bg-section-cool">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Patient Experience"
          title="Your Health, Our Priority"
          subtitle="A clear, supportive journey from your first appointment to ongoing care."
          align="center"
        />

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:grid grid-cols-4 gap-0 mt-16 relative">
          {/* Connecting line */}
          <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-brand-200 via-teal-200 to-brand-200" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center px-6"
            >
              {/* Number circle */}
              <div className="relative w-24 h-24 rounded-full bg-white border-2 border-brand-200 flex items-center justify-center shadow-soft z-10 transition-all duration-300 hover:border-brand-500 hover:shadow-soft-lg">
                <span className="text-2xl font-display font-extrabold bg-gradient-to-br from-brand-600 to-teal-600 bg-clip-text text-transparent">
                  {step.num}
                </span>
              </div>
              <h3 className="text-lg font-display font-bold text-ink-900 mt-6">{step.title}</h3>
              <p className="text-sm text-ink-500 mt-2 leading-relaxed max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden flex flex-col gap-8 mt-12 relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-brand-200 via-teal-200 to-brand-200" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-white border-2 border-brand-300 flex items-center justify-center shadow-soft">
                <span className="text-xs font-bold text-brand-600">{step.num}</span>
              </div>
              <div className="bg-white rounded-xl p-5 border border-ink-200/60 shadow-soft">
                <h3 className="text-base font-display font-bold text-ink-900">{step.title}</h3>
                <p className="text-sm text-ink-500 mt-1.5 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
