import React from "react";
import { Box } from "@mui/material";
import MyList from "../../../shared/componens/MyList/MyList";
import allSheets from "../../../db/db.json";
import PlaylistDropDown from "../../../shared/componens/SheetsPlayListDroopDown/PlaylistDropDown";

const Scores = () => {
  return (
    <Box width="100%" bgcolor="white">
      <MyList sheetsList={allSheets.pdf} add  />
        <PlaylistDropDown />
    </Box>
  );
};

export default Scores;
