import { Button, Grid, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const ContactsPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <form action="">
        <Grid container xs={12} xl={12}>
          <Grid item xs={12} xl={12} marginTop={"5%"} textAlign={"center"}>
            <Typography className="title">
              {t("restiamo-in-contatto")}
            </Typography>
            <Typography fontSize={20} mt={"1%"}>
              Non esitare a scrivermi <br /> Compila il modulo qui sotto con i
              tuoi recapiti in modo che io possa risponderti il prima possibile.{" "}
              <br />
              Grazie!
            </Typography>
          </Grid>
          <form onSubmit={() => alert("CIAOOO")} style={{ marginLeft: "10%" }}>
            <Grid item xs={12} xl={12} mt={"3%"} mb={"2%"}>
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
                  marginTop: "5%",
                  width: 200,
                  backgroundColor: "#b0a300",
                }}
              >
                {t("invia")}
              </Button>
            </Grid>
          </form>
        </Grid>
      </form>
    </div>
  );
};

export default ContactsPage;
