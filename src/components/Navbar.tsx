import { IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { IT, US } from "country-flag-icons/react/3x2";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageSelector from "./LanguageSelector";

interface NavbarProps {
  onMobileMenuOpen?: () => void;
}

const Navbar = ({ onMobileMenuOpen }: NavbarProps) => {
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
    <div className="navbar-container">
      <NavLink className={"header-title-container"} to={"/"}>
        <Typography className="header-title">Emanuela Degan</Typography>
      </NavLink>
      <IconButton
        onClick={onMobileMenuOpen}
        className="hamburger-menu-icon-button"
      >
        <MenuIcon className="hamburger-menu-icon" />
      </IconButton>
      <ul className="navbar">
        <li>
          <NavLink className={"navlink"} to={"/"}>
            <Typography className="link-text">{t("galleria")}</Typography>
          </NavLink>
        </li>
        <li>
          <NavLink className={"navlink"} to={"/biography"}>
            <Typography className="link-text">{t("biografia")}</Typography>
          </NavLink>
        </li>
        <li>
          <NavLink className={"navlink"} to={"/about-me"}>
            <Typography className="link-text">{t("in-primo-piano")}</Typography>
          </NavLink>
        </li>

        <li>
          <NavLink className={"navlink"} to={"/school"}>
            <Typography className="link-text">{t("corsi")}</Typography>
          </NavLink>
        </li>
        <li>
          <NavLink className={"navlink"} to={"/contacts"}>
            <Typography className="link-text">{t("contatti")}</Typography>
          </NavLink>
        </li>
        <li />
        <li />
        <li>
          <div className="dropdown-menu-container">
            <div className="language-choice" style={{ marginTop: "10%" }}>
              {currentLanguage === "it" ? (
                <IT className="flag-icon" />
              ) : (
                <US className="flag-icon" />
              )}
              <Typography color={"#a39922"}>
                {currentLanguage === "it" ? "IT" : "EN"}
              </Typography>
              <KeyboardArrowDownIcon className="link-icon" />
            </div>
            <div className="dropdown-menu">
              <div
                className="language-choice"
                style={{
                  marginTop: "20px",
                  borderBottom:
                    currentLanguage === "it" ? "2px solid #e3e3e3" : "0",
                }}
                onClick={() => changeLanguage("it")}
              >
                <IT className="flag-icon" />
                <Typography color={"#b0a300"}>Italiano</Typography>
              </div>
              <div
                className="language-choice"
                style={{
                  marginTop: "10px",
                  borderBottom:
                    currentLanguage === "en-US" ? "2px solid #e3e3e3" : "0",
                }}
                onClick={() => changeLanguage("en-US")}
              >
                <US className="flag-icon" />
                <Typography color={"#b0a300"}>English</Typography>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="language-menu-container">
        <LanguageSelector
          currentLanguage={currentLanguage}
          onChangeLanguage={changeLanguage}
        />
      </div>
    </div>
  );
};

export default Navbar;
