import React, { useContext, useEffect } from 'react';
import noteContext from '../Context/notes/noteContext';
import "../media/css/Signin.css";

const Signin = () => {
  // const a = useContext(noteContext)

  //         //  we used useEffect hook here cz we need to update the state after sometime , so screen pe kuchh bhi state , props , ya component update hoga to we use useEffect hook

  // useEffect(()=>{
  //   a.updateState()
  // })

  return (
    <>
    <div className='flex justify-center mt-28'>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden="true">Sign up</label>
            {/* <input type="text" name="txt" placeholder="User name" required="" /> */}
            <input type="email" name="email" placeholder="Email" required="" />
            <input type="password" name="pswd" placeholder="Password" required="" />
            <button className='loginBtn '>Sign up</button>
          </form>
        </div>

        <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true">Login</label>
            <input type="email" name="email" placeholder="Email" required="" />
            <input type="password" name="pswd" placeholder="Password" required="" />
            <button className='loginBtn'>Login</button>
          </form>
        </div>
      </div>
      </div>
    </>
  )
}

/* <h1 className='relative text-4xl' >This is a Signin Component which is yet to be made</h1>
<p>hello {a.state.name} your reg no is {a.state.regno}</p> */



export default Signin;
