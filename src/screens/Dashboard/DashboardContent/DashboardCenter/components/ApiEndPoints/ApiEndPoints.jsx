import React from "react";
import SmallHeader from "../../../common/SmallHeader/SmallHeader";
import ApiButtons from "./components/ApiButtons/ApiButtons";

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
            <SmallHeader className="my-5 dashApiHeaderSmall">
                API endpoints
            </SmallHeader>
            <div className="dashEndpoints">
                {endpoins.map((endpoint, index) => {
                    return (
                        <ApiButtons
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
