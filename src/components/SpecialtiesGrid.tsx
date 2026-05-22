'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function SpecialtiesGrid() {
  const t = useTranslations('SpecialtiesPage.Grid');

  const specialties = [
    {
      id: 'reconstructive',
      icon: 'rebase_edit',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBonsJdasUEL58ydGcLT5T8o3KzurXuFiMp41hWVHBOKT-D5YO8QCqYoLOlXkf72MfYxk-m494hzimCZfXkNA8Z73ABKCQkiPXjpLmZCTBEICd_DtCoJNCYg1WqifpXEsvoish2PsUrAtdIWf57z-3IFoY6guJgbG59wHLJJ_nshCiBXOjpULMWcdVcgPaROmM4E80BCIgoZVSvn_Wfxs2Co1v_y6OKebLYyEPsr4vHbxafZfRCj7fJgY2N3zC4NXlgIV5O5MfTRGdP',
      color: 'secondary'
    },
    {
      id: 'oral',
      icon: 'dentistry',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsS7_ES3xWZX3jLIcqBZA723lQ83yOO_66AbtGUelwdF76Lcip2gR4ShC7GK1RBL20sejDP2BzyIO9JsHuOGhvIQkYQjMNCXRwntk5qMbe7scbGcAWdXTzODv9MpdXSKYX3ipp1c6UYSIcOO-9BcjWE5LNUFAKmQlRFIQHTbyY2xmah-EqGG7m3zUaqv8iO-cm4ANOGcgGiou2CT2DianuFpRGsGl9ll-VGZv8GbN_rdh8szMLUYBa-gIYQEECrJA8jJr5jo2qkXjO',
      color: 'secondary'
    },
    {
      id: 'aesthetics',
      icon: 'face_6',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRp1K1ux7wjaoSc-4YsnIrUQF0IccfU0UpjDWlP_BCQniX2npptP42DLozFaxmrAwbUh4bFgsf_IcHi9ExYuAnoketofQyqU7AJ5lJ08ZfcVtx4i49phJIG52ZMj626ytdxYAoYzsH8dMSCRz7e4rai1GQcruxk7v-6a9Crsc63sU_2QjAIC68i_Gyc_2NaECTdKT9VVS4z7MErLCE9cg9e9CJ4Sl7smvwvWiA1TgM7VlBrw3W4WZDvXFsRFCkZPs1aXz7WzwF2cee',
      color: 'secondary'
    },
    {
      id: 'trauma',
      icon: 'medical_services',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt8b4UnJ1QK5TdubJTJ8Fr2x8_-q6binTRQ3kLdBdCFqCV1_tteNiulj73QIzGGua9MiaOBd9h6_88Wr_IHHBUUmkLgMyIIS3sXfe0NNXlqetAsmlEX5-PXd9ycn1J9rg1qnxiSsQPMCV2hUHeRMmD9EpzFke9noUs1kKO8Vw1LaKNSJaIBn7Inu2vRLck8hCDvlmulJCxVt425iXJiUyKSmn6iyNUvZttQxJkio8kx4R_6efONFi3f1RHQSc4eP8nzbBivvYYvNhI',
      color: 'error'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
      {specialties.map((specialty, index) => (
        <div 
          key={specialty.id} 
          className={`group relative flex flex-col bg-surface-container-low rounded-xl overflow-hidden clinical-shadow transition-all duration-300 hover:-translate-y-2 animate-fade-in-up`}
          style={{animationDelay: `${index * 100}ms`}}
        >
          <div className="aspect-4/3 overflow-hidden">
            <img 
              alt={t(`${specialty.id}.title`)} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              src={specialty.image} 
            />
          </div>
          <div className="p-8 flex flex-col grow">
            <div className={`w-12 h-12 rounded-full ${specialty.color === 'error' ? 'bg-error/10' : 'bg-secondary/10'} flex items-center justify-center mb-6`}>
              <span className={`material-symbols-outlined ${specialty.color === 'error' ? 'text-error' : 'text-secondary'}`} style={{fontVariationSettings: "'FILL' 1"}}>
                {specialty.icon}
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">{t(`${specialty.id}.title`)}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 grow">
              {t(`${specialty.id}.description`)}
            </p>
            <Link 
              className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary hover:underline group-hover:gap-3 transition-all" 
              href={`/specialties/${specialty.id}`}
            >
              {t('viewDetails')}
              <span className="material-symbols-outlined text-sm rtl:rotate-180">arrow_forward</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
