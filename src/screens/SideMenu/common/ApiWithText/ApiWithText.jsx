import React from "react";
import ApiBtn from "../../../../components/ApiBtn/ApiBtn";
import "./ApiWithText.scss";

export default function ApiWithText({
    method,
    text,
    onClick,
    className,
    buttonClassName,
    textClassName,
}) {
    return (
        <div
            className={`endpointBtns d-flex align-items-center  py-3 ${
                className || ""
            }`}
        >
            <ApiBtn
                onClick={onClick}
                method={method}
                className={`m-0`}
                buttonClassName={buttonClassName}
            />
            <span className={`ms-4 pe-3 apiWtext  ${textClassName || ""} `}>
                {text}
            </span>
        </div>
    );
}
