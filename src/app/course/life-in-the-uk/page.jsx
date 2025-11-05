import Counters from "./Counters";
import Details from "./Details";
// import FAQ from "./FAQ";
import Features from "./Features";
import Form from "./Form";
import Hero from "./Hero";
import Perks from "./Perks";
import SuccessStories from "./SuccessStories";

export const metadata = {
  title: "Life in the UK Course",
  description:
    "Start your journey to living confidently in the UK with our Life in the UK Course. Designed especially for international students and newcomers, this programme guides you through British values, culture, society, and everyday life - so you arrive informed, empowered, and ready to thrive.",
  keywords: [
    "Life in the UK course",
    "UK citizenship preparation",
    "British culture course",
    "UK values and society training",
    "international student UK entry course",
  ],
  robots: "index, follow",
};
const page = () => {
  return (
    <>
      <Hero />
      <Details />
      <Features />
      <Counters />
      <SuccessStories />
      <Perks />
      {/* <FAQ /> */}
      <Form />
    </>
  );
};
export default page;
