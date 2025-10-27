// import AboutSection from "@/components/about/AboutSection";
import AboutSectionV2 from "@/components/about/AboutSectionV2";
import AdmissionPathwaySection from "@/components/admission/AdmissionPathwaySection";
import FeaturedSection from "@/components/featured/FeaturedSection";
import Footer from "@/components/footer/Footer";
import GallerySection from "@/components/gallery/GallerySection";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero/HeroSection";
import PerksSection from "@/components/perks/PerksSection";
import ServicesSection from "@/components/services/ServicesSection";
// import Sketch from "@/components/sketch/Sketch";
import SketchSection from "@/components/sketch/SketchSection";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div
          className="relative h-fit w-full"
          style={{
            background: "url(/white-bg-2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <AboutSectionV2 />
          <ServicesSection />
        </div>
        <AdmissionPathwaySection />
        <PerksSection />
        {/* <FeaturedSection /> */}
        <GallerySection />
        <SketchSection />
      </main>
      <Footer />

      {/* BG */}
      <div className="fixed top-0 left-0 bottom-0 w-full -z-50">
        {/* <div className="block absolute top-0 left-0 w-full h-full bg-sky-50/90 z-10 mix-blend-hard-light backdrop-blur-2xl"></div> */}
        {/* <ShaderGradientCanvas
          style={{
            width: "100%",
            height: "100%",
          }}
          lazyLoad={undefined}
          fov={45}
          pixelDensity={1}
          pointerEvents="none"
        >
          <ShaderGradient
            animate="on"
            type="waterPlane"
            wireframe={false}
            shader="defaults"
            uTime={0.2}
            uSpeed={0.2}
            uStrength={3}
            uDensity={1.8}
            uFrequency={5.5}
            uAmplitude={0}
            positionX={0}
            positionY={-2.1}
            positionZ={0}
            rotationX={0}
            rotationY={0}
            rotationZ={225}
            color1="#bf1b1b"
            color2="#0b0c5d"
            color3="#31185c"
            reflection={0.1}
            // View (camera) props
            cAzimuthAngle={180}
            cPolarAngle={95}
            cDistance={2.4}
            cameraZoom={1}
            // Effect props
            lightType="3d"
            brightness={1.2}
            envPreset="city"
            grain="off"
            // Tool props
            toggleAxis={undefined}
            zoomOut={undefined}
            hoverState=""
            // Optional - if using transition features
            enableTransition={false}
          />
        </ShaderGradientCanvas> */}

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
