import React from "react";
import "./ApiBtn.scss";

export default function ApiBtn({ method, onClick, className }) {
    return (
        <div className={`apiBtnContent ${className || ""}`}>
            <span
                className={`apiBtn ${method?.toLowerCase() || "get"}`}
                onClick={onClick}
            >
                {method}
            </span>
        </div>
    );
}
