'use client';

import {useTranslations} from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('ContactPage.Form');

  return (
    <section className="bg-surface-container-lowest p-6 md:p-12 rounded-xl clinical-shadow animate-fade-in-up">
      <h2 className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md mb-8 text-on-surface">{t('title')}</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="name">{t('name')}</label>
            <input 
              className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg p-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-hidden transition-all placeholder:text-outline text-on-surface" 
              id="name" 
              name="name" 
              placeholder="John Doe" 
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="email">{t('email')}</label>
            <input 
              className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg p-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-hidden transition-all placeholder:text-outline text-on-surface" 
              id="email" 
              name="email" 
              placeholder="john@example.com" 
              type="email"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="subject">{t('subject.label')}</label>
          <div className="relative">
            <select 
              className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg p-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-hidden transition-all appearance-none text-on-surface" 
              id="subject" 
              name="subject"
            >
              <option>{t('subject.option1')}</option>
              <option>{t('subject.option2')}</option>
              <option>{t('subject.option3')}</option>
              <option>{t('subject.option4')}</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant rtl:right-auto rtl:left-3">
              expand_more
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="message">{t('message')}</label>
          <textarea 
            className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg p-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-hidden transition-all placeholder:text-outline text-on-surface" 
            id="message" 
            name="message" 
            placeholder={t('placeholder')} 
            rows={5}
          ></textarea>
        </div>
        <button 
          className="w-full bg-primary text-on-primary py-4 rounded-full font-label-md text-label-md hover:bg-on-surface-variant transition-colors active:scale-[0.98] duration-150" 
          type="submit"
        >
          {t('submit')}
        </button>
      </form>
    </section>
  );
}
