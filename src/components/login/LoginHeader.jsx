import React from "react";
import { Link } from "react-router-dom";
function LoginHeader(){
    return(
        <section id="Login">
      <div>
        {/* <!-- Nav Bar --> */}
        <nav className="navbarLogin navbar-expand-lg navbar-dark">
          <div>
            <Link to="/" className="navbar-brand navbarHeading">
              Welcome to Sadaqa!
            </Link>
          </div>
        </nav>
      </div>
    </section>
    )
}
export default LoginHeader;