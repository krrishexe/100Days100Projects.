import React ,{useState} from "react";
import NoteContext from "./noteContext";

const NoteState =(props)=>{
    const initialState =[ 
            {
              "_id": "63807af0d5cba77f053eb21a",
              "user": "637f13a713b466e39cde4ecf",
              "title": "global warming",
              "description": "hii my name is krish and welcome to my jootube channel",
              "image": "637f55381553809622cdcc11",
              "tag": "general",
              "date": "2022-11-25T08:21:01.472Z",
              "__v": 0
            }
    ]
    const [notes,setState] = useState(initialState);

                            //  2 value pass hongi , 1st current state , 2nd will be a function
    return(
        <NoteContext.Provider value={{notes, setState}}> 
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;