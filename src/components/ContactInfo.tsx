'use client';

import {useTranslations} from 'next-intl';

export default function ContactInfo() {
  const t = useTranslations('ContactPage');

  return (
    <div className="space-y-8 animate-fade-in-right">
      {/* Clinic Details Card */}
      <div className="bg-surface-container p-6 md:p-8 rounded-xl clinical-shadow">
        <h3 className="font-headline-sm text-lg md:text-headline-sm mb-6 flex items-center gap-3 text-on-surface">
          <span className="material-symbols-outlined text-secondary">clinical_notes</span>
          {t('Details.title')}
        </h3>
        <div className="space-y-6">
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-on-surface-variant">location_on</span>
            <div>
              <p className="font-label-md text-label-md text-secondary">{t('Details.address.label')}</p>
              <p className="font-body-md text-body-md text-on-surface whitespace-pre-line">{t('Details.address.value')}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-on-surface-variant">call</span>
            <div>
              <p className="font-label-md text-label-md text-secondary">{t('Details.phone.label')}</p>
              <p className="font-body-md text-body-md text-on-surface">{t('Details.phone.value')}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-on-surface-variant">mail</span>
            <div>
              <p className="font-label-md text-label-md text-secondary">{t('Details.email.label')}</p>
              <p className="font-body-md text-body-md text-on-surface">{t('Details.email.value')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Office Hours */}
      <div className="bg-surface-container-high p-6 md:p-8 rounded-xl clinical-shadow border-l-4 border-tertiary-fixed-dim rtl:border-l-0 rtl:border-r-4">
        <h3 className="font-headline-sm text-lg md:text-headline-sm mb-6 flex items-center gap-3 text-on-surface">
          <span className="material-symbols-outlined text-on-tertiary-fixed-variant">schedule</span>
          {t('Hours.title')}
        </h3>
        <ul className="space-y-3 font-body-sm text-body-sm text-on-surface">
          <li className="flex justify-between border-b border-outline-variant/30 pb-2">
            <span>{t('Hours.weekdays')}</span>
            <span className="font-bold">8:00 AM - 6:00 PM</span>
          </li>
          <li className="flex justify-between border-b border-outline-variant/30 pb-2">
            <span>{t('Hours.saturday')}</span>
            <span className="font-bold">9:00 AM - 1:00 PM</span>
          </li>
          <li className="flex justify-between text-on-surface-variant">
            <span>{t('Hours.sunday')}</span>
            <span className="font-bold">{t('Hours.closed')}</span>
          </li>
        </ul>
      </div>

      {/* Emergency Contact */}
      <div className="bg-error-container p-6 md:p-8 rounded-xl border border-error/20">
        <h3 className="font-label-md text-label-md text-error flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>emergency</span>
          {t('Emergency.title')}
        </h3>
        <p className="font-body-sm text-body-sm text-on-error-container">
          {t('Emergency.description', {phone: t('Emergency.phone')})}
        </p>
      </div>
    </div>
  );
}
