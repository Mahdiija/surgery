'use client';

import {useTranslations} from 'next-intl';

export default function AboutHero() {
  const t = useTranslations('AboutPage.Hero');

  return (
    <section className="py-20 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-7 space-y-6 animate-fade-in-up">
          <span className="text-secondary font-label-md text-label-md tracking-widest block">{t('label')}</span>
          <h1 className="font-headline-lg text-headline-lg md:text-headline-lg leading-tight whitespace-pre-line">
            {t('title').split('\n').map((line, i) => (
              <span key={i}>
                {i === 1 ? <span className="text-secondary">{line}</span> : line}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            {t('description')}
          </p>
        </div>
        <div className="md:col-span-5 relative animate-fade-in-right animation-delay-200">
          <div className="aspect-4/5 bg-surface-container rounded-2xl overflow-hidden clinical-shadow">
            <img 
              className="w-full h-full object-cover" 
              alt={t('title')}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5XRPDzSuvCNzctPwumf1yNuALDZcKnpod65-ZBFLI1Ahe2lJqK48Z9vvjmgYOpPM_QxDbAg4O59z61ycrOb-sv9q0vGXH2Axg3LBO2d8eoaRAfyXuh-MbBi6IV-XMrMgtBjjV9vgNa3TYu1CyiZOY8plM19vwq0L98JjZI8bom8neTdrOPmMOK9XuufaqMikJfz4otgxDPX7OX5QHZD_u4MvAWYkOyZ2oCWiEqsTT2Hb4UIicAY6V5GwZALwUHodN0Em_Na0WdJ59" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
