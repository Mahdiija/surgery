'use client';

import {useTranslations} from 'next-intl';

export default function CTA() {
  const t = useTranslations('CTA');

  return (
    <section className="py-16 md:py-24 px-4 md:px-margin-desktop max-w-container-max mx-auto mb-12 md:mb-24">
      <div className="bg-primary-container rounded-3xl p-8 md:p-16 relative overflow-hidden flex flex-col items-center text-center animate-fade-in-up">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-4 md:grid-cols-12 h-full w-full">
            <div className="border-r border-outline-variant h-full"></div>
            <div className="border-r border-outline-variant h-full"></div>
            <div className="border-r border-outline-variant h-full"></div>
            <div className="border-r border-outline-variant h-full"></div>
          </div>
        </div>
        <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-surface-bright mb-6 relative z-10">{t('title')}</h2>
        <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-outline-variant mb-10 max-w-xl relative z-10">
          {t('description')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10 w-full sm:w-auto">
          <button className="bg-secondary-container text-on-secondary-container px-8 md:px-10 py-4 md:py-5 rounded-full font-headline-sm text-lg md:text-headline-sm hover:bg-secondary-fixed transition-all clinical-shadow">
            {t('book')}
          </button>
          <button className="border border-outline-variant text-surface-bright px-8 md:px-10 py-4 md:py-5 rounded-full font-headline-sm text-lg md:text-headline-sm hover:bg-surface-container-highest/10 transition-all">
            {t('call')}
          </button>
        </div>
      </div>
    </section>
  );
}
