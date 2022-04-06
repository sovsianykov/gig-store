import React, {createContext, useState} from "react";
import allSheets from '../db/db.json'
const PlayListContext = createContext(null);

export function PlayListProvider({children}) {
    const [ playList, setPlayList] = useState([])
    const togglePlayList = (sheet) => {
        if (!playList.includes(sheet)) {
            sheet.isOnPlayList = true;
            setPlayList(playList => [...playList,sheet])
        } else {
            sheet.isOnPlayList = false;
            const newPlayList = [...playList]
            setPlayList(newPlayList.filter(s => s !== sheet))

        }
    }

    return (
        <PlayListContext.Provider value={{playList, togglePlayList }}>
            {children}
        </PlayListContext.Provider>
    )
}

export default PlayListContext;
