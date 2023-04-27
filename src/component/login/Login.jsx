import React from "react"
import apple from '../../img/Vector.png'
import GLogin from "./GoogleLogin";
export default function Login() {

  return (
    <div className='loginContainer'>
      <div className='sideNav'>
        <p>Board</p>
      </div>
      <div className='loginPage'>
        <h3 id='signIn'>Sign In</h3>
        <p id='innerSingin'>Sign in to your account</p>
        <div className='loginBtn'>
          <div id='googleLogin'>
            <GLogin></GLogin>
          </div>
          <div id='AplleLogin'>
            <img src={apple} id='googleIMG' alt="gImg" />
            <p >sign in with Apple </p>
          </div>
        </div>
        <div className='form'>
          <form method="post">
            <div className="txt_field">
              <p>Email Address</p>
              <input type="text" required />
            </div>
            <div className="txt_field">
              <p>Password</p>
              <input type="password" required />
            </div>
            <div className="pass">Forgot Password?</div>
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}
