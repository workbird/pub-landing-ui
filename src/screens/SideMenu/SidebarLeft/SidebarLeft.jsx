import React from "react";
import LeftSideBarHeader from "./components/LeftSideBarHeader/LeftSideBarHeader";
import LeftSideContent from "./components/LeftSideContent/LeftSideContent";

export default function SidebarLeft() {
    return (
        <div className="left">
            <LeftSideBarHeader />
            <LeftSideContent />
        </div>
    );
}
