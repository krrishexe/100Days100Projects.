import React,{useContext, useEffect} from 'react';
import noteContext from '../Context/notes/noteContext';
import "../media/css/Signin.css";

const Signin = () => {
  // const a = useContext(noteContext)

  //         //  we used useEffect hook here cz we need to update the state after sometime , so screen pe kuchh bhi state , props , ya component update hoga to we use useEffect hook

  // useEffect(()=>{
  //   a.updateState()
  // })

  return (
    <div> 
      <section className='signin'>
      
      </section>








      {/* <h1 className='relative text-4xl' >This is a Signin Component which is yet to be made</h1>
      <p>hello {a.state.name} your reg no is {a.state.regno}</p> */}
    </div>
  )
}

export default Signin;
