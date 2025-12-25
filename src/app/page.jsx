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

const page = () => {
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
          <AboutSectionV2 />
          <ServicesSection />
        </div>
        <AdmissionPathwaySection />
        <PerksSection />
        <AccreditationsSection />
        <GallerySection />
        <SketchSection />
      </main>
      <Footer />

      {/* <SplashScreen /> */}

      {/* BG */}
      <div className="fixed top-0 left-0 bottom-0 w-full -z-50">
        <Image
          src={"/bg-1.jpg"}
          width={1280}
          height={720}
          className="w-full h-full"
          alt="bg image"
          priority
        />
      </div>
    </>
  );
};
export default page;
