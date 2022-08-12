import React from "react";
import "./DashboardCenter.scss";
import image1 from "../../../../img/services/Salesforce.com_logo.svg.png";
import { HiOutlineChevronDown } from "react-icons/hi";

const DashboardCenter = () => {
  return (
    <div className="container dashboard-center">
      <div className="center-content-head">
        <img src={image1} alt="" />
        <h3>Salesforce Connector - Mule 4</h3>
        <div className="dash-drop">
          <select id="options">
            <option value="10:14x">10:14x</option>
            <option value="10:14x">10:14x</option>
            <option value="10:14x">10:14x</option>
            <option value="10:14x">10:14x</option>
          </select>
          <span className="dash-icon">
            <HiOutlineChevronDown />
          </span>
        </div>
      </div>
      <div className="center-content-body">
        <h6>API specification summary</h6>
        <p>API title: PayPal Orders v2</p>
        <p className="mb-5">Version: 2.0</p>
        <span>
          Use the Orders API to create, update, show details for, authorize and
          capture payments for, save, and void orders.
        </span>
        <div className="center-inner-body">
          <p>https://api.paypal.com/v2/checkout</p>
        </div>
      </div>
      <div className="center-content-bottom">
        <p>Supported protocols</p>
        <a href="#">HTTPS</a>
        <hr />
        <p className="my-5">API endpoints</p>
        <p>/order</p>
        <a className="color-btn" href="#">
          POST
        </a>
        <p className="mt-4">/order</p>
        <a className="color-btn get" href="#">
          GET
        </a><br /> <br />
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