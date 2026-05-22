'use client';

import {useTranslations} from 'next-intl';
import {Link, usePathname} from '@/i18n/routing';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const pathname = usePathname();

  return (
    <header className="bg-surface/80 backdrop-blur-md dark:bg-surface-container-highest/80 docked full-width top-0 sticky z-50 border-b border-outline-variant/30 dark:border-outline/20 shadow-sm">
      <div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto py-4">
        <Link href="/" className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-surface-bright tracking-tight">
          {t('brand')}
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            className={`${pathname === '/services' ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-primary'} dark:text-on-primary-container dark:hover:text-primary-fixed-dim transition-colors font-body-md text-body-md`} 
            href="/services"
          >
            {t('services')}
          </Link>
          <Link 
            className={`${pathname === '/specialties' ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-primary'} dark:text-on-primary-container dark:hover:text-primary-fixed-dim transition-colors font-body-md text-body-md`} 
            href="/specialties"
          >
            {t('specialties')}
          </Link>
          <Link 
            className={`${pathname === '/about' ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-primary'} dark:text-on-primary-container dark:hover:text-primary-fixed-dim transition-colors font-body-md text-body-md`} 
            href="/about"
          >
            {t('about')}
          </Link>
          <Link className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed-dim transition-colors font-body-md text-body-md" href="#">{t('contact')}</Link>
          <div className="flex gap-2 border-l border-outline-variant/30 pl-8 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-8">
            <Link href={pathname} locale="fa" className="text-body-sm font-medium hover:text-primary transition-colors">FA</Link>
            <span className="text-outline-variant/30">|</span>
            <Link href={pathname} locale="en" className="text-body-sm font-medium hover:text-primary transition-colors">EN</Link>
          </div>
        </nav>
        <Link href="/book" className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-md text-label-md scale-95 active:scale-90 transition duration-150 hover:bg-secondary text-center">
          {t('book')}
        </Link>
      </div>
    </header>
  );
}
