import { Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { IT, US } from "country-flag-icons/react/3x2";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState("it");

  const changeLanguage = (languageToChange: string) => {
    debugger;
    if (languageToChange === "it") {
      i18n.changeLanguage("it");
      setCurrentLanguage("it");
    } else if (languageToChange === "en") {
      i18n.changeLanguage("en-US");
      setCurrentLanguage("en");
    }
  };

  return (
    <div className="navbar-container">
      <ul className="navbar">
        <li>
          <NavLink className={"navlink"} to={"/"}>
            <Typography className="link-text">Emanuela Degan</Typography>
          </NavLink>
        </li>
        <li>
          <NavLink className={"navlink"} to={"/biography"}>
            <Typography className="link-text">{t("biografia")}</Typography>
          </NavLink>
        </li>
        <li>
          <NavLink className={"navlink"} to={"/gallery"}>
            <Typography className="link-text">{t("galleria")}</Typography>
          </NavLink>
        </li>

        <li>
          <NavLink className={"navlink"} to={"/school"}>
            <Typography className="link-text">{t("scuola")}</Typography>
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
                style={{ marginTop: "20px" }}
                onClick={() => changeLanguage("it")}
              >
                <IT className="flag-icon" />
                <Typography
                  color={currentLanguage === "it" ? "#ffe603" : "#a39922"}
                >
                  Italiano
                </Typography>
              </div>
              <div
                className="language-choice"
                style={{ marginTop: "10px" }}
                onClick={() => changeLanguage("en")}
              >
                <US className="flag-icon" />
                <Typography
                  color={currentLanguage === "en" ? "#ffe603" : "#a39922"}
                >
                  English
                </Typography>
              </div>
            </div>
          </div>
        </li>
      </ul>
      {/* <div className="language-menu-container">
        <LanguageSelector
          currentLanguage={currentLanguage}
          onChangeLanguage={changeLanguage}
        />
      </div> */}
    </div>
  );
};

export default Navbar;
