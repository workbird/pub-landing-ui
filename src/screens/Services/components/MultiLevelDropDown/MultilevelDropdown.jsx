/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import DropdownHeader from "./components/DropdownHeader/DropdownHeader";
import DropdownItem from "./components/DropDownItem/DropdownItem";
import DropdownSubmenu from "./components/DropdownSubmenu/DropdownSubmenu";
import DropdownTitle from "./components/DropdownTitle/DropdownTitle";
import "./MultiLevelDropdown.scss";

export default function MultilevelDropdown() {
    return (
        <div className="dropdown">
            <ul className="dropdownItems">
                <DropdownItem>
                    <DropdownHeader />
                    <DropdownSubmenu>
                        <DropdownItem>
                            <DropdownTitle> Dropdown Subtitle </DropdownTitle>
                            <DropdownSubmenu>
                                <DropdownItem>
                                    <DropdownTitle>
                                        {" "}
                                        Dropdown Subtitle{" "}
                                    </DropdownTitle>
                                </DropdownItem>
                                <DropdownItem>
                                    <DropdownTitle>
                                        Dropdown Subtitle{" "}
                                    </DropdownTitle>
                                    <DropdownSubmenu>
                                        <DropdownItem>
                                            <DropdownTitle>
                                                {" "}
                                                Dropdown Subtitle{" "}
                                            </DropdownTitle>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <DropdownTitle>
                                                Dropdown Subtitle{" "}
                                            </DropdownTitle>
                                        </DropdownItem>
                                    </DropdownSubmenu>
                                </DropdownItem>
                            </DropdownSubmenu>
                        </DropdownItem>
                        <DropdownItem>
                            <DropdownTitle />
                        </DropdownItem>
                        <DropdownItem>
                            <DropdownTitle />
                        </DropdownItem>
                    </DropdownSubmenu>
                </DropdownItem>
            </ul>
        </div>
    );
}
