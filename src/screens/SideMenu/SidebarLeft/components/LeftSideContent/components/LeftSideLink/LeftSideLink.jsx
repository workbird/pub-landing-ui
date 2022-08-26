import React from "react";
import "./LetSideLink.scss";
import { HashLink } from "react-router-hash-link";

export default function LeftSideLink({ title, link, isActive, onClick }) {
    const cn = isActive ? "py-3 ps-4 active" : "py-3 px-4";
    return (
        <div className="leftSideLink">
            <HashLink smooth to={link} className={cn}>
                {title}
            </HashLink>
        </div>
    );
}
