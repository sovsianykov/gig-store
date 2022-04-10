import React, {FC} from "react";
import { makeStyles } from "@mui/styles";
import {Box, Container, Theme} from "@mui/material";

const useStyles = makeStyles((theme:Theme) => ({
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

export interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

const Layout:FC<LayoutProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Box className={classes.root}>{children}</Box>
    </Container>
  );
};

export default Layout;
