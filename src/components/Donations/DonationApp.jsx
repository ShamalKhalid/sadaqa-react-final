import React from "react";
import LoginHeader from "../login/LoginHeader";
import Donations from "./Donations";

function DonationApp(){
    return(
        <div>
            <LoginHeader />
            <Donations/>
        </div>
    );
}

export default DonationApp;