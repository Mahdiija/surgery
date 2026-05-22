'use client';

import {useTranslations} from 'next-intl';

export default function CaseGallery() {
  const t = useTranslations('ArchivePage');

  const filters = [
    { id: 'all', label: t('Filters.all') },
    { id: 'jaw', label: t('Filters.jaw') },
    { id: 'implants', label: t('Filters.implants') },
    { id: 'reconstruction', label: t('Filters.reconstruction') },
    { id: 'trauma', label: t('Filters.trauma') },
  ];

  return (
    <section>
      {/* Filter Bar */}
      <div className="flex flex-nowrap md:flex-wrap items-center gap-2 md:gap-8 border-b border-outline-variant/20 mb-8 md:mb-12 pb-2 animate-fade-in-up overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
        {filters.map((filter, index) => (
          <button 
            key={filter.id}
            className={`font-label-md text-label-sm md:text-label-md pb-3 transition-colors whitespace-nowrap px-2 md:px-0 ${index === 0 ? 'text-secondary border-b-2 border-secondary' : 'text-on-surface-variant hover:text-secondary'}`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Case Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
        {/* Case Card 1 */}
        <article className="group bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col h-full clinical-shadow transition-all duration-300 hover:-translate-y-2 animate-fade-in-up">
          <div className="aspect-4/5 relative overflow-hidden">
            <img 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              alt={t('Cases.case1.title')}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWhmQTMxm_K_Wuel3YWdF1Gv8j6HMP630BU_fxT4hjb69_Fg_ZxmXpyEBtxp08MqLt4Vc1sMlzGzUWz7_kFhUdk9FhutVI2k6RWeghdeGiRaarOYq_683bx67pfL2Sp6R7JXTpF7dTOcBKTopLFQ_F1kihOA7XrFRSHy44HZcZEN8DY1l5UPMqBKYIGMYxoX4hjoUmCS0cL_EqQOOKiPsC5374qHTEvyVxL12_3wfqFy2McH9QELwqURUua-70VdEy24b42rZ-UBe5" 
            />
            <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4">
              <span className="bg-secondary-container text-on-secondary-container font-label-sm text-[10px] md:text-label-sm px-3 py-1 rounded-full uppercase tracking-tighter">
                {t('Filters.jaw')}
              </span>
            </div>
          </div>
          <div className="p-5 md:p-8 grow flex flex-col">
            <h3 className="font-headline-sm text-lg md:text-headline-sm text-on-surface mb-3">{t('Cases.case1.title')}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 grow">{t('Cases.case1.description')}</p>
            <div className="border-t border-outline-variant/10 pt-6">
              <p className="italic text-on-surface-variant font-body-md mb-2">&quot;{t('Cases.case1.quote')}&quot;</p>
              <p className="font-label-md text-label-md text-secondary">— {t('Cases.case1.author')}</p>
            </div>
          </div>
        </article>

        {/* Case Card 2 */}
        <article className="group bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col h-full clinical-shadow transition-all duration-300 hover:-translate-y-2 animate-fade-in-up animation-delay-100">
          <div className="aspect-4/5 relative overflow-hidden">
            <img 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              alt={t('Cases.case2.title')}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrMgej2pr2KjAlchqTjy0AUwY3dK3-WGFNinMuuthlaxhnFWlS-BomoYGxXicUJ4IhXTer9Q9w4Bt_cni1HcMNgQVDFco2KRpXwAMM9t_dEO1ru5f7YQ4anB3ZjX-EIFcNhrTgQiFIHwTrHsuE5MaqQNXcl5SglN180pDSSjwygCTfsVZCgW8V9_okfyaRH2huAMtyslWnzeZ3Rh7V2N-YpBNp6fPzW9ijrqBuhXkQkOZl2_S3mspsLuwUKQ9FVHygvqFomfhQOuUm" 
            />
            <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4">
              <span className="bg-secondary-container text-on-secondary-container font-label-sm text-[10px] md:text-label-sm px-3 py-1 rounded-full uppercase tracking-tighter">
                {t('Filters.implants')}
              </span>
            </div>
          </div>
          <div className="p-5 md:p-8 grow flex flex-col">
            <h3 className="font-headline-sm text-lg md:text-headline-sm text-on-surface mb-3">{t('Cases.case2.title')}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 grow">{t('Cases.case2.description')}</p>
            <div className="border-t border-outline-variant/10 pt-6">
              <p className="italic text-on-surface-variant font-body-md mb-2">&quot;{t('Cases.case2.quote')}&quot;</p>
              <p className="font-label-md text-label-md text-secondary">— {t('Cases.case2.author')}</p>
            </div>
          </div>
        </article>

        {/* Case Card 3 */}
        <article className="group bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col h-full clinical-shadow transition-all duration-300 hover:-translate-y-2 animate-fade-in-up animation-delay-200">
          <div className="aspect-4/5 relative overflow-hidden">
            <img 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              alt={t('Cases.case3.title')}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCUCeUeOR67K0Ib5EY6z7sasGdk3r6l81IUoY8ov57IIC9EIGIlPY7QLZmCGVKnf_u5xB7_JbT28EhgZ5srKCK_9hdgzgPWCddNIUowulAeIr9qcXU_vS5Mw8w-YVnVdcz1B7MKP11smRQTfdkv1EeSYPVhE4WvxPAOOhJOdYEIK9Rm3v6BP1yE0tmRU6d8XMbkSarinRk9IFiq7vhiT1pY-QFgaV0ta3IYCtO5fGKNTGnVLtnJRQK8UF7_3Mbe_nuKARuEu1p0YVq" 
            />
            <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4">
              <span className="bg-secondary-container text-on-secondary-container font-label-sm text-[10px] md:text-label-sm px-3 py-1 rounded-full uppercase tracking-tighter">
                {t('Filters.reconstruction')}
              </span>
            </div>
          </div>
          <div className="p-5 md:p-8 grow flex flex-col">
            <h3 className="font-headline-sm text-lg md:text-headline-sm text-on-surface mb-3">{t('Cases.case3.title')}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 grow">{t('Cases.case3.description')}</p>
            <div className="border-t border-outline-variant/10 pt-6">
              <p className="italic text-on-surface-variant font-body-md mb-2">&quot;{t('Cases.case3.quote')}&quot;</p>
              <p className="font-label-md text-label-md text-secondary">— {t('Cases.case3.author')}</p>
            </div>
          </div>
        </article>

        {/* Case Card 4 (Asymmetric Grid Element) */}
        <article className="group bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col lg:col-span-2 lg:flex-row h-full clinical-shadow transition-all duration-300 hover:-translate-y-2 animate-fade-in-up">
          <div className="lg:w-1/2 relative overflow-hidden aspect-video lg:aspect-auto">
            <img 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              alt={t('Cases.case4.title')}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUTRpWeu0hYWrJbujx85SIltrd-kAiOFpB52I7vYJqBKO90QEcZYBwhAnwa7v7AEfd9u6PFOnDSi9ewnW9iYd1Kvxq9sFwLhtvFv16N_umyOlT2BVEXDjCf14oCC0_ebMyBp4V2vZra6-Kq6No-m_GvihQfqxh4RbS0j0oxMKFMeEYC2GcJ0OX9U2dDucm_g-_c81TWQr11M8_jEut5XZePrJFXKRGNKFY1FKfUTE389OpyDDJF7K_1FGRqPTa2dAwMf__Gctqx0I2" 
            />
          </div>
          <div className="lg:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
            <span className="font-label-sm md:font-label-md text-label-sm md:text-label-md text-secondary uppercase tracking-widest block mb-4">{t('Cases.case4.label')}</span>
            <h3 className="font-headline-sm lg:font-headline-md text-xl lg:text-headline-md text-on-surface mb-4">{t('Cases.case4.title')}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 lg:mb-8">
              {t('Cases.case4.description')}
            </p>
            <button className="w-full sm:w-fit border border-secondary text-secondary font-label-md text-label-md px-8 py-3 rounded-full hover:bg-secondary hover:text-on-secondary transition-all active:scale-95">
              {t('Cases.case4.cta')}
            </button>
          </div>
        </article>

        {/* Case Card 5 */}
        <article className="group bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col h-full clinical-shadow transition-all duration-300 hover:-translate-y-2 animate-fade-in-up">
          <div className="aspect-4/5 relative overflow-hidden">
            <img 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              alt={t('Cases.case5.title')}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5uy-wmyFavu7LsBBqFo9WVMqXSbhVTHIEUCwb8o_91P0Hz-5XVc-wfKh7_uUpr6KkOI3e6xeHpIydUTni48HQV9Hi2ld8B8eiOz3Bec9I1rL0RBVdkGEeW8G-wU_aIIugKyPfXc2A8qRdB8QqGlwTO_gUXzO71Qq91Iawk97OAQpU6Uj-CwmSr-pRMNm5vMywnWy_YQpG6Ck_HOWUPt_DIZuaX80J2TJAQv6OQQL2Mlz7RTPiR85yb7GyFRZY5tKYChs2HShQ0-gH" 
            />
            <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4">
              <span className="bg-secondary-container text-on-secondary-container font-label-sm text-[10px] md:text-label-sm px-3 py-1 rounded-full uppercase tracking-tighter">
                {t('Filters.jaw')}
              </span>
            </div>
          </div>
          <div className="p-5 md:p-8 grow flex flex-col">
            <h3 className="font-headline-sm text-lg md:text-headline-sm text-on-surface mb-3">{t('Cases.case5.title')}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 grow">{t('Cases.case5.description')}</p>
            <div className="border-t border-outline-variant/10 pt-6">
              <p className="italic text-on-surface-variant font-body-md mb-2">&quot;{t('Cases.case5.quote')}&quot;</p>
              <p className="font-label-md text-label-md text-secondary">— {t('Cases.case5.author')}</p>
            </div>
          </div>
        </article>
      </div>

      {/* CTA Section */}
      <section className="mt-12 md:mt-24 bg-primary rounded-2xl md:rounded-3xl p-6 md:p-16 text-center text-on-primary shadow-lg overflow-hidden relative animate-fade-in-up">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-headline-sm md:font-headline-lg text-2xl md:text-headline-lg mb-4 md:mb-6 text-surface-bright leading-tight">{t('CTA.title')}</h2>
          <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg mb-8 md:mb-10 opacity-90">
            {t('CTA.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-surface-bright text-on-surface font-label-md text-label-md px-10 py-4 rounded-full hover:bg-secondary-fixed transition-all shadow-md active:scale-95">
              {t('CTA.request')}
            </button>
            <button className="border border-white/30 text-white font-label-md text-label-md px-10 py-4 rounded-full hover:bg-white/10 transition-all active:scale-95">
              {t('CTA.contact')}
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
