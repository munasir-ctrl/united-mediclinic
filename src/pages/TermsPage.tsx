import SEO from '@/components/SEO';
import Reveal from '@/components/Reveal';
import { clinicConfig } from '@/data/clinicConfig';

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Terms and conditions for United Mediclinic."
        path="/terms-and-conditions"
      />
      <section className="bg-hero-radial pt-16 lg:pt-24 pb-8">
        <div className="container-wide max-w-3xl">
          <Reveal>
            <span className="eyebrow flex items-center gap-2">
              <span className="w-8 h-px bg-brand-500" />
              Legal
            </span>
            <h1 className="text-display-lg font-display font-extrabold text-ink-900 mt-5">
              Terms &amp; Conditions
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
                  <h2 className="text-lg font-display font-bold text-ink-900 mb-2">1. Acceptance of Terms</h2>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    By accessing and using the {clinicConfig.name} website, you accept and agree to be
                    bound by these Terms &amp; Conditions. If you do not agree, please do not use our
                    website.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-display font-bold text-ink-900 mb-2">2. Medical Information</h2>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    The information provided on this website is for general informational purposes only
                    and is not a substitute for professional medical advice, diagnosis, or treatment.
                    Always consult a qualified healthcare provider for medical concerns.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-display font-bold text-ink-900 mb-2">3. Appointment Bookings</h2>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    Submitting an appointment request through our website does not guarantee a specific
                    time slot. Our team will contact you to confirm your appointment. Consultation fees
                    are payable at the clinic.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-display font-bold text-ink-900 mb-2">4. Website Use</h2>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    You agree to use this website lawfully and not to misuse, disrupt, or attempt to
                    gain unauthorised access to any part of the website or its systems.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-display font-bold text-ink-900 mb-2">5. Limitation of Liability</h2>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    {clinicConfig.name} shall not be liable for any indirect, incidental, or
                    consequential damages arising from the use of this website.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-display font-bold text-ink-900 mb-2">6. Changes to Terms</h2>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    We reserve the right to update these Terms &amp; Conditions at any time. Continued
                    use of the website after changes constitutes acceptance of the updated terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-display font-bold text-ink-900 mb-2">7. Contact</h2>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    For any questions regarding these Terms &amp; Conditions, please contact us at{' '}
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
