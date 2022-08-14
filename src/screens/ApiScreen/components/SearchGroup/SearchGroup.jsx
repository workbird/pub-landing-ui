import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import "./SearchGroup.scss";

export default function SearchGroup() {
    const selectorData = [
        {
            id: 1,
            label: "get",
            value: "get",
        },

        {
            id: 2,
            label: "post",
            value: "post",
        },
        {
            id: 3,
            label: "put",
            value: "put",
        },
        {
            id: 4,
            label: "delete",
            value: "delete",
        },
    ];
    const selector2Data = [
        {
            id: 1,
            label: "send",
            value: "send",
        },

        {
            id: 2,
            label: "request",
            value: "request",
        },
    ];

    const Selector = ({ selected, onSelect, data }) => {
        return (
            <div className=" searchGroupDropDown">
                <select
                    className=" searchGroupDropDownOptions"
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
                <span className="searchGroupDropDownIcon">
                    <HiOutlineChevronDown color="#000" size={24} />
                </span>
            </div>
        );
    };

    const Search = ({ onChange }) => {
        return (
            <div className="searchGroup">
                <Selector data={selectorData} />
                <input type="text" placeholder="Search" />
                <Selector data={selector2Data} />
            </div>
        );
    };

    return (
        <div>
            <h5 className="searchGroupTitle">Orders.Get</h5>
            <Search />
        </div>
    );
}
