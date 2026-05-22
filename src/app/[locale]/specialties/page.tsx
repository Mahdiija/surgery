import Navbar from '@/components/Navbar';
import SpecialtiesHero from '@/components/SpecialtiesHero';
import SpecialtiesGrid from '@/components/SpecialtiesGrid';
import RecoveryPath from '@/components/RecoveryPath';
import Footer from '@/components/Footer';

export default function SpecialtiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow max-w-container-max mx-auto px-margin-desktop py-16">
        <SpecialtiesHero />
        <SpecialtiesGrid />
        <RecoveryPath />
      </main>
      <Footer />
    </div>
  );
}
