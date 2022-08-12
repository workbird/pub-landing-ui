import React from "react";

export default function ApiURLDescription() {
    return (
        <div className="api">
            <div className="apiurlDescription">
                <span>
                    Use the Orders API to create, update, show details for,
                    authorize and capture payments for, save, and void orders.
                </span>
                <div className="center-inner-body">
                    <p>https://api.paypal.com/v2/checkout</p>
                </div>
            </div>
            <div className="httpsLink">
                <p>Supported protocols</p>
                <a href="#">HTTPS</a>
                <hr />
            </div>
        </div>
    );
}
