import React from "react";
import "./QueryDescription.scss";

export default function QueryDescription() {
    return (
        <div className="mt-5 queryDescription">
            <div className="bodyTabs d-flex justify-content-between align-items-center ">
                <div className="tabs d-flex justify-content-between align-items-center ">
                    <div className="tabsItem  active-blue">
                        <span>Body</span>
                    </div>
                    <div className="tabsItem ">
                        <span>Cookies</span>
                    </div>
                    <div className="tabsItem ">
                        <span>Headers</span>
                    </div>
                    <div className="tabsItem ">
                        <span>Test Results</span>
                    </div>
                </div>
                <div className="bodyTabsRight d-flex justify-content-between align-items-center px-4">
                    <div className="bodytabsRightItem">
                        <span>200 Ok</span>
                    </div>
                    <div className="bodytabsRightItem">
                        <span>468 ms</span>
                    </div>
                    <div className="bodytabsRightItem">
                        <span>734 B</span>
                    </div>

                    <div className="saveResponses">
                        <span>Save response</span>
                    </div>
                </div>
            </div>

            <div className="centerTabs d-flex  align-items-center  p-4">
                <div className="tabs d-flex justify-content-between align-items-center bgDark">
                    <div className="tabsItem  active">
                        <span>Preety</span>
                    </div>
                    <div className="tabsItem  ">
                        <span>Raw</span>
                    </div>
                    <div className="tabsItem ">
                        <span>Preview</span>
                    </div>
                    <div className="tabsItem ">
                        <span>Visualize</span>
                    </div>
                </div>
                <div className="mx-4 px-4">
                    <span>Json</span>
                </div>
            </div>

            <code className="code">
                "code": "string", "field": "string", "message": "Description of
                the error", "contextId": "0b7a2d85-8233-4a0f-867b-fa77a8cdf8de"
            </code>
        </div>
    );
}
