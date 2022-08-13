import React from "react";
import DashHeader from "../../../Common/DashHeader/DashHeader";
import ApiDetails from "./components/ApiDetails/ApiDetails";
import ApiEndPoints from "./components/ApiEndPoints/ApiEndPoints";
import ApiProtocols from "./components/ApiProtocols/ApiProtocols";

import "./DashboardCenter.scss";

const DashboardCenter = () => {
    return (
        <div className="container dashboard-center">
            <DashHeader />
            <ApiDetails apiTitle={"PayPal Orders v2"} apiVersion="2.0" />
            <ApiProtocols />
            <ApiEndPoints />
        </div>
    );
};

export default DashboardCenter;
