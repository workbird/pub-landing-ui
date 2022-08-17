import React from "react";
import "./BodyFilter.scss";

export default function BodyFilter() {
    return (
        <div className="centerTabs   align-items-center  p-4">
            <div className="tabItems  bgDark">
                <div className="tabItem  active">
                    <span>Preety</span>
                </div>
                <div className="tabItem  ">
                    <span>Raw</span>
                </div>
                <div className="tabItem ">
                    <span>Preview</span>
                </div>
                <div className="tabItem ">
                    <span>Visualize</span>
                </div>
            </div>
            <div className="selectOptions mx-4 px-4 py-4">
                <select>
                    <option value="json">JSON</option>
                    <option value="text">TEXT</option>
                    <option value="">Select</option>
                </select>
            </div>
        </div>
    );
}
