'use client';

import {useTranslations} from 'next-intl';

export default function RecoveryPath() {
  const t = useTranslations('SpecialtiesPage.Recovery');

  return (
    <section className="mt-16 md:mt-24 bg-surface-container p-6 md:p-12 rounded-xl clinical-shadow animate-fade-in-up">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-on-surface mb-6">{t('title')}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8">
            {t('description')}
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-on-tertiary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-sm" style={{fontVariationSettings: "'FILL' 1"}}>check</span>
                </div>
                <div className="w-0.5 h-full bg-on-tertiary-container/20"></div>
              </div>
              <div className="pb-4">
                <h4 className="font-label-md text-label-md text-on-surface">{t('step1.title')}</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{t('step1.description')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-on-tertiary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-sm" style={{fontVariationSettings: "'FILL' 1"}}>check</span>
                </div>
                <div className="w-0.5 h-full bg-on-tertiary-container/20"></div>
              </div>
              <div className="pb-4">
                <h4 className="font-label-md text-label-md text-on-surface">{t('step2.title')}</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{t('step2.description')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center ring-4 ring-secondary/10">
                  <span className="material-symbols-outlined text-on-secondary-container text-sm">trending_up</span>
                </div>
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface">{t('step3.title')}</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{t('step3.description')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden clinical-shadow h-[400px]">
          <img 
            alt={t('title')} 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_T3UsvK0FuPM6l3isfTumbCX2LJAlDftUpdgaE8p2GcHt0jxKSOe6p22yoYfeJEKc7t_tdI0-UcO24k7uZp-dkPITH5dXE1Bl3TP_1_Hu43tPvH69UPnYXJQR41oNCcFylFZ9zXckQY1-j86JbAXGN2lkD87QNq-bFpTBGfLNw_qa_nEyV0SeYzhyIaqKmMFfNySywoS6PJfieuXmPuSjr69miUo02JkvnaVgZQENXZutQa0yuJLNsvrXMhyxbLT3fJcOLn3iGDjx" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary-container/60 to-transparent flex items-end p-8">
            <div className="bg-surface/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <p className="font-label-md text-label-md text-secondary mb-1">{t('statusLabel')}</p>
              <p className="font-headline-sm text-headline-sm text-on-surface">{t('statusValue')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
