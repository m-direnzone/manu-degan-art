import { PropsWithChildren, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { MobileMenu } from "./components/MobileMenu";

const Layout = ({ children }: PropsWithChildren) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <>
      {openMobileMenu ? (
        <MobileMenu onClose={() => setOpenMobileMenu(false)} />
      ) : (
        <div>
          <Navbar onMobileMenuOpen={() => setOpenMobileMenu(true)} />
          <div className="content-container">{children}</div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
