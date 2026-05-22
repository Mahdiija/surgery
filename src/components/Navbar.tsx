'use client';

import {useTranslations, useLocale} from 'next-intl';
import {Link, usePathname} from '@/i18n/routing';
import {useState, useEffect} from 'react';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/services', label: t('services'), icon: 'medical_services' },
    { href: '/specialties', label: t('specialties'), icon: 'clinical_notes' },
    { href: '/about', label: t('about'), icon: 'info' },
    { href: '/archive', label: t('archive'), icon: 'photo_library' },
    { href: '/contact', label: t('contact'), icon: 'contact_support' },
  ];

  return (
    <>
      <header className="bg-surface/80 backdrop-blur-md dark:bg-surface-container-highest/80 w-full top-0 sticky z-50 border-b border-outline-variant/30 dark:border-outline/20 shadow-sm">
        <div className="flex justify-between items-center w-full px-4 md:px-margin-desktop max-w-container-max mx-auto py-4">
          <Link href="/" className="flex items-center gap-2 group z-50">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-on-primary group-hover:bg-secondary transition-colors duration-300 shadow-clinical">
              <span className="material-symbols-outlined text-2xl font-bold">medical_services</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-headline-sm text-xl font-bold text-on-surface dark:text-surface-bright tracking-tighter">
                {t('brand')}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">
                Surgical Arts
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                className={`${pathname === link.href ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-primary'} dark:text-on-primary-container dark:hover:text-primary-fixed-dim transition-colors font-body-md text-body-md`} 
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 border-l border-outline-variant/30 pl-8 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-8">
              <Link href={pathname} locale="fa" className="text-body-sm font-medium hover:text-primary transition-colors">FA</Link>
              <span className="text-outline-variant/30">|</span>
              <Link href={pathname} locale="en" className="text-body-sm font-medium hover:text-primary transition-colors">EN</Link>
            </div>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/book" className="hidden sm:block bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-md text-label-md scale-95 active:scale-90 transition duration-150 hover:bg-secondary text-center">
              {t('book')}
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-on-surface z-50 relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors"
              aria-label="Toggle Menu"
            >
              <div className="flex flex-col gap-1.5 w-6">
                <span className={`h-0.5 w-full bg-on-surface rounded-full transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`h-0.5 w-full bg-on-surface rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
                <span className={`h-0.5 w-full bg-on-surface rounded-full transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-surface/98 dark:bg-surface-container-highest/98 backdrop-blur-2xl z-40 md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col h-full pt-28 px-6 pb-12 overflow-y-auto">
          <div className="mb-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-secondary/60 font-black mb-6 block px-4">Menu</span>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link, index) => (
                <Link 
                  key={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-5 p-4 rounded-3xl transition-all duration-500 transform group ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'rtl:translate-x-12 -translate-x-12 opacity-0'
                  } ${
                    pathname === link.href 
                      ? 'bg-secondary/10 text-secondary' 
                      : 'text-on-surface-variant dark:text-on-primary-container hover:bg-surface-container-low dark:hover:bg-surface-container-high'
                  }`}
                  style={{ transitionDelay: `${index * 70}ms` }}
                  href={link.href}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    pathname === link.href 
                      ? 'bg-secondary text-on-secondary shadow-xl shadow-secondary/30 scale-105' 
                      : 'bg-surface-container dark:bg-surface-container-highest text-on-surface-variant dark:text-on-primary-container group-hover:scale-110 group-hover:bg-secondary/10 group-hover:text-secondary'
                  }`}>
                    <span className="material-symbols-outlined text-3xl">{link.icon}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className={`text-2xl font-bold tracking-tight transition-colors ${
                      pathname === link.href ? 'text-secondary' : 'text-on-surface dark:text-surface-bright group-hover:text-secondary'
                    }`}>
                      {link.label}
                    </span>
                    {pathname === link.href && (
                      <span className="text-[10px] uppercase tracking-[0.2em] font-black opacity-50">
                        {locale === 'fa' ? 'صفحه فعلی' : 'Current Page'}
                      </span>
                    )}
                  </div>
                  {pathname === link.href && (
                    <div className="ml-auto rtl:mr-auto rtl:ml-0">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-secondary text-lg font-bold">check</span>
                      </div>
                    </div>
                  )}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className={`mt-auto space-y-10 transition-all duration-700 delay-300 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="bg-surface-container-low dark:bg-surface-container-high p-6 rounded-3xl border border-outline-variant/20">
              <span className="text-[10px] uppercase tracking-[0.3em] text-secondary/60 font-black mb-6 block">Select Language</span>
              <div className="grid grid-cols-2 gap-3">
                <Link 
                  href={pathname} 
                  locale="fa" 
                  onClick={() => setIsMenuOpen(false)} 
                  className={`py-4 rounded-2xl text-center font-bold transition-all flex flex-col items-center gap-1 ${locale === 'fa' ? 'bg-secondary text-on-secondary shadow-lg shadow-secondary/20 scale-[1.02]' : 'bg-surface/50 dark:bg-surface-bright/10 text-on-surface-variant hover:bg-surface dark:hover:bg-surface-bright/20'}`}
                >
                  <span className="text-lg">فارسی</span>
                  <span className="text-[9px] uppercase tracking-tighter opacity-60">Persian</span>
                </Link>
                <Link 
                  href={pathname} 
                  locale="en" 
                  onClick={() => setIsMenuOpen(false)} 
                  className={`py-4 rounded-2xl text-center font-bold transition-all flex flex-col items-center gap-1 ${locale === 'en' ? 'bg-secondary text-on-secondary shadow-lg shadow-secondary/20 scale-[1.02]' : 'bg-surface/50 dark:bg-surface-bright/10 text-on-surface-variant hover:bg-surface dark:hover:bg-surface-bright/20'}`}
                >
                  <span className="text-lg">English</span>
                  <span className="text-[9px] uppercase tracking-tighter opacity-60">English</span>
                </Link>
              </div>
            </div>
            
            <Link 
              href="/book" 
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-primary text-on-primary py-6 rounded-[2rem] font-bold text-center shadow-2xl shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-4 text-xl"
            >
              <span className="material-symbols-outlined text-2xl">calendar_month</span>
              {t('book')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
