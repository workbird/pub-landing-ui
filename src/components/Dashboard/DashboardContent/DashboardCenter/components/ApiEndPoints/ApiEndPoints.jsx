import React from "react";
import SmallHeader from "../../../common/SmallHeader/SmallHeader";
import ApiBtn from "./components/ApiBtn/ApiBtn";

export default function ApiEndPoints({ apiTitle, endPoints = [] }) {
    const endpoins = [
        {
            title: "/orders",
            methods: ["POST"],
        },
        {
            title: "/orders/:id",
            methods: ["GET", "PUT", "DELETE"],
        },
        {
            title: "/orders/:id/payments",
            methods: ["POST"],
        },
        {
            title: "/payments/capture",
            methods: ["POST"],
        },
    ];
    return (
        <div className="center-content-bottom">
            <SmallHeader className="my-5">API endpoints</SmallHeader>
            <div className="dashEndpoints">
                {endpoins.map((endpoint, index) => {
                    return (
                        <ApiBtn
                            key={index}
                            title={endpoint.title}
                            methods={endpoint.methods}
                        />
                    );
                })}
            </div>
        </div>
    );
}
