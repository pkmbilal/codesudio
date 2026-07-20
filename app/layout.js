import {
  Space_Grotesk,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
  IBM_Plex_Sans_Arabic,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { LangShell } from "@/components/layout/LangShell";
import { SITE_URL, SITE_NAME, ORG_JSON_LD } from "@/lib/seo";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

const DESCRIPTION =
  "Codesudio is a founder-led software company in Jubail, Saudi Arabia. We design and ship websites, apps, ERP, e-commerce and SaaS that move your business forward.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Codesudio — Custom software & digital products, built for Saudi businesses.",
    template: "%s — Codesudio",
  },
  description: DESCRIPTION,
  keywords: [
    "custom software Jubail",
    "software company Saudi Arabia",
    "SaaS development KSA",
    "ERP Saudi Arabia",
    "e-commerce ZATCA invoicing",
    "web and mobile apps Eastern Province",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  applicationName: SITE_NAME,
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE_NAME,
    title: "Codesudio — Custom software & digital products, built for Saudi businesses.",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Codesudio — Custom software & digital products, built for Saudi businesses.",
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }) {
  return (
    // lang stays "en": the language toggle in LangShell only swaps `dir` client-side —
    // Arabic is never server-rendered at a distinct URL (locale routing is a future gap).
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} ${ibmPlexSansArabic.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
        <LanguageProvider>
          <LangShell>{children}</LangShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
