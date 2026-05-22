'use client';

import {useTranslations} from 'next-intl';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import ContactMap from '@/components/ContactMap';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const t = useTranslations('ContactPage.Hero');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow max-w-container-max mx-auto px-margin-desktop py-16 md:py-24">
        {/* Header Section */}
        <header className="mb-16 md:mb-24 text-center max-w-3xl mx-auto animate-fade-in-up">
          <span className="text-secondary font-label-md text-label-md tracking-widest uppercase mb-4 block">{t('label')}</span>
          <h1 className="font-headline-lg text-headline-lg mb-6 text-on-surface">{t('title')}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            {t('description')}
          </p>
        </header>

        {/* Bento Grid Layout for Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          <div className="md:col-span-7">
            <ContactForm />
          </div>
          <div className="md:col-span-5">
            <ContactInfo />
          </div>
        </div>

        {/* Map Section */}
        <ContactMap />
      </main>
      <Footer />
    </div>
  );
}
