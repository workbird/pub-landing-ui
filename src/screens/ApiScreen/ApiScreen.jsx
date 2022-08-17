import React from "react";
import DashHeader from "../Common/DashHeader/DashHeader";
import "./ApiScreen.scss";
import ParamsList from "./components/ParamsList/ParamsList";
import QueryDescription from "./components/QueryDescription/QueryDescription";
import QueryParams from "./components/QueryParams/QueryParams";
import SearchGroup from "./components/SearchGroup/SearchGroup";

const dropDownData = [
    {
        label: "10.4 x",
        value: "10.4 x",
    },
    {
        label: "10.4 x",
        value: "10.4 x",
    },
    {
        label: "10.4 x",
        value: "10.4 x",
    },
    {
        label: "10.4 x",
        value: "10.4 x",
    },
    {
        label: "10.4 x",
        value: "10.4 x",
    },
];

export default function ApiScreen() {
    return (
        <div className="container px-xxl-8 pb-4">
            <DashHeader
                title={"PayPal Orders API"}
                dropDownData={dropDownData}
            />
            <SearchGroup />
            <ParamsList />
            <QueryParams />
            <QueryDescription />
        </div>
    );
}
