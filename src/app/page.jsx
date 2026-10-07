// import AboutSection from "@/components/about/AboutSection";
import AboutSectionV2 from "@/components/about/AboutSectionV2";
import AccreditationsSection from "@/components/accreditations/AccreditationsSection";
import AdmissionPathwaySection from "@/components/admission/AdmissionPathwaySection";
// import FeaturedSection from "@/components/featured/FeaturedSection";
import Footer from "@/components/footer/Footer";
import GallerySection from "@/components/gallery/GallerySection";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero/HeroSection";
import PerksSection from "@/components/perks/PerksSection";
import ServicesSection from "@/components/services/ServicesSection";
import SketchSection from "@/components/sketch/SketchSection";
import SplashScreen from "@/components/SplashScreen";
import Image from "next/image";
import { getContactSettings, getGeneralSettings } from "@/lib/settings";

const page = async () => {
  const [contact, general] = await Promise.all([
    getContactSettings(),
    getGeneralSettings(),
  ]);

  return (
    <>
      <Header />
      <main>
        <div
          className="relative h-fit w-full"
          style={{
            background: "url(/main-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <HeroSection />
          <AboutSectionV2 videoUrl={general?.introVideoUrl} />
          <ServicesSection />
        </div>
        <AdmissionPathwaySection />
        <PerksSection />
        <GallerySection />
        <SketchSection />
        <AccreditationsSection />
      </main>
      <Footer contact={contact} />

      {/* <SplashScreen /> */}
    </>
  );
};
export default page;
