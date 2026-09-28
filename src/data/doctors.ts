export interface Doctor {
  id: string;
  name: string;
  slug: string;
  qualifications: string[];
  specialty: string;
  roles?: string[];
  experience?: string;
  languages: string[];
  expertise: string[];
  bio: string;
  photoUrl?: string;
  active: boolean;
  sortOrder: number;
}

export const doctors: Doctor[] = [
  {
    id: 'dr-thijus-philip-antony',
    name: 'Dr. Thijus Philip Antony',
    slug: 'dr-thijus-philip-antony',
    qualifications: ['MBBS'],
    specialty: 'General Practitioner',
    experience: '3+ Years',
    languages: ['Malayalam', 'English', 'Tamil', 'Hindi'],
    expertise: [
      'General Medicine',
      'Acute & Emergency Medicine',
      'Internal Medicine',
      'Infectious Diseases & Febrile Illnesses',
      'Hematology & Anemia Management',
      'Geriatric Medicine',
      'Chronic Disease Management',
      'Hypertension & Diabetes Management',
      'ECG Interpretation & Cardiovascular Assessment',
      'Preventive & Lifestyle Medicine',
      'Patient Counselling & Health Education',
    ],
    bio: 'Dr. Thijus Philip Antony is a General Practitioner with over three years of experience in the management of acute and chronic medical conditions. His practice focuses on internal medicine, infectious diseases, and preventive healthcare, with a strong emphasis on patient education and long-term disease management.',
    photoUrl: '/thijus.jpeg',
    active: true,
    sortOrder: 1,
  },
  {
    id: 'dr-aafiath-najmeen-n',
    name: 'Dr. Aafiath Najmeen N',
    slug: 'dr-aafiath-najmeen-n',
    qualifications: ['BUMS'],
    specialty: 'General Practitioner',
    roles: ['Unani Physician', 'Hijama Practitioner'],
    experience: '2+ Years',
    languages: ['Malayalam', 'English', 'Tamil', 'Hindi', 'Urdu'],
    expertise: [
      'Unani Medicine & Regimental Therapy',
      'Diagnosis & Management of Common Medical Conditions',
      'Hypertension & Diabetes Management',
      'Digestive & Gastrointestinal Disorders',
      'Respiratory Disorders',
      'Musculoskeletal Disorders & Joint Complaints',
      "Women's Health & General Wellness",
      'Hijama (Cupping Therapy)',
      'Ilaj-bit-Tadbeer (Regimenal Therapy)',
      'Lifestyle & Preventive Medicine',
      'Dietary & Unani Lifestyle Counselling',
      'Patient Counselling & Health Education',
    ],
    bio: 'Dr. Aafiath Najmeen N is a Unani physician and Hijama practitioner with over two years of experience. She provides traditional Unani medical care including regimental therapy, Hijama (cupping therapy), and lifestyle counselling, alongside the management of common medical conditions.',
    photoUrl: '/Aafiath.jpg',
    active: true,
    sortOrder: 2,
  },
  {
    id: 'dr-aswin-thankachan-v',
    name: 'Dr. Aswin Thankachan V',
    slug: 'dr-aswin-thankachan-v',
    qualifications: [
      'MBBS',
      'MS Orthopedics',
      'DNB Ortho',
      'Fellow in Joint Replacement and Sports Medicine',
    ],
    specialty: 'Orthopedic Surgeon',
    experience: '10 Years',
    languages: ['English', 'Hindi', 'Tamil', 'Malayalam'],
    expertise: [
      'General Orthopedic Management',
      'Joint Replacement – Hip, Knee & Shoulder',
      'Complex Trauma Management',
      'Keyhole Surgery & Ligament Reconstruction',
      'Adult Reconstruction',
      'Spinal Disease',
    ],
    bio: 'Dr. Aswin Thankachan V is an Orthopedic Surgeon with ten years of experience, specialising in joint replacement and sports medicine. His areas of interest include complex trauma management, keyhole surgery, ligament reconstruction, and adult reconstruction.',
    photoUrl: '/ashwin.jpeg',
    active: true,
    sortOrder: 3,
  },
{
    id: 'dr-meera-benny',
    name: 'Dr. Meera Benny',
    slug: 'dr-meera-benny',
    qualifications: ['MBBS', 'MS ENT'],
    specialty: 'ENT Specialist',
    languages: ['Malayalam', 'English', 'Tamil', 'Hindi'],
    expertise: [
      'General ENT Consultation',
      'Ear, Nose & Throat Disorders Management',
      'Endoscopic ENT Evaluation',
      'Minor ENT Procedures',
    ],
    bio: 'Dr. Meera Benny is an ENT Specialist providing consultation and management of ear, nose, and throat conditions. Her practice includes endoscopic evaluation and minor ENT procedures.',
    photoUrl: '/Meera.jpeg',
    active: true,
    sortOrder: 4, 
  },
];  

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}