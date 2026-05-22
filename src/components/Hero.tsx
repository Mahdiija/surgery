'use client';

import {useTranslations} from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative h-[870px] min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          alt={t('label')}
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLlKkHeKmRwW-LU2ETYs8zoKuWzJsyMfNtvdeUjWWJb76PV0kFNkeGNGn3PZb_j4SZ4m50kzwGl7ZqSAWjM3_FCTMsubsPKCgyvMI5DiZ33hM8czmYFtKVuNOOYvQfTlziMPw52v0MtrbQcPOrFFLKNtsf4LvpAFuolnGGbgDHv9E2O-mlwjYigW1vPzHUXUJ3ASOPlwwhXTwblOIMnOQg7Es_IARtMdaydTd1PX-4eDzuCKUcj90K-ubw82Fda1jrtajqU_PDnsus"
        />
        <div className="absolute inset-0 bg-linear-to-r from-surface via-surface/60 to-transparent rtl:bg-linear-to-l"></div>
      </div>
      <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full animate-fade-in-up">
        <div className="max-w-2xl">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.2em] mb-4 block">{t('label')}</span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-6 leading-tight whitespace-pre-line">
            {t('title')}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
            {t('description')}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-label-md hover:bg-secondary transition-all clinical-shadow">
              {t('book')}
            </button>
            <button className="border border-outline text-on-surface px-8 py-4 rounded-full font-label-md text-label-md hover:bg-surface-container transition-all">
              {t('explore')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
