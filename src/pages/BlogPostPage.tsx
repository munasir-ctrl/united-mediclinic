import { useParams, Navigate, Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Reveal from '@/components/Reveal';
import { blogPosts } from '@/data/content';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import ButtonLink from '@/components/ButtonLink';
import { BookOpen, ArrowLeft } from 'lucide-react';
import { breadcrumbSchema } from '@/data/navigation';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/404" replace />;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: post.author },
    datePublished: post.date,
    articleSection: post.category,
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={[
          articleSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Health Resources', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      {/* Breadcrumb */}
      <div className="bg-ink-50 border-b border-ink-200/60">
        <div className="container-wide py-3">
          <nav className="flex items-center gap-2 text-xs text-ink-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-700 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-brand-700 transition-colors">Health Resources</Link>
            <span>/</span>
            <span className="text-ink-700 font-medium truncate">{post.title}</span>
          </nav>
        </div>
      </div>

      <article className="bg-hero-radial pt-12 lg:pt-16 pb-16 lg:pb-24">
        <div className="container-wide max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-3 text-xs text-ink-400 mb-4">
              <span className="font-semibold text-brand-600">{post.category}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
              <span>·</span>
              <span>{new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <h1 className="text-display-lg font-display font-extrabold text-ink-900 text-balance">
              {post.title}
            </h1>
            {post.isDemo && (
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm text-amber-800">
                This is demo content. Actual health articles will be created and reviewed by
                qualified medical professionals before publication.
              </div>
            )}
          </Reveal>

          <Reveal delay={150} className="mt-8">
            <div className="rounded-2xl overflow-hidden border border-ink-200/60 shadow-soft">
              <ImagePlaceholder
                alt={post.title}
                aspect="aspect-[16/9]"
                icon={<BookOpen className="w-12 h-12 text-brand-200" />}
              />
            </div>
          </Reveal>

          <Reveal delay={250} className="mt-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-ink-600 leading-relaxed">{post.excerpt}</p>
              <p className="text-ink-600 leading-relaxed mt-4">{post.content}</p>
            </div>
          </Reveal>

          <div className="mt-12 pt-8 border-t border-ink-200">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all articles
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
