import React from "react";
import { Link } from "react-router-dom";

function DonateHistory() {
  return (
    
      <div className="History col-12">
        <h1>CHECK OUT THE DONATIONS WE HAVE RECIEVED</h1>
        <Link to="/Donations" className="historyButton">
          <button className="donateButton">Click here.</button>
        </Link>
      </div>
  );
}
export default DonateHistory;
