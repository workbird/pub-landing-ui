import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import "./LeftSidebarHeader.scss";

export default function LeftSideBarHeader() {
    const navigate = useNavigate();
    return (
        <div className="left-header">
            <div
                onClick={() => navigate(-1)}
                className="d-flex justify-content-left align-items-center gap-3 p-3"
            >
                <span className="leftArrow">
                    <HiArrowLeft size={24} color="#67B1FC" />
                </span>
                <h4 className="leftHeaderTitle">ASSETS LIST</h4>
            </div>
        </div>
    );
}
