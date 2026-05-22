import Navbar from '@/components/Navbar';
import AboutHero from '@/components/AboutHero';
import MissionValues from '@/components/MissionValues';
import SurgeonBio from '@/components/SurgeonBio';
import FacilityInnovation from '@/components/FacilityInnovation';
import SurgicalTeam from '@/components/SurgicalTeam';
import AboutCTA from '@/components/AboutCTA';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <AboutHero />
        <MissionValues />
        <SurgeonBio />
        <FacilityInnovation />
        <SurgicalTeam />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
