'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function ProceduresGrid() {
  const t = useTranslations('ServicesPage.Procedures');

  return (
    <section className="py-16 md:py-24 bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 border-b border-outline-variant pb-8 animate-fade-in-up gap-4">
          <div>
            <h2 className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-on-surface">{t('title')}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">{t('subtitle')}</p>
          </div>
          <div className="flex items-center gap-4 text-on-surface-variant font-label-md text-label-md">
            <span className="material-symbols-outlined">filter_list</span>
            <span>{t('filter')}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter animate-fade-in-up animation-delay-200">
          {/* 1. Outpatient Surgery */}
          <div className="md:col-span-8 group bg-surface p-6 md:p-8 rounded-3xl clinical-shadow border border-outline-variant/20 hover:border-secondary transition-colors">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-surface-container-high rounded-2xl text-secondary">
                  <span className="material-symbols-outlined text-3xl">medical_services</span>
                </div>
                <span className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-tighter">{t('outpatient.label')}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">{t('outpatient.title')}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 grow">
                {t('outpatient.description')}
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                {['ایمپلنت دیجیتال', 'جراحی دندان عقل', 'پیوند استخوان', 'پیوند لثه', 'افزایش طول تاج'].map((item) => (
                  <span key={item} className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full text-[11px] md:text-[12px] font-medium border border-outline-variant/30">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-md text-label-md hover:bg-on-surface-variant transition-colors active:scale-95">{t('outpatient.inquire')}</button>
                <Link className="text-secondary font-label-md text-label-md flex items-center justify-center gap-1 group-hover:underline" href="#">
                  {t('outpatient.learnMore')} <span className="material-symbols-outlined rtl:rotate-180">chevron_right</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 2. Aesthetic Injections */}
          <div className="md:col-span-4 bg-surface-container-low p-6 md:p-8 rounded-3xl clinical-shadow border border-outline-variant/20 flex flex-col">
            <div className="mb-6 p-3 bg-white w-fit rounded-2xl text-secondary">
              <span className="material-symbols-outlined text-3xl">vaccines</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">{t('injections.title')}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
              {t('injections.description')}
            </p>
            <ul className="space-y-2 mb-8 grow">
              {['تزریق فیلر لب و گونه', 'زاویه‌سازی فک', 'بوتاکس پیشانی و خط اخم', 'جوانسازی با نوروژل'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[13px] text-on-surface-variant">
                  <span className="w-1 h-1 rounded-full bg-secondary"></span>
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full border border-secondary text-secondary px-6 py-3 rounded-full font-label-md text-label-md hover:bg-secondary hover:text-on-secondary transition-all active:scale-95 mt-auto">{t('injections.inquire')}</button>
          </div>

          {/* 3. Hospital Surgery */}
          <div className="md:col-span-12 bg-secondary text-on-secondary p-6 md:p-12 rounded-3xl clinical-shadow grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
            <h3 className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md mb-4 text-white">{t('hospital.title')}</h3>
            <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-secondary-fixed mb-8 opacity-90">
              {t('hospital.description')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-10">
              {['جراحی ارتوگناتیک', 'لیپوساکشن غبغب', 'تزریق چربی نانو', 'بلفاروپلاستی پلک'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/80 text-sm">
                  <span className="material-symbols-outlined text-secondary-fixed text-base">verified</span>
                  {item}
                </div>
              ))}
            </div>
              <button className="w-full sm:w-auto bg-white text-secondary px-10 py-4 rounded-full font-label-md text-label-md hover:bg-surface-container-low transition-all active:scale-95">{t('hospital.inquire')}</button>
            </div>
            <div className="hidden md:block">
              <div className="h-64 rounded-2xl overflow-hidden">
                <img 
                  className="w-full h-full object-cover grayscale opacity-50 contrast-125" 
                  alt={t('hospital.title')}
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
