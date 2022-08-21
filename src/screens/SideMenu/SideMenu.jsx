import React from "react";
import { Outlet } from "react-router-dom";
import SidebarLeft from "./SidebarLeft/SidebarLeft";
import "./SideMenu.scss";

const SideMenu = () => {
    const [activeLink, setActiveLink] = React.useState("");

    return (
        <div className="grid">
            <SidebarLeft
                onClick={(type) => {
                    if (type === activeLink) {
                        setActiveLink("");
                        setActiveLink(type);
                    } else {
                        setActiveLink(type);
                    }
                }}
                active={activeLink}
            />
            <div className="center ">
                <div className="center-container">
                    <Outlet context={[activeLink, setActiveLink]} />
                </div>
            </div>
        </div>
    );
};

export default SideMenu;
