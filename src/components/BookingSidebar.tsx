'use client';

import {useTranslations} from 'next-intl';

export default function BookingSidebar() {
  const t = useTranslations('BookingPage.Sidebar');

  return (
    <aside className="space-y-8 animate-fade-in-right">
      <div className="bg-surface-container-high rounded-xl p-6 md:p-8 clinical-shadow border-l-4 border-secondary rtl:border-l-0 rtl:border-r-4">
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-secondary text-4xl">shield_with_heart</span>
          <h3 className="font-headline-sm text-lg md:text-headline-sm text-on-surface">{t('safety.title')}</h3>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
          {t('safety.description')}
        </p>
        <ul className="space-y-6">
          <li className="flex gap-4">
            <div className="shrink-0 w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">no_meals</span>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-on-surface">{t('safety.fasting.title')}</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{t('safety.fasting.description')}</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="shrink-0 w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">history_edu</span>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-on-surface">{t('safety.records.title')}</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{t('safety.records.description')}</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="shrink-0 w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">vaccines</span>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-on-surface">{t('safety.meds.title')}</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{t('safety.meds.description')}</p>
            </div>
          </li>
        </ul>
        <div className="mt-8 pt-8 border-t border-outline-variant/30 text-center">
          <p className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-widest">{t('emergency.label')}</p>
          <p className="font-headline-sm text-headline-sm text-on-surface mt-2">{t('emergency.phone')}</p>
        </div>
      </div>

      {/* Secondary Visual Element */}
      <div className="rounded-xl overflow-hidden clinical-shadow relative group">
        <img 
          alt={t('facility.title')} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhhBlZcRqijQ9SYTjhyeRUmtJd9rGIy1YPQmM-N6cpouhVcx2EL0ZFDpJnpKEdLeZJWirUDwWRScItWzYgBA4wXcVnw6lLN-4TpZgFXeqmxBdXExoUY1xmaLmsAOqdYg6f5b5QWY5L3sbttGKawHXIK6YmwyAzdTNaxUGWxm3so4XJBx4VC09Tw1j-w7lXLiIKRfUHoEknpgtGjAayUyHIc_aoeW8_LeuqktmUCNPVJBpDjkAwWxOXXDbrd_VUyRincuawoK-JZ3ut" 
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent flex flex-col justify-end p-6">
          <span className="font-label-sm text-label-sm text-primary-fixed mb-1 uppercase tracking-tighter">{t('facility.label')}</span>
          <h4 className="font-headline-sm text-headline-sm text-on-primary">{t('facility.title')}</h4>
        </div>
      </div>
    </aside>
  );
}
