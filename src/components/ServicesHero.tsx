'use client';

import {useTranslations} from 'next-intl';

export default function ServicesHero() {
  const t = useTranslations('ServicesPage.Hero');

  return (
    <section className="relative py-20 overflow-hidden bg-surface">
      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-7">
          <span className="text-secondary font-label-md text-label-md uppercase tracking-widest mb-4 block animate-fade-in-up">{t('label')}</span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-6 max-w-2xl animate-fade-in-up animation-delay-100">{t('title')}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl animate-fade-in-up animation-delay-200">
            {t('description')}
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
            <button className="bg-secondary text-on-secondary px-8 py-3 rounded-full font-label-md text-label-md hover:shadow-lg transition-all active:scale-95">{t('outcomes')}</button>
            <button className="border border-outline text-on-surface px-8 py-3 rounded-full font-label-md text-label-md hover:bg-surface-container-low transition-all">{t('journey')}</button>
          </div>
        </div>
        <div className="md:col-span-5 relative hidden md:block animate-fade-in-right animation-delay-200">
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
