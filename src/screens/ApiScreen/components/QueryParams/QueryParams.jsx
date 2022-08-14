import React from "react";
import QueryTableBody from "./components/QueryTableBody/QueryTableBody";
import QueryTableHeader from "./components/QueryTableHeader/QueryTableHeader";
import "./QueryParams.scss";

const values = [
    {
        _id: 0,
        values: {
            keys: "",
            values: "",
            description: "",
        },
        initial: true,
    },
];

export default function QueryParams() {
    const [valuesState, setValuesState] = React.useState([]);

    const handleAppendValue = (value, id) => {
        const ifExists = valuesState.find((item) => item._id === id);
        if (ifExists) {
            if (ifExists.initial) {
                const da = {
                    ...ifExists,
                    values: value,
                    initial: false,
                };

                const dd = {
                    _id: valuesState.length + 1,
                    values: {
                        keys: "",
                        values: "",
                        description: "",
                    },
                    initial: true,
                };

                setValuesState([
                    ...valuesState.filter((item) => item._id !== id),
                    da,
                    dd,
                ]);
            }
        }
    };

    console.log(valuesState);

    React.useEffect(() => {
        console.log(values);
        setValuesState(values);
    }, []);

    return (
        <div>
            <h5 className="queryParamsTitle">Quereys Prams</h5>
            <div className="queryTable">
                <QueryTableHeader />
                {valuesState.map((value, index) => (
                    <QueryTableBody
                        key={value?._id + index}
                        appendValue={(va) => handleAppendValue(va, value._id)}
                        initial={value?.initial}
                    />
                ))}
            </div>
        </div>
    );
}
