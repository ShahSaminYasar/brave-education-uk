import AboutSection from "@/components/about/AboutSection";
import AdmissionPathwaySection from "@/components/admission/AdmissionPathwaySection";
import FeaturedSection from "@/components/featured/FeaturedSection";
import GallerySection from "@/components/gallery/GallerySection";
import HeroSection from "@/components/hero/HeroSection";
import PerksSection from "@/components/perks/PerksSection";
import ServicesSection from "@/components/services/ServicesSection";
import Image from "next/image";

const page = () => {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AdmissionPathwaySection />
        <PerksSection />
        <FeaturedSection />
        <GallerySection />
        <div className="mt-[200vh]"></div>
      </main>

      {/* BG */}
      <div className="h-full fixed top-0 left-0 w-full -z-50">
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
          src={"/bg-1.png"}
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
