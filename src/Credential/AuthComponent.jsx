import React, { useState } from 'react';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import { auth } from '../Firebase'; // Uncomment and adjust path as needed

const AuthComponent = () => {
  const [isActive, setIsActive] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ username: '', email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  // Mock auth object - replace with your Firebase auth
  const auth = {
    currentUser: null
  };

  const showSuccessAlert = (title, text) => {
    // Using native alert for now - replace with SweetAlert2 if available
    // Swal.fire({
    //   title: title,
    //   text: text,
    //   icon: "success",
    //   draggable: true,
    //   background: 'rgba(255, 255, 255, 0.1)',
    //   color: '#ffffff',
    //   backdrop: 'rgba(0, 0, 0, 0.8)'
    // });
    alert(`${title}: ${text}`);
  };

  const handleLogin = (e) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    
    // Validate form
    if (!loginData.email || !loginData.password) {
      alert('Please fill in all fields');
      setIsLoading(false);
      return;
    }
    
    try {
      // await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
      // Mock successful login for demo
      setTimeout(() => {
        showSuccessAlert("Logged in Successfully", "You can Enjoy Your Meal By your Taste!!!😊😊😊");
        // navigate('/home');
        console.log('Login successful', loginData);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login Failed: ' + error.message);
      setIsLoading(false);
    }
  };

  const handleRegister = (e) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    
    // Validate form
    if (!registerData.username || !registerData.email || !registerData.password) {
      alert('Please fill in all fields');
      setIsLoading(false);
      return;
    }
    
    try {
      // await createUserWithEmailAndPassword(auth, registerData.email, registerData.password);
      // Mock successful registration for demo
      setTimeout(() => {
        showSuccessAlert("SignUp Successfully", "You can Enjoy Your Meal By your Taste!!!😊😊😊");
        setIsActive(false); // Switch to login form
        console.log('Registration successful', registerData);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration Failed: ' + error.message);
      setIsLoading(false);
    }
  };

  const styles = `
    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    
    .auth-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    //   background: linear-gradient(90deg, #e2e2e2, #c9d6ff);
    background:black;
    //   background: 'rgba(255, 255, 255, 0.1)',
    //   color: '#ffffff',
    //    backdrop: 'rgba(0, 0, 0, 0.8)'
      font-family: "Poppins", sans-serif;   
      margin: 0;
      padding: 20px;
      box-sizing: border-box;
    }

    .auth-container {
      position: relative;
      width: 850px;
      height: 550px;
      background: #fff;
      border-radius: 30px;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
      overflow: hidden;
    }

    .auth-container h1 {
      font-size: 36px;
      margin: -10px 0;
      font-family: "Poppins", sans-serif;
    }

    .auth-container p {
      font-size: 14.5px;
      margin: 15px 0;
      font-family: "Poppins", sans-serif;
    }

    .form-box {
      position: absolute;
      right: 0;
      width: 50%;
      height: 100%;
      background: #fff;
      display: flex;
      align-items: center;
      color: #333;
      text-align: center;
      padding: 40px;
      z-index: 1;
      transition: 0.6s ease-in-out 1.2s, visibility 0s 1s;
    }

    .auth-container.active .form-box {
      right: 50%;
    }

    .form-box.register {
      visibility: hidden;
    }

    .auth-container.active .form-box.register {
      visibility: visible;
    }

    .auth-form {
      width: 100%;
    }

    .input-box {
      position: relative;
      margin: 30px 0;
    }

    .input-box input {
      width: 100%;
      padding: 13px 50px 13px 20px;
      background: #eee;
      border-radius: 8px;
      border: none;
      outline: none;
      font-size: 16px;
      color: #333;
      font-weight: 500;
      box-sizing: border-box;
    }

    .input-box input::placeholder {
      color: #888;
      font-weight: 400;
    }

    .input-box .icon {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 20px;
      color: #888;
    }

    .forgot-link {
      margin: -15px 0 15px;
    }

    .forgot-link a {
      font-size: 14.5px;
      color: #333;
      text-decoration: none;
    }

    .btn {
      width: 100%;
      height: 48px;
    //   background: #7494ec;
    background:#ffc107;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border: none;
      cursor: pointer;
      font-size: 16px;
      color: #fff;
      font-weight: 600;
      transition: all 0.3s ease;
      font-family: "Poppins", sans-serif;
    }

    .btn:hover {
      background: #5d7de8;
      transform: translateY(-1px);
    }

    .btn:disabled {
      background: #ccc;
      cursor: not-allowed;
      transform: none;
    }

    .social-icons {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 15px;
    }

    .social-icons a {
      display: inline-flex;
      padding: 10px;
      border: 2px solid #ccc;
      border-radius: 8px;
      font-size: 24px;
      color: #333;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-icons a:hover {
      border-color: #7494ec;
      color: #7494ec;
      transform: translateY(-2px);
    }

    .toggle-box {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .toggle-box::before {
      content: "";
      position: absolute;
      left: -250%;
      width: 300%;
      height: 100%;
    //   background: #7494ec;
    background:#ffc107;
      border-radius: 150px;
      z-index: 2;
      transition: 1.8s ease-in-out;
    }

    .auth-container.active .toggle-box::before {
      left: 50%;
    }

    .toggle-panel {
      position: absolute;
      width: 50%;
      height: 100%;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 2;
      transition: 0.6s ease-in-out;
      text-align: center;
      padding: 40px;
    }

    .toggle-panel.toggle-left {
      left: 0;
      transition-delay: 1.2s;
    }

    .auth-container.active .toggle-panel.toggle-left {
      left: -50%;
      transition-delay: 0.6s;
    }

    .toggle-panel.toggle-right {
      right: -50%;
      transition-delay: 0.6s;
    }

    .auth-container.active .toggle-panel.toggle-right {
      right: 0;
      transition-delay: 1.2s;
    }

    .toggle-panel p {
      margin-bottom: 20px;
    }

    .toggle-panel .btn {
      width: 160px;
      height: 46px;
      background: transparent;
      border: 2px solid #fff;
      box-shadow: none;
    }

    .toggle-panel .btn:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    @media screen and (max-width: 650px) {
      .auth-container {
        height: calc(100vh - 40px);
        width: 95%;
      }

      .form-box {
        bottom: 0;
        width: 100%;
        height: 70%;
      }

      .auth-container.active .form-box {
        right: 0;
        bottom: 30%;
      }

      .toggle-box::before {
        left: 0;
        top: -270%;
        width: 100%;
        height: 300%;
        border-radius: 20vw;
      }

      .auth-container.active .toggle-box::before {
        left: 0;
        top: 70%;
      }

      .auth-container.active .toggle-panel.toggle-left {
        left: 0;
        top: -30%;
      }

      .toggle-panel {
        width: 100%;
        height: 30%;
      }

      .toggle-panel.toggle-left {
        top: 0;
      }

      .toggle-panel.toggle-right {
        right: 0;
        bottom: -30%;
      }

      .auth-container.active .toggle-panel.toggle-right {
        bottom: 0;
      }
    }

    @media screen and (max-width: 400px) {
      .form-box {
        padding: 20px;
      }

      .toggle-panel h1 {
        font-size: 30px;
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      
      <div className="auth-wrapper">
        <div className={`auth-container ${isActive ? 'active' : ''}`}>
          {/* Login Form */}
          <div className="form-box login">
            <div className="auth-form">
              <h1>Login</h1>
              
              <div className="input-box">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                />
                <span className="icon">👤</span>
              </div>
              
              <div className="input-box">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                />
                <span className="icon">🔒</span>
              </div>
              
              <div className="forgot-link">
                <a href="#">Forgot Password?</a>
              </div>
              
              <button type="button" className="btn" disabled={isLoading} onClick={handleLogin}>
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
              
              <p>or login with social platforms</p>
              
              <div className="social-icons">
                <a href="#" onClick={(e) => e.preventDefault()}>🌐</a>
                <a href="#" onClick={(e) => e.preventDefault()}>📘</a>
                <a href="#" onClick={(e) => e.preventDefault()}>🐙</a>
                <a href="#" onClick={(e) => e.preventDefault()}>💼</a>
              </div>
            </div>
          </div>

          {/* Register Form */}
          <div className="form-box register">
            <div className="auth-form">
              <h1>Registration</h1>
              
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Username"
                  required
                  value={registerData.username}
                  onChange={(e) => setRegisterData({...registerData, username: e.target.value})}
                />
                <span className="icon">👤</span>
              </div>
              
              <div className="input-box">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={registerData.email}
                  onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                />
                <span className="icon">✉️</span>
              </div>
              
              <div className="input-box">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={registerData.password}
                  onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                />
                <span className="icon">🔒</span>
              </div>
              
              <button type="button" className="btn" disabled={isLoading} onClick={handleRegister}>
                {isLoading ? 'Registering...' : 'Register'}
              </button>
              
              <p>or register with social platforms</p>
              
              <div className="social-icons">
                <a href="#" onClick={(e) => e.preventDefault()}>🌐</a>
                <a href="#" onClick={(e) => e.preventDefault()}>📘</a>
                <a href="#" onClick={(e) => e.preventDefault()}>🐙</a>
                <a href="#" onClick={(e) => e.preventDefault()}>💼</a>
              </div>
            </div>
          </div>

          {/* Toggle Box */}
          <div className="toggle-box">
            <div className="toggle-panel toggle-left">
              <h1>Hello, Welcome!</h1>
              <p>Don't have an account?</p>
              <button 
                className="btn register-btn" 
                onClick={() => setIsActive(true)}
                type="button"
              >
                Register
              </button>
            </div>

            <div className="toggle-panel toggle-right">
              <h1>Welcome Back!</h1>
              <p>Already have an account?</p>
              <button 
                className="btn login-btn" 
                onClick={() => setIsActive(false)}
                type="button"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthComponent;












