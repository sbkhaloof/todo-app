import React,{useState} from 'react';
// Create a context for managing application display settings 
export const SettingsContext = React.createContext();

export default function SettingsProvider(props) 
{
    const [show,setShow]= useState(false);
    const [numberOfItems,setNumberOfItems]= useState(3)
    const [defaultSort,setDefaultSort]= useState("difficulty")
    const state = {
        //Display or Hide completed items (boolean).
        show,
        setShow,
        // Number of items to display per screen (number).
        numberOfItems,
        setNumberOfItems,
        //Default sort field (string).
        defaultSort,
        setDefaultSort,
    }

   

    return (
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )
}