import React from "react";
import "./ApiBtn.scss";

export default function ApiBtn({ title, methods }) {
    return (
        <div className="apiBtnContent">
            <h6 className="apiBtnTitle">{title}</h6>
            {methods?.map((method, index) => {
                return (
                    <span
                        key={index}
                        className={`apiBtn ${method.toLowerCase()}`}
                        href="#"
                    >
                        {method}
                    </span>
                );
            })}
        </div>
    );
}
