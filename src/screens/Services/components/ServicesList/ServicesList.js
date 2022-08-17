import React from "react";
import "./ServicesList.scss";
// import salesforce from '../../../img/services/Salesforce.com_logo.svg.png';
import { HiThumbDown, HiThumbUp } from "react-icons/hi";

const ServicesList = ({
    likes,
    image,
    version,
    connector,
    organization,
    onLike,
    onDislike,
}) => {
    return (
        <div className="col ">
            <div className="card py-4">
                <div className="d-flex justify-content-between align-items-center">
                    <p className="number">{likes}</p>
                    <div className="service-icon d-flex gap-1">
                        <HiThumbUp size={30} className="likeDislikeBtn" onClick={onLike} />
                        <HiThumbDown size={30} className="likeDislikeBtn" onClick={onDislike} />
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img src={image} alt="" />
                    <p className="mt-3">{version}</p>
                    <h6>{connector}</h6>
                    <p>{organization}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesList;
