import Counters from "./Counters";
import Details from "./Details";
import FAQ from "./FAQ";
import Features from "./Features";
import Form from "./Form";
import Hero from "./Hero";
import Perks from "./Perks";
import SuccessStories from "./SuccessStories";

const page = () => {
  return (
    <>
      <Hero />
      <Details />
      <Features />
      <Counters />
      <SuccessStories />
      <Perks />
      <FAQ />
      <Form />
    </>
  );
};
export default page;
