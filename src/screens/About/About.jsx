import React from "react";
import "./About.scss";

import logo from "../../assets/images/logo.png";
import Modal from "../Common/Modal/Modal";
import ModalContent from "../ModalContent/ModalContent";

export default function About() {
    const [isShow, setIsShow] = React.useState(false);
    return (
        <section className=" about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="  col-xl-6 d-flex align-items-center justify-content-center">
                        <div className="about-img">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                    <div className="  col-xl-6">
                        <div className="about-content">
                            <h2>About Us </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit{" "}
                            </p>
                            <button
                                className="getStartedBtn"
                                onClick={() => setIsShow((prev) => !prev)}
                            >
                                Get Started
                            </button>
                            <Modal
                                isShown={isShow}
                                toggleModal={() => setIsShow((prev) => !prev)}
                            >
                                <ModalContent
                                    onClose={() => setIsShow((prev) => !prev)}
                                />
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
