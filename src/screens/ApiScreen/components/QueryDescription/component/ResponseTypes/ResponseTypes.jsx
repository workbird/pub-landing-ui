import React from "react";
import "./ResponseTypes.scss";

export default function ResponseTypes() {
    return (
        <div className="bodyTabsRight  px-4">
            <div className="bodytabsRightItem">
                <span>200 Ok</span>
            </div>
            <div className="bodytabsRightItem">
                <span>468 ms</span>
            </div>
            <div className="bodytabsRightItem">
                <span>734 B</span>
            </div>

            <div className="saveResponses ">
                <span>Save response</span>
            </div>
        </div>
    );
}
