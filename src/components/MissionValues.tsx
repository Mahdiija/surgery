'use client';

import {useTranslations} from 'next-intl';

export default function MissionValues() {
  const t = useTranslations('AboutPage.Mission');

  return (
    <section className="bg-surface-container-low py-16 md:py-24 px-4 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="mb-12 md:mb-16 text-center animate-fade-in-up">
          <h2 className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-on-surface">{t('title')}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">{t('subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-surface-container-lowest p-8 md:p-10 rounded-xl clinical-shadow border border-outline-variant/10 animate-fade-in-up">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">verified_user</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 text-on-surface">{t('trust.title')}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{t('trust.description')}</p>
          </div>
          <div className="bg-surface-container-lowest p-8 md:p-10 rounded-xl clinical-shadow border border-outline-variant/10 animate-fade-in-up animation-delay-100">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">biotech</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 text-on-surface">{t('precision.title')}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{t('precision.description')}</p>
          </div>
          <div className="bg-surface-container-lowest p-8 md:p-10 rounded-xl clinical-shadow border border-outline-variant/10 animate-fade-in-up animation-delay-200">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">rebase_edit</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 text-on-surface">{t('comfort.title')}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{t('comfort.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
