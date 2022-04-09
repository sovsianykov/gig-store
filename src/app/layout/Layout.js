import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Container } from "@mui/material";
import theme from "../constants/theme";

const useStyles = makeStyles(() => ({
  container: {
    padding: " 0px!important",
  },
  root: {
    width: "100%",
    marginTop: theme.spacing(7),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Box className={classes.root}>{children}</Box>
    </Container>
  );
};

export default Layout;
