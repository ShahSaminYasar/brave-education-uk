import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import * as motion from "motion/react-client";

const AccreditationsSection = () => {
  return (
    <div className="section bg-white">
      <section className="w-full max-w-6xl mx-auto">
        <SectionTitle
          text={"Accreditations"}
          subtext={"Certified excellence you can trust"}
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ margin: "-200px 0px -30% 0px" }}
          className="w-full max-w-5xl mx-auto flex flex-row gap-x-14 gap-y-5 items-center justify-center flex-wrap mt-10"
        >
          <Image
            src={"/assets/images/accreditations/tcl.jpg"}
            width={200}
            height={200}
            alt="Trinity College London logo"
            className="w-full max-w-[140px] md:max-w-[160px] xl:max-w-[200px]"
          />
          <Image
            src={"/assets/images/accreditations/bbcci.jpg"}
            width={200}
            height={200}
            alt="British Bangladesh Chamber of Commerce & Industry logo"
            className="w-full max-w-[140px] md:max-w-[160px] xl:max-w-[200px]"
          />
          <Image
            src={"/assets/images/accreditations/british_council.jpg"}
            width={200}
            height={200}
            alt="British Council IELTS logo"
            className="w-full max-w-[140px] md:max-w-[160px] xl:max-w-[200px]"
          />
          <Image
            src={"/assets/images/accreditations/ccot.jpg"}
            width={200}
            height={200}
            alt="Chartered College of Teaching logo"
            className="w-full max-w-[140px] md:max-w-[160px] xl:max-w-[200px]"
          />
          <Image
            src={"/assets/images/accreditations/idp.jpg"}
            width={200}
            height={200}
            alt="IDP logo"
            className="w-full max-w-[140px] md:max-w-[160px] xl:max-w-[200px]"
          />
          <Image
            src={"/assets/images/accreditations/ukrlp.jpg"}
            width={200}
            height={200}
            alt="UK Register of Learning Providers logo"
            className="w-full max-w-[140px] md:max-w-[160px] xl:max-w-[200px]"
          />
          <Image
            src={"/assets/images/accreditations/bc.jpg"}
            width={200}
            height={200}
            alt="British Council logo"
            className="w-full max-w-[140px] md:max-w-[160px] xl:max-w-[200px]"
          />
        </motion.div>
      </section>
    </div>
  );
};
export default AccreditationsSection;
