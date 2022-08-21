import React from "react";
import "./LetSideLink.scss";

export default function LeftSideLink({ title, link, isActive, onClick }) {
    const cn = isActive ? "py-3 ps-4 active" : "py-3 px-4";
    return (
        <div className="leftSideLink">
            <span onClick={onClick} to={link} className={cn}>
                {title}
            </span>
        </div>
    );
}
