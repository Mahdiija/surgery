'use client';

import {useTranslations} from 'next-intl';

export default function Testimonials() {
  const t = useTranslations('Testimonials');

  return (
    <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 animate-fade-in-up">
        <div className="max-w-xl">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.2em] mb-2 block">{t('label')}</span>
          <h2 className="font-headline-md text-headline-md text-on-surface">{t('title')}</h2>
        </div>
        <div className="flex gap-4">
          <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-surface-container transition-all">
            <span className="material-symbols-outlined rtl:rotate-180">chevron_left</span>
          </button>
          <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-surface-container transition-all">
            <span className="material-symbols-outlined rtl:rotate-180">chevron_right</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter animate-fade-in-up animation-delay-200">
        <div className="bg-surface-container-low p-10 rounded-xl clinical-shadow border-l-4 rtl:border-l-0 rtl:border-r-4 border-secondary">
          <div className="flex gap-1 text-secondary mb-6">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface mb-8 italic">{t('sarah.text')}</p>
          <div className="font-label-md text-label-md text-on-surface-variant">{t('sarah.author')}</div>
        </div>
        <div className="bg-surface-container-low p-10 rounded-xl clinical-shadow border-l-4 rtl:border-l-0 rtl:border-r-4 border-tertiary-fixed-dim">
          <div className="flex gap-1 text-secondary mb-6">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface mb-8 italic">{t('james.text')}</p>
          <div className="font-label-md text-label-md text-on-surface-variant">{t('james.author')}</div>
        </div>
        <div className="bg-surface-container-low p-10 rounded-xl clinical-shadow border-l-4 rtl:border-l-0 rtl:border-r-4 border-primary">
          <div className="flex gap-1 text-secondary mb-6">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface mb-8 italic">{t('elena.text')}</p>
          <div className="font-label-md text-label-md text-on-surface-variant">{t('elena.author')}</div>
        </div>
      </div>
    </section>
  );
}
