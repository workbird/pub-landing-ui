import React from "react";
import ApiBtn from "../../../../../../../../components/ApiBtn/ApiBtn";
import "./ApiButtons.scss";

export default function ApiButtons({ methods, onClick, title }) {
    return (
        <div className="apiButtons">
            <h6 className="apiBtnTitle">{title}</h6>
            {methods?.map((method, index) => {
                return (
                    <ApiBtn
                        key={index}
                        method={method}
                        onClick={() => onClick(method)}
                    />
                );
            })}
        </div>
    );
}
