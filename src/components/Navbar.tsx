import { Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import { NavLink } from "react-router-dom";

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
    <div>
      <ul>
        <li>
          <NavLink to={"/"}>
            <Typography>Emanuela Degan</Typography>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/biography"}>
            <Typography>Biografia</Typography>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/gallery"}>
            <Typography>Galleria</Typography>
          </NavLink>
        </li>

        <li>
          <NavLink to={"/school"}>
            <Typography>Scuola</Typography>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contacts"}>
            <Typography>Contatti</Typography>
          </NavLink>
        </li>
        <li>
          <LanguageSelector
            currentLanguage={currentLanguage}
            onChangeLanguage={changeLanguage}
          />
        </li>
      </ul>
      <Typography>{t("ciao")}</Typography>
    </div>
  );
};

export default Navbar;
