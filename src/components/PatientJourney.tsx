'use client';

import {useTranslations} from 'next-intl';

export default function PatientJourney() {
  const t = useTranslations('ServicesPage.Journey');

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-margin-desktop text-center">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-16 animate-fade-in-up">{t('title')}</h2>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-outline-variant/30 hidden md:block"></div>
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between animate-fade-in-up">
              <div className="w-full md:w-[45%] text-center md:text-right md:pr-8 mb-4 md:mb-0">
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">{t('consultation.title')}</h4>
                <p className="text-on-surface-variant text-body-sm">{t('consultation.description')}</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-tertiary-fixed border-4 border-white rounded-full z-10 shadow-sm hidden md:block"></div>
              <div className="w-full md:w-[45%]"></div>
            </div>
            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between animate-fade-in-up animation-delay-100">
              <div className="w-full md:w-[45%] order-2 md:order-1"></div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-tertiary-fixed border-4 border-white rounded-full z-10 shadow-sm hidden md:block"></div>
              <div className="w-full md:w-[45%] text-center md:text-left md:pl-8 mb-4 md:mb-0 order-1 md:order-2">
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">{t('planning.title')}</h4>
                <p className="text-on-surface-variant text-body-sm">{t('planning.description')}</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between animate-fade-in-up animation-delay-200">
              <div className="w-full md:w-[45%] text-center md:text-right md:pr-8 mb-4 md:mb-0">
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">{t('procedure.title')}</h4>
                <p className="text-on-surface-variant text-body-sm">{t('procedure.description')}</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-outline-variant border-4 border-white rounded-full z-10 shadow-sm hidden md:block"></div>
              <div className="w-full md:w-[45%]"></div>
            </div>
            {/* Step 4 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between animate-fade-in-up animation-delay-300">
              <div className="w-full md:w-[45%] order-2 md:order-1"></div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-outline-variant border-4 border-white rounded-full z-10 shadow-sm hidden md:block"></div>
              <div className="w-full md:w-[45%] text-center md:text-left md:pl-8 mb-4 md:mb-0 order-1 md:order-2">
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">{t('recovery.title')}</h4>
                <p className="text-on-surface-variant text-body-sm">{t('recovery.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
