import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { HiOutlineChevronDown } from "react-icons/hi";
import dropdownData from "../../data/DropdownData";
import data from "../../data/ServicesListData";
import MultiDropDown from "./components/MultiDropDown/MultiDropDown";
import ServicesList from "./components/ServicesList/ServicesList";
import "./Services.css";

const Services = () => {
    const [services, setServices] = useState(data);
    const [dropdown, setDropdown] = useState(dropdownData);
    
    return (
        <div className="services">
            <div className="container py-5">
                <div className="d-flex justify-content-between mb-5">
                    {dropdown.map((drop, key) => (
                        <MultiDropDown key={key}  />
                    ))}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="text-white">LOREM IPSUM</h2>
                    <div className="services-btn">
                        <a href="#">eiusmod tempor</a>
                        <a href="#">eiusmod tempor</a>
                    </div>
                </div>
                <div className="input-group my-5">
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        All type <HiOutlineChevronDown />
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Something else here
                            </a>
                        </li>
                    </ul>

                    <input
                        type="text"
                        className="form-control"
                        aria-label="Text input with dropdown button"
                        placeholder="Search"
                    />
                    <span className="search-icon">
                        {" "}
                        <BiSearch />{" "}
                    </span>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {services.map((service, index) => (
                        <ServicesList key={index} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
