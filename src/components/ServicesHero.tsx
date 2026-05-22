'use client';

import {useTranslations} from 'next-intl';

export default function ServicesHero() {
  const t = useTranslations('ServicesPage.Hero');

  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-surface">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter items-center animate-fade-in-up">
        <div className="md:col-span-7">
          <span className="text-secondary font-label-sm md:font-label-md text-label-sm md:text-label-md uppercase tracking-widest mb-4 block">{t('label')}</span>
          <h1 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-on-surface mb-6 max-w-2xl">{t('title')}</h1>
          <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant mb-8 max-w-xl">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-auto bg-secondary text-on-secondary px-8 py-3 rounded-full font-label-md text-label-md hover:shadow-lg transition-all active:scale-95">{t('outcomes')}</button>
            <button className="w-full sm:w-auto border border-outline text-on-surface px-8 py-3 rounded-full font-label-md text-label-md hover:bg-surface-container-low transition-all">{t('journey')}</button>
          </div>
        </div>
        <div className="md:col-span-5 relative hidden md:block">
          <div className="aspect-square bg-surface-container-high rounded-3xl overflow-hidden clinical-shadow">
            <img 
              className="w-full h-full object-cover" 
              alt={t('title')}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjN3LrBglwfAqqmdj5CJiWqyqoZsN5iaDWiUcJHxb0QhQoqP4tZq5BoaWVyJRHCZFwuKCtz6LXEh53vc1YGO1j87cDITD3C-Vu83UxUU3eyZiAnphbH2eCBTe1LBgh7K0cc6BY0j7E7obuEnOdZX5HO_ZBSfqLTMvTB-kNK3Gb9OJQfEnBItLtiajP99VmlaD8UXXmrHfqYrdpJwYijPN0Vr7SVin3_tyG_pIqRkxLi9HITZJgBocmOrEH7amaLXS-lMwzjqVvfkiR"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
