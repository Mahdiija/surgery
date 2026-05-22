'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations('Footer');
  const navT = useTranslations('Navbar');

  return (
    <footer className="bg-surface-container-highest dark:bg-primary-container border-t border-outline-variant dark:border-outline/20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-gutter px-4 md:px-margin-desktop max-w-container-max mx-auto py-12 md:py-16">
        <div className="flex flex-col gap-6">
          <div className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-surface-bright">{navT('brand')}</div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs">{t('description')}</p>
          <div className="flex gap-4">
            <Link className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors opacity-80 hover:opacity-100" href="#">
              <span className="material-symbols-outlined">public</span>
            </Link>
            <Link className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors opacity-80 hover:opacity-100" href="#">
              <span className="material-symbols-outlined">share</span>
            </Link>
            <Link className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors opacity-80 hover:opacity-100" href="#">
              <span className="material-symbols-outlined">mail</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-md text-label-md text-on-surface dark:text-primary-fixed uppercase tracking-wider">{t('links')}</h4>
          <ul className="flex flex-col gap-3">
            <li><Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100" href="/services">{navT('services')}</Link></li>
            <li><Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100" href="/about">{navT('about')}</Link></li>
            <li><Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100" href="/book">Patient Forms</Link></li>
            <li><Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100" href="/contact">{navT('contact')}</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-md text-label-md text-on-surface dark:text-primary-fixed uppercase tracking-wider">{t('legal')}</h4>
          <ul className="flex flex-col gap-3">
            <li><Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100" href="#">Terms of Service</Link></li>
            <li><Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</Link></li>
            <li><Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100" href="#">Accessibility</Link></li>
            <li><Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100" href="#">Sitemap</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-md text-label-md text-on-surface dark:text-primary-fixed uppercase tracking-wider">{t('hours')}</h4>
          <div className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container">
            <p className="mb-1">Sat - Wed: 8:00 AM - 6:00 PM</p>
            <p className="mb-1">Thu: 9:00 AM - 1:00 PM</p>
            <p>Fri: Closed</p>
          </div>
          <div className="mt-4 font-body-sm text-body-sm text-on-surface-variant">
            <p>No. 12, Unit 4, Negar Alley</p>
            <p>Above Vanak Sq., Valiasr St., Tehran</p>
          </div>
        </div>
      </div>
      <div className="border-t border-outline-variant/30 py-8 px-4 md:px-margin-desktop max-w-container-max mx-auto">
        <p className="font-body-sm text-body-sm text-on-surface-variant text-center">{t('rights')}</p>
      </div>
    </footer>
  );
}
