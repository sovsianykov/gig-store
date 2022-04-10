import React, { useContext } from "react";
import MyList from "../MyList/MyList";
import PlayListContext from "../../../app/Context";



const PlaylistDropDown = () => {
  const { playList } = useContext(PlayListContext);
  return (

      <MyList sheetsList={playList} remove />

  );
};

export default PlaylistDropDown;
