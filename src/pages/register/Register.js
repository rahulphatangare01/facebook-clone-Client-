import React from 'react'
import './Register.css'
function Register() {
  return (
    <div className='login'>
<div className="loginWrapper">
    <div className="loginLeft">
    <h3 className='loginLogo'> Facelook</h3>
        <sapn className="loginDesc">
            Connect with friends and the world around you on facelook
        </sapn>
    </div>
    <div className="loginRight">
       <div className="loginBox">
           <input placeholder="Username" className="loginInput" />
           <input placeholder="Email" className="loginInput" />
           <input placeholder="Password" className="loginInput" />
           <input placeholder="Password Again" className="loginInput" />
           <button className="loginButton"> Sign Up</button>
           <button className="loginRegisterButton"> Log into Account</button>

       </div>
    </div>

</div>
    </div>
  )
}

export default Register

