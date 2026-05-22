'use client';

import {useTranslations} from 'next-intl';

export default function SurgeonBio() {
  const t = useTranslations('AboutPage.Bio');

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 animate-fade-in-up">
          <h2 className="font-headline-md text-headline-md mb-8 text-on-surface">{t('name')}</h2>
          <div className="font-body-md text-body-md text-on-surface-variant space-y-6">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
          </div>
          <div className="mt-12 space-y-6">
            <h4 className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant border-b border-outline-variant pb-2">{t('certifications')}</h4>
            <div className="flex flex-wrap gap-4">
              <span className="bg-secondary-fixed text-on-secondary-fixed px-4 py-1 rounded-full font-label-sm text-label-sm">{t('cert1')}</span>
              <span className="bg-secondary-fixed text-on-secondary-fixed px-4 py-1 rounded-full font-label-sm text-label-sm">{t('cert2')}</span>
              <span className="bg-secondary-fixed text-on-secondary-fixed px-4 py-1 rounded-full font-label-sm text-label-sm">{t('cert3')}</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 animate-fade-in-right animation-delay-200">
          <div className="bg-surface-container rounded-2xl p-8 md:p-12">
            <h3 className="font-headline-sm text-headline-sm mb-10 text-on-surface">{t('journey')}</h3>
            <div className="space-y-10 relative">
              {/* Vertical Stepper Line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-outline-variant rtl:left-auto rtl:right-[11px]"></div>
              
              <div className="relative pl-10 rtl:pl-0 rtl:pr-10">
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-secondary ring-4 ring-surface rtl:left-auto rtl:right-0"></div>
                <span className="text-secondary font-label-md text-label-md">{t('step1.date')}</span>
                <h4 className="font-body-lg text-body-lg font-bold mt-1 text-on-surface">{t('step1.title')}</h4>
                <p className="text-on-surface-variant font-body-sm text-body-sm">{t('step1.description')}</p>
              </div>

              <div className="relative pl-10 rtl:pl-0 rtl:pr-10">
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-tertiary-fixed-dim ring-4 ring-surface rtl:left-auto rtl:right-0"></div>
                <span className="text-on-surface-variant font-label-md text-label-md">{t('step2.date')}</span>
                <h4 className="font-body-lg text-body-lg font-bold mt-1 text-on-surface">{t('step2.title')}</h4>
                <p className="text-on-surface-variant font-body-sm text-body-sm">{t('step2.description')}</p>
              </div>

              <div className="relative pl-10 rtl:pl-0 rtl:pr-10">
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-tertiary-fixed-dim ring-4 ring-surface rtl:left-auto rtl:right-0"></div>
                <span className="text-on-surface-variant font-label-md text-label-md">{t('step3.date')}</span>
                <h4 className="font-body-lg text-body-lg font-bold mt-1 text-on-surface">{t('step3.title')}</h4>
                <p className="text-on-surface-variant font-body-sm text-body-sm">{t('step3.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
