import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/content';
import SectionHeading from '@/components/SectionHeading';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Only show if we have real testimonials. The placeholder is clearly marked.
  const realTestimonials = testimonials.filter((t) => !t.id.startsWith('placeholder'));
  const hasReal = realTestimonials.length > 0;
  const displayList = hasReal ? realTestimonials : testimonials;

  if (!hasReal) {
    // Show CMS-ready placeholder state
    return (
      <section className="py-20 lg:py-30 bg-section-cool">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Patient Stories"
            title="What Our Patients Say"
            subtitle="Patient testimonials will appear here once collected and approved."
            align="center"
          />
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border border-ink-200/60 p-8 lg:p-10 text-center">
              <Quote className="w-10 h-10 text-brand-200 mx-auto mb-4" />
              <p className="text-ink-400 italic">
                Patient testimonials will be displayed here once they have been collected and
                reviewed for authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const current = displayList[index];

  return (
    <section
      className="py-20 lg:py-30 bg-section-cool"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="Patient Stories"
          title="What Our Patients Say"
          align="center"
        />

        <div className="max-w-3xl mx-auto mt-12 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl border border-ink-200/60 p-8 lg:p-12 shadow-soft"
            >
              <Quote className="w-10 h-10 text-brand-300 mb-6" />
              <blockquote className="text-lg lg:text-xl text-ink-700 leading-relaxed font-medium">
                "{current.quote}"
              </blockquote>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-ink-900">{current.name}</p>
                  {(current.service || current.doctor) && (
                    <p className="text-xs text-ink-400 mt-0.5">
                      {current.service}{current.doctor ? ` · ${current.doctor}` : ''}
                    </p>
                  )}
                </div>
                {current.rating && (
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={i < current.rating! ? 'text-teal-500' : 'text-ink-200'}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {displayList.length > 1 && (
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={() => setIndex((i) => (i - 1 + displayList.length) % displayList.length)}
                className="w-10 h-10 rounded-full bg-white border border-ink-200 flex items-center justify-center hover:bg-brand-50 hover:border-brand-300 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-ink-600" />
              </button>
              <div className="flex gap-1.5">
                {displayList.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? 'w-6 bg-brand-600' : 'w-2 bg-ink-200'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setIndex((i) => (i + 1) % displayList.length)}
                className="w-10 h-10 rounded-full bg-white border border-ink-200 flex items-center justify-center hover:bg-brand-50 hover:border-brand-300 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-ink-600" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
