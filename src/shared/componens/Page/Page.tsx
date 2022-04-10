import React, { FunctionComponent } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Theme } from "@mui/material";

export interface PageProps {
  children?: JSX.Element | JSX.Element[];
  title: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.background.paper,
    width: "100%",
    maxWidth: 450,
    minHeight: "90vh",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    letterSpacing: "0.07rem",
    padding: theme.spacing(1),
    borderBottom: " 1px solid #CCC",
    fontWeight: 700,
    color: "brown",
  },
}));

const Page: FunctionComponent<PageProps> = ({ children, title }) => {
  const classes = useStyles();
  return (
    <Box role="presentation" className={classes.root}>
      <Box role="title" className={classes.title}>
        {title}
      </Box>
      {children}
    </Box>
  );
};

export default Page;
