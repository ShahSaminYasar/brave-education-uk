import Header from "./Header";
import Footer from "./Footer";

const layout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="font-josefin-sans">{children}</main>

      <Footer />
    </>
  );
};
export default layout;
