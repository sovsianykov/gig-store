import * as React from "react";
import Box from "@mui/material/Box";
import { List } from "@mui/material";
import MyListItem from "./MyListItem";
import { FunctionComponent, memo, useCallback, useContext } from "react";
import PlayListContext from "../../../app/Context";
import { Sheet } from "../../models";

export interface MyListProps {
  sheetsList?: Sheet[];
  add?: boolean;
  remove?: boolean;
}

const MyList: FunctionComponent<MyListProps> = ({
  sheetsList,
  add,
  remove,
}) => {
  const { togglePlayList } = useContext(PlayListContext);
  const onClickHandler = useCallback(
    (sheet) => {
      if (togglePlayList) {
        togglePlayList(sheet);
      }
    },
    [togglePlayList]
  );
  return (
    <Box sx={{ width: "100%", maxWidth: 450, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List disablePadding>
          {sheetsList!.map((sheet) => (
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
