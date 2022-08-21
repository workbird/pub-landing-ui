import React from "react";

export default function ServiceHeader({ title }) {
    return (
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <h2 className="text-white text-uppercase">{title}</h2>
            <div className="services-btns">
                <a className="services-btn" href="#">
                    Custom Services
                </a>
            </div>
        </div>
    );
}
