import React from "react";
import ApiBtn from "../../../../../../../../components/ApiBtn/ApiBtn";
import "./ApiButtons.scss";
import { useNavigate } from "react-router-dom";
import { ApiUrlContext } from "../../../../../../../../context/contexts";

export default function ApiButtons({ methods, onClick, title }) {
    const urlContext = React.useContext(ApiUrlContext);

    const navigate = useNavigate();
    return (
        <div className="apiButtons mb-5">
            <h6 className="apiBtnTitle">{title}</h6>

            {methods?.map((method, index) => {
                return (
                    <div
                        className="d-flex justify-content-between align-items-center  my-3  "
                        key={index}
                    >
                        <div className="d-flex align-items-center ">
                            <ApiBtn method={method.method} className="mb-0 " />
                            <span className="methodeUrl ms-4">
                                {method.url}
                            </span>
                        </div>
                        <button
                            onClick={() => {
                                urlContext.setUrl(method);
                                navigate(`/dashboard/api?id=${index}`);
                            }}
                            className="btn btn-primary viewBtn"
                        >
                            Try
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
