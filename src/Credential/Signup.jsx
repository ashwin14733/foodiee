  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import React, { useState } from 'react'
  import { useNavigate } from 'react-router-dom';
  import { auth } from '../Firebase';
  import { Link } from 'react-router-dom';


  const Signup = () => {
    const [myemail,setMyemail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate()

    async function signupcreate(e) {
      e.preventDefault();
      

      try {
        await createUserWithEmailAndPassword(auth,myemail,password)
        Swal.fire({
                title : "SignUp Successfully",
                text : "You can Enjoy Your Meal By your Taste!!!😊😊😊",
                icon : "success",
                draggable : true,
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                backdrop: 'rgba(0, 0, 0, 0.8)',
              backdrop : 'rgba(0, 0, 0, 1)'
              });
          navigate('/login')
        
      } catch (error) {
        console.log(error);
        
      }
    }
    return (
      <div>
        <div className='gridlayout'>
          <div className='boxcontainer'>
              <h2 style={{paddingBottom:"40px"}}>Please Signup Here</h2>
                {/* <Link to={'/'} style={{textDecoration: "none"}} className='loginpage'><button className='loginbtn'>Signup</button></Link> */}
                  <form onSubmit={signupcreate} className='formtag'>
                    <input type="email" placeholder='Enter Your Email ID' required onChange={(e)=>setMyemail(e.target.value)}/>
                    <input type="password" placeholder='Enter Your Password' required onChange={(e)=>setPassword(e.target.value)} />
                    <div className='topcontainer'>
                      <button type='submit' className='signupbtn'>Signup</button>
                      <Link to={'/login'} style={{textDecoration: "none"}} className='loginpage'><button className='signupbtn'>Login </button></Link>
                    </div>

                  </form>

          
          </div>
        </div>
        
      </div>
    )
  }

  export default Signup

  // import { createUserWithEmailAndPassword } from 'firebase/auth';
  // import React, { useState } from 'react'
  // import { useNavigate } from 'react-router-dom';
  // import { auth } from '../Firebase';
  // import { Link } from 'react-router-dom';

  // const Signup = () => {
  //   const [myemail, setMyemail] = useState('');
  //   const [password, setPassword] = useState('');
  //   const navigate = useNavigate()

  //   async function signupcreate(e) {
  //     e.preventDefault();
      
  //     try {
  //       await createUserWithEmailAndPassword(auth, myemail, password)
  //       navigate('/login')
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   const containerStyle = {
  //     minHeight: '100vh',
  //     backgroundColor: '#000000',
  //     display: 'flex',
  //     flexDirection: 'column',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     padding: '20px',
  //     fontFamily: 'Arial, sans-serif'
  //   };

  //   const glassContainerStyle = {
  //     background: 'rgba(255, 255, 255, 0.1)',
  //     backdropFilter: 'blur(10px)',
  //     border: '1px solid rgba(255, 255, 255, 0.2)',
  //     borderRadius: '20px',
  //     padding: '40px',
  //     boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  //     width: '100%',
  //     maxWidth: '400px',
  //     textAlign: 'center'
  //   };

  //   const navigationStyle = {
  //     display: 'flex',
  //     gap: '15px',
  //     marginBottom: '30px',
  //     justifyContent: 'center'
  //   };

  //   const navButtonStyle = {
  //     background: 'rgba(255, 193, 7, 0.2)',
  //     border: '1px solid rgba(255, 193, 7, 0.4)',
  //     borderRadius: '10px',
  //     padding: '12px 24px',
  //     color: '#ffc107',
  //     fontSize: '16px',
  //     fontWeight: '600',
  //     cursor: 'pointer',
  //     transition: 'all 0.3s ease',
  //     textDecoration: 'none',
  //     backdropFilter: 'blur(5px)'
  //   };

  //   const activeNavButtonStyle = {
  //     ...navButtonStyle,
  //     background: 'rgba(255, 193, 7, 0.3)',
  //     border: '1px solid #ffc107'
  //   };

  //   const formStyle = {
  //     display: 'flex',
  //     flexDirection: 'column',
  //     gap: '20px',
  //     width: '100%'
  //   };

  //   const inputStyle = {
  //     background: 'rgba(255, 255, 255, 0.05)',
  //     border: '1px solid rgba(255, 193, 7, 0.3)',
  //     borderRadius: '12px',
  //     padding: '15px',
  //     color: '#ffc107',
  //     fontSize: '16px',
  //     outline: 'none',
  //     transition: 'all 0.3s ease',
  //     backdropFilter: 'blur(5px)'
  //   };

  //   const submitButtonStyle = {
  //     background: 'linear-gradient(45deg, rgba(255, 193, 7, 0.8), rgba(255, 193, 7, 0.6))',
  //     border: 'none',
  //     borderRadius: '12px',
  //     padding: '15px',
  //     color: '#000000',
  //     fontSize: '18px',
  //     fontWeight: 'bold',
  //     cursor: 'pointer',
  //     transition: 'all 0.3s ease',
  //     marginTop: '10px',
  //     backdropFilter: 'blur(10px)'
  //   };

  //   return (
  //     <div style={containerStyle}>
  //       <div style={glassContainerStyle}>
  //         <div style={navigationStyle}>
  //           <Link to={'/'} style={{ textDecoration: "none" }}>
  //             <button style={activeNavButtonStyle}>Signup</button>
  //           </Link>
  //           <Link to={'/login'} style={{ textDecoration: "none" }}>
  //             <button 
  //               style={navButtonStyle}
  //               onMouseEnter={(e) => {
  //                 e.target.style.background = 'rgba(255, 193, 7, 0.25)';
  //                 e.target.style.transform = 'translateY(-2px)';
  //               }}
  //               onMouseLeave={(e) => {
  //                 e.target.style.background = 'rgba(255, 193, 7, 0.2)';
  //                 e.target.style.transform = 'translateY(0)';
  //               }}
  //             >
  //               Login
  //             </button>
  //           </Link>
  //         </div>

  //         <form onSubmit={signupcreate} style={formStyle}>
  //           <input
  //             type="email"
  //             placeholder='Enter Your Email ID'
  //             required
  //             onChange={(e) => setMyemail(e.target.value)}
  //             style={inputStyle}
  //             onFocus={(e) => {
  //               e.target.style.borderColor = '#ffc107';
  //               e.target.style.boxShadow = '0 0 0 2px rgba(255, 193, 7, 0.2)';
  //             }}
  //             onBlur={(e) => {
  //               e.target.style.borderColor = 'rgba(255, 193, 7, 0.3)';
  //               e.target.style.boxShadow = 'none';
  //             }}
  //           />
  //           <input
  //             type="password"
  //             placeholder='Enter Your Password'
  //             required
  //             onChange={(e) => setPassword(e.target.value)}
  //             style={inputStyle}
  //             onFocus={(e) => {
  //               e.target.style.borderColor = '#ffc107';
  //               e.target.style.boxShadow = '0 0 0 2px rgba(255, 193, 7, 0.2)';
  //             }}
  //             onBlur={(e) => {
  //               e.target.style.borderColor = 'rgba(255, 193, 7, 0.3)';
  //               e.target.style.boxShadow = 'none';
  //             }}
  //           />
  //           <button
  //             type='submit'
  //             style={submitButtonStyle}
  //             onMouseEnter={(e) => {
  //               e.target.style.transform = 'translateY(-2px)';
  //               e.target.style.boxShadow = '0 5px 15px rgba(255, 193, 7, 0.4)';
  //             }}
  //             onMouseLeave={(e) => {
  //               e.target.style.transform = 'translateY(0)';
  //               e.target.style.boxShadow = 'none';
  //             }}
  //           >
  //             Signup
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   )
  // }

  // export default Signup