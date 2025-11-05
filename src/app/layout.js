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
import Script from "next/script";

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
  openGraph: {
    title: "Brave Education UK - University Admission, Law, English & HR",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WJVGMD2N');
          `}
        </Script>
      </head>
      <ReactLenis root options={{ lerp: 0.105 }}>
        <MainProvider>
          <TanstackQueryProvider>
            <body
              className={`${montserrat?.variable} ${josefinSans?.variable} ${satisfy?.variable} ${poppins?.variable} ${germania?.variable} antialiased`}
            >
              {/* Google Tag Manager (noscript) */}
              <noscript>
                <iframe
                  src="https://www.googletagmanager.com/ns.html?id=GTM-WJVGMD2N"
                  height="0"
                  width="0"
                  style={{
                    display: "none",
                    visibility: "hidden",
                  }}
                ></iframe>
              </noscript>
              {/* End Google Tag Manager (noscript) */}

              {children}
              <FeaturedPopup />
              <Toaster />
            </body>
          </TanstackQueryProvider>
        </MainProvider>
      </ReactLenis>
    </html>
  );
}
