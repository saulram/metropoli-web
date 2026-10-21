import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "../i18n/LanguageContext";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const title = "Grupo Metrópoli - Agentes de Seguros y de Fianzas";
const description = "Nuestro propósito es Asegurar Momentos de Tranquilidad";
const canonicalOrigin = new URL("https://www.grupometropoli.com.mx");
// Preview images must exist on the deployment being reviewed, before promotion.
const imageOrigin = process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL
  ? new URL(`https://${process.env.VERCEL_URL}`)
  : canonicalOrigin;
const socialImage = {
  url: new URL("/social/metropoli.png", imageOrigin).href,
  width: 1200,
  height: 630,
  alt: "Grupo Metrópoli. Nuestro propósito es Asegurar Momentos de Tranquilidad",
  type: "image/png",
};

export const metadata: Metadata = {
  metadataBase: canonicalOrigin,
  title,
  description,
  // Next resolves ./ against each route, preserving its canonical pathname.
  alternates: { canonical: "./" },
  openGraph: {
    title,
    description,
    url: "./",
    type: "website",
    siteName: "Grupo Metrópoli",
    locale: "es_MX",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MZYFC0YN24"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MZYFC0YN24');
          `}
        </Script>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T5RM87JV');
          `}
        </Script>
        {/* End Google Tag Manager */}

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T5RM87JV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/48421759.js"></script>
        <script src="https://js.hsforms.net/forms/embed/48421759.js" async></script>
      </body>
    </html>
  );
}
