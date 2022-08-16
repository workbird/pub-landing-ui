import React from "react";
import "./ApiBtn.scss";

export default function ApiBtn({
    method,
    onClick,
    className,
    buttonClassName,
}) {
    return (
        <div className={`apiBtnContent ${className || ""}`}>
            <span
                className={`apiBtn ${method?.toLowerCase() || "get"} ${
                    buttonClassName || ""
                }`}
                onClick={onClick}
            >
                {method}
            </span>
        </div>
    );
}
