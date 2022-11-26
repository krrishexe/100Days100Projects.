import React ,{useState} from "react";
import NoteContext from "./noteContext";

const NoteState =(props)=>{
    const s1 ={

        "name": "krish",
        "regno": "12018275"
    }
    const [state,setState]= useState(s1);

    const updateState =()=>{
        setTimeout(() => {
            setState({
                "name": "ankit",
                "regno": "12018239"
            })
        }, 3000);
    }


                            //  2 value pass hongi , 1st current state , 2nd will be a function
    return(
        <NoteContext.Provider value={{state , updateState}}> 
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;