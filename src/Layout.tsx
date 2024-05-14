import { PropsWithChildren } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      <div className="content-container">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
