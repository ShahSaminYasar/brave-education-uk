import Image from "next/image";

const FeaturedSection = () => {
  return (
    <section
      className="section"
      style={{
        backgroundImage: `url('/bg-dark.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Image
        src={"/assets/images/featured.jpg"}
        width={750}
        height={250}
        alt="Featured image"
        className="w-full max-w-[750px] object-contain rounded-2xl mx-auto shadow-2xl"
      />
    </section>
  );
};
export default FeaturedSection;
