"use client";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="section min-h-screen relative flex flex-col items-center justify-center gap-5">
      <h1 className="text-[70px] font-poppins block text-center font-[500] leading-[95%] tracking-[-0.05em] w-full max-w-[595px] mx-auto">
        From Guidance to{" "}
        <span className="relative w-fit inline-block p-2">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 598 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 right-0 left-0 bottom-0"
          >
            <path
              d="M330.907 5.78624C275.907 26.0222 38.3972 1.78624 8.89665 52.2755C-4.68935 75.5274 7.39717 92.7755 38.3972 101.775C69.3972 110.775 582.319 149.752 594.5 83.7755C600.5 51.2755 552.092 33.6495 496.5 21.7755C445 10.7755 330.907 27.2755 268.499 3.03952"
              stroke="#C8102E"
              strokeWidth="5"
            />
          </svg>
          <span className="z-10 relative">Graduation</span>
        </span>{" "}
        ~ We Get You There
      </h1>

      <p className="text-xs block text-center w-fit mx-auto bg-primary py-1 px-6 rounded-2xl text-white uppercase font-medium">
        Certified by British Council
      </p>

      <p className="text-sm text-center block w-fit max-w-[480px] text-muted">
        For international and UK students, our licensed consultants provide
        end-to-end support from course selection and applications to visa
        assistance and placements in top universities worldwide.
      </p>

      <div className="flex flex-row items-center gap-3 justify-center mt-1">
        <Button>
          Explore Options <ArrowUpRight />
        </Button>

        <Button variant={"secondary"}>
          Check Eligibility <ArrowUpRight />
        </Button>
      </div>

      {/* BG */}
      <div className="h-full absolute top-0 left-0 w-full -z-10">
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
        />
      </div>
    </section>
  );
};
export default HeroSection;
