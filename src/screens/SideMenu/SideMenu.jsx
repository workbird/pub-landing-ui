import React from "react";
import { Outlet } from "react-router-dom";
import SidebarLeft from "./SidebarLeft/SidebarLeft";
import SidebarRight from "./SidebarRight/SidebarRight";
import "./SideMenu.scss";

const SideMenu = () => {
    return (
        <div className="grid">
            <SidebarLeft />
            <div className="center">
                <div className="center-container">
                    <Outlet />
                </div>
            </div>
            <SidebarRight />
        </div>
    );
};

export default SideMenu;
