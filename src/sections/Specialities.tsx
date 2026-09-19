import { motion } from 'framer-motion';
import { services } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import SectionHeading from '@/components/SectionHeading';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Specialities() {
  return (
    <section id="specialities" className="py-20 lg:py-30 bg-white">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <SectionHeading
            eyebrow="Our Specialities"
            title="Comprehensive Medical Care"
            subtitle="From general medicine to specialised orthopaedic and ENT care, our experienced team provides expert diagnosis and treatment across multiple disciplines."
          />
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800 transition-colors shrink-0"
          >
            View all services
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
