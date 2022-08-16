import React from "react";
import "./Collapsable.scss";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

export default function Collapsable({
    isExpanded,
    toggleOpen,
    children,
    title,
    titleClassName,
    className,
    contentClassName,
    chevronClassName,
    headerComp,
}) {
    return (
        <div
            className={`colapsableMenu ${isExpanded ? "show" : ""} ${
                className || ""
            }  `}
        >
            <div
                onClick={toggleOpen}
                className={`collapsableTitle justify-content-between d-flex py-3 px-4 ${
                    titleClassName || ""
                }`}
            >
                <div>{headerComp ? headerComp : <h5>{title}</h5>}</div>
                <ArrowForwardIosOutlinedIcon
                    className={`collapsableChevronIcon ${
                        chevronClassName || ""
                    } `}
                />
            </div>

            <div className={`collapsableContent ${contentClassName || " "}`}>
                {children}
            </div>
        </div>
    );
}
