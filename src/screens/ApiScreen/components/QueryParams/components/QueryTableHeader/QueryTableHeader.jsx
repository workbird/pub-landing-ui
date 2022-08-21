import React from "react";

export default function QueryTableHeader() {
    return (
        <div className="queryTableRow row">
            <div className="queryTableCell queryTableHeader p-1 p-md-2 p-lg-3   col-1"></div>
            <div className="queryTableCell queryTableHeader p-1 p-md-2 p-lg-3   col-2">
                Keys
            </div>
            <div className="queryTableCell queryTableHeader p-1 p-md-2 p-lg-3   col-3">
                Values
            </div>
            <div className="queryTableCell queryTableHeader p-1 p-md-2 p-lg-3   col-3">
                Description
            </div>
            <div className="queryTableCell queryTableHeader p-1 p-md-2 p-lg-3   col-1"></div>
            <div className="queryTableCell queryTableHeader p-1 p-md-2 p-lg-3   col-2"></div>
        </div>
    );
}
