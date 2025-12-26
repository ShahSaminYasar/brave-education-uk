import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div className="fixed top-0 left-0 bottom-0 w-full -z-50">
          <Image
            src={"/bg-1.jpg"}
            width={1280}
            height={720}
            className="w-full h-full"
            alt="bg image"
            priority
          />
        </div>

        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
      <Footer />
    </>
  );
};
export default layout;
