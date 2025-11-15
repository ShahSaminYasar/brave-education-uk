import SupportButton from "@/components/SupportButton";
import Footer from "../course/life-in-the-uk/Footer";
import Header from "../course/life-in-the-uk/Header";

export const metadata = {
  title: "English (A1-B2), Life in UK & Theory Courses",
  description:
    "Prepare for your UK tests with Brave Education UK. We offer expert courses for A1, A2, B1, B2, Life in the UK, and the Driving Theory test. Enroll today to pass with confidence.",
  keywords: [
    "Life in the UK test course",
    "B1 English test course",
    "A1 English test course",
    "A2 English test",
    "B2 English test",
    "UK driving theory test course",
    "SELT preparation",
  ],
  robots: "index, follow",
};

const layout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="mt-[105px]">{children}</main>

      <SupportButton />

      <Footer />
    </>
  );
};
export default layout;
