'use client';

import {useTranslations} from 'next-intl';

export default function Stats() {
  const t = useTranslations('Stats');

  return (
    <section className="py-24 bg-surface-container-highest">
      <div className="px-margin-desktop max-w-container-max mx-auto animate-fade-in-up">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter text-center">
          <div className="p-8">
            <div className="font-headline-lg text-headline-lg text-primary mb-2">15+</div>
            <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">{t('years')}</div>
          </div>
          <div className="p-8">
            <div className="font-headline-lg text-headline-lg text-primary mb-2">8k+</div>
            <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">{t('surgeries')}</div>
          </div>
          <div className="p-8">
            <div className="font-headline-lg text-headline-lg text-primary mb-2">99%</div>
            <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">{t('satisfaction')}</div>
          </div>
          <div className="p-8">
            <div className="font-headline-lg text-headline-lg text-primary mb-2">12</div>
            <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">{t('certifications')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
