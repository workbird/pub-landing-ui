import React from "react";
import "./LeftColTextContent.scss";

export default function LeftColTextContent({ title }) {
    return (
        <div className="leftSideType px-4 py-3">
            <span>{title}</span>
        </div>
    );
}
