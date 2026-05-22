'use client';

import {useTranslations} from 'next-intl';
import Navbar from '@/components/Navbar';
import BookingForm from '@/components/BookingForm';
import BookingSidebar from '@/components/BookingSidebar';
import Footer from '@/components/Footer';

export default function BookingPage() {
  const t = useTranslations('BookingPage.Hero');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow max-w-container-max mx-auto px-margin-desktop py-16 md:py-24">
        {/* Hero Header */}
        <header className="mb-16 animate-fade-in-up">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-secondary font-label-md text-label-md tracking-wider">{t('label')}</span>
            <div className="h-px w-12 bg-secondary"></div>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface max-w-2xl mb-4">{t('title')}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            {t('description')}
          </p>
        </header>

        <div className="grid grid-cols-12 gap-gutter">
          <div className="col-span-12 lg:col-span-8">
            <BookingForm />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <BookingSidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
