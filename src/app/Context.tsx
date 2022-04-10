import React, {createContext, FunctionComponent, useState} from "react";
import {Sheet} from "../shared/models";





export interface PlayListProviderProps {
    children?: JSX.Element | JSX.Element[];
}
export interface Value {
    playList: Sheet[];
    togglePlayList: (sheet: Sheet) => void;
}
const PlayListContext = createContext<Partial<Value>>({});

 export const PlayListProvider:FunctionComponent<PlayListProviderProps>=({children})=> {
    const [ playList, setPlayList] = useState<Sheet[]>([])
    const togglePlayList = (sheet:Sheet) => {
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
