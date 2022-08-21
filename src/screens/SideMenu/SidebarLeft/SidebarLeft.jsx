import React from "react";
import LeftSideBarHeader from "./components/LeftSideBarHeader/LeftSideBarHeader";
import LeftSideContent from "./components/LeftSideContent/LeftSideContent";

export default function SidebarLeft({ onClick, active }) {
    return (
        <div className="left">
            <LeftSideBarHeader />
            <LeftSideContent onClick={onClick} active={active} />
        </div>
    );
}
