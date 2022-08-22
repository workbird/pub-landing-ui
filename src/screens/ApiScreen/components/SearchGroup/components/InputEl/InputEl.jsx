import React from "react";
import { ApiUrlContext } from "../../../../../../context/contexts";

export default function InputEl() {
    const urlCtx = React.useContext(ApiUrlContext);
    const [value, setValue] = React.useState(urlCtx?.url?.url);

    return (
        <input
            type="text"
            placeholder="Search"
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
            }}
        />
    );
}
