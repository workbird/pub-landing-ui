import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

export default function DashDropDown() {
    return (
        <div className="dash-drop">
            <select id="options">
                <option value="10:14x">10:14x</option>
                <option value="10:14x">10:14x</option>
                <option value="10:14x">10:14x</option>
                <option value="10:14x">10:14x</option>
            </select>
            <span className="dash-icon">
                <HiOutlineChevronDown color="#4ad9ec" size={24} />
            </span>
        </div>
    );
}
