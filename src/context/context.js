import React from "react"
export const settingsContext=React.createContext();
export default function settingsProvider(props){
    const state={
        Display:true,
        itemsNumber:3,
        defaultSortField:'you should do your work'
    }
    return(<settingsContext.Provider value={state}>
        {props.children}
    </settingsContext.Provider>
    )
}