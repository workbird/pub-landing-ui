import React from "react";
import SmallHeader from "../../../common/SmallHeader/SmallHeader";
import ApiButtons from "./components/ApiButtons/ApiButtons";

export default function ApiEndPoints({ apiTitle, endPoints = [] }) {
    const endpoins = [
        {
            title: "/orders",
            methods: [
                {
                    method: "GET",
                    url: "https://localhost/orders",
                },
            ],
        },
        {
            title: "/orders/:id",
            methods: [
                { method: "GET", url: "https://localhost/orders/:id" },
                { method: "PUT", url: "https://localhost/orders/:id" },
                { method: "DELETE", url: "https://localhost/orders/:id" },
            ],
        },
        {
            title: "/orders/:id/payments",
            methods: [
                {
                    method: "POST",
                    url: "https://localhost/orders/:id/payments",
                },
            ],
        },
        {
            title: "/payments/capture",
            methods: [
                {
                    method: "POST",
                    url: "https://localhost/payments/capture",
                },
            ],
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
