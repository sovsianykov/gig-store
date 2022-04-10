import React, {FunctionComponent, memo, useCallback} from "react";
import ListItemButton from "@mui/material/ListItemButton";
import {ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
  PlaylistAddCheck,
  RemoveOutlined
} from "@mui/icons-material";
import {makeStyles} from "@mui/styles";
import {Link} from "react-router-dom";
import {Sheet} from "../../models";

type StyleProps = { on: boolean}

const useStyles = makeStyles<Pick<StyleProps,'on'>>(() =>({
  root: {
    borderBottom:" 1px solid #CCC",
  },
  title: {
    fontSize: "20px",
    letterSpacing: "0.1rem",
    fontWeight: 700,
    color:(on) => on ? "brown" : "darkblue",

  }
}))

export interface MyListItemProps {
  sheet: Sheet;
  onClick: (id: number) => void;
  add?: boolean;
  remove?: boolean;
}



const MyListItem:FunctionComponent<MyListItemProps> = ({ sheet, onClick, add }) => {
  const props = {
    on: sheet.isOnPlayList
  }
  const classes = useStyles(props)
  const onClickHandler = useCallback(() => {
    onClick(sheet.id);
  }, [onClick, sheet.id]);

  return (
    <ListItem className={classes.root} >
      <ListItemButton >
        <ListItemIcon>
          {!sheet.isOnPlayList && add  ?  <PlaylistAddCheck onClick={onClickHandler}  /> : <RemoveOutlined  onClick={onClickHandler}/> }
        </ListItemIcon>
        <Link to={`/scores/${sheet.id}`}>
          <ListItemText primary={sheet.title} className={classes.title}  />
        </Link>
      </ListItemButton>
    </ListItem>
  );
};

export default memo(MyListItem);
