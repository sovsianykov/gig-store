import React, { useContext } from "react";
import {Box, Theme} from "@mui/material";
import MyList from "../MyList/MyList";
import PlayListContext from "../../../app/Context";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme:Theme) => ({
  root: {
    width: "100%",
    maxWidth: 450,
    bgcolor: "background.paper",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    letterSpacing: "0.07rem",
      padding: theme.spacing(1),
      borderBottom:" 1px solid #CCC",
      fontWeight: 700,
      color:"brown",

  },
}));

const PlaylistDropDown = () => {
  const classes = useStyles();
  const { playList } = useContext(PlayListContext);
  return (
    <Box className={classes.root}>
      <Box className={classes.title}>Playlist</Box>
      <MyList sheetsList={playList} remove />
    </Box>
  );
};

export default PlaylistDropDown;
