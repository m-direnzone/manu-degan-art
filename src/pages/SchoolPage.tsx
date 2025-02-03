import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import fotoRitratto from "../images/sfondoBiografia.jpg";
import { useNavigate } from "react-router-dom";

const SchoolPage = () => {
  const { t } = useTranslation();
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [isSmallLaptop, setIsSmallLaptop] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setIsMobileDevice(true);
    }

    if(window.innerWidth > 1300 && window.innerWidth < 1500) {
      setIsSmallLaptop(true)
    }
  }, []);

  return (
    <div>
      <Grid container px={isMobileDevice ? "6%" : "2%"} py={"4%"}>
        <Grid item xs={isSmallLaptop ? 7 : 12} xl={7}>
          <Typography className="title">{t("titolo-scuola")}</Typography>
          {isMobileDevice && (
            <img src={fotoRitratto} alt="" className="biography-image" />
          )}
          <Typography className="small-title">{t("corsi-disegno")}</Typography>
          <Typography className="paragraph" mt={"3%"}>
            - {t("corso-2018/2020")} <br />
            <br />
            - {t("corso-2022")} <br /> <br />- {t("corso-2023")} <br />
            <br />- {t("corso-2024")}
          </Typography>
          <Button
            variant="contained"
            type="submit"
            style={{
              marginTop: isMobileDevice ? "10%" : "15%",
              marginLeft: isMobileDevice ? "12%" : "35%",
              marginBottom: isMobileDevice ? "15%" : 0,
              width: isMobileDevice ? 250 : 300,
              padding: "2%",
              backgroundColor: "#b0a300",
            }}
            onClick={() => navigate("/contacts")}
          >
            {t("richiedi-piu-informazioni")}
          </Button>
        </Grid>
        {!isMobileDevice && (
          <Grid item xl={5}>
            <img src={fotoRitratto} alt="" className="biography-image" />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default SchoolPage;
