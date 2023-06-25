import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import AssociatesApp from "./components/OurAssociates/AssociatesApp";
import Home from "./Home";
import LoginForm from "./components/login/LoginForm";
import Signup from "./components/login/SignUpForm";
import hungerRelief from "./components/Causes/hungerRelief";
import { Helmet } from "react-helmet";
import sadaqalogo from "../src/components/img/sadaqalogo.png"
function App() {
  return (
    <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Sadaqa</title>
      <link rel="icon" href={sadaqalogo} type="image/x-icon"/>
    </Helmet>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/AssociatesApp" component={AssociatesApp} />
        <Route path="/LoginForm" component={LoginForm} />
        <Route path="/SignupForm" component={Signup} />
        <Route path="/hungerRelief" component={hungerRelief} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
