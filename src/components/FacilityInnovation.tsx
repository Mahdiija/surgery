'use client';

import {useTranslations} from 'next-intl';

export default function FacilityInnovation() {
  const t = useTranslations('AboutPage.Innovation');

  return (
    <section className="py-16 md:py-24 bg-primary-container text-on-primary-fixed">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1 animate-fade-in-left">
            <div className="aspect-video rounded-xl overflow-hidden clinical-shadow">
              <img 
                className="w-full h-full object-cover" 
                alt={t('title')}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkXnyERSYWCj_3gwZH85jYl0muvUOR8U6Tw3YxK57cd1yoMwP84IE_fR-DqKOZJfb6hgKtimWpuxUNaOvMxj6LTyLTwHphqMNIczTpu9suxHGnBl0GgwqCCdZTw64_gzsqsGs9OwljENMxPGtG3oLD9p-UF4uHUbCk2bhl8f3yjpPHQPKWePL4L468rRt8L9nmHRzvBvSd9efWB7yL5xnnov-bRs-SAZ9pbNa0wJKSvoxVAUN1Psy0hhvYkLQB0_4eLgmQumITl_0t" 
              />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6 md:space-y-8 animate-fade-in-up">
            <h2 className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-surface-bright">{t('title')}</h2>
            <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-primary-container">
              {t('description')}
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary-container">biotech</span>
                <div>
                  <h5 className="font-label-md text-label-md text-surface-bright">{t('feature1.title')}</h5>
                  <p className="text-on-primary-container text-body-sm font-body-sm">{t('feature1.description')}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary-container">precision_manufacturing</span>
                <div>
                  <h5 className="font-label-md text-label-md text-surface-bright">{t('feature2.title')}</h5>
                  <p className="text-on-primary-container text-body-sm font-body-sm">{t('feature2.description')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
