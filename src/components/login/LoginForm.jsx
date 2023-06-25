import React from "react";
import sadaqalogo from "../img/sadaqalogo.png";
import { Link } from "react-router-dom"
import LoginHeader from "./LoginHeader";
function LoginForm() {
  return (
    <div>
    <LoginHeader />
    <div class="wrapper">
        <div class="logo">
            <img src={sadaqalogo} alt="" />
        </div>
        <div class="text-center mt-4 name">
            SADAQA
        </div>
        <form class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username" />
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password" />
            </div>
            <button class="btn mt-3">Login</button>
        </form>
        <div class="text-center fs-6">
            <a href="">Forget password?</a><br />
            <Link to="/SignupForm">
                Sign Up
            </Link>
        </div>
    </div>
      </div>
  );
}

export default LoginForm;
