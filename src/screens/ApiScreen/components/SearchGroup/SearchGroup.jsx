import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { ApiUrlContext } from "../../../../context/contexts";
import InputEl from "./components/InputEl/InputEl";
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
        const [isOpen, setIsOpen] = React.useState(false);

        React.useEffect(() => {
            document.body.addEventListener("click", (e) => {
                setIsOpen(false);
            });
        }, []);

        return (
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen((prev) => !prev);
                }}
                className={`searchGroupDropDown ${isOpen ? "show" : ""}`}
            >
                <div className="searchGroupDropDownTitle" onChange={onSelect}>
                    <span>{selected?.label}</span>
                    <HiOutlineChevronDown
                        className="searchGroupDropDownIcon"
                        color="#000"
                        size={24}
                    />
                </div>

                <ul className="searchGroupList">
                    {data?.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={(e) => {
                                    setIsOpen(false);
                                    onSelect(item);
                                }}
                            >
                                {item.label}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };

    const urlCtx = React.useContext(ApiUrlContext);

    const [value, setValue] = React.useState(urlCtx?.url?.url);
    const [selected, setSelected] = React.useState(selectorData[0]);

    return (
        <div>
            <h5 className="searchGroupTitle">Orders.Get</h5>
            <div className="searchGroup">
                <Selector
                    data={selectorData}
                    selected={selected}
                    onSelect={(sel) => setSelected(sel)}
                />
                <InputEl value={value} setValue={(val) => setValue(val)} />
                <button className="searchGroupBtn">Send</button>
            </div>
        </div>
    );
}
