import React from "react";

export default function QueryTableBody({ appendValue, removeValue, initial }) {
    const [values, setValues] = React.useState({
        keys: "",
        values: "",
        description: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    React.useEffect(() => {
        if (values?.keys.length > 0) {
            appendValue?.(values);
        }
    }, [values]);

    return (
        <div className="queryTableRow row">
            <div className="queryTableCell col-1"></div>
            <div className="queryTableCell  col-2">
                <input
                    type="text"
                    placeholder="Keys"
                    className="queryTableInput p-1 p-md-2 p-lg-3 p-xl-4"
                    name="keys"
                    value={values.keys}
                    onChange={handleChange}
                />
            </div>
            <div className="queryTableCell   col-3">
                <input
                    type="text"
                    placeholder="Values"
                    className="queryTableInput p-1 p-md-2 p-lg-3 p-xl-4"
                    name="values"
                    value={values.values}
                    onChange={handleChange}
                />
            </div>
            <div className="queryTableCell   col-3">
                <input
                    type="text"
                    placeholder="Description"
                    className="queryTableInput p-1 p-md-2 p-lg-3 p-xl-4"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                />
            </div>
            <div className="queryTableCell   col-1"></div>
            <div className="queryTableCell   col-2"></div>
        </div>
    );
}
