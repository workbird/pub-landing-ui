import React from "react";
import "./ParamsList.scss";

export default function ParamsList() {
    const params = [
        "Params",
        "Params",
        "Params",
        "Params",
        "Params",
        "Params",
        "Params",
    ];
    return (
        <div>
            <div className="paramList d-flex">
                {params.map((param, index) => {
                    return (
                        <div key={param + index} className="paramListItem">
                            <h6>{param}</h6>
                        </div>
                    );
                })}
            </div>
            <hr />
        </div>
    );
}
