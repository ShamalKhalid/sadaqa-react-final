import React from "react";
import img1 from "../img/img1.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section id="title">
      <div>
        {/* <!-- Nav Bar --> */}
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div>
            <Link to="/" className="navbar-brand">
              Sadaqa
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/AboutUs" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <div>
                  <Link to="/AssociatesApp" className="nav-link ">
                    Our Associates
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  Donate
                </a>
              </li>
              <li className="nav-item">
                <div>
                  <Link to="/LoginForm" className="nav-link ">
                    Login
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <img src={img1} alt=" " className="img1"></img>
        <div className="intro">
          <p className="Ptag col-lg-">
            "Empower. Unite. Transform lives. <br />
            Welcome to Sadaqa - A Beacon of Hope."
          </p>
        </div>
      </div>
    </section>
  );
}

export default Header;
