'use client';

import {useTranslations} from 'next-intl';

export default function Intro() {
  const t = useTranslations('Intro');

  return (
    <section className="py-24 bg-surface-container-lowest overflow-hidden">
      <div className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center animate-fade-in-up">
        <div className="md:col-span-5 relative">
          <div className="aspect-4/5 rounded-xl overflow-hidden clinical-shadow">
            <img 
              className="w-full h-full object-cover" 
              alt={t('doctor')}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAudIJiMQNjGndkBAqodcAPxDnZDpJJfTFQn0ZZ_6jQL-jtC56Uc5BzODotfUMjHGXAfE2LrxGwaopZ9HQ02me3XXvJfIjp4LhrSmb6u9pO1BEbWTtxXgvq9vV1OE9vNksPlC5mLG04V1El-pZw1fNgQCXDHoOqk4H1WAiKEqfJhJQ8Si0sKh37k-Qam8Bo_k5vrjB2gnjproTkAGwV7qb0zwQiwalMVbJX-1WrFB60HW51-pI8xDim9u9jfu4EJVqdXRTw4kbu5mrU"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 rtl:-right-auto rtl:-left-6 bg-tertiary-fixed p-8 rounded-xl clinical-shadow hidden lg:block">
            <p className="font-headline-sm text-headline-sm text-on-tertiary-fixed leading-tight italic">
              {t('quote')}
            </p>
          </div>
        </div>
        <div className="md:col-span-7">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-6">{t('title')}</h2>
          <div className="space-y-6 text-on-surface-variant font-body-lg text-body-lg">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="w-12 h-px bg-outline"></div>
            <span className="font-headline-sm text-headline-sm text-on-surface">{t('doctor')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
