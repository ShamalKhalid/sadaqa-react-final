import React from "react";
import "./styles.css";
import Header from "./components/Home/Header";
import OurAim from "./components/Home/OurAim";
import Footer from "./components/Home/Footer";
import Donate from "./components/Home/Donate";
import Founders from "./components/Home/Founders";

function Home() {
  return (
    <div>
      <Header />
      <OurAim />
      <Donate />
      <Founders />
      <Footer />
    </div>
  );
}

export default Home;
