'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function ProceduresGrid() {
  const t = useTranslations('ServicesPage.Procedures');

  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="flex justify-between items-end mb-16 border-b border-outline-variant pb-8 animate-fade-in-up">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">{t('title')}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">{t('subtitle')}</p>
          </div>
          <div className="hidden md:flex items-center gap-4 text-on-surface-variant font-label-md text-label-md">
            <span className="material-symbols-outlined">filter_list</span>
            <span>{t('filter')}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* 1. Corrective Jaw Surgery */}
          <div className="md:col-span-8 group bg-surface p-8 rounded-3xl clinical-shadow border border-outline-variant/20 hover:border-secondary transition-colors animate-fade-in-up">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-surface-container-high rounded-2xl text-secondary">
                  <span className="material-symbols-outlined text-3xl">medical_services</span>
                </div>
                <span className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-tighter">{t('jaw.label')}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">{t('jaw.title')}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 grow">
                {t('jaw.description')}
              </p>
              <div className="flex items-center justify-between">
                <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-md text-label-md hover:bg-on-surface-variant transition-colors active:scale-95">{t('jaw.inquire')}</button>
                <Link className="text-secondary font-label-md text-label-md flex items-center gap-1 group-hover:underline" href="#">
                  {t('jaw.learnMore')} <span className="material-symbols-outlined rtl:rotate-180">chevron_right</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 2. Dental Implants */}
          <div className="md:col-span-4 bg-surface-container-low p-8 rounded-3xl clinical-shadow border border-outline-variant/20 flex flex-col animate-fade-in-up animation-delay-100">
            <div className="mb-6 p-3 bg-white w-fit rounded-2xl text-secondary">
              <span className="material-symbols-outlined text-3xl">add_moderator</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">{t('implants.title')}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-8">
              {t('implants.description')}
            </p>
            <button className="w-full border border-secondary text-secondary px-6 py-3 rounded-full font-label-md text-label-md hover:bg-secondary hover:text-on-secondary transition-all active:scale-95 mt-auto">{t('implants.inquire')}</button>
          </div>

          {/* 3. Facial Trauma */}
          <div className="md:col-span-4 bg-surface p-8 rounded-3xl clinical-shadow border border-outline-variant/20 flex flex-col animate-fade-in-up">
            <div className="mb-6 p-3 bg-surface-container-high w-fit rounded-2xl text-secondary">
              <span className="material-symbols-outlined text-3xl">healing</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">{t('trauma.title')}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-8">
              {t('trauma.description')}
            </p>
            <button className="w-full bg-primary text-on-primary px-6 py-3 rounded-full font-label-md text-label-md hover:opacity-90 transition-all active:scale-95 mt-auto">{t('trauma.inquire')}</button>
          </div>

          {/* 4. Oral Pathology */}
          <div className="md:col-span-4 bg-surface p-8 rounded-3xl clinical-shadow border border-outline-variant/20 flex flex-col animate-fade-in-up animation-delay-100">
            <div className="mb-6 p-3 bg-surface-container-high w-fit rounded-2xl text-secondary">
              <span className="material-symbols-outlined text-3xl">biotech</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">{t('pathology.title')}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-8">
              {t('pathology.description')}
            </p>
            <button className="w-full bg-primary text-on-primary px-6 py-3 rounded-full font-label-md text-label-md hover:opacity-90 transition-all active:scale-95 mt-auto">{t('pathology.inquire')}</button>
          </div>

          {/* 5. Wisdom Teeth */}
          <div className="md:col-span-4 bg-surface p-8 rounded-3xl clinical-shadow border border-outline-variant/20 flex flex-col animate-fade-in-up animation-delay-200">
            <div className="mb-6 p-3 bg-surface-container-high w-fit rounded-2xl text-secondary">
              <span className="material-symbols-outlined text-3xl">dentistry</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">{t('wisdom.title')}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-8">
              {t('wisdom.description')}
            </p>
            <button className="w-full bg-primary text-on-primary px-6 py-3 rounded-full font-label-md text-label-md hover:opacity-90 transition-all active:scale-95 mt-auto">{t('wisdom.inquire')}</button>
          </div>

          {/* 6. TMJ Disorders */}
          <div className="md:col-span-12 bg-secondary text-on-secondary p-8 md:p-12 rounded-3xl clinical-shadow grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade-in-up">
            <div>
              <h3 className="font-headline-md text-headline-md mb-4 text-white">{t('tmj.title')}</h3>
              <p className="font-body-lg text-body-lg text-secondary-fixed mb-8 opacity-90">
                {t('tmj.description')}
              </p>
              <button className="bg-white text-secondary px-10 py-4 rounded-full font-label-md text-label-md hover:bg-surface-container-low transition-all active:scale-95">{t('tmj.inquire')}</button>
            </div>
            <div className="hidden md:block">
              <div className="h-64 rounded-2xl overflow-hidden">
                <img 
                  className="w-full h-full object-cover grayscale opacity-50 contrast-125" 
                  alt={t('tmj.title')}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAti8SdFpqF1mhQXrA3Uuq--22d-wsC5-X36vtHgW9eMbqSmkYhxXpplvPS35sofqBjTwpi09yEjyTuNiDEalu7o5kGC8lEoODcgk8SF6v_horTHdd___Np8v67hz6bcWPjD_4lb4KXdNqA7NPTn2fHne_nArwqssMVcFQ-xMu0WYawaziBG6vcQ0ZXeKw64Fw-z9Nyi41H69VvZU83KHnnKc6tYUDs2_KgWssjLpOrZaCRZJ2Xazd3GTjlaeM3_Cvr52pijr3sLBDJ" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
