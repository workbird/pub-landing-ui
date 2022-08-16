import React from "react";
import { NavLink } from "react-router-dom";
import "./LetSideLink.scss";

export default function LeftSideLink({ title, link }) {
    return (
        <div className="leftSideLink">
            <NavLink
                to={link}
                className={(cn) => {
                    console.log(cn);
                    return cn.isActive ? "py-3 ps-4 active" : "py-3 px-4";
                }}
            >
                {title}
            </NavLink>
        </div>
    );
}
