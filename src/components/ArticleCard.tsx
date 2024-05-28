import { Grid, Paper, Typography } from "@mui/material";
import { Article } from "../interface";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const { t } = useTranslation();
  return (
    <Paper className="article-container">
      <Grid container>
        <Grid item xs={12} xl={12} className="article-title-container">
          <Typography className="article-title">{article.title}</Typography>
        </Grid>
        <Grid item xs={12} xl={12} className="article-preview-container">
          <Typography>{article.preview}</Typography>
        </Grid>
        <Link to={`${article.link}`}>{t("leggi-di-piu")}</Link>
      </Grid>
    </Paper>
  );
};

export default ArticleCard;
