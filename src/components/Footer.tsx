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
  }, []);
  return (
    <div className="footer">
      {isMobileDevice ? (
        <>
          <div className="mobile-footer-icon-container">
            <Link
              target="_blank"
              to={"https://www.facebook.com/profile.php?id=100063579694918"}
            >
              <FacebookIcon className="footer-icon" />
            </Link>
            <Link target="_blank" to={"https://www.instagram.com/manudeghi/"}>
              <InstagramIcon className="footer-icon" />
            </Link>
          </div>
          <div className="mobile-footer-content-container">
            <Typography px={5}>
              Ⓒ 2024 - Emanuela Degan - Italian Painter - All right reserved
            </Typography>
            <Typography>Privacy & cookie policy</Typography>
            <Typography>Designed and Created by Mattia Di Renzone</Typography>
          </div>
        </>
      ) : (
        <div className="footer-content-container">
          <Typography marginTop={3} marginLeft={10}>
            Ⓒ 2024 - Emanuela Degan - Italian Painter - All right reserved
          </Typography>
          <Typography marginTop={3}>|</Typography>
          <Typography marginTop={3}>Privacy & cookie policy</Typography>
          <Typography marginTop={3}>|</Typography>
          <Typography marginTop={3}>
            Designed and Created by Mattia Di Renzone
          </Typography>
          <div className="footer-icon-container">
            <Link
              target="_blank"
              to={"https://www.facebook.com/profile.php?id=100063579694918"}
            >
              <FacebookIcon className="footer-icon" />
            </Link>
            <Link target="_blank" to={"https://www.instagram.com/manudeghi/"}>
              <InstagramIcon className="footer-icon" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
