'use client';

import {useTranslations} from 'next-intl';

export default function CTA() {
  const t = useTranslations('CTA');

  return (
    <section className="py-24 px-margin-desktop max-w-container-max mx-auto mb-24">
      <div className="bg-primary-container rounded-3xl p-16 relative overflow-hidden flex flex-col items-center text-center animate-fade-in-up">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-12 h-full w-full">
            <div className="border-r border-outline-variant h-full"></div>
            <div className="border-r border-outline-variant h-full"></div>
            <div className="border-r border-outline-variant h-full"></div>
            <div className="border-r border-outline-variant h-full"></div>
          </div>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-surface-bright mb-6 relative z-10">{t('title')}</h2>
        <p className="font-body-lg text-body-lg text-outline-variant mb-10 max-w-xl relative z-10">
          {t('description')}
        </p>
        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          <button className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-full font-headline-sm text-headline-sm hover:bg-secondary-fixed transition-all clinical-shadow">
            {t('book')}
          </button>
          <button className="border border-outline-variant text-surface-bright px-10 py-5 rounded-full font-headline-sm text-headline-sm hover:bg-surface-container-highest/10 transition-all">
            {t('call')}
          </button>
        </div>
      </div>
    </section>
  );
}
