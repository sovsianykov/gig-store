import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import heroImg from "../../../assets/img/hero-img.jpg";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 1100,
    height: "90vh",
      padding: 0
  },
  imgWrapper: {
    width: "100%",
    height: "90vh",
    overflow: "hidden",
  },
  image: {
    display: "block",
    width: "100%",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.imgWrapper}>
        <img src={heroImg} alt="hero" className={classes.image} />
      </Box>
    </Box>
  );
};

export default Home;
