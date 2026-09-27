// CMS-ready placeholder data structures.
// These will be replaced by Supabase data when connected.

export interface Testimonial {
  id: string;
  name: string;
  service?: string;
  doctor?: string;
  rating?: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'placeholder-1',
    name: 'Patient Testimonial',
    quote: 'Real patient testimonials will appear here once collected and approved.',
  },
];

export interface Facility {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
}

export const facilities: Facility[] = [
  {
    id: 'fac-1',
    name: 'Modern Reception & Waiting Area',
    description: 'A welcoming, comfortable environment equipped for patient registration and comfortable waiting.',
    imageUrl: '/clinic-1.jpeg',
  },
  {
    id: 'fac-2',
    name: 'Consultation Suites',
    description: 'Private and fully equipped examination rooms for thorough medical evaluations.',
    imageUrl: '/clinic-3.jpeg',
  },
  {
    id: 'fac-3',
    name: 'Exterior & Signage',
    description: 'Easily accessible location with clear signage for United Mediclinic and United Medilabs.',
    imageUrl: '/clinic-7.png',
  },
];

export interface GalleryImage {
  id: string;
  category: 'Clinic' | 'Doctors' | 'Patient Care' | 'Facilities';
  alt: string;
  imageUrl?: string;
}

export const galleryImages: GalleryImage[] = [
  { id: 'g1', category: 'Clinic', alt: 'Clinic reception desk view', imageUrl: '/clinic-1.jpeg' },
  { id: 'g2', category: 'Clinic', alt: 'Reception wide interior view', imageUrl: '/clinic-2.jpeg' },
  { id: 'g3', category: 'Facilities', alt: 'Hallway leading to consultation rooms', imageUrl: '/clinic-3.jpeg' },
  { id: 'g4', category: 'Facilities', alt: 'Corridor and examination room entrance', imageUrl: '/clinic-4.jpeg' },
  { id: 'g5', category: 'Clinic', alt: 'Front desk and counter area', imageUrl: '/clinic-5.jpeg' },
  { id: 'g6', category: 'Clinic', alt: 'Main entrance glass doors', imageUrl: '/clinic-6.jpeg' },
  { id: 'g7', category: 'Clinic', alt: 'United Mediclinic and Medilabs front storefront', imageUrl: '/clinic-7.png' },
  { id: 'g8', category: 'Clinic', alt: 'Building exterior facade and signboard', imageUrl: '/clinic-8.jpeg' },
];

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readingTime: string;
  content: string;
  imageUrl?: string;
  isDemo?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'demo-1',
    slug: 'understanding-blood-pressure-management',
    title: 'Understanding Blood Pressure Management',
    excerpt:
      'A guide to understanding blood pressure readings and the importance of regular monitoring in long-term health management.',
    author: 'United Mediclinic',
    date: '2026-01-15',
    category: 'General Health',
    readingTime: '4 min read',
    content:
      'This is a demo article placeholder. Actual health content will be created and reviewed by qualified medical professionals before publication.',
    imageUrl: '/clinic-2.jpeg',
    isDemo: true,
  },
];