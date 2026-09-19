import SEO from '@/components/SEO';
import Reveal from '@/components/Reveal';
import { clinicConfig } from '@/data/clinicConfig';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy for United Mediclinic."
        path="/privacy-policy"
      />
      <section className="bg-hero-radial pt-16 lg:pt-24 pb-8">
        <div className="container-wide max-w-3xl">
          <Reveal>
            <span className="eyebrow flex items-center gap-2">
              <span className="w-8 h-px bg-brand-500" />
              Legal
            </span>
            <h1 className="text-display-lg font-display font-extrabold text-ink-900 mt-5">
              Privacy Policy
            </h1>
            <p className="text-sm text-ink-400 mt-3">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-section-cool">
        <div className="container-wide max-w-3xl">
          <Reveal>
            <div className="bg-white rounded-2xl border border-ink-200/60 p-6 lg:p-10 shadow-soft">
              <div className="prose prose-ink max-w-none flex flex-col gap-6">
                <section>
                  <h2 className="text-lg font-display font-bold text-ink-900 mb-2">1. Introduction</h2>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    {clinicConfig.name} ("we", "us", or "our") is committed to protecting the privacy of
                    our patients and website visitors. This Privacy Policy explains how we collect, use,
                    and protect your personal information when you visit our website or use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-display font-bold text-ink-900 mb-2">2. Information We Collect</h2>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    When you book an appointment or contact us through this website, we may collect:
                  </p>
                  <ul className="text-sm text-ink-600 leading-relaxed mt-2 list-disc pl-5 flex flex-col gap-1">
                    <li>Your name and contact details (phone number, email address)</li>
                    <li>Preferred doctor, department, and appointment time</li>
                    <li>Any message or information you provide</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-display font-bold text-ink-900 mb-2">3. How We Use Your Information</h2>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    We use the information you provide to:
                  </p>
                  <ul className="text-sm text-ink-600 leading-relaxed mt-2 list-disc pl-5 flex flex-col gap-1">
                    <li>Process appointment requests and contact you regarding your appointment</li>
                    <li>Respond to your enquiries</li>
                    <li>Improve our services and website</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-display font-bold text-ink-900 mb-2">4. Information Sharing</h2>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    We do not sell, rent, or share your personal information with third parties for
                    marketing purposes. Your information may be shared only as required by law or as
                    necessary for providing medical care.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-display font-bold text-ink-900 mb-2">5. Data Security</h2>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    We take appropriate measures to protect your personal information from unauthorised
                    access, alteration, or disclosure.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-display font-bold text-ink-900 mb-2">6. Contact Us</h2>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at{' '}
                    {clinicConfig.phones[0]}.
                  </p>
                </section>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
