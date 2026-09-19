import SEO from '@/components/SEO';
import Reveal from '@/components/Reveal';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { clinicConfig } from '@/data/clinicConfig';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for could not be found."
        noindex
      />
      <section className="min-h-[70vh] flex items-center justify-center bg-hero-radial px-5">
        <div className="text-center max-w-lg">
          <Reveal>
            {/* Large 404 */}
            <div className="relative inline-block mb-8">
              <span className="text-7xl lg:text-8xl font-display font-extrabold bg-gradient-to-br from-brand-600 to-teal-600 bg-clip-text text-transparent">
                404
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-3">
                <svg
                  className="w-full h-3 text-teal-400/40"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path d="M2 8 Q 100 2 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <h1 className="text-display-md font-display font-bold text-ink-900 mb-4 text-balance">
              Looks like this page needs medical attention.
            </h1>
            <p className="text-ink-500 mb-8">
              The page you're looking for doesn't exist or has been moved. Let's get you back to good
              health.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-brand-600 text-white font-semibold px-6 py-3.5 rounded-xl text-base hover:bg-brand-700 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              <a
                href={`tel:${clinicConfig.phones[0]}`}
                className="inline-flex items-center gap-2 bg-white text-ink-800 font-semibold px-6 py-3.5 rounded-xl text-base border border-ink-200 hover:border-brand-300 transition-all duration-300"
              >
                Call {clinicConfig.phones[0]}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
