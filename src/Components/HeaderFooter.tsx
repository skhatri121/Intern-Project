import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const HeaderFooter = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default HeaderFooter;
