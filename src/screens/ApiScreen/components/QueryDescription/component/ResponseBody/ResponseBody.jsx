import React from "react";
import "./ResponseBody.scss";

export default function ResponseBody() {
    return (
        <div className="tabItems  ">
            <div className="tabItem  active-blue">
                <span>Body</span>
            </div>
            <div className="tabItem ">
                <span>Cookies</span>
            </div>
            <div className="tabItem ">
                <span>Headers</span>
            </div>
            <div className="tabItem ">
                <span>Test Results</span>
            </div>
        </div>
    );
}
