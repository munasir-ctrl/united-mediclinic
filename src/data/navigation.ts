import { clinicConfig } from '@/data/clinicConfig';
import { doctors } from '@/data/doctors';
import { services } from '@/data/services';

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Doctors', path: '/doctors' },
  { label: 'Services', path: '/services' },
  { label: 'Facilities', path: '/facilities' },
  { label: 'Patient Care', path: '/patient-care' },
  { label: 'Contact', path: '/contact' },
];

export const homePageSections = [
  { label: 'About', href: '#about' },
  { label: 'Specialities', href: '#specialities' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Hours', href: '#hours' },
  { label: 'Contact', href: '#contact' },
];

// JSON-LD structured data generators
export function clinicSchema() {
  const phone = clinicConfig.phones[0];
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: clinicConfig.name,
    telephone: phone,
    ...(clinicConfig.address.line1 && {
      address: {
        '@type': 'PostalAddress',
        streetAddress: clinicConfig.address.line1,
        addressLocality: clinicConfig.address.city,
        addressRegion: clinicConfig.address.state,
        postalCode: clinicConfig.address.postalCode,
        addressCountry: clinicConfig.address.country,
      },
    }),
    medicalSpecialty: services.map((s) => s.title),
    availableService: services.map((s) => ({
      '@type': 'MedicalProcedure',
      name: s.title,
      description: s.shortDescription,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '09:00',
        closes: '20:00',
      },
    ],
  };
}

export function physicianSchema(doctorId: string) {
  const doctor = doctors.find((d) => d.id === doctorId);
  if (!doctor) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: doctor.name,
    medicalSpecialty: doctor.specialty,
    qualification: doctor.qualifications.join(', '),
    ...(doctor.languages && { knowsLanguage: doctor.languages }),
    ...(doctor.experience && { description: `Experience: ${doctor.experience}` }),
    hospitalAffiliation: {
      '@type': 'MedicalClinic',
      name: clinicConfig.name,
      telephone: clinicConfig.phones[0],
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: clinicConfig.name,
    url: typeof window !== 'undefined' ? window.location.origin : '',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${typeof window !== 'undefined' ? window.location.origin : ''}/doctors`,
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${typeof window !== 'undefined' ? window.location.origin : ''}${item.path}`,
    })),
  };
}
