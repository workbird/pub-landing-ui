import React from "react";
import Collapsable from "../../../../../../../components/Collapsable/Collapsable";
import ApiBtn from "./../../../../../../../components/ApiBtn/ApiBtn";
import "./Endpoints.scss";
import ApiWithText from "./../../../../../common/ApiWithText/ApiWithText";

export default function Endpoints() {
    const [isExpanded, setIsExpanded] = React.useState(null);
    return (
        <div className="endpoints ">
            <Collapsable
                isExpanded={isExpanded === 1}
                toggleOpen={() =>
                    setIsExpanded((prev) => (prev === 1 ? null : 1))
                }
                title="/{ORDER_ID}"
                titleClassName={"ps-8"}
            >
                <div className="ps-5">
                    <ApiWithText method="GET" text="Order.get" />
                    <ApiWithText method="GET" text="Order.get" />
                </div>
            </Collapsable>
        </div>
    );
}
