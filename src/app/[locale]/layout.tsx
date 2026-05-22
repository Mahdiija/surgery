import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {Inter, Playfair_Display} from 'next/font/google';
import localFont from 'next/font/local';
import "../globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const iranSansX = localFont({
  src: [
    {
      path: '../../../public/fonts/IranSansX(Pro)/Webfonts/fonts/woff2/IRANSansX-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/IranSansX(Pro)/Webfonts/fonts/woff2/IRANSansX-UltraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/IranSansX(Pro)/Webfonts/fonts/woff2/IRANSansX-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/IranSansX(Pro)/Webfonts/fonts/woff2/IRANSansX-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/IranSansX(Pro)/Webfonts/fonts/woff2/IRANSansX-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/IranSansX(Pro)/Webfonts/fonts/woff2/IRANSansX-DemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/IranSansX(Pro)/Webfonts/fonts/woff2/IRANSansX-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/IranSansX(Pro)/Webfonts/fonts/woff2/IRANSansX-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/IranSansX(Pro)/Webfonts/fonts/woff2/IRANSansX-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-iran-sans-x',
  display: 'swap',
});

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Navbar'});
 
  return {
    title: t('brand') + " | Excellence in Maxillofacial Surgery",
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "en" | "fa")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const isRtl = locale === 'fa';

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'} className={`${inter.variable} ${playfair.variable} ${iranSansX.variable}`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className={`${isRtl ? 'font-iran-sans-x' : 'font-inter'} overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
