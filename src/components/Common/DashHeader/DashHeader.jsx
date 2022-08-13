import React from "react";
import image1 from "../../../img/services/Salesforce.com_logo.svg.png";
import DashDropDown from "./components/DashDropDown/DashDropDown";

export default function DashHeader() {
    return (
        <div className="center-content-head">
            <div className="dash-imageContent">
                <img className="logo" src={image1} alt="f" />
                <h3>Salesforce Connector - Mule 4</h3>
            </div>
            <DashDropDown />
        </div>
    );
}
