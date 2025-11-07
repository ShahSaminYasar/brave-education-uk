import GraduatesGallery from "../ui/GraduatesGallery";
import SectionTitle from "../ui/SectionTitle";
import GallerySlider from "./GallerySlider";

const GallerySection = () => {
  return (
    <div className="section bg-slate-50">
      <section className="w-full max-w-7xl mx-auto flex flex-col gap-2 items-center justify-center">
        <SectionTitle
          subtext={"Our Pride"}
          text={"Graduates Gallery"}
          align="center"
        />

        <p className="para text-center block max-w-[490px] mb-7">
          We take pride in our graduates whose achievements reflect dedication,
          perseverance, and shared success.
        </p>

        <GallerySlider />

        <div className="hidden md:block w-full h-[80vh]">
          <GraduatesGallery />
        </div>
      </section>
    </div>
  );
};
export default GallerySection;
