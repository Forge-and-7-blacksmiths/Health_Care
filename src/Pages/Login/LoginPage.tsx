import React, { useState } from "react";
import "./LoginPage.scss";
import { NavLink } from "react-router-dom";
import{ReactComponent as LogoX} from'./X.svg'
import{ReactComponent as LogoWatch} from'./Watch.svg'
import{ReactComponent as LogoNoWatch} from'./Nowatch.svg'
import{ReactComponent as LogoGoogle} from'./google.svg'
import{ReactComponent as LogoApple} from'./apple.svg'
import{ReactComponent as LogoFacebook} from'./facebook.svg'

export const LoginPage = () => {
  const [flagWatch,setFlagWatch]=useState(false);
  const [emailValue,setEmailValue]=useState('');
  return (
    <>
      <div className="container">
        <div>
          <h1 className="title-login">
            Sign In to <br /> get your nutrients
          </h1>
          <p className="text-direction">
            if you don’t have an account
            <br /> you can{" "}
            <NavLink className="register-navlink" to="/signup">
              Register here!
            </NavLink>
          </p>
        </div>
        <div className="login-container">
          <h2 className="title-form">Welcome back</h2>
          <form
            action=""
            className="form-container"
            onSubmit={(e) => {
              e.preventDefault();
            }} 
          >

            <input
              type="email"
              className="inputform"
              placeholder="Enter Email"
              name="email"
              value={emailValue}
              onChange={(e)=>setEmailValue(e.currentTarget.value)}
              required
            />
            <button onClick={()=>{setEmailValue('')}} className="close-btn">{emailValue && <LogoX />}</button>


            <input
              type={flagWatch ?'text':'password'}
              className="inputform"
              placeholder="********"
              name="password"
              required
            />
             <button type="button"  className="watch-btn" onClick={()=>{setFlagWatch(!flagWatch)}}>{flagWatch ?<LogoNoWatch />: <LogoWatch/>}</button>

            <a href="/" className="link-recover">Recover Password ?</a>
            <button type="submit" className="form-button">Sign in</button>
          </form>
          <p className="text-continue">Or continue with</p>
          <div className="form-link">
            <a href="/"><LogoGoogle/></a>
            <a href="/"><LogoApple/></a>
            <a href="/"><LogoFacebook/></a>
          </div>
          <button className="theme-btn">Go Dark</button>
        </div>
      </div>
    </>
  );
};
