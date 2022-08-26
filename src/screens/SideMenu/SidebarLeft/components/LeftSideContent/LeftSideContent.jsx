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
                link="/dashboard/#summary"
                // isActive={active === "summary"}
            />
            <LeftSideLink
                title="Endpoints"
                link={`/dashboard/#endpoints`}
                // isActive={active === "endpoints"}
            />
            <LeftSideLink link={"#"} title="Types" />
            <LeftSideLink link={"#"} title="Security" />
            <LeftSideLink link={"#"} title="Summary" />

            <LeftSideLink link={"#"} title="API instances" />
        </div>
    );
}
