import AboutPageCounters from "@/components/about/AboutPageCounters";
import AboutPageMissionVision from "@/components/about/AboutPageMissionVision";
import Map from "@/components/Map";
import SectionTitle from "@/components/ui/SectionTitle";
import VideoContent from "./VideoContent";
import * as motion from "motion/react-client";

export const metadata = {
  title: "About Us",
};

const page = () => {
  return (
    <main
      style={{
        background:
          "linear-gradient(182deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 1) 100%), url(/white-bg.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Title Section */}
      <motion.section
        initial={{ filter: "blur(5px)", scale: 0.98, opacity: 0.7 }}
        animate={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
        transition={{ delay: 0.05, duration: 0.15, ease: "linear" }}
        className="py-[100px] w-full max-w-6xl mx-auto px-5 flex flex-col gap-3 items-center justify-center min-h-[100vh]"
      >
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"About"}
            text={"Brave Education"}
            align="center"
            style={{
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-center w-full max-w-md mx-auto">
          Redefining learning for a brave new world. Where curiosity meets
          courage, and education becomes an adventure.
        </p>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-9 border-2 border-gray-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-300 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.section>
      <VideoContent />
      <AboutPageCounters />
      <AboutPageMissionVision />
      {/* TODO: */}
      <Map />
    </main>
  );
};
export default page;
