import React from "react";
import Collapsable from "../../../../../components/Collapsable/Collapsable";
import Endpoints from "./components/Endpoints/Endpoints";
import LeftSideLink from "./components/LeftSideLink/LeftSideLink";
import LeftColTextContent from "./components/LetColTextContent/LeftColTextContent";

import "./LeftSideContent.scss";

export default function LeftSideContent() {
    const [isExpanded, setIsExpanded] = React.useState(null);

    const types = [
        {
            id: 1,
            title: "MerchantsCommonComponentsSpecification-v1-schema-shipping_options_request-json",
        },
        {
            id: 2,
            title: "MerchantsCommonComponentsSpecification-v1-schema-shipping_options_request-json",
        },
        {
            id: 3,
            title: "MerchantsCommonComponentsSpecification-v1-schema-shipping_options_request-json",
        },
        {
            id: 4,
            title: "MerchantsCommonComponentsSpecification-v1-schema-shipping_options_request-json",
        },
    ];

    return (
        <div className="leftSideNavContent">
            <div className="pt-4 pb-3">
                <div className="lsnTitle py-3 px-4">
                    <h5>PAGES</h5>
                </div>
                <div className="lsnTitle py-3 px-4">
                    <h5>SPECIFICATION</h5>
                </div>
            </div>

            <LeftSideLink title="Summary" link="/dashboard" />

            <div className="collapsables">
                <Collapsable
                    isExpanded={isExpanded === 1}
                    toggleOpen={() =>
                        setIsExpanded((prev) => (prev === 1 ? null : 1))
                    }
                    title="Endpoints"
                    className={"important"}
                >
                    <Endpoints />
                </Collapsable>

                <Collapsable
                    isExpanded={isExpanded === 2}
                    toggleOpen={() =>
                        setIsExpanded((prev) => (prev === 2 ? null : 2))
                    }
                    title="Types"
                >
                    <div className="leftSideTypes">
                        {types.map((type) => (
                            <LeftColTextContent
                                key={type.id}
                                title={type.title}
                            />
                        ))}
                    </div>
                </Collapsable>

                <Collapsable
                    isExpanded={isExpanded === 3}
                    toggleOpen={() =>
                        setIsExpanded((prev) => (prev === 3 ? null : 3))
                    }
                    title="Security"
                >
                    <div className="leftSideTypes">
                        {types.map((type) => (
                            <LeftColTextContent
                                key={type.id}
                                title={type.title}
                            />
                        ))}
                    </div>
                </Collapsable>

                <LeftSideLink title="Other Details" link="/about" />
                <LeftSideLink title="API instances" link="/home" />
            </div>
        </div>
    );
}
