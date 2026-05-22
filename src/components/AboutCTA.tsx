'use client';

import {useTranslations} from 'next-intl';

export default function AboutCTA() {
  const t = useTranslations('AboutPage.CTA');

  return (
    <section className="py-24 px-margin-mobile">
      <div className="max-w-4xl mx-auto bg-surface-container-highest p-12 rounded-3xl text-center clinical-shadow animate-fade-in-up">
        <h2 className="font-headline-md text-headline-md mb-6 text-on-surface">{t('title')}</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
          {t('description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-label-md text-label-md hover:opacity-90 transition-all active:scale-95">
            {t('request')}
          </button>
          <button className="border border-outline text-on-surface px-10 py-4 rounded-full font-label-md text-label-md hover:bg-surface transition-all active:scale-95">
            {t('view')}
          </button>
        </div>
      </div>
    </section>
  );
}
