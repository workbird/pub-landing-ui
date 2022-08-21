import React from "react";
import ApiBtn from "../../../../../../../../components/ApiBtn/ApiBtn";
import "./ApiButtons.scss";
import { useNavigate } from "react-router-dom";

export default function ApiButtons({ methods, onClick, title }) {
    const navigate = useNavigate();
    return (
        <div className="apiButtons">
            <h6 className="apiBtnTitle">{title}</h6>

            {methods?.map((method, index) => {
                return (
                    <div
                        className="d-flex justify-content-between align-items-center  my-2 "
                        key={index}
                    >
                        <ApiBtn
                            method={method}
                            onClick={() =>
                                navigate(`/dashboard/api?id=${index}`)
                            }
                        />
                        <button
                            onClick={() =>
                                navigate(`/dashboard/api?id=${index}`)
                            }
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
