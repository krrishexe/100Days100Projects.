import React,{useContext, useEffect} from 'react';
import noteContext from '../Context/notes/noteContext';
import "../media/css/Signin.css";

const Signin = () => {
  const a = useContext(noteContext)

  useEffect(()=>{
    a.updateState()
  })

  return (
    <div> 
      <h1 className='relative text-4xl' >This is a Signin Component which is yet to be made</h1>
      <p>hello {a.state.name} your reg no is  {a.state.regno}</p>
    </div>
  )
}

export default Signin;
