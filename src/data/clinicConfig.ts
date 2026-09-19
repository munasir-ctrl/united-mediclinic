// Centralized clinic configuration — single source of truth for all frequently changing info.
// Edit these values to update across the entire site.

export const clinicConfig = {
  name: 'United Mediclinic',
  shortName: 'Mediclinic',
  tagline: 'Healthcare That Puts You First',
  description:
    'Comprehensive medical care from experienced doctors, with personalised attention for you and your family.',
  phones: ['9539900049', '9539900014'],
  // WhatsApp number — left empty until confirmed. Do NOT invent.
  whatsapp: '',
  email: '',
  // Address intentionally left configurable — do NOT invent.
  address: {
    line1: '',
    line2: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'India',
  },
  // Google Maps embed URL — configurable placeholder.
  mapEmbedUrl: '',
  mapDirectionsUrl: '',
  hours: {
    weekdays: [
      { label: 'Morning', time: '8:00 AM – 2:00 PM' },
      { label: 'Evening', time: '5:00 PM – 9:00 PM' },
    ],
    sunday: [
      { label: 'Morning', time: '9:00 AM – 2:00 PM' },
      { label: 'Evening', time: '4:00 PM – 8:00 PM' },
    ],
    note: 'Open Every Day',
  },
  fees: [
    { label: 'GP Consultation', price: '₹100', note: 'General Practitioner consultation fee' },
    { label: 'Senior Citizen GP Consultation', price: '₹50', note: 'Reduced fee for senior citizens' },
  ],
  feesNote: 'GP consultation fees only. Additional charges may apply for procedures or diagnostics.',
  social: {
    facebook: '',
    instagram: '',
    twitter: '',
    youtube: '',
    linkedin: '',
  },
  homeConsultation: {
    available: true,
    homeCare: true,
  },
} as const;

export type ClinicConfig = typeof clinicConfig;
