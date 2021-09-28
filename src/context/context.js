import React,{useState ,useEffect} from 'react';
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
    
/** 1. Create a function in your context that saves user preferences (for the above) to local storage.
 2. Implement a useEffect() (or componentDidMount()) in your context to read from local storage and set the values for those 2 state properties on application load.
 Note: You will need to stringify your state prior to saving to local storage, and parse it when you retrieve it.*/
    useEffect(()=>{
        let localStorageData=localStorage.getItem("FormSettingPage");
        let localStorageObj=JSON.parse(localStorageData);

        if(localStorageObj){
            setShow(localStorageObj.show);
            setNumberOfItems(localStorageObj.numberOfItems)
        }
        // to clear data from local storge
        localStorage.clear();
    },[])// i pass empty array to useEffect Function to work as componentDidMount() lifecycle method
 return (
    <SettingsContext.Provider value={state}>
        {props.children}
    </SettingsContext.Provider>
)
}