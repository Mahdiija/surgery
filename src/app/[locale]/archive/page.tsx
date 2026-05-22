import Navbar from '@/components/Navbar';
import ArchiveHero from '@/components/ArchiveHero';
import CaseGallery from '@/components/CaseGallery';
import Footer from '@/components/Footer';

export default function ArchivePage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="grow w-full max-w-container-max mx-auto px-4 md:px-margin-desktop py-12 md:py-16">
        <ArchiveHero />
        <CaseGallery />
      </main>
      <Footer />
    </div>
  );
}
