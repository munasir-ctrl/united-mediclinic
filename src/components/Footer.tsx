import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';
import { clinicConfig } from '@/data/clinicConfig';
import { navLinks } from '@/data/navigation';
import { services } from '@/data/services';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-28 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-16 border-b border-slate-800">
          
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="inline-block focus:outline-none">
              <img 
                src="/logo.png" 
                alt={clinicConfig.name || "Al Amanah Medical Center"} 
                className="h-10 w-auto object-contain brightness-0 invert" 
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Comprehensive medical care from experienced doctors, with personalised attention for you and your family.
            </p>
            {clinicConfig.hours?.note && (
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-slate-400">{clinicConfig.hours.note}</span>
              </div>
            )}
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialities */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Our Specialities
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              {clinicConfig.phones?.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone}`}
                    className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary-500" />
                    {phone}
                  </a>
                </li>
              ))}
              
              {clinicConfig.hours?.weekdays && clinicConfig.hours?.sunday && (
                <li className="flex items-start gap-2.5 text-sm text-slate-400">
                  <Clock className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                  <span>
                    Mon–Sat: {clinicConfig.hours.weekdays[0]?.time} · {clinicConfig.hours.weekdays[1]?.time}
                    <br />
                    Sun: {clinicConfig.hours.sunday[0]?.time} · {clinicConfig.hours.sunday[1]?.time}
                  </span>
                </li>
              )}

              {clinicConfig.address?.line1 && (
                <li className="flex items-start gap-2.5 text-sm text-slate-400">
                  <MapPin className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                  <span>
                    {clinicConfig.address.line1}
                    {clinicConfig.address.city && <>, {clinicConfig.address.city}</>}
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {clinicConfig.name || "Al Amanah Medical Center"}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-xs text-slate-500 hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-xs text-slate-500 hover:text-primary-400 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}