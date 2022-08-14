import React from "react";
import QueryTableBody from "./components/QueryTableBody/QueryTableBody";
import QueryTableHeader from "./components/QueryTableHeader/QueryTableHeader";
import "./QueryParams.scss";

const valuesItems = [
    {
        _id: 0,
        initial: true,
    },
];

export default function QueryParams() {
    const [valuesState, setValuesState] = React.useState([]);
    const [valuesItemsState, setValuesItemsState] = React.useState([]);

    const handleAppendValue = (value, id) => {
        const ifExists = valuesState.find((item) => item._id === id);
        const ifExistsItems = valuesItemsState.find((item) => item._id === id);

        if (ifExistsItems) {
            const removedState = valuesItemsState.filter(
                (item) => item._id !== id
            );
            setValuesItemsState([...removedState, { ...ifExistsItems, value }]);
        } else {
            setValuesItemsState([...valuesItemsState, { _id: id, value }]);
        }

        if (ifExists) {
            if (ifExists.initial) {
                const da = {
                    ...ifExists,
                    initial: false,
                };

                const dd = {
                    _id: valuesState.length + 1,
                    initial: true,
                };

                setValuesState((prev) => [
                    ...prev.filter((item) => item._id !== id),
                    da,
                    dd,
                ]);
            }
        }
    };

    React.useEffect(() => {
        console.log(valuesItems);
        setValuesState(valuesItems);
    }, []);

    return (
        <div>
            <h5 className="queryParamsTitle pt-3 pb-4">Quereys Prams</h5>
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
