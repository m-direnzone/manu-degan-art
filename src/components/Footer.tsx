import { Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setIsMobileDevice(true);
    }

    // Carica lo script di Iubenda al caricamento del componente
    const script = document.createElement("script");
    script.src = "https://cdn.iubenda.com/iubenda.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="footer">
      {isMobileDevice ? (
        <>
          <div className="mobile-footer-icon-container">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={"https://www.facebook.com/profile.php?id=100063579694918"}
            >
              <FacebookIcon className="footer-icon" />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" to={"https://www.instagram.com/manudeghi/"}>
              <InstagramIcon className="footer-icon" />
            </Link>
          </div>
          <div className="mobile-footer-content-container">
            <Typography px={5}>
              Ⓒ 2024 - Emanuela Degan - Italian Painter - All right reserved
            </Typography>
            <Typography>
              <a
                href="https://www.iubenda.com/privacy-policy/52099859"
                className="iubenda-white iubenda-noiframe iubenda-embed"
                title="Privacy Policy"
              >
                Privacy Policy
              </a>{"  "}
              |{"  "}
              <a
                href="https://www.iubenda.com/privacy-policy/52099859/cookie-policy"
                className="iubenda-white iubenda-noiframe iubenda-embed"
                title="Cookie Policy"
              >
                Cookie Policy
              </a>
            </Typography>
            <Typography>Designed and Created by {" "} 
              <a href="https://www.linkedin.com/in/mattia-di-renzone-07b75b226/" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>
              Mattia Di Renzone
              </a>
            </Typography>
          </div>
        </>
      ) : (
        <div className="footer-content-container">
          <Typography marginTop={3} marginLeft={10}>
            Ⓒ 2025 - Emanuela Degan - Italian Painter - All right reserved
          </Typography>
          <Typography marginTop={3}>|</Typography>
          <Typography marginTop={3}>
            <a
              href="https://www.iubenda.com/privacy-policy/52099859"
              className="iubenda-white iubenda-noiframe iubenda-embed"
              title="Privacy Policy"
            >
              Privacy Policy
            </a>{"  "}
            |{"  "}
            <a
              href="https://www.iubenda.com/privacy-policy/52099859/cookie-policy"
              className="iubenda-white iubenda-noiframe iubenda-embed"
              title="Cookie Policy"
            >
              Cookie Policy
            </a>
          </Typography>
          <Typography marginTop={3}>|</Typography>
          <Typography marginTop={3}>
            Designed and Created by {" "} 
            <a href="https://www.linkedin.com/in/mattia-di-renzone-07b75b226/" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>
            Mattia Di Renzone
            </a>
          </Typography>
          <div className="footer-icon-container">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={"https://www.facebook.com/profile.php?id=100063579694918"}
            >
              <FacebookIcon className="footer-icon" />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" to={"https://www.instagram.com/manudeghi/"}>
              <InstagramIcon className="footer-icon" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
