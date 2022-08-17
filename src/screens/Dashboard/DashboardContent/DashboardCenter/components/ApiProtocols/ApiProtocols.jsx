import React from "react";
import "./ApiProtocols.scss";
import ProtolFilter from "./components/ProtocolFilter/ProtocolFilter";

export default function ApiProtocols() {
    const protocols = [
        {
            _id: "1",
            label: "HTTPS",
        },
        {
            _id: "2",
            label: "HTTP",
        },
        {
            _id: "3",
            label: "TCP",
        },
        {
            _id: "4",
            label: "UDP",
        },
    ];

    const [selectedProtocol, setSelectedProtocol] = React.useState(
        protocols[0]
    );

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
                <ProtolFilter
                    selected={selectedProtocol?._id}
                    onSelect={(pro) => setSelectedProtocol(pro)}
                    data={protocols}
                    title={selectedProtocol?.label}
                />
                <hr />
            </div>
        </div>
    );
}
