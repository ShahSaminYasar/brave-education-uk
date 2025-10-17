import { Montserrat, Poppins } from "next/font/google";
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

import { ReactLenis } from "@/utils/Lenis";

export const metadata = {
  title: "Brave Education UK",
  description: "From guidance to graduation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactLenis root options={{ lerp: 0.05 }}>
        <body className={`${montserrat.className} antialiased`}>
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
