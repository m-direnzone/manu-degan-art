import { Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";

const ContactsPage = () => {
  const { t } = useTranslation();
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    if (isMobile || window.innerWidth <= 1050) {
      setIsMobileDevice(true);
    }
  }, []);
  return (
    <Grid container>
      <Grid item xs={12} xl={12} marginTop={"5%"} textAlign={"center"}>
        <Typography className="title">{t("restiamo-in-contatto")}</Typography>
        <Typography
          fontSize={isMobileDevice ? 16 : 20}
          mt={"1%"}
          mx={isMobileDevice ? "4%" : 0}
        >
          {t("non-esitare-a-scrivermi")} <br /> {t("compila-il-modulo")} <br />
          {t("grazie")}
        </Typography>
      </Grid>
      <form
        onSubmit={() => alert("CIAOOO")}
        style={{ marginLeft: "10%", marginRight: isMobileDevice ? "10%" : 0 }}
      >
        <Grid
          item
          xs={12}
          xl={12}
          mt={isMobileDevice ? "10%" : "3%"}
          mb={isMobileDevice ? "5%" : "2%"}
          marginLeft={isMobileDevice ? "45%" : 0}
        >
          <Typography className="small-title" textAlign={"right"}>
            * {t("campi-obbligatori")}
          </Typography>
        </Grid>
        <Grid item container xs={12} xl={12} spacing={5} mb={"10%"}>
          <Grid item xl={6} xs={6}>
            <TextField
              className="form-field"
              label={t("nome")}
              type="text"
              required
            />
          </Grid>
          <Grid item xl={6} xs={6}>
            <TextField
              className="form-field"
              label={t("cognome")}
              type="text"
              required
            />
          </Grid>
          <Grid item xl={6} xs={6}>
            <TextField
              className="form-field"
              label={t("oggetto")}
              type="text"
              required
            />
          </Grid>
          <Grid item xl={6} xs={6}>
            <TextField
              className="form-field"
              label={"Email"}
              type="email"
              required
            />
          </Grid>
          <Grid item xl={12} xs={12}>
            <TextField
              className="form-field"
              label={t("messaggio")}
              type="text"
              multiline
              minRows={6}
              required
            />
          </Grid>
          <Button
            variant="contained"
            type="submit"
            style={{
              margin: "5% auto",
              marginTop: isMobileDevice ? "10%" : "5%",
              marginLeft: isMobileDevice ? "27%" : 0,
              width: 200,
              backgroundColor: "#b0a300",
            }}
          >
            {t("invia")}
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default ContactsPage;
