import React from "react";
import "./BodyFilter.scss";

const options = [
    {
        id: 1,
        title: "Preety",
    },
    {
        id: 2,
        title: "Raw",
    },
    {
        id: 3,
        title: "Preview",
    },
    {
        id: 4,
        title: "Visualize",
    },
];

export default function BodyFilter({ onSelect, selected }) {
    return (
        <div className="centerTabs align-items-center  p-4">
            <div className="tabItems  bgDark">
                {options.map((option) => (
                    <div
                        key={option.id}
                        onClick={() => onSelect(option.id)}
                        className={`tabItem  ${
                            selected === option.id ? "active" : ""
                        }`}
                    >
                        <span>{option.title}</span>
                    </div>
                ))}
            </div>
            <div className="selectOptions mx-4 px-4 py-4">
                <select>
                    <option value="json">JSON</option>
                    <option value="text">TEXT</option>
                    <option value="">Select</option>
                </select>
            </div>
        </div>
    );
}
