import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import "./DashDropDown.scss";

export default function DashDropDown({ data, onSelect, selected }) {
    const selectRef = React.useRef();
    const [isShown, setIsShown] = React.useState(false);

    React.useEffect(() => {
        document.body.addEventListener("click", (e) => {
            setIsShown(false);
        });

        return () => {
            document.body.removeEventListener("click", (e) => {
                setIsShown(false);
            });
        };
    }, []);

    return (
        <div className={`dash-drop ${isShown ? "show" : ""}`}>
            <div
                className="dash-options"
                onChange={onSelect}
                value={selected}
                onClick={(e) => {
                    e.stopPropagation();
                    setIsShown((prev) => !prev);
                }}
            >
                <span>{selected?.label}</span>

                <HiOutlineChevronDown
                    className="dash-icon"
                    color="#4ad9ec"
                    size={24}
                />
            </div>
            <ul className={`dashDropOption  `}>
                {data?.map((item, index) => {
                    return (
                        <li
                            key={index}
                            onClick={() => {
                                onSelect(item);
                                setIsShown((prev) => !prev);
                            }}
                        >
                            {item.label}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
