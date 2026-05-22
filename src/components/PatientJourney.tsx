'use client';

import {useTranslations} from 'next-intl';

export default function PatientJourney() {
  const t = useTranslations('ServicesPage.Journey');

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-4 md:px-margin-desktop text-center">
        <h2 className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-on-surface mb-12 md:mb-16 animate-fade-in-up">{t('title')}</h2>
        <div className="relative animate-fade-in-up animation-delay-200">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-0.5 bg-outline-variant/30"></div>
          
          <div className="space-y-12 md:space-y-16">
            {/* Step 1 */}
            <div className="relative flex items-center md:justify-between">
              <div className="hidden md:block w-[45%] text-right pr-8 rtl:text-left rtl:pr-0 rtl:pl-8">
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">{t('consultation.title')}</h4>
                <p className="text-on-surface-variant text-body-sm">{t('consultation.description')}</p>
              </div>
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-tertiary-fixed border-4 border-white rounded-full z-10 shadow-sm"></div>
              <div className="pl-12 md:pl-0 md:w-[45%] text-left md:hidden">
                <h4 className="font-headline-sm text-lg text-on-surface mb-1">{t('consultation.title')}</h4>
                <p className="text-on-surface-variant text-body-sm">{t('consultation.description')}</p>
              </div>
              <div className="hidden md:block w-[45%]"></div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-center md:justify-between">
              <div className="hidden md:block w-[45%]"></div>
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-tertiary-fixed border-4 border-white rounded-full z-10 shadow-sm"></div>
              <div className="pl-12 md:pl-8 md:w-[45%] text-left rtl:md:text-right rtl:md:pl-0 rtl:md:pr-8">
                <h4 className="font-headline-sm text-lg md:text-headline-sm text-on-surface mb-1 md:mb-2">{t('planning.title')}</h4>
                <p className="text-on-surface-variant text-body-sm">{t('planning.description')}</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-center md:justify-between">
              <div className="hidden md:block w-[45%] text-right pr-8 rtl:text-left rtl:pr-0 rtl:pl-8">
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">{t('procedure.title')}</h4>
                <p className="text-on-surface-variant text-body-sm">{t('procedure.description')}</p>
              </div>
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-outline-variant border-4 border-white rounded-full z-10 shadow-sm"></div>
              <div className="pl-12 md:pl-0 md:w-[45%] text-left md:hidden">
                <h4 className="font-headline-sm text-lg text-on-surface mb-1">{t('procedure.title')}</h4>
                <p className="text-on-surface-variant text-body-sm">{t('procedure.description')}</p>
              </div>
              <div className="hidden md:block w-[45%]"></div>
            </div>

            {/* Step 4 */}
            <div className="relative flex items-center md:justify-between">
              <div className="hidden md:block w-[45%]"></div>
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-outline-variant border-4 border-white rounded-full z-10 shadow-sm"></div>
              <div className="pl-12 md:pl-8 md:w-[45%] text-left rtl:md:text-right rtl:md:pl-0 rtl:md:pr-8">
                <h4 className="font-headline-sm text-lg md:text-headline-sm text-on-surface mb-1 md:mb-2">{t('recovery.title')}</h4>
                <p className="text-on-surface-variant text-body-sm">{t('recovery.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
