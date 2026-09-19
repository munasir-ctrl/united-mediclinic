import { motion } from 'framer-motion';
import { Phone, Clock, Home, MapPin, Navigation } from 'lucide-react';
import { clinicConfig } from '@/data/clinicConfig';
import SectionHeading from '@/components/SectionHeading';

const ease = [0.22, 1, 0.36, 1] as const;

export default function ContactSection() {
  const hasAddress = !!clinicConfig.address.line1;

  return (
    <section id="contact" className="py-20 lg:py-30 bg-section-cool">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's Take Care of Your Health"
          subtitle="Reach out to us for appointments, enquiries, or any questions about our services."
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-14">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col gap-5"
          >
            {/* Phone */}
            <div className="bg-white rounded-2xl border border-ink-200/60 p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brand-600" />
                </div>
                <h3 className="text-base font-semibold text-ink-900">Phone</h3>
              </div>
              <div className="flex flex-col gap-2">
                {clinicConfig.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="text-lg font-semibold text-ink-800 hover:text-brand-700 transition-colors"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl border border-ink-200/60 p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-base font-semibold text-ink-900">Opening Hours</h3>
              </div>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex items-start justify-between gap-4 pb-3 border-b border-ink-100">
                  <span className="text-ink-500">Mon – Sat</span>
                  <span className="text-ink-800 font-medium text-right">
                    {clinicConfig.hours.weekdays[0].time}
                    <br />
                    {clinicConfig.hours.weekdays[1].time}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="text-ink-500">Sunday</span>
                  <span className="text-ink-800 font-medium text-right">
                    {clinicConfig.hours.sunday[0].time}
                    <br />
                    {clinicConfig.hours.sunday[1].time}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-ink-100">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-teal-700">{clinicConfig.hours.note}</span>
              </div>
            </div>

            {/* Home services */}
            <div className="bg-white rounded-2xl border border-ink-200/60 p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center">
                  <Home className="w-5 h-5 text-brand-600" />
                </div>
                <h3 className="text-base font-semibold text-ink-900">Home Services</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-teal-50 text-teal-700 px-3 py-1.5 rounded-lg font-medium">
                  Home Consultation Available
                </span>
                {clinicConfig.homeConsultation.homeCare && (
                  <span className="text-sm bg-teal-50 text-teal-700 px-3 py-1.5 rounded-lg font-medium">
                    Home Care Available
                  </span>
                )}
              </div>
            </div>

            {/* Address (if configured) */}
            {hasAddress && (
              <div className="bg-white rounded-2xl border border-ink-200/60 p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-brand-600" />
                  </div>
                  <h3 className="text-base font-semibold text-ink-900">Address</h3>
                </div>
                <p className="text-sm text-ink-600 leading-relaxed">
                  {clinicConfig.address.line1}
                  {clinicConfig.address.line2 && <>, {clinicConfig.address.line2}</>}
                  {clinicConfig.address.city && <>, {clinicConfig.address.city}</>}
                  {clinicConfig.address.state && <>, {clinicConfig.address.state}</>}
                  {clinicConfig.address.postalCode && <> {clinicConfig.address.postalCode}</>}
                </p>
              </div>
            )}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="relative"
          >
            <div className="sticky top-24 rounded-3xl overflow-hidden border border-ink-200/60 shadow-soft h-full min-h-[400px] bg-ink-50 flex items-center justify-center">
              {clinicConfig.mapEmbedUrl ? (
                <iframe
                  src={clinicConfig.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="United Mediclinic location"
                />
              ) : (
                <div className="flex flex-col items-center gap-4 text-center p-8">
                  <MapPin className="w-12 h-12 text-brand-200" />
                  <div>
                    <p className="text-sm font-semibold text-ink-700">Map will appear here</p>
                    <p className="text-xs text-ink-400 mt-1 max-w-xs">
                      Google Maps embed will be displayed once the clinic address is configured.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {clinicConfig.mapDirectionsUrl && (
              <a
                href={clinicConfig.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 bg-brand-600 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-brand-700 shadow-soft transition-all"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
