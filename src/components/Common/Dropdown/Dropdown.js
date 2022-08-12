import React from 'react';
import "./Dropdown.css";
const Dropdown = (props) => {
    const {item1, item2, item3, item4, item5, item6} = props.drop;
    return (
        <div className="">
            <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
            Lorem Ipsum
        </button>
            <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">{item1}</a></li>
            <li><a className="dropdown-item" href="#">{item2}</a></li>
            <li><a className="dropdown-item" href="#">{item3}</a></li>
            <li><a className="dropdown-item" href="#">{item4}</a></li>
            <li><a className="dropdown-item" href="#">{item5}</a></li>
            <li><a className="dropdown-item" href="#">{item6}</a></li>
            </ul>
        </div>
    );
};

export default Dropdown;