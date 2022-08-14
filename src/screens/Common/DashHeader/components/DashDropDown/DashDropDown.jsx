import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import "./DashDropDown.scss";

export default function DashDropDown({ data, onSelect, selected }) {
    return (
        <div className="dash-drop ">
            <select
                className="dash-options"
                onChange={onSelect}
                value={selected}
            >
                {data?.map((item, index) => {
                    return (
                        <option key={index} value={item.value}>
                            {item.label}
                        </option>
                    );
                })}
            </select>
            <span className="dash-icon">
                <HiOutlineChevronDown color="#4ad9ec" size={24} />
            </span>
        </div>
    );
}
