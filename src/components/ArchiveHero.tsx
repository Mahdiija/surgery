'use client';

import {useTranslations} from 'next-intl';

export default function ArchiveHero() {
  const t = useTranslations('ArchivePage.Hero');

  return (
    <header className="mb-12 md:mb-16 max-w-2xl animate-fade-in-up">
      <span className="font-label-sm md:font-label-md text-label-sm md:text-label-md text-secondary uppercase tracking-widest block mb-4">{t('label')}</span>
      <h1 className="font-headline-md md:font-headline-lg text-3xl md:text-headline-lg text-on-surface mb-6 leading-tight">{t('title')}</h1>
      <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">
        {t('description')}
      </p>
    </header>
  );
}
