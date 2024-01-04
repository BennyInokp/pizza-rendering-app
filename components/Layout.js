
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="">
        {children}
        <Footer />
      
      </div>
    </>
  );
};

export default Layout;

