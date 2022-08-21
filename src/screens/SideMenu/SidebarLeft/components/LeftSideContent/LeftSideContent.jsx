import React from "react";
import { useOutletContext } from "react-router-dom";
import LeftSideLink from "./components/LeftSideLink/LeftSideLink";

import "./LeftSideContent.scss";

export default function LeftSideContent({ onClick, active }) {
    return (
        <div className="leftSideNavContent mt-4">
            {/* apiSummary apiEndpoints */}
            <LeftSideLink
                title="Specfications"
                onClick={() => onClick("summary")}
                // isActive={active === "summary"}
            />
            <LeftSideLink
                title="Endpoints"
                onClick={() => onClick("endpoints")}
                // isActive={active === "endpoints"}
            />
            <LeftSideLink title="Types" />
            <LeftSideLink title="Security" />
            <LeftSideLink title="Summary" />

            <LeftSideLink title="API instances" />
        </div>
    );
}
