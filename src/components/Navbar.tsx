import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState("it");

  const changeLanguage = () => {
    if (currentLanguage === "it") {
      i18n.changeLanguage("en-US");
      setCurrentLanguage("en");
    } else if (currentLanguage === "en") {
      i18n.changeLanguage("it");
      setCurrentLanguage("it");
    }
  };

  return (
    <>
      <Button onClick={changeLanguage}>change language</Button>
      <Typography>{t("ciao")}</Typography>
    </>
  );
};

export default Navbar;
