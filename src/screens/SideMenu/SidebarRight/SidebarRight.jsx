import React from "react";
import Collapsable from "../../../components/Collapsable/Collapsable";
import ApiWithText from "../common/ApiWithText/ApiWithText";
import "./SidebarRight.scss";

const SidebarRight = () => {
    const [isExpanded, setIsExpanded] = React.useState(null);
    return (
        <div className="right">
            <div className="pt-4">
                <h6 className="px-3 py-2">/qr codes</h6>
                <Collapsable
                    headerComp={
                        <ApiWithText
                            method={"get"}
                            text="/acadimicapi /qrcode"
                        />
                    }
                    className="p-0 important"
                    titleClassName={"pad-0"}
                    isExpanded={isExpanded === 1}
                    toggleOpen={() =>
                        setIsExpanded((prev) => (prev === 1 ? null : 1))
                    }
                >
                    <div className="rightColItems px-4 pt-4">
                        <h6 className=" pb-2 ">/orders</h6>
                        <ApiWithText
                            method="Post"
                            text="https://api.paypal.com/v2/checkout/orders"
                            buttonClassName={"small"}
                            textClassName="small"
                        />
                        <ApiWithText
                            method="Get"
                            text="https://api.paypal.com/v2/checkout/orders"
                            buttonClassName={"small"}
                            textClassName="small"
                        />
                    </div>
                    <div className="rightColItems px-4 pt-4">
                        <h6 className=" pb-2 ">/orders</h6>
                        <ApiWithText
                            method="put"
                            text="https://api.paypal.com/v2/checkout/orders"
                            buttonClassName={"small"}
                            textClassName="small"
                        />
                        <ApiWithText
                            method="patch"
                            text="https://api.paypal.com/v2/checkout/orders"
                            buttonClassName={"small"}
                            textClassName="small"
                        />
                    </div>
                </Collapsable>
            </div>
        </div>
    );
};

export default SidebarRight;
