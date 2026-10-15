import SectionHeading from "@/components/immigration/SectionHeading";
import EventGallery from "./EventGallery";

const EventGallerySection = ({ gallery, eventTitle }) => {
  if (!gallery?.enabled || !gallery.images?.length) return null;

  return (
    <section className="px-5 py-16 bg-slate-50">
      <SectionHeading
        eyebrow="Gallery"
        title={gallery.title || "Gallery"}
        intro={gallery.description}
      />
      <EventGallery images={gallery.images} eventTitle={eventTitle} />
    </section>
  );
};

export default EventGallerySection;
