// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { icon, text } from '@fortawesome/fontawesome-svg-core';


const Login = () => {
    const [myemail,setMyemail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate()

  async function signupcreate(e) {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth,myemail,password)
      // alert("Login Successfully");
      Swal.fire({
        title : "Logged in Successfully",
        text : "You can Enjoy Your Meal By your Taste!!!😊😊😊",
        icon : "success",
        draggable : true,
        background: 'rgba(255, 255, 255, 0.1)',
        color: '#ffffff',
        backdrop: 'rgba(0, 0, 0, 0.8)',
       backdrop : 'rgba(0, 0, 0, 1)'
      });

      navigate('/home')
      
    } catch (error) {
      console.log(error);
      alert("Login Failed")
      
    }
  }
  return (
    <div>
        <div className='gridlayout1'>
          <div className="boxcontainer">
            <h2 style={{paddingBottom:"40px"}}>Please Login Here</h2>
              {/* <Link to={'/'}>Signup</Link> */}
              {/* <h1>login page</h1>  */}
              <form onSubmit={signupcreate} className='formtag'>
                <input type="email" placeholder='Enter Your Email ID' required onChange={(e)=>setMyemail(e.target.value)}/>
                <input type="password" placeholder='Enter Your Password' required onChange={(e)=>setPassword(e.target.value)} />
                <div className="topcontainer">
                  <Link to={'/'} style={{textDecoration: "none"}} className='loginpage'><button className='signupbtn'> Signup</button></Link>
                  <button type='submit' className='signupbtn'>Login</button>
                  
                </div>
              </form>
          </div>
        </div>
    </div>
  )
}

export default Login
