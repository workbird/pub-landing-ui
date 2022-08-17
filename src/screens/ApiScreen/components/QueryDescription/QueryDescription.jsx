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
    const [filter, setFilter] = React.useState(1);
    return (
        <div className="mt-5 queryDescription">
            <div className="bodyTabs ">
                <ResponseBody />
                <ResponseTypes />
            </div>

            <BodyFilter onSelect={(d) => setFilter(d)} selected={filter} />

            <div className="codeViewer">
                {filter === 1 && <ReactJson theme={"ashes"} src={bodyDaata} />}
                {filter === 2 && (
                    <pre>{JSON.stringify(bodyDaata, null, 2)}</pre>
                )}
                {filter === 3 && (
                    <pre>{JSON.stringify(bodyDaata, null, 2)}</pre>
                )}
                {filter === 4 && (
                    <pre>{JSON.stringify(bodyDaata, null, 2)}</pre>
                )}
            </div>
        </div>
    );
}
