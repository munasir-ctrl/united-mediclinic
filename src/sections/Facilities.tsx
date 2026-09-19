import { motion } from 'framer-motion';
import { Building2, ImageIcon, Users, Stethoscope, X } from 'lucide-react';
import { useState } from 'react';
import { galleryImages } from '@/data/content';
import { facilities } from '@/data/content';
import SectionHeading from '@/components/SectionHeading';
import ImagePlaceholder from '@/components/ImagePlaceholder';

const categories = ['All', 'Clinic', 'Doctors', 'Patient Care', 'Facilities'] as const;
type Category = (typeof categories)[number];

const categoryIcons: Record<string, React.ReactNode> = {
  Clinic: <Building2 className="w-5 h-5" />,
  Doctors: <Users className="w-5 h-5" />,
  'Patient Care': <Stethoscope className="w-5 h-5" />,
  Facilities: <ImageIcon className="w-5 h-5" />,
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function Facilities() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="facilities" className="py-20 lg:py-30 bg-white">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Our Facilities"
          title="Explore Our Clinic"
          subtitle="A modern, welcoming environment designed for patient comfort and quality care."
        />

        {/* Facilities CMS-ready placeholder */}
        {facilities.length === 1 && facilities[0].id === 'placeholder' && (
          <div className="mt-8 bg-brand-50/50 border border-brand-100 rounded-2xl p-6 text-center">
            <p className="text-sm text-ink-500">
              Detailed facility information will be added here once available.
            </p>
          </div>
        )}

        {/* Gallery with category filter */}
        <div className="mt-12">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-600 text-white shadow-soft'
                    : 'bg-ink-50 text-ink-600 hover:bg-ink-100'
                }`}
              >
                {cat !== 'All' && categoryIcons[cat]}
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
            {filtered.map((img, i) => (
              <motion.button
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease, delay: i * 0.05 }}
                onClick={() => setLightbox(img.id)}
                className={`group relative overflow-hidden rounded-2xl border border-ink-200/60 ${
                  i === 0 || i === 3 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
                }`}
                aria-label={`View ${img.alt}`}
              >
                <ImagePlaceholder alt={img.alt} aspect="aspect-square" className="w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className="text-xs text-white/70 font-medium">{img.category}</span>
                    <p className="text-sm text-white font-semibold">{img.alt}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-ink-950/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close gallery"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <ImagePlaceholder
              alt={galleryImages.find((g) => g.id === lightbox)?.alt ?? 'Gallery image'}
              aspect="aspect-[4/3]"
              className="rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
