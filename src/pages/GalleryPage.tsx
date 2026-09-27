import SEO from '@/components/SEO';
import Reveal from '@/components/Reveal';
import { galleryImages } from '@/data/content';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { breadcrumbSchema } from '@/data/navigation';

const categories = ['All', 'Clinic', 'Doctors', 'Patient Care', 'Facilities'] as const;
type Category = (typeof categories)[number];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const activeImage = galleryImages.find((g) => g.id === lightbox);

  return (
    <>
      <SEO
        title="Gallery"
        description="View photos of United Mediclinic — our clinic, doctors, patient care, and facilities."
        path="/gallery"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Gallery', path: '/gallery' },
        ])}
      />

      <section className="bg-hero-radial pt-16 lg:pt-24 pb-12">
        <div className="container-wide">
          <Reveal>
            <span className="eyebrow flex items-center gap-2">
              <span className="w-8 h-px bg-brand-500" />
              Gallery
            </span>
            <h1 className="text-display-xl font-display font-extrabold text-ink-900 mt-5 text-balance">
              Inside United Mediclinic
            </h1>
            <p className="text-lg text-ink-500 mt-5 max-w-2xl leading-relaxed">
              A look at our clinic, our team, and the care we provide.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-section-cool">
        <div className="container-wide">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-600 text-white shadow-soft'
                    : 'bg-ink-100 text-ink-600 hover:bg-ink-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div className="columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
            {filtered.map((img, i) => {
              const aspectClass = i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]';
              return (
                <motion.button
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => setLightbox(img.id)}
                  className="group relative w-full overflow-hidden rounded-2xl border border-ink-200/60 break-inside-avoid bg-white"
                  aria-label={`View ${img.alt}`}
                >
                  {img.imageUrl ? (
                    <div className={`w-full ${aspectClass} overflow-hidden`}>
                      <img
                        src={img.imageUrl}
                        alt={img.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <ImagePlaceholder
                      alt={img.alt}
                      aspect={aspectClass}
                      className="w-full"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <span className="text-xs text-white/70 font-medium">{img.category}</span>
                      <p className="text-sm text-white font-semibold">{img.alt}</p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink-950/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {activeImage?.imageUrl ? (
                <div className="w-full max-h-[80vh] overflow-hidden flex items-center justify-center bg-ink-900">
                  <img
                    src={activeImage.imageUrl}
                    alt={activeImage.alt}
                    className="max-w-full max-h-[80vh] object-contain"
                  />
                </div>
              ) : (
                <ImagePlaceholder
                  alt={activeImage?.alt ?? 'Gallery image'}
                  aspect="aspect-[4/3]"
                  className="rounded-2xl"
                />
              )}
              <div className="p-4 bg-white border-t border-ink-100">
                <span className="text-xs text-brand-600 font-semibold uppercase tracking-wider">{activeImage?.category}</span>
                <p className="text-sm text-ink-900 font-medium mt-0.5">{activeImage?.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}