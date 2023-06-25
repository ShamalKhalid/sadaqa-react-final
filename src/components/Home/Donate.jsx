import React from "react";
import { Link } from "react-router-dom";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";

function Donate() {
  return (
    <section id="pricing">
      <h2 className="pricing-head">
        Donating increases your wealth not decrease them.
      </h2>
      <p className="DonateP">
        Your contribution, no matter the size, creates positive change and
        uplifts the most vulnerable.
      </p>

      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h3>Hunger Relief</h3>
            </div>
            <div className="card-body">
              <img src={img2} className="donationImg" alt="" />
              <Link to="/hungerRelief">
                <button className="btn-outline btn-lg btn-block" type="button">
                  Donate
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h3>Help the ill</h3>
            </div>
            <div className="card-body">
              <img src={img3} className="donationImg" alt="" />
              <Link to="/hungerRelief">
                <button className="btn-outline btn-lg btn-block" type="button">
                  Donate
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h3>Education</h3>
            </div>
            <div className="card-body">
              <img src={img4} className="donationImg" alt="" />
              <Link to="/hungerRelief">
              <button className="btn-outline btn-lg btn-block" type="button">
                Donate
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Donate;
