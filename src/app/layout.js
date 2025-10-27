import { Germania_One, Montserrat, Poppins, Satisfy } from "next/font/google";
import "./globals.css";

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

const germania = Germania_One({
  variable: "--font-germania-one",
  subsets: ["latin"],
  weight: ["400"],
});

import { ReactLenis } from "@/utils/Lenis";

export const metadata = {
  title: {
    template: "%s | Brave Education UK",
    default: "Brave Education UK",
  },
  description: "From guidance to graduation, we help you achieve your goal.",
  icons: "/favicon.jpg",
  keywords: [],
  robots: "index, follow",
  authors: [{ name: "Brave Education" }],
  metadataBase: new URL("https://www.braveeducationuk.com"),
  openGraph: {
    title: "Brave Education UK",
    description: "From guidance to graduation, we help you achieve your goal.",
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
    title: "Brave Education UK",
    description: "From guidance to graduation, we help you achieve your goal.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactLenis root options={{ lerp: 0.05 }}>
        <body
          className={`${montserrat?.variable} ${satisfy?.variable} ${poppins?.variable} ${germania?.variable} antialiased`}
        >
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
