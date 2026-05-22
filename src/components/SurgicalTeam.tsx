'use client';

import {useTranslations} from 'next-intl';

export default function SurgicalTeam() {
  const t = useTranslations('AboutPage.Team');

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 animate-fade-in-up">
        <div className="max-w-2xl">
          <h2 className="font-headline-md text-headline-md text-on-surface">{t('title')}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">{t('subtitle')}</p>
        </div>
        <button className="text-secondary font-label-md text-label-md flex items-center gap-2 hover:underline">
          {t('cta')} <span className="material-symbols-outlined rtl:rotate-180">arrow_forward</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {/* Team Member 1 */}
        <div className="group animate-fade-in-up">
          <div className="aspect-3/4 rounded-xl overflow-hidden mb-4 clinical-shadow bg-surface-container">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              alt={t('member1.name')}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV5cvuF4-uLgE-u8pAu9Njo8YNqhgiICSQiQfRCjKfxQFhcmYc2n8zMHGvr3sxFH0WzvRrf2LXHHNhowJ7UhHlCQEdVyMep7ixl3e6J8d1RRHBDza-wXmyDNluP3QtO5n5Bu7hy4E-rVkjJIDhRNgYXcyfZWyyNCnAB2deQv3k0csCsktdztYtnXdvE6sihRLnKjnNjLeCfvkvCy35ljxF37pVjO-_DbpdZ0ao2yvGY52JD_FDjOW9cOk85-OUJ0P2fW7ZUHcG4MyB" 
            />
          </div>
          <h4 className="font-body-lg text-body-lg font-bold text-on-surface">{t('member1.name')}</h4>
          <p className="text-secondary font-label-sm text-label-sm">{t('member1.role')}</p>
        </div>
        {/* Team Member 2 */}
        <div className="group animate-fade-in-up animation-delay-100">
          <div className="aspect-3/4 rounded-xl overflow-hidden mb-4 clinical-shadow bg-surface-container">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              alt={t('member2.name')}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJtH297Rp3sQtRpq7NAgp5h36G9vO_qdh6kk6Rcz7rW4Iu8aeVkJYZwQzMWOK2jNr3BCX22ZPAuDNXkTjqX_cYMTuHQ6R29KcRetYU3o3IKnhC_7lPgg8ZUP2Cd-xKHcbMaqiZfefAyaBOH7Av4RgU_VJnpzDkfPg7eEZmQXvzWOi6mOJfY_jHbhDuJ2G5whVA5Ul0lh0dAYadiOQ9nhqow8umeryXeNUQaTuguuk-7xY9Ad0L7r3PhMIZveDh_f1WDYy_bRg_0FcH" 
            />
          </div>
          <h4 className="font-body-lg text-body-lg font-bold text-on-surface">{t('member2.name')}</h4>
          <p className="text-secondary font-label-sm text-label-sm">{t('member2.role')}</p>
        </div>
        {/* Team Member 3 */}
        <div className="group animate-fade-in-up animation-delay-200">
          <div className="aspect-3/4 rounded-xl overflow-hidden mb-4 clinical-shadow bg-surface-container">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              alt={t('member3.name')}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmGeUbwP7AOq0uggeqjU-ptYNLEHnHB6VLrQAQW4nEvaxtLgs5_cxIUcvJu0iUBiKDb_YvubV0JeqiUvUrHUE7jshm16feFRsi05pbZraYFWsHC9ZpoqP_ZSnYBu9zAklmOJt3rtjMzUMMKWD9yQFw3ewxGSddMjgAmPnqzNLHzYPcEnWolCFVLss9Eg-mYtaL_m9NUCIc78daM-2H8twpWqs9gO6GkltT2cTR19gXcncPaFcqDbKM246f-IZ5_VNtmpd5h1g6ZgSW" 
            />
          </div>
          <h4 className="font-body-lg text-body-lg font-bold text-on-surface">{t('member3.name')}</h4>
          <p className="text-secondary font-label-sm text-label-sm">{t('member3.role')}</p>
        </div>
        {/* Team Member 4 */}
        <div className="group animate-fade-in-up animation-delay-300">
          <div className="aspect-3/4 rounded-xl overflow-hidden mb-4 clinical-shadow bg-surface-container">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              alt={t('member4.name')}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCko6s6sWwU_nFi_QUCobnemH8z8ir9fA8FI_izPHRGryAoL2V71Qf0rUqBJe59yOiUnS_tci0SglOFrjVH5MujU6_1ByZEJc79TYk1zvKM7_O3LbrwHNoCrmRaaT7pC5hrom3LYQ-LYgQlN32qIGGmmujWuptivBbSf8hrg74Rd6nkop4al4hcmb2Kcj66yNz__ygLv3M0IyxYXZG_Cu-3th-Tv8phoS7Zt-eKpPnICEYZGyqRCInzD_y22SYcfwsbw31do54QuPJ3" 
            />
          </div>
          <h4 className="font-body-lg text-body-lg font-bold text-on-surface">{t('member4.name')}</h4>
          <p className="text-secondary font-label-sm text-label-sm">{t('member4.role')}</p>
        </div>
      </div>
    </section>
  );
}
