import React from "react";
import { Link } from "react-router-dom";
import  sadaqalogo from "../img/sadaqalogo.png";
import LoginHeader from "./LoginHeader";

function Signup() {
  return (
    <div>
    <LoginHeader />
      <div className="wrapper">
        <div className="logo">
          <img src={sadaqalogo} alt="" />
        </div>
        <div className="text-center mt-4 name">SADAQA</div>
        <form className="p-0 mt-3">
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Create your Username"
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="far fa-envelope"></span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder=" Enter your Password"
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Repeat your Password"
            />
          </div>
          <button className="btn mt-3">Signup</button>
        </form>
        <div className="text-center fs-6">
          <a href="#">Forget password?</a><br />
          <Link to="/LoginForm" >Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;