import React from "react";
import { Link } from "react-router-dom";
function HungerHeader(){
    return(
        <section id="Login">
      <div>
        {/* <!-- Nav Bar --> */}
        <nav className="navbarLogin navbar-expand-lg navbar-dark">
          <div>
            <Link to="/" className="navbar-brand navbarHeading">
              Donate for a Better World!
            </Link>
          </div>
        </nav>
      </div>
    </section>
    )
}
export default HungerHeader;