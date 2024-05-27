import { Grid, Typography } from "@mui/material";
import YoutubeLink from "../components/YoutubeLink";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="home-background-container" />
      <div className="yt-video-container">
        <Grid container px={"5%"} mt={"5%"} columnSpacing={10} rowSpacing={5}>
          <Grid item xl={12} xs={12}>
            <Typography className="title">{t("titolo-youtube")}</Typography>
          </Grid>
          <Grid item xl={3} xs={12}>
            <YoutubeLink
              height={"600px"}
              width={"100%"}
              videoId="sS0CDqpM9bY"
            />
            <Typography className="small-title">
              In punta di matita <br /> Emanuela Degan 12/02/2023
            </Typography>
            <Typography className="paragraph">
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
          </Grid>
          <Grid item xl={3} xs={12}>
            <YoutubeLink
              height={"600px"}
              width={"100%"}
              videoId="5311nO8vrBQ"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HomePage;
