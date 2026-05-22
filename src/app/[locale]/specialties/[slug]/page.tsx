import {getTranslations} from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import {specialtiesData, SpecialtySlug} from '@/data/specialties';
import {Link} from '@/i18n/routing';
import {notFound} from 'next/navigation';

export async function generateMetadata({params}: {params: Promise<{locale: string, slug: string}>}) {
  const {locale, slug} = await params;
  const t = await getTranslations({locale, namespace: 'SpecialtiesPage.Grid'});
  
  if (!specialtiesData[slug as SpecialtySlug]) return {};

  return {
    title: `${t(`${slug}.title`)} | MaxilloSurg`,
  };
}

export default async function SpecialtyPage({params}: {params: Promise<{locale: string, slug: string}>}) {
  const {slug} = await params;
  const specialty = specialtiesData[slug as SpecialtySlug];

  if (!specialty) {
    notFound();
  }

  const t = await getTranslations('SpecialtyDetail');
  const tGrid = await getTranslations('SpecialtiesPage.Grid');

  // We need to handle the procedures array translation. 
  // Since next-intl getTranslations returns a function that can't easily iterate over arrays in JSON,
  // we can use the raw messages or just know the keys.
  // For simplicity, I'll assume the keys are 0, 1, 2, 3 as per the JSON structure.
  const procedures = [0, 1, 2, 3].map(i => t(`${slug}.procedures.${i}`));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[60vh] min-h-[350px] md:min-h-[400px] overflow-hidden">
          <img 
            src={specialty.image} 
            alt={tGrid(`${slug}.title`)}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b md:bg-linear-to-r from-on-surface/90 md:from-on-surface/80 to-transparent flex items-center">
            <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop w-full">
              <Link 
                href="/specialties" 
                className="inline-flex items-center gap-2 text-surface-bright mb-4 md:mb-6 hover:text-secondary transition-colors font-label-md"
              >
                <span className="material-symbols-outlined text-sm rotate-180 rtl:rotate-0">arrow_forward</span>
                {t('back')}
              </Link>
              <h1 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-surface-bright mb-4 max-w-2xl animate-fade-in-up">
                {tGrid(`${slug}.title`)}
              </h1>
              <p className="text-surface-bright/80 font-body-md md:font-body-lg text-body-md md:text-body-lg max-w-xl animate-fade-in-up animation-delay-100">
                {tGrid(`${slug}.description`)}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-24 px-4 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="animate-fade-in-up">
                <h2 className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-on-surface mb-6">{t('overview')}</h2>
                <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">
                  {t(`${slug}.overview`)}
                </p>
              </div>

              <div className="animate-fade-in-up animation-delay-100">
                <h2 className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-on-surface mb-6">{t('procedures')}</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {procedures.map((proc, i) => (
                    <li key={i} className="flex items-center gap-3 p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      <span className="font-body-md text-body-md text-on-surface">{proc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="animate-fade-in-up animation-delay-200">
                <h2 className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-on-surface mb-6">{t('technology')}</h2>
                <div className="p-6 md:p-8 bg-surface-container-low text-on-surface rounded-2xl flex flex-col md:flex-row items-start gap-6 border border-outline-variant/30">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                    <span className="material-symbols-outlined text-3xl">biotech</span>
                  </div>
                  <p className="font-body-md text-body-md leading-relaxed">
                    {t(`${slug}.technology`)}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 p-6 md:p-8 bg-surface-container-high rounded-2xl clinical-shadow animate-fade-in-right">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${specialty.color === 'error' ? 'bg-error/10' : 'bg-secondary/10'} flex items-center justify-center mb-6`}>
                  <span className={`material-symbols-outlined text-2xl md:text-3xl ${specialty.color === 'error' ? 'text-error' : 'text-secondary'}`} style={{fontVariationSettings: "'FILL' 1"}}>
                    {specialty.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">
                  {tGrid(`${slug}.title`)}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-8">
                  {tGrid(`${slug}.description`)}
                </p>
                <button className="w-full bg-primary text-on-primary py-4 rounded-full font-label-md text-label-md hover:opacity-90 transition-all active:scale-95 mb-4">
                  {t('inquire')}
                </button>
                <div className="flex items-center justify-center gap-2 text-on-surface-variant font-label-sm">
                  <span className="material-symbols-outlined text-sm">verified_user</span>
                  Board Certified Excellence
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
