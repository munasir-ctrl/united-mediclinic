import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { doctors } from '@/data/doctors';
import DoctorCard from '@/components/DoctorCard';
import SectionHeading from '@/components/SectionHeading';

const ease = [0.22, 1, 0.36, 1] as const;

export default function DoctorsSection() {
  return (
    <section id="doctors" className="py-20 lg:py-30 bg-section-cool">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <SectionHeading
            eyebrow="Our Doctors"
            title="Meet Our Doctors"
            subtitle="Experienced professionals dedicated to your health."
          />
          <Link
            to="/doctors"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800 transition-colors shrink-0"
          >
            View all doctors
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {doctors.map((doctor, i) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
            >
              <DoctorCard doctor={doctor} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
