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
    id: 'placeholder',
    name: 'Clinic Facilities',
    description: 'Detailed facility information will be added here once available.',
  },
];

export interface GalleryImage {
  id: string;
  category: 'Clinic' | 'Doctors' | 'Patient Care' | 'Facilities';
  alt: string;
  imageUrl?: string;
}

export const galleryImages: GalleryImage[] = [
  { id: 'g1', category: 'Clinic', alt: 'Clinic reception area' },
  { id: 'g2', category: 'Clinic', alt: 'Consultation room' },
  { id: 'g3', category: 'Doctors', alt: 'Doctor with patient' },
  { id: 'g4', category: 'Patient Care', alt: 'Patient consultation' },
  { id: 'g5', category: 'Facilities', alt: 'Medical equipment' },
  { id: 'g6', category: 'Clinic', alt: 'Waiting area' },
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
    isDemo: true,
  },
];
