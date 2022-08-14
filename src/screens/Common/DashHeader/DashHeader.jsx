import React from "react";
import image1 from "../../../img/services/Salesforce.com_logo.svg.png";
import DashDropDown from "./components/DashDropDown/DashDropDown";

export default function DashHeader({ title, dropDownData }) {
    const [value, setValue] = React.useState(dropDownData?.[0].value);

    return (
        <div className="center-content-head">
            <div className="dash-imageContent">
                <img className="logo" src={image1} alt="f" />
                <h3>{title}</h3>
            </div>
            {dropDownData?.length > 0 && (
                <DashDropDown
                    data={dropDownData}
                    onSelect={(item) => setValue(item)}
                    selected={value}
                />
            )}
        </div>
    );
}
