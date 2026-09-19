import SEO from '@/components/SEO';
import Hero from '@/sections/Hero';
import TrustStrip from '@/sections/TrustStrip';
import About from '@/sections/About';
import Specialities from '@/sections/Specialities';
import WhyChooseUs from '@/sections/WhyChooseUs';
import DoctorsSection from '@/sections/DoctorsSection';
import HomeConsultation from '@/sections/HomeConsultation';
import PatientJourney from '@/sections/PatientJourney';
import HoursAndFees from '@/sections/HoursAndFees';
import Testimonials from '@/sections/Testimonials';
import Facilities from '@/sections/Facilities';
import HealthResources from '@/sections/HealthResources';
import AppointmentCTA from '@/sections/AppointmentCTA';
import ContactSection from '@/sections/ContactSection';
import { clinicSchema, websiteSchema } from '@/data/navigation';

export default function HomePage() {
  return (
    <>
      <SEO
        description="United Mediclinic — comprehensive medical care from experienced doctors. General medicine, Unani, orthopaedics and ENT. Book your appointment today."
        jsonLd={[clinicSchema(), websiteSchema()]}
      />
      <Hero />
      <TrustStrip />
      <About />
      <Specialities />
      <WhyChooseUs />
      <DoctorsSection />
      <HomeConsultation />
      <PatientJourney />
      <HoursAndFees />
      <Testimonials />
      <Facilities />
      <HealthResources />
      <AppointmentCTA />
      <ContactSection />
    </>
  );
}
