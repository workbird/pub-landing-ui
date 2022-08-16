import React from "react";
import "./apiDetails.scss";

export default function ApiDetails({ apiTitle, apiVersion }) {
    return (
        <div className="apiDescription">
            <h6 className="apiDetailTitle">API specification summary</h6>
            <p className=" apiDescSummary">API title: {apiTitle} </p>
            <p className="mb-3 mb-md-5 apiDescSummary">Version: {apiVersion}</p>
        </div>
    );
}
