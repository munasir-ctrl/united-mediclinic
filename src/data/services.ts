export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  areas: string[];
  icon: string; // lucide icon name
  sortOrder: number;
}

export const services: Service[] = [
  {
    id: 'general-medicine',
    slug: 'general-medicine',
    title: 'General Medicine',
    shortDescription:
      'Comprehensive evaluation and management of common, acute and chronic medical conditions.',
    description:
      'Our General Medicine department provides comprehensive evaluation and management of common, acute, and chronic medical conditions. From routine check-ups to the management of hypertension, diabetes, and other long-term conditions, our practitioners focus on accurate diagnosis, evidence-based treatment, and preventive care.',
    areas: [
      'Acute & Chronic Condition Management',
      'Hypertension & Diabetes Care',
      'Preventive Health Check-ups',
      'Fever & Infectious Disease Management',
      'Geriatric Medicine',
      'ECG & Cardiovascular Assessment',
    ],
    icon: 'stethoscope',
    sortOrder: 1,
  },
  {
    id: 'unani-medicine',
    slug: 'unani-medicine',
    title: 'Unani Medicine',
    shortDescription:
      'Traditional Unani medical care, regimental therapy, lifestyle guidance and Hijama services.',
    description:
      'Our Unani Medicine department offers traditional Unani medical care, including regimental therapy, lifestyle guidance, and Hijama (cupping therapy). This system of medicine focuses on restoring balance within the body through natural and holistic approaches, dietary regulation, and regimental therapies.',
    areas: [
      'Unani Medicine & Regimental Therapy',
      'Hijama (Cupping Therapy)',
      'Ilaj-bit-Tadbeer (Regimenal Therapy)',
      'Digestive & Gastrointestinal Disorders',
      'Respiratory Disorders',
      'Dietary & Lifestyle Counselling',
    ],
    icon: 'leaf',
    sortOrder: 2,
  },
  {
    id: 'orthopaedics',
    slug: 'orthopaedics',
    title: 'Orthopaedics',
    shortDescription:
      'Comprehensive management of musculoskeletal conditions, joint disorders, trauma and sports-related injuries.',
    description:
      'Our Orthopaedics department provides comprehensive management of musculoskeletal conditions, joint disorders, trauma, and sports-related injuries. Services include joint replacement surgery, keyhole surgery, ligament reconstruction, and adult reconstruction, supported by modern surgical techniques.',
    areas: [
      'Joint Replacement – Hip, Knee & Shoulder',
      'Complex Trauma Management',
      'Keyhole Surgery & Ligament Reconstruction',
      'Adult Reconstruction',
      'Spinal Disease Management',
      'Sports Injury Management',
    ],
    icon: 'bone',
    sortOrder: 3,
  },
  {
    id: 'ent',
    slug: 'ent',
    title: 'ENT',
    shortDescription:
      'Assessment and management of ear, nose and throat conditions with appropriate diagnostic and minor procedural care.',
    description:
      'Our ENT department provides assessment and management of ear, nose, and throat conditions. Services include general ENT consultation, endoscopic evaluation, and minor ENT procedures, delivered with appropriate diagnostic support.',
    areas: [
      'General ENT Consultation',
      'Ear, Nose & Throat Disorders Management',
      'Endoscopic ENT Evaluation',
      'Minor ENT Procedures',
      'Hearing Assessment',
      'Nasal & Sinus Care',
    ],
    icon: 'ear',
    sortOrder: 4,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
