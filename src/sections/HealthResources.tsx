import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { blogPosts } from '@/data/content';
import SectionHeading from '@/components/SectionHeading';
import ImagePlaceholder from '@/components/ImagePlaceholder';

const ease = [0.22, 1, 0.36, 1] as const;

export default function HealthResources() {
  return (
    <section className="py-20 lg:py-30 bg-section-cool">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <SectionHeading
            eyebrow="Health Resources"
            title="Latest Health Articles"
            subtitle="Helpful information and guidance from our medical team."
          />
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800 transition-colors shrink-0"
          >
            View all articles
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {blogPosts.slice(0, 3).map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group flex flex-col bg-white border border-ink-200/80 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-soft-lg hover:border-brand-200 hover:-translate-y-1"
              >
                <ImagePlaceholder
                  alt={post.title}
                  aspect="aspect-[16/10]"
                  icon={<BookOpen className="w-10 h-10 text-brand-200" />}
                  label={post.category}
                />
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-3 text-xs text-ink-400 mb-3">
                    <span className="font-semibold text-brand-600">{post.category}</span>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="text-base font-display font-bold text-ink-900 leading-tight group-hover:text-brand-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-ink-500 mt-2 line-clamp-2">{post.excerpt}</p>
                  {post.isDemo && (
                    <span className="text-[10px] font-medium text-ink-400 bg-ink-100 px-2 py-0.5 rounded mt-3 self-start">
                      Demo content
                    </span>
                  )}
                  <span className="mt-auto pt-4 flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:text-brand-800 transition-colors">
                    Read article
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
