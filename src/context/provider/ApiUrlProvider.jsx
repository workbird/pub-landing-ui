import React from "react";
import { ApiUrlContext } from "../contexts";

const defaultState = {};

const reducer = (state, action) => {
    if (action.type === "SETURL") {
        return {
            ...state,
            url: action.url,
        };
    }

    return state;
};

export const ApiUrlProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, defaultState);

    const value = {
        url: state.url,
        setUrl: (url) => {
            dispatch({
                type: "SETURL",
                url,
            });
        },
    };

    return (
        <ApiUrlContext.Provider value={value}>
            {children}
        </ApiUrlContext.Provider>
    );
};
