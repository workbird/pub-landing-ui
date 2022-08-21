import React from "react";
import { useOutletContext } from "react-router-dom";
import LeftSideLink from "./components/LeftSideLink/LeftSideLink";

import "./LeftSideContent.scss";

export default function LeftSideContent({ onClick, active }) {
    return (
        <div className="leftSideNavContent">
            <div className="pt-4 ">
                <div className="lsnTitle py-3 px-4">
                    <h5>PAGES</h5>
                </div>
                <div className="lsnTitle py-3 px-4">
                    <h5>SPECIFICATION</h5>
                </div>
            </div>
            {/* apiSummary apiEndpoints */}
            <LeftSideLink
                title="Summary"
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
            <LeftSideLink title="Other Details" />
            <LeftSideLink title="API instances" />
        </div>
    );
}
