import React from 'react';
import { HiOutlineChevronDown } from "react-icons/hi";

const SideDropdownList = (props) => {
    const innerRef = React.useRef(null);
    const {title, item1, item2, item3, item4} =props.dropdownlist;
    return (
        <div className="dropdown">
                    <div
                        onClick={() => {
                            innerRef.current.classList.toggle("show");
                        }}
                        className="dropdown-header"
                    >
                        <h6>{title} </h6>
                        <span><HiOutlineChevronDown /></span>
                    </div>
                    <div ref={innerRef} className="dropdown-content">
                        <div className="dropdown-item">
                            <p>{item1}</p>
                        </div>
                        <div className="dropdown-item">
                            <p>{item2}</p>
                        </div>
                        <div className="dropdown-item">
                            <p>{item3}</p>
                        </div>
                        <div className="dropdown-item">
                            <p>{item4}</p>
                        </div>
                    </div>
                </div>
    );
};

export default SideDropdownList;