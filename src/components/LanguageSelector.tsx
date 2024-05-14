import { Typography } from "@mui/material";
import { IT, US } from "country-flag-icons/react/3x2";

interface LanguageSelectorProps {
  onChangeLanguage: (languageToChange: string) => void;
  currentLanguage: string;
}

const LanguageSelector = ({
  onChangeLanguage,
  currentLanguage,
}: LanguageSelectorProps) => {
  return (
    <div>
      <div className="dropdown-menu">
        <div className="language-choice">
          {currentLanguage === "it" ? (
            <IT style={{ height: "20px", width: "20px" }} />
          ) : (
            <US style={{ height: "20px", width: "20px" }} />
          )}
          <Typography>{currentLanguage === "it" ? "IT" : "EN"}</Typography>
        </div>
        <ul className="language-selection-list">
          <li>
            <div
              className="language-choice"
              style={{ marginBottom: "0.5%" }}
              onClick={() => onChangeLanguage("it")}
            >
              <IT style={{ height: "20px", width: "20px" }} />
              <Typography color={currentLanguage === "it" ? "red" : "black"}>
                Italiano
              </Typography>
            </div>
          </li>
          <li>
            <div
              className="language-choice"
              onClick={() => onChangeLanguage("en")}
            >
              <US style={{ height: "20px", width: "20px" }} />
              <Typography color={currentLanguage === "en" ? "red" : "black"}>
                English
              </Typography>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageSelector;
