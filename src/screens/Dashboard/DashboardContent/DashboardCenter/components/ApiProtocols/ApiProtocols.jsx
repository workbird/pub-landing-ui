import React from "react";
import "./ApiProtocols.scss";

export default function ApiProtocols() {
    return (
        <div className="api">
            <div className="apiurlDescription">
                <p className="apiurlDesc">
                    Use the Orders API to create, update, show details for,
                    authorize and capture payments for, save, and void orders.
                </p>
                <h3 className="centerInnerBody" readOnly resize="none">
                    https://api.paypal.com/v2/checkout
                </h3>
            </div>
            <div className="httpsLink">
                <p className="dashApiHeaderSmall">Supported protocols</p>
                <div className="apiType">
                    <span>HTTPS</span>
                </div>
                <hr />
            </div>
        </div>
    );
}
