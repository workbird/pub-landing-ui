import React from "react";
import ApiBtn from "../../../../components/ApiBtn/ApiBtn";
import "./ApiWithText.scss";

export default function ApiWithText({ method, text, onClick, className }) {
    return (
        <div
            className={`endpointBtns d-flex align-items-center  py-3 ${
                className || ""
            }`}
        >
            <ApiBtn onClick={onClick} method={method} className="m-0" />
            <span className="ms-4 apiWtext">{text}</span>
        </div>
    );
}
