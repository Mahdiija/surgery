'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function Services() {
  const t = useTranslations('Services');

  return (
    <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
      <div className="text-center mb-16 animate-fade-in-up">
        <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.2em] mb-2 block">{t('label')}</span>
        <h2 className="font-headline-md text-headline-md text-on-surface">{t('title')}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter animate-fade-in-up animation-delay-200">
        {/* Service 1 */}
        <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low clinical-shadow min-h-[400px] flex flex-col justify-end p-10">
          <img 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 mix-blend-multiply" 
            alt={t('jaw.title')}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcC7W86QJdI_i4yg7GxGrlItbuCYYEy0XkugoUj6chtENwZqatC-noU930FBw8y13zhf4aImqcPJq-OonHA1V0PXRtoK9K2Nc2dDMggc2amEFLr-y0sAhb5vcMH8K1WkE5Q-u9wS_ABTuZA7LbhAtHLwFVARHPlIdmEgcvDiMNdKeSg8ZJz7YDD1AtrD3HDqlrF482Bvo4-xtUxp-gbNlTG0409N8_W1YiEQ2wx2TIbACk2u9C-sKlocRWjbI_Dhbro9ZkJct4JEJ0"
          />
          <div className="relative z-10 text-on-surface">
            <h3 className="font-headline-sm text-headline-sm mb-4">{t('jaw.title')}</h3>
            <p className="font-body-md text-body-md max-w-md mb-6 opacity-90">{t('jaw.description')}</p>
            <Link className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary group-hover:underline" href="#">
              {t('jaw.more')} <span className="material-symbols-outlined rtl:rotate-180">arrow_forward</span>
            </Link>
          </div>
        </div>
        {/* Service 2 */}
        <div className="md:col-span-4 bg-surface-container-high rounded-xl p-10 clinical-shadow flex flex-col justify-between group">
          <div className="w-12 h-12 bg-on-secondary-fixed rounded-full flex items-center justify-center text-on-secondary mb-8">
            <span className="material-symbols-outlined">dentistry</span>
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm mb-4 text-on-surface">{t('wisdom.title')}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">{t('wisdom.description')}</p>
            <Link className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary group-hover:underline" href="#">
              {t('wisdom.more')} <span className="material-symbols-outlined rtl:rotate-180">arrow_forward</span>
            </Link>
          </div>
        </div>
        {/* Service 3 */}
        <div className="md:col-span-12 bg-on-surface rounded-xl p-10 clinical-shadow flex flex-col md:flex-row items-center gap-10 group overflow-hidden">
          <div className="md:w-1/2">
            <span className="text-tertiary-fixed font-label-md text-label-md uppercase tracking-wider mb-2 block">{t('implants.label')}</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 text-surface-bright">{t('implants.title')}</h3>
            <p className="font-body-md text-body-md text-outline-variant mb-6">{t('implants.description')}</p>
            <button className="bg-surface-bright text-on-surface px-6 py-3 rounded-full font-label-md text-label-md hover:bg-secondary-fixed transition-all">
              {t('implants.more')}
            </button>
          </div>
          <div className="md:w-1/2 aspect-video rounded-lg overflow-hidden border border-outline/20">
            <img 
              className="w-full h-full object-cover" 
              alt={t('implants.title')}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5KSjIlOW-WISQ-zdKadfExDeTk34ZIkiGqVWgZb0ORF-tJtkwKaRHg3gyAUSbRV90y4vD4EMVRYX4xjOj_8GvpNSCaOHWr8xlahAkCKo4WcPpfpc3KsVfSZQ4DIUBochhnS1ONgiqRXDkiwExKxlXRAAq5oMH4H3DwSc1Km6PfAKJcs2tMktwFUOSDwbGTAOpgiB8XzsU25GkJQvntS0PQ88nf74vLrVWDAmeUEI1AI0zi4FOe7ds2ZN4hEeisNJfSqprGxUv98JG"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
