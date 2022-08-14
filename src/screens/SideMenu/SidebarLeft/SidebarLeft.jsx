import React, { useState } from "react";
import "./SidebarLeft.scss";
import { HiArrowLeft } from "react-icons/hi";

import SideDropdownList from "./SideDropdownList";
import SideDropdownData from "../../../data/SideDropdownData";

const SidebarLeft = () => {
    const [sideDropdownList, setSideDropdownList] = useState(SideDropdownData);

    return (
        <div className="dashboard-left left">
            <div className="left-header">
                <div className="d-flex justify-content-left align-items-center gap-3 p-3">
                    <span className="left-arrow">
                        <HiArrowLeft />
                    </span>
                    <h4>ACCESS LIST</h4>
                </div>
                <div className="d-flex flex-column px-3 mb-2">
                    <p>PAGES</p>
                    <p>SPECIFICATION</p>
                </div>
            </div>
            <div>
                {sideDropdownList.map((dropdownlist) => (
                    <SideDropdownList
                        dropdownlist={dropdownlist}
                    ></SideDropdownList>
                ))}
            </div>
            <div className="left-bottom p-3">
                <p>Other Details</p>
                <p>API instances</p>
            </div>
        </div>
    );
};

export default SidebarLeft;
