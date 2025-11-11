import { IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { IT, US } from "country-flag-icons/react/3x2";

interface MobileMenuProps {
  onClose: () => void;
}

export const MobileMenu = ({ onClose }: MobileMenuProps) => {
  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (languageToChange: string) => {
    if (languageToChange === "it") {
      i18n.changeLanguage("it");
      setCurrentLanguage("it");
    } else if (languageToChange === "en-US") {
      i18n.changeLanguage("en-US");
      setCurrentLanguage("en-US");
    }
  };
  return (
    <div className="mobile-menu-container">
      <IconButton
        className="mobile-menu-close-icon-container"
        onClick={onClose}
      >
        <CloseIcon className="mobile-menu-close-icon" />
      </IconButton>
      <div className="mobile-menu">
        <NavLink to={"/"} rel="canonical" className="mobile-menu-link">
          <Typography className="mobile-menu-text">{t("galleria")}</Typography>
        </NavLink>
        <NavLink to={"/biography"} rel="canonical" className="mobile-menu-link">
          <Typography className="mobile-menu-text">{t("biografia")}</Typography>
        </NavLink>
        <NavLink to={"/about-me"} rel="canonical" className="mobile-menu-link">
          <Typography className="mobile-menu-text">{t("in-primo-piano")}</Typography>
        </NavLink>
        <NavLink to={"/school"} rel="canonical" className="mobile-menu-link">
          <Typography className="mobile-menu-text">{t("corsi")}</Typography>
        </NavLink>
        <NavLink to={"/contacts"} rel="canonical" className="mobile-menu-link">
          <Typography className="mobile-menu-text">{t("contatti")}</Typography>
        </NavLink>
        <div className="mobile-language-selection">
          <Typography className="small-title" marginBottom={"20px"}>
            {t("linguaggio")}
          </Typography>
          <div
            className="mobile-language-choice"
            onClick={() => changeLanguage("it")}
            style={{
              borderBottom:
                currentLanguage === "it" ? "2px solid #e3e3e3" : "0",
            }}
          >
            <IT className="flag-icon" />
            <Typography color={"#b0a300"}>Italiano</Typography>
          </div>
          <div
            className="mobile-language-choice"
            onClick={() => changeLanguage("en-US")}
            style={{
              borderBottom:
                currentLanguage === "en-US" ? "2px solid #e3e3e3" : "0",
            }}
          >
            <US className="flag-icon" />
            <Typography color={"#b0a300"}>English</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
