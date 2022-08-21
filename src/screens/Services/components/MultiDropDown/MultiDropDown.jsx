import React from "react";
import Dropdown from "react-multilevel-dropdown";
import "./MultiDropDown.scss";

export default function MultiDropDown() {
    return (
        <div className="multiDropDow">
            <Dropdown
                menuClassName="dropMenu"
                title="Dropdown title"
                wrapperClassName="dropWrapper"
                position="right"
            >
                <Dropdown.Item>Item 1</Dropdown.Item>
                <Dropdown.Item position="right">
                    Item 2
                    <Dropdown.Submenu position="right">
                        <Dropdown.Item>Subitem 1</Dropdown.Item>
                        <Dropdown.Item>Subitem 1</Dropdown.Item>
                        <Dropdown.Item>Subitem 1</Dropdown.Item>
                        <Dropdown.Item>Subitem 1</Dropdown.Item>
                    </Dropdown.Submenu>
                </Dropdown.Item>
                <Dropdown.Item>
                    Item 3
                    <Dropdown.Submenu position="right">
                        <Dropdown.Item>Subitem 1</Dropdown.Item>
                        <Dropdown.Item>Subitem 1</Dropdown.Item>
                        <Dropdown.Item>Subitem 1</Dropdown.Item>
                        <Dropdown.Item>Subitem 1</Dropdown.Item>
                    </Dropdown.Submenu>
                </Dropdown.Item>
            </Dropdown>
        </div>
    );
}
