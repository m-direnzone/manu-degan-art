import { Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import Loader from "../components/Loader";

const ContactsPage = () => {
  const { t } = useTranslation();
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [isSmallLaptop, setIsSmallLaptop] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    emailjs.init("39Dc7AOqs_lNovnAV")
    if (window.innerWidth <= 1024) {
      setIsMobileDevice(true);
    }

    if(window.innerWidth > 1300 && window.innerWidth < 1500) {
      setIsSmallLaptop(true)
    }
  }, []);


  const [emailObject, setEmailObject] = useState({
    user_name: "",
    user_surname: "",
    subject: "",
    user_email: "",
    message: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: string
  ) => {
    setEmailObject({
      ...emailObject,
      [fieldName]: e.target.value,
    });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send("manu_degan_art_service", "manu_degan_art_template", {
        user_name: emailObject.user_name,
        user_surname: emailObject.user_surname,
        user_email: emailObject.user_email,
        object: emailObject.subject,
        message: emailObject.message,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      ).finally(()=>{
        setEmailObject({
          user_name: "",
          user_surname: "",
          subject: "",
          user_email: "",
          message: "",
        })
        setIsLoading(false);
      });
  };

  return (
    <Grid container>
      <Grid item xs={12} xl={12} marginTop={"3%"} textAlign={"center"}>
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
        onSubmit={sendEmail}
        style={{ marginLeft: "10%", marginRight: isMobileDevice ? "10%" : isSmallLaptop ? "8%" : 0 }}
      >
        <Grid
          item
          xs={12}
          xl={12}
          mt={isMobileDevice ? "10%" : "3%"}
          mb={isMobileDevice ? "5%" : "2%"}
          marginLeft= {isMobileDevice ? "30%" : 0}
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
              onChange={(e) => onChange(e, "user_name")}
            />
          </Grid>
          <Grid item xl={6} xs={6}>
            <TextField
              className="form-field"
              label={t("cognome")}
              type="text"
              required
              onChange={(e) => onChange(e, "user_surname")}
            />
          </Grid>
          <Grid item xl={6} xs={6}>
            <TextField
              className="form-field"
              label={t("oggetto")}
              type="text"
              required
              onChange={(e) => onChange(e, "subject")}
            />
          </Grid>
          <Grid item xl={6} xs={6}>
            <TextField
              className="form-field"
              label={"Email"}
              type="email"
              required
              onChange={(e) => onChange(e, "user_email")}
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
              onChange={(e) => onChange(e, "message")}
            />
          </Grid>
          <Button
            variant="contained"
            type="submit"
            disabled={isLoading}
            style={{
              margin: "5% auto",
              marginTop: isMobileDevice ? "10%" : "5%",
              marginLeft: isMobileDevice ? "27%" : "auto",
              width: 200,
              backgroundColor: "#b0a300",
            }}
          >
            {isLoading ? (
                <Loader/>
            ):(<>{t("invia")}</>)}
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default ContactsPage;
