import { motion } from 'framer-motion';
import { facilities } from '@/data/content';
import SectionHeading from '@/components/SectionHeading';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Facilities() {
  return (
    <section className="py-20 lg:py-30 bg-white">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Our Facilities"
          title="Designed for Your Comfort & Care"
          subtitle="Explore our modern clinic environment equipped with advanced medical technology and comfortable spaces."
          align="center"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {facilities.map((facility, i) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden border border-ink-200/60 bg-white shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-ink-100 relative">
                {facility.imageUrl ? (
                  <img
                    src={facility.imageUrl}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-ink-400 text-sm">
                    Image coming soon
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-ink-900">{facility.name}</h3>
                  <p className="text-sm text-ink-500 mt-2 leading-relaxed">{facility.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}