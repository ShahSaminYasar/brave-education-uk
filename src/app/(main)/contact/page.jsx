import SectionTitle from "@/components/ui/SectionTitle";
import * as motion from "motion/react-client";
import BranchBox from "./BranchBox";
import {
  CalendarClock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageSquare,
  Music2,
} from "lucide-react";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact",
};

const page = () => {
  const branches = [
    {
      image: "/assets/images/london.jpg",
      name: "London, UK",
      address: "129 Whitechapel road, E1 1DT (Opposite to East London Mosque)",
      mapLink: "https://maps.app.goo.gl/5eXR1csBfzyFFnn46",
      phone: "0800 999 1257",
    },
    {
      image: "/assets/images/sylhet.jpg",
      name: "Sylhet, Bangladesh",
      address:
        "House No. 05,1st floor, Block-C, Main Road, Shahjalal Upashahar Sylhet",
      mapLink: "https://maps.app.goo.gl/9QK7BF1UxGBxJ6Us9",
      phone: "+8801623999611",
    },
    {
      image:
        "https://media.istockphoto.com/id/1289383957/photo/blurred-bangkok-city-night-background.jpg?s=612x612&w=0&k=20&c=703HmMWVVGZEzIidIjBe71s2btnHmSX1uJABxhkGaZs=",
      name: "Coming Soon",
      address: "",
      mapLink: "",
      phone: "",
    },
  ];

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
            subtext={"Get in touch"}
            text={"Contact Us"}
            align="center"
            style={{
              fontSize: "50px",
              fontWeight: "800",
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-center w-full max-w-md mx-auto">
          From your application and admission to housing and visa assistance, we
          handle every detail. Get in touch today and let’s turn your dreams
          into reality.
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

      {/* Branches */}
      <div className="w-full bg-white">
        <section className="section w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mx-auto relative">
          {/* Left */}
          <div className="py-20 relative md:sticky md:top-0 w-full h-fit flex flex-col items-start justify-center gap-4">
            <div className={"md:block hidden"}>
              <SectionTitle
                subtext={"Our Branches"}
                text={"Call or visit us at one of our branches"}
                align="left"
                animate={false}
              />
            </div>

            <div className={"block md:hidden"}>
              <SectionTitle
                subtext={"Our Branches"}
                text={"Call or visit us at one of our branches"}
                align="center"
                animate={false}
              />
            </div>

            <p className="para mb-2 text-center md:text-left">
              Whether you prefer a call or an in-person visit, our friendly team
              at any branch is ready to assist you.
            </p>

            <div className="flex flex-row flex-wrap gap-8 justify-center mt-5">
              {/* <div className="flex flex-col gap-2 items-center justify-center text-sm text-zinc-800 w-[210px]">
                <div className="block w-fit rounded-full aspect-square p-3 bg-secondary-foreground text-white mb-1">
                  <Phone size={25} />
                </div>
                <span className="font-normal">Phone number</span>
                <Link href={`tel:+4408009991257`} className="font-semibold">
                  0800 999 1257
                </Link>
              </div> */}

              <div className="flex flex-col gap-2 items-center justify-center text-sm text-zinc-800 w-[210px]">
                <div className="block w-fit rounded-full aspect-square p-3 bg-secondary-foreground text-white mb-1">
                  <CalendarClock size={25} />
                </div>
                <span className="font-normal">Working hours</span>
                <span className="font-semibold">10am - 7pm</span>
              </div>

              <div className="flex flex-col gap-2 items-center justify-center text-sm text-zinc-800 w-[210px]">
                <div className="block w-fit rounded-full aspect-square p-3 bg-secondary-foreground text-white mb-1">
                  <Mail size={25} />
                </div>
                <span className="font-normal">Email address</span>
                <Link
                  href={`mailto:info@braveeducationuk.com`}
                  className="font-semibold"
                >
                  info@braveeducationuk.com
                </Link>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-10">
            {branches?.map((branch, id) => (
              <BranchBox
                key={`branch_${id}`}
                image={branch?.image}
                name={branch?.name}
                address={branch?.address}
                mapLink={branch?.mapLink}
                phone={branch?.phone}
              />
            ))}
          </div>
        </section>
      </div>

      <div className="section bg-[#fff]">
        <section
          className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden p-6 grid grid-cols-1 md:grid-cols-5 items-end justify-between gap-6 shadow-xl"
          style={{
            background: "url(/bg-dark.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="col-span-2 grid grid-cols-3 gap-4 justify-center items-center bg-white/10 backdrop-blur-[5px] rounded-2xl p-6 text-sm text-white">
            <div>
              <span className="font-semibold block">Phone Number</span>
              <Link href={"tel:+4408009991257"}>0800 999 1257</Link>
            </div>

            <div className="col-span-2 flex flex-wrap items-center justify-end gap-2">
              <Link
                href={"https://www.facebook.com/braveeduuk/"}
                target="_blank"
                className="block aspect-square p-2 rounded-full bg-white/20 text-white/70 hover:bg-white/90 hover:text-blue-800 duration-200"
              >
                <Facebook size={15} />
              </Link>
              <Link
                href={"https://uk.linkedin.com/company/braveedu"}
                target="_blank"
                className="block aspect-square p-2 rounded-full bg-white/20 text-white/70 hover:bg-white/90 hover:text-sky-600 duration-200"
              >
                <Linkedin size={15} />
              </Link>
              <Link
                href={"https://www.instagram.com/braveeducationuk/"}
                target="_blank"
                className="block aspect-square p-2 rounded-full bg-white/20 text-white/70 hover:bg-white/90 hover:text-pink-600 duration-200"
              >
                <Instagram size={15} />
              </Link>
              <Link
                href={"https://wa.me/+447862042900"}
                target="_blank"
                className="block aspect-square p-2 rounded-full bg-white/20 text-white/70 hover:bg-white/90 hover:text-green-600 duration-200"
              >
                <MessageSquare size={15} />
              </Link>
              <Link
                href={"https://www.facebook.com/braveeduuk/"}
                target="_blank"
                className="block aspect-square p-2 rounded-full bg-white/20 text-white/70 hover:bg-white/90 hover:text-slate-800 duration-200"
              >
                <Music2 size={15} />
              </Link>
            </div>
          </div>

          <div className="col-span-3 space-y-4 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="bg-gradient-to-br from-white/100 to-white/5 bg-clip-text space-y-4">
              {/* Badge */}
              <div className="bg-gradient-to-br from-white/5 via-white/20 border border-white/30 to-white/5 rounded-2xl p-px w-fit">
                <div className="flex flex-row items-center justify-center gap-2 bg-white/5 text-white/60 text-[12px] font-medium rounded-2xl px-4 py-[2px]">
                  <span
                    className="block bg-gradient-to-br from-white/80 from-30% 
                      via-white/90 via-50% 
                      to-white/80 to-80% bg-clip-text"
                  >
                    <span className="text-transparent flex items-center gap-2">
                      <Mail size={15} className="text-white/50" /> Send a
                      Message
                    </span>
                  </span>
                </div>
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl block
              font-montserrat font-semibold text-transparent"
              >
                Let's Talk
              </h2>
            </div>

            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
};
export default page;
