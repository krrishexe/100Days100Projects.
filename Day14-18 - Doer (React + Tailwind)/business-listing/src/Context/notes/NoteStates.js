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
                "reg no.": "12018239"
            })
        }, 1000);
    }



    return(
        <NoteContext.Provider value={{state , updateState}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;