import {
  Space_Grotesk,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
  IBM_Plex_Sans_Arabic,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { LangShell } from "@/components/layout/LangShell";

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

export const metadata = {
  title: "Codesudio — Custom software & digital products, built for Saudi businesses.",
  description:
    "Codesudio is a founder-led software company in Jubail, Saudi Arabia. We design and ship websites, apps, ERP, e-commerce and SaaS that move your business forward.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} ${ibmPlexSansArabic.variable}`}
    >
      <body>
        <LanguageProvider>
          <LangShell>{children}</LangShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
