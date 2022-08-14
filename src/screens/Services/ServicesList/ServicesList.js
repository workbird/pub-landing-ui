import React from "react";
import "./ServicesList.css";
// import salesforce from '../../../img/services/Salesforce.com_logo.svg.png';
import { HiThumbUp, HiThumbDown } from "react-icons/hi";
const ServicesList = (props) => {
  const { number, img, version, connector, Organization } = props.service;
  return (
    <div class="col">
      <div class="card">
        <div className="d-flex justify-content-between align-items-center">
          <p className="number">{number}</p>
          <div className="service-icon">
            <HiThumbUp />
            <HiThumbDown />
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={img} alt="" />
          <p className="mt-3">{version}</p>
          <h6>{connector}</h6>
          <p>{Organization}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
