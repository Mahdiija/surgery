'use client';

import {useTranslations} from 'next-intl';

export default function SpecialtiesHero() {
  const t = useTranslations('SpecialtiesPage.Hero');

  return (
    <section className="mb-12 md:mb-16 text-center max-w-3xl mx-auto animate-fade-in-up px-4">
      <span className="font-label-sm md:font-label-md text-label-sm md:text-label-md text-secondary tracking-widest uppercase mb-4 block">{t('label')}</span>
      <h1 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-on-surface mb-6">{t('title')}</h1>
      <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant">
        {t('description')}
      </p>
    </section>
  );
}
