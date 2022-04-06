import React, { useContext, useState } from "react";
import { Box, Collapse, Typography } from "@mui/material";
import MyList from "../MyList/MyList";
import PlayListContext from "../../../app/Context";
import { makeStyles } from "@mui/styles";
import theme from "../../../app/constants/theme";

const useStyles = makeStyles((theme) => ({
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
  const [, setOpen] = useState(false);
  const [activeItemId, setActiveItemId] = useState(1);
  const { playList, addToPlayList } = useContext(PlayListContext);
  return (
    <Box className={classes.root}>
      <Box className={classes.title}>Playlist</Box>
      <MyList sheetsList={playList} remove />
    </Box>
  );
};

export default PlaylistDropDown;
