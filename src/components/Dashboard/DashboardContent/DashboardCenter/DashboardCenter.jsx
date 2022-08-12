import React from "react";
import ApiDetails from "./components/ApiDetails/ApiDetails";
import ApiURLDescription from "./components/ApiURlDescription/ApiURLDescription";
import DashHeader from "./components/DashHeader/DashHeader";
import "./DashboardCenter.scss";

const DashboardCenter = () => {
    return (
        <div className="container dashboard-center">
            <DashHeader />
            <div className="center-content-body">
                <ApiDetails apiTitle={"PayPal Orders v2"} apiVersion="2.0" />
                <ApiURLDescription />
            </div>

            <div className="center-content-bottom">
                <p className="my-5">API endpoints</p>
                <p>/order</p>
                <a className="color-btn" href="#">
                    POST
                </a>
                <p className="mt-4">/order</p>
                <a className="color-btn get" href="#">
                    GET
                </a>
                <br /> <br />
                <a className="color-btn patch" href="#">
                    PATCH
                </a>
                <p className="mt-4">/orders/order_id/authorize</p>
                <a className="color-btn" href="#">
                    POST
                </a>
                <p className="mt-4">/orders/order_id/capture</p>
                <a className="color-btn" href="#">
                    POST
                </a>
                <p className="mt-4">/orders/order_id/save</p>
                <a className="color-btn" href="#">
                    POST
                </a>
            </div>
        </div>
    );
};

export default DashboardCenter;
