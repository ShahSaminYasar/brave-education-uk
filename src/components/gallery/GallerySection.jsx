import GraduatesGallery from "../ui/GraduatesGallery";
import SectionTitle from "../ui/SectionTitle";

const GallerySection = () => {
  return (
    <section className="section w-full flex flex-col gap-5 items-center justify-center bg-white">
      <SectionTitle
        subtext={"Our Pride"}
        text={"Graduate Gallery"}
        align="center"
      />

      <div className="w-[100vw] h-[45vh] md:h-[80vh]">
        <GraduatesGallery />
      </div>
    </section>
  );
};
export default GallerySection;
