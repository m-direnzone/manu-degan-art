import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import fotoRitratto from "../images/sfondoBiografia.jpg";
import { useNavigate } from "react-router-dom";

const SchoolPage = () => {
  const { t } = useTranslation();
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobile || window.innerWidth <= 1050) {
      setIsMobileDevice(true);
    }
  }, []);

  return (
    <div>
      <Grid container px={isMobileDevice ? "6%" : "2%"} py={"4%"}>
        <Grid item xs={12} xl={7}>
          <Typography className="title">{t("titolo-scuola")}</Typography>
          {isMobileDevice && (
            <img src={fotoRitratto} alt="" className="biography-image" />
          )}
          <Typography className="small-title">{t("corsi-disegno")}</Typography>
          <Typography className="paragraph" mt={"3%"}>
            - Dal 2018 al 2020 corso di disegno base partendo dalle grafiti e
            proseguendo con tecniche varie presso il museo “Casa natale di
            Giotto” a Vespignano Vicchio, Firenze. <br />
            <br />
            - Dal 2022 è sempre in essere il corso di disegno base e di 1° e 2°
            livello. Disegno dal vero di oggetti con prospettiva partendo dalle
            grafiti e proseguendo con utilizzo di tecniche varie, disegno del
            corpo umano in collaborazione con l’Associazione Live Art presso il
            teatro Microscena a Borgo San Lorenzo Firenze <br /> <br />- 2023
            viene chiamata ad esperienza di centri estivi con un proprio
            progetto sul cerchio cromatico con bambini dai 6 ai 12 anni. <br />
            <br />- 2024 in concomitanza con una mostra personale, corso di
            disegno base gratuito, presso la biblioteca del Galluzzo, Firenze.
          </Typography>
          <Button
            variant="contained"
            type="submit"
            style={{
              marginTop: isMobileDevice ? "10%" : "15%",
              marginLeft: isMobileDevice ? "27%" : "35%",
              width: 300,
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
