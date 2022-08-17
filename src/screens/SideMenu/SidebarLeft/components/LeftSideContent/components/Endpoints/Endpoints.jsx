import React from "react";
import Collapsable from "../../../../../../../components/Collapsable/Collapsable";
import ApiBtn from "./../../../../../../../components/ApiBtn/ApiBtn";
import "./Endpoints.scss";
import ApiWithText from "./../../../../../common/ApiWithText/ApiWithText";
import { useNavigate } from "react-router-dom";

export default function Endpoints() {
    const [isExpanded, setIsExpanded] = React.useState(null);
    const navigate = useNavigate();

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
                    <ApiWithText
                        method="GET"
                        text="Order.get"
                        onClick={() => navigate(`/dashboard/api?id=1`)}
                    />
                    <ApiWithText
                        method="GET"
                        text="Order.get"
                        onClick={() => navigate(`/dashboard/api?id=1`)}
                    />
                </div>
            </Collapsable>
        </div>
    );
}
