import Navbar from '@/components/Navbar';
import ServicesHero from '@/components/ServicesHero';
import ProceduresGrid from '@/components/ProceduresGrid';
import PatientJourney from '@/components/PatientJourney';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <ServicesHero />
        <ProceduresGrid />
        <PatientJourney />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
