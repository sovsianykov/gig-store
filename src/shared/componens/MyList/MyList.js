import * as React from "react";
import Box from "@mui/material/Box";
import { List, Typography } from "@mui/material";
import MyListItem from "./MyListItem";
import { memo, useCallback, useContext } from "react";
import PlayListContext from "../../../app/Context";
import {makeStyles} from "@mui/styles";
import theme from "../../../app/constants/theme";





const MyList = ({ sheetsList, add, remove  }) => {

  const { togglePlayList, playList } = useContext(PlayListContext);
  const onClickHandler = useCallback(
    (sheet) => {
      togglePlayList(sheet);
    },
    [togglePlayList]
  );
  return (
    <Box sx={{ width: "100%", maxWidth: 450, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List disablePadding>
          {sheetsList.map((sheet) => (
            <MyListItem
              sheet={sheet}
              key={sheet.id}
              onClick={() => onClickHandler(sheet)}
              remove={remove}
              add={add}
            />
          ))}
        </List>
      </nav>
    </Box>
  );
};
export default memo(MyList);
