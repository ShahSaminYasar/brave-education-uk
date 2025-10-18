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

      <div style={{ width: "100vw", height: "80vh" }}>
        <GraduatesGallery />
      </div>
    </section>
  );
};
export default GallerySection;
