import React from "react";
import DashHeader from "../../../Common/DashHeader/DashHeader";
import ApiDetails from "./components/ApiDetails/ApiDetails";
import ApiEndPoints from "./components/ApiEndPoints/ApiEndPoints";
import ApiProtocols from "./components/ApiProtocols/ApiProtocols";
import "./DashboardCenter.scss";

const dropDownData = [
    {
        label: "10.4 x",
        value: "10.4 x",
    },
    {
        label: "10.4 x",
        value: "10.4 x",
    },
    {
        label: "10.4 x",
        value: "10.4 x",
    },
    {
        label: "10.4 x",
        value: "10.4 x",
    },
    {
        label: "10.4 x",
        value: "10.4 x",
    },
];

const DashboardCenter = () => {
    return (
        <div className="container dashboard-center">
            <DashHeader
                title={"Salesforce Connector - Mule 4"}
                dropDownData={dropDownData}
            />
            <ApiDetails apiTitle={"PayPal Orders v2"} apiVersion="2.0" />
            <ApiProtocols />
            <ApiEndPoints />
        </div>
    );
};

export default DashboardCenter;
