import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import CircularMenu from "../../Common/CircularMenu/CircularMenu";
import "./SidebarRight.scss";

const SidebarRight = () => {
    return (
        <div className="right">
            <h6 className="px-3">/qr codes</h6>
            <div className="inner-right">
                <a href="#">GET</a>
                <p>/acadimicapi /qrcode</p>
                <HiOutlineChevronDown />
            </div>

            <p className="px-3 mt-4">/orders</p>
            <div className="right-bottom">
                <a href="#">POST</a>
                <p> https://api.paypal.com/v2/checkout/orders</p>
            </div>

            <p className="px-3 mt-4">/orders</p>
            <div className="right-bottom">
                <a href="#" className="get">
                    GET
                </a>
                <p> https://api.paypal.com/v2/checkout/orders</p>
            </div>
            <div className="right-bottom">
                <a href="#" className="patch">
                    PATCH
                </a>
                <p> https://api.paypal.com/v2/checkout/orders</p>
            </div>
            <div className="circular-bottom">
                <CircularMenu />
            </div>
        </div>
    );
};

export default SidebarRight;
