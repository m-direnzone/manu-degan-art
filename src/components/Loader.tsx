import { CircularProgress, Grid } from "@mui/material";

const Loader = () => {
  return (
    <Grid container height={"100%"} py={1}>
      <Grid item xs={5} xl={5} />
      <Grid item xs={6} xl={6} display={"flex"}>
        <CircularProgress
          size={30}
          sx={{
            alignSelf: "center",
            color: "white"
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Loader;