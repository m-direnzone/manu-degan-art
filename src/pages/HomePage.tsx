import { Grid, Typography } from "@mui/material";
import YoutubeLink from "../components/YoutubeLink";
import { useTranslation } from "react-i18next";
import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";
import Carousel from "react-material-ui-carousel";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="home-background-container" />
      <div className="yt-video-container">
        <Grid container px={"5%"} mt={"3%"} columnSpacing={10} rowSpacing={5}>
          <Grid item xl={12} xs={12}>
            <Typography className="title">{t("titolo-youtube")}</Typography>
          </Grid>
          <Grid item xl={3} xs={12}>
            <YoutubeLink
              height={"600px"}
              width={"100%"}
              videoId="sS0CDqpM9bY"
            />
            <Typography className="small-title" marginTop={5}>
              In punta di matita <br /> Emanuela Degan 12/02/2023
            </Typography>
            <Typography className="paragraph" mt={"3%"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae, enim, aspernatur optio dolore pariatur eum ea
              nesciunt inventore necessitatibus doloremque magnam quaerat omnis
              veniam! Quas beatae quia quod voluptatum deleniti!
            </Typography>
          </Grid>
          <Grid item xl={6} xs={12}>
            <YoutubeLink
              height={"600px"}
              width={"100%"}
              videoId="pr_WQy9DN1s"
            />
            <Typography className="small-title" marginTop={5}>
              In punta di matita di Emanuela Degan alla Soffitta Spazio delle
              Arti a Sesto Fiorentino
            </Typography>
            <Typography className="paragraph" mt={"3%"}>
              In punta di matita di Emanuela Degan alla Soffitta Spazio delle
              Arti a Sesto Fiorentino. Introduce Francesco Mariani della
              Soffitta Spazio delle Arti. Jacopo Madau Assessore alla cultura
              del Comune di Sesto Fiorentino. Lorenzo Pacini critico d'arte e
              Emanuela Degan pittrice ritrattista
            </Typography>
          </Grid>
          <Grid item xl={3} xs={12}>
            <YoutubeLink
              height={"600px"}
              width={"100%"}
              videoId="5311nO8vrBQ"
            />
            <Typography className="small-title" marginTop={5}>
              Artebellariva Residenza d'Artista Emanuela Degan
            </Typography>
            <Typography className="paragraph" mt={"3%"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              ex doloribus dignissimos quibusdam placeat debitis sequi nulla
              similique! Alias perspiciatis qui debitis unde ducimus quae
              facilis vitae non maiores quam?
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div style={{ margin: "5%" }}>
        <Typography textAlign={"center"} className="title" marginBottom={"2%"}>
          {t("titolo-articoli")}
        </Typography>
        <Carousel interval={5000} duration={1000}>
          {articles.map((article) => (
            <ArticleCard article={article} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
