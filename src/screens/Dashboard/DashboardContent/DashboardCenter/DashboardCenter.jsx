import React, { useImperativeHandle } from "react";
import { useOutletContext } from "react-router-dom";
import DashHeader from "../../../Common/DashHeader/DashHeader";
import ApiDetails from "./components/ApiDetails/ApiDetails";
import ApiEndPoints from "./components/ApiEndPoints/ApiEndPoints";
import ApiProtocols from "./components/ApiProtocols/ApiProtocols";
import "./DashboardCenter.scss";

const dropDownData = [
    {
        label: "10.4 x",
        value: "10.4 x",
    },
    {
        label: "10.3 x",
        value: "10.3 x",
    },
    {
        label: "10.2 x",
        value: "10.2 x",
    },
    {
        label: "10.1 x",
        value: "10.1 x",
    },
    {
        label: "10.0 x",
        value: "10.0 x",
    },
];

const DashboardCenter = (props, ref) => {
    const summaryRef = React.useRef(null);
    const endPointsRef = React.useRef(null);

    const [type, setType] = useOutletContext();

    React.useEffect(() => {
        if (type === "summary") {
            const offset = 110;
            const top = summaryRef.current.offsetTop - offset;
            window.scrollTo({ top });
        } else if (type === "endpoints") {
            const offset = 110;
            const top = endPointsRef.current.offsetTop - offset;

            window.scrollTo({ top, behavior: "smooth" });
        }
    }, [type]);

    const scrollHandler = (e) => {
        const summaryRefTop = summaryRef.current.offsetTop;
        const endPointsRefTop = endPointsRef.current.offsetTop;
        console.dir(e.target);
        if (e.target.scrollTop - summaryRefTop > 0) {
            setType("summary");
        } else if (e.target.scrollTop - endPointsRefTop > 0) {
            setType("endpoints");
        }
    };

    React.useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return () => {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    useImperativeHandle(ref, () => ({
        get sumRef() {
            return summaryRef.current;
        },
        get endRef() {
            return endPointsRef.current;
        },
    }));

    return (
        <div className="container dashboard-center">
            <DashHeader
                title={"Salesforce Connector - Mule 4"}
                dropDownData={dropDownData}
            />
            <div id="summary">
                <ApiDetails apiTitle={"PayPal Orders v2"} apiVersion="2.0" />
                <ApiProtocols />
            </div>
            <div id="endpoints">
                <ApiEndPoints />
            </div>
        </div>
    );
};

export default React.forwardRef(DashboardCenter);
