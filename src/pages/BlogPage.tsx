import SEO from '@/components/SEO';
import Reveal from '@/components/Reveal';
import { blogPosts } from '@/data/content';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { breadcrumbSchema } from '@/data/navigation';

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Health Resources"
        description="Health articles and resources from the medical team at United Mediclinic."
        path="/blog"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Health Resources', path: '/blog' },
        ])}
      />

      <section className="bg-hero-radial pt-16 lg:pt-24 pb-12">
        <div className="container-wide">
          <Reveal>
            <span className="eyebrow flex items-center gap-2">
              <span className="w-8 h-px bg-brand-500" />
              Health Resources
            </span>
            <h1 className="text-display-xl font-display font-extrabold text-ink-900 mt-5 text-balance">
              Health Articles &amp; Resources
            </h1>
            <p className="text-lg text-ink-500 mt-5 max-w-2xl leading-relaxed">
              Helpful information and guidance from our medical team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-section-cool">
        <div className="container-wide">
          {blogPosts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {blogPosts.map((post, i) => (
                <Reveal key={post.id} delay={i * 100}>
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
                      <h2 className="text-base font-display font-bold text-ink-900 leading-tight group-hover:text-brand-700 transition-colors">
                        {post.title}
                      </h2>
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
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <BookOpen className="w-12 h-12 text-ink-300 mx-auto mb-4" />
              <p className="text-ink-500">Health articles will be published here soon.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
