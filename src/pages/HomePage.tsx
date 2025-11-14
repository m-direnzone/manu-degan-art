import { Grid, Typography } from "@mui/material";
import YoutubeLink from "../components/YoutubeLink";
import { useTranslation } from "react-i18next";
import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";
import Carousel from "react-material-ui-carousel";
import { useEffect, useState } from "react";

const HomePage = () => {
  const { t } = useTranslation();
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [isSmallLaptop, setIsSmallLaptop] = useState(false)

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
      <div className="home-background-container" />
      <div className="yt-video-container">
        <Grid container px={"5%"} mt={"3%"} columnSpacing={10} rowSpacing={5}>
          <Grid item xl={12} xs={12}>
            <Typography className="title">{t("titolo-youtube")}</Typography>
          </Grid>
          <Grid
            item
            xl={4}
            xs={isSmallLaptop ? 4 : 9}
            mx={isMobileDevice ? "auto" : 0}
            mb={isMobileDevice ? 4 : 0}
          >
            <YoutubeLink
              height={isMobileDevice ? "400px" : "600px"}
              width={"100%"}
              videoId="lzkc4Roc8gs"
            />
            <Typography className="small-title" marginTop={5}>
              Mostra collettiva di arti visive CONTRASTI AL BRIZZOLARI
            </Typography>
            <Typography className="paragraph" mt={"3%"}>
              Mostra collettiva di arti visive CONTRASTI AL BRIZZOLARI
            </Typography>
          </Grid>
          <Grid
            item
            xl={4}
            xs={isSmallLaptop ? 4 : 9}
            mx={isMobileDevice ? "auto" : 0}
            mb={isMobileDevice ? 4 : 0}
          >
            <YoutubeLink
              height={isMobileDevice ? "400px" : "600px"}
              width={"100%"}
              videoId="5311nO8vrBQ"
            />
            <Typography className="small-title" marginTop={5}>
              Artebellariva Residenza d'Artista Emanuela Degan
            </Typography>
            <Typography className="paragraph" mt={"3%"}>
              Artebellariva Residenza d'Artista Emanuela Degan
            </Typography>
          </Grid>
          <Grid
            item
            xl={4}
            xs={isSmallLaptop ? 4 : 9}
            mx={isMobileDevice ? "auto" : 0}
            mb={isMobileDevice ? 4 : 0}
          >
            <YoutubeLink
              height={isMobileDevice ? "400px" : "600px"}
              width={"100%"}
              videoId="vfdyURxIM1c"
            />
            <Typography className="small-title" marginTop={5}>
              Curatrice Mostra collettiva Contrasti al Brizzolari 2.0
            </Typography>
            <Typography className="paragraph" mt={"3%"}>
              Curatrice Mostra collettiva Contrasti al Brizzolari 2.0
            </Typography>
          </Grid>
          <Grid
            item
            xl={10.5}
            xs={isSmallLaptop ? 12 : 9}
            mx={"auto"}
            mb={isMobileDevice ? 4 : 0}
          >
            <YoutubeLink
              height={isMobileDevice ? "400px" : "600px"}
              width={"100%"}
              videoId="pr_WQy9DN1s"
            />
            <Typography className="small-title" marginTop={5} textAlign={"center"}>
              In punta di matita di Emanuela Degan {t("alla")} Soffitta Spazio
              delle Arti {t("a")} Sesto Fiorentino
            </Typography>
            <Typography className="paragraph" mt={"3%"} textAlign={"center"}>
              In punta di matita di Emanuela Degan {t("alla")} Soffitta Spazio
              delle Arti {t("a")} Sesto Fiorentino. Introduce Francesco Mariani{" "}
              {t("della")} Soffitta Spazio delle Arti. Jacopo Madau{" "}
              {t("assessore-alla-cultura")} Sesto Fiorentino. Lorenzo Pacini{" "}
              {t("critico-arte")} {t("e")} Emanuela Degan{" "}
              {t("pittrice-ritrattista")}
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div style={{ margin: "5%" }}>
        <Typography
          textAlign={"center"}
          className="title"
          marginBottom={isMobileDevice ? "6%" : "2%"}
          mx={isMobileDevice ? 5 : 0}
        >
          {t("titolo-articoli")}
        </Typography>
        <Carousel
          interval={5000}
          duration={1000}
          sx={{ marginBottom: isMobileDevice ? 3 : 0, zIndex: -100 }}
        >
          {articles.map((article) => (
            <ArticleCard article={article} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
