import React from "react";
import { BiSearch } from "react-icons/bi";
import { HiOutlineChevronDown } from "react-icons/hi";
import "./ServiceSearch.scss";

export default function ServiceSearch() {
    const services = [
        {
            title: "Action",
            value: "Action",
        },
        {
            title: "lorem",
            value: "lorem",
        },
        {
            title: "lorem1",
            value: "lorem1",
        },
    ];
    const [selectedService, setSelectedService] = React.useState(null);

    return (
        <div className="input-group my-5 searchArea">
            <button
                className=" dropbtn "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                All type <HiOutlineChevronDown />
            </button>

            <ul className="dropdown-menu ">
                {services.map((service, index) => (
                    <li
                        className="dropdown-item"
                        key={index}
                        onClick={() => setSelectedService(service)}
                    >
                        <span>{service.title}</span>
                    </li>
                ))}
            </ul>

            <div className="searchinput">
                <span>
                    <BiSearch size={20} />
                </span>
                <input
                    type="text"
                    className="searchInput "
                    aria-label="Text input with dropdown button"
                    placeholder="Search"
                />
            </div>
        </div>
    );
}
