'use client';

import {useTranslations} from 'next-intl';

export default function ContactMap() {
  const t = useTranslations('ContactPage.Map');

  return (
    <section className="mt-16 md:mt-24 animate-fade-in-up">
      <div className="bg-surface-container-lowest rounded-2xl overflow-hidden clinical-shadow">
        <div className="relative h-[350px] md:h-[450px] w-full bg-surface-dim flex items-center justify-center p-4">
          <img 
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply" 
            alt={t('title')}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLWFVMh47K7OQp3F4Wa4jolP95NY_cUdSbG_ksV-LVxiTlAcsYYb1ubxlonv1T8Cxcp68uA0eWCI8tFgEnw7CsMnQhT5hMYvsvAKpfsdpdz3IXIaxWN1zoE9wwcMJfRjytOaYnXUjN8kP7Yi1xKoQvH8gXcxvGMARATPpzduOJ9kgQL0gZQvvqLK5zd_Y33jPJdAn_vEpufChL-kW2Fiqky3rpUGVbv9cS214fT0ls9gIGKOmITMZDExG1I0u091QpCaDOLfVlgAur" 
          />
          <div className="relative z-10 bg-surface/90 backdrop-blur-md p-6 rounded-xl border border-outline-variant/50 max-w-sm text-center">
            <span className="material-symbols-outlined text-secondary text-3xl md:text-4xl mb-2" style={{fontVariationSettings: "'FILL' 1"}}>location_pin</span>
            <h4 className="font-headline-sm text-lg md:text-headline-sm mb-2 text-on-surface">{t('title')}</h4>
            <p className="font-body-sm text-xs md:text-body-sm mb-4 text-on-surface-variant">{t('description')}</p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Tehran+Valiasr+St+Negar+Alley" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-secondary text-on-secondary px-6 py-2 rounded-full font-label-md text-sm md:text-label-md hover:shadow-lg transition-all active:scale-95 inline-block"
            >
              {t('directions')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
