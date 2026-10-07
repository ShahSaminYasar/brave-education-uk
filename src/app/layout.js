import {
  Germania_One,
  // Josefin_Sans,
  Montserrat,
  Poppins,
  Raleway,
  Satisfy,
} from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/utils/Lenis";
import { Toaster } from "@/components/ui/sonner";
import { MainProvider } from "@/providers/MainProvider";
import { TanstackQueryProvider } from "@/providers/TanstackQueryProvider";
import FeaturedPopup from "@/components/FeaturedPopup";
import { GoogleTagManager } from "@next/third-parties/google";
import SupportButton from "@/components/SupportButton";
import { getContactSettings } from "@/lib/settings";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: ["400"],
});

const josefinSans = Raleway({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const germania = Germania_One({
  variable: "--font-germania-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: {
    template: "%s | Brave Education UK",
    default: "Brave Education UK - University Admission, Law, English & HR",
  },
  description:
    "Get expert help with University Admission, Brave Law, English Courses, and Brave HR solutions from Brave Education UK. We guide students towards success.",
  icons: "/favicon.jpg",
  keywords: [
    "Brave Education UK",
    "university admission",
    "study in UK",
    "Brave Law",
    "law courses",
    "English courses",
    "B1 English",
    "A2 English",
    "Life in the UK test",
    "Brave HR",
    "human resources solutions",
    "student consultancy UK",
    "educational counselling",
    "study abroad consultants",
    "UK university application",
    "international student support",
    "higher education consultants",
  ],
  robots: "index, follow",
  authors: [{ name: "Brave Education" }],
  metadataBase: new URL("https://www.braveeducationuk.com"),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    description:
      "Get expert help with University Admission, Brave Law, English Courses, and Brave HR solutions from Brave Education UK. We guide students towards success.",
    url: "https://www.braveeducationuk.com",
    siteName: "Brave Education UK",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1280,
        height: 630,
        alt: "Brave Education UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brave Education UK - University Admission, Law, English & HR",
    description:
      "Get expert help with University Admission, Brave Law, English Courses, and Brave HR solutions from Brave Education UK. We guide students towards success.",
    images: ["/og-image.jpg"],
  },
};

export default async function RootLayout({ children }) {
  const contact = await getContactSettings();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Brave Education UK",
    url: "https://www.braveeducationuk.com",
    logo: "https://www.braveeducationuk.com/logo.svg",
    ...(contact?.phones?.[0]?.dial && {
      telephone: contact.phones[0].dial,
    }),
    sameAs: Object.values(contact?.socials || {}).filter(Boolean),
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="LJao6sy599bbhCe9JuTfvHFr6zhDhobUJGNtW_bpCCM"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <ReactLenis root options={{ lerp: 0.125 }}>
        <MainProvider>
          <TanstackQueryProvider>
            <body
              className={`${montserrat?.variable} ${josefinSans?.variable} ${satisfy?.variable} ${poppins?.variable} ${germania?.variable} antialiased`}
            >
              {children}
              <SupportButton contact={contact} />
              <FeaturedPopup />
              <Toaster />
              <GoogleTagManager gtmId="GTM-WJVGMD2N" />
            </body>
          </TanstackQueryProvider>
        </MainProvider>
      </ReactLenis>
    </html>
  );
}
