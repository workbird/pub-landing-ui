import React from "react";
import "./QueryDescription.scss";
import ReactJson from "react-json-view";
import ResponseBody from "./component/ResponseBody/ResponseBody";
import ResponseTypes from "./component/ResponseTypes/ResponseTypes";
import BodyFilter from "./component/BodyFilter/BodyFilter";

const bodyDaata = [
    {
        code: "string",
        field: "string",
        message: "Description of the error",
        contextId: "0b7a2d85-8233-4a0f-867b-fa77a8cdf8de",
    },
];

export default function QueryDescription() {
    return (
        <div className="mt-5 queryDescription">
            <div className="bodyTabs ">
                <ResponseBody />
                <ResponseTypes />
            </div>

            <BodyFilter />

            <div className="codeViewer">
                <ReactJson theme={"ashes"} src={bodyDaata} />
            </div>
        </div>
    );
}
