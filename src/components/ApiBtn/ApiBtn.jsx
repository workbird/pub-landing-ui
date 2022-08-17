import React from "react";
import "./ApiBtn.scss";

export default function ApiBtn({
    method,
    onClick,
    className,
    buttonClassName,
}) {
    return (
        <div className={`apiBtnContent ${className || ""}`} onClick={onClick}>
            <span
                className={`apiBtn ${method?.toLowerCase() || "get"} ${
                    buttonClassName || ""
                }`}
            >
                {method}
            </span>
        </div>
    );
}
