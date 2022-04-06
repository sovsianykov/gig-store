import React, {memo, useCallback, useState} from "react";
import ListItemButton from "@mui/material/ListItemButton";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import SheetsListItem from "../../../app/Tabs/componens/SheetsListItem";
import {
  Addchart,
  AddCircleOutlineOutlined,
  AddOutlined,
  AddRounded,
  AddTask,
  LibraryMusic,
  RemoveOutlined
} from "@mui/icons-material";
import {makeStyles} from "@mui/styles";
const useStyles = makeStyles((th) =>({
  root: {
    borderBottom:" 1px solid #CCC",
  },
  title: {
    fontSize: "20px",
    letterSpacing: "0.1rem",
    fontWeight: 700,
    color:(props) => props.on ? "brown" : "darkblue",

  }
}))


const MyListItem = ({ sheet, onClick, add, remove, }) => {
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
          {!sheet.isOnPlayList && add && <AddCircleOutlineOutlined onClick={onClickHandler}  />}
        </ListItemIcon>
        <ListItemText primary={sheet.title} className={classes.title}  />
        {sheet.isOnPlayList && remove && <RemoveOutlined  onClick={onClickHandler}/>}
      </ListItemButton>
    </ListItem>
  );
};

export default memo(MyListItem);
