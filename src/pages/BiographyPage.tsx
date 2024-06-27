import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
import fotoRitratto from "../images/artist-painting-studio.jpg";

const BiographyPage = () => {
  const { t } = useTranslation();
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    if (isMobile || window.innerWidth <= 1050) {
      setIsMobileDevice(true);
    }
  }, []);

  return (
    <div>
      <Grid container px={isMobileDevice ? "6%" : "2%"} py={"4%"}>
        <Grid item xs={12} xl={7}>
          <Typography className="title">{t("la-mia-storia")}</Typography>
          {isMobileDevice && (
            <img src={fotoRitratto} alt="" className="biography-image" />
          )}
          <Typography className="paragraph" mt={"3%"}>
            {t("nascita-e-studi")} {t("vita-lontano-da-arte")}{" "}
            {t("ripresa-attivita")} {t("stile-artistico-e-presente")}
          </Typography>
        </Grid>
        {!isMobileDevice && (
          <Grid item xl={5}>
            <img src={fotoRitratto} alt="" className="biography-image" />
          </Grid>
        )}
        <Grid item xl={12} xs={12} mt={isMobileDevice ? "12%" : "2%"}>
          <Typography
            className="small-title"
            mx={isMobileDevice ? "6%" : 0}
            mb={isMobileDevice ? "5%" : 0}
          >
            {t("titolo-sezione-premi")}
          </Typography>
          <Typography className="paragraph" mt={"0.5%"}>
            2018 - 3° {t("edizione")} Premio Claudio Cavallini Kevo.{" "}
            <strong>3° {t("posto")}</strong>, {t("sguardo-dolce")}. <br /> 2020
            - 7° {t("edizione")} {t("mostra-internazionale")} “Donna oggi”
            Premio Sergio Manzi a San Gimignano.{" "}
            <strong>3° {t("posto")}</strong>, {t("occhi-di-luna")} 100 x 70 cm.{" "}
            <br /> 2020 - VII {t("edizione")} {t("nuovi-occhi-sul-mugello")}.{" "}
            <br /> 2021 - {t("arte-e-natura")}
            Campugliano (Pt) <strong>3° {t("posto")}</strong>, {t("penna-biro")}
            . <br /> 2021 - {t("premio-giovanni-de-nittis")}. <br /> 2022 -{" "}
            {t("premio-internazionale")} “Art work” IV
            {t("edizione")} {t("firenze")} <strong>2° {t("posto")}</strong>,{" "}
            {t("volare-via")}. <br /> 2022 - {t("premio-internazionale")}{" "}
            {t("nuovi-occhi-sul-mugello-titolo")} {t("firenze")}{" "}
            <strong>3° {t("posto")}</strong>, {t("angelo-di-luce")}. <br /> 2023
            - IX {t("premio-internazionale")}
            Acipea, {t("premio-san-valentino")}. <br /> 2023 - 55°{" "}
            {t("premio-enrico-caruso")} <br />
            {t("carta-modigliani")}, 100 x 70 cm
          </Typography>
        </Grid>
        <Grid item xl={12} xs={12} mt={isMobileDevice ? "12%" : "2%"}>
          <Typography className="small-title" mb={isMobileDevice ? "5%" : 0}>
            {t("titolo-sezione-pubblicazioni")}
          </Typography>
          <Typography className="paragraph" mt={"0.5%"}>
            - {t("casa-editrice")} Sillabe Livorno,{" "}
            {t("ritratto-gigi-proietti")} <br />- {t("casa-editrice")}{" "}
            Pluriversum Ferrara, {t("evolution-la-saga-del-trio")}. <br />-{" "}
            {t("annuncio-prossima-uscita")}.
          </Typography>
        </Grid>
        <Grid
          item
          xl={12}
          xs={12}
          mt={isMobileDevice ? "12%" : "2%"}
          mb={isMobileDevice ? "3%" : 0}
        >
          <Typography className="small-title" mb={isMobileDevice ? "5%" : 0}>
            {t("titolo-sezione-mostre")}
          </Typography>
          <Typography className="paragraph" mt={"0.5%"}>
            2021 - {t("ombra-della-tenda")} <br />
            2022 - {t("matite-forma-e-anima")} {t("firenze")} <br /> 2022 -{" "}
            {t("birreria-mostodolce")}. <br />
            2022 - {t("giornata-contro-violenza-di-genere")} <br />
            2023 - {t("spazio-espositivo")} {t("firenze")}
            {t("in-punta-di-matita")}. <br />
            2023 - {t("mostra-jb7jazz")} {t("firenze")}. <br /> 2023 -{" "}
            {t("mostra-personale")}
            {t("firenze")} {t("il-filo-rosso")}.
            <br /> 2023 - {t("negli-occhi-di-una-donna")}. <br /> 2024 -{" "}
            {t("venezia-in-maschera")}.
            <br /> 2024 - Vernice Art Fair Forlì, {t("fiera")}.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default BiographyPage;
