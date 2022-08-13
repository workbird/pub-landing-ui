import React from "react";
import "./SmallHeader.scss";

export default function SmallHeader({ className, children }) {
    return <h6 className={`dashApiHeaderSmall ${className}`}>{children}</h6>;
}
