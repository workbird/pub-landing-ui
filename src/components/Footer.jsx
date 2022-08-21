import logo from "../Group 692.png";
import "./Footer.scss";
// import bg from '../img/background-bubble-header.PNG';

// get our fontawesome imports
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//   import {faCoffee} from '@fortawesome/free-solid-svg-icons';

//@mui buttons
import { Button, createTheme, ThemeProvider } from "@mui/material";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import React, { useEffect } from "react";

const socialBtnTheme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            contrastText: "#fff",
            main: "#fbb158",
            darker: "#fd8432",
        },
        secondary: {
            // Purple and green play nicely together.
            contrastText: "#fff",
            darker: "#fd8432",
            main: "#fd8432",
        },
    },
});

function Footer() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <footer className="m-0 p-0">
            <div className="container">
                <div className=" py-5 m-0">
                    <div className="row py-4 m-0">
                        <div className="col-lg-4 col-md-6 m-0 mb-4 mb-lg-0 px-5 ">
                            <img
                                src={logo}
                                alt=""
                                width="180"
                                className="m-0 logo mb-5"
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                            />

                            <div
                                className=" text-white "
                                style={{ fontSize: "large" }}
                            >
                                {/* mr-5 */}
                                <p className="pr-5" data-aos="zoom-in">
                                    Workbird Services is a rapidly expanding,
                                    cutting-edge technology solutions
                                    organization.
                                </p>
                                <p className="pr-5" data-aos="zoom-in">
                                    Automate your business backend with Workbird
                                    Services.
                                </p>
                            </div>

                            <ul className="list-inline mt-4 footer-social-icon">
                                <li className="list-inline-item">
                                    <a
                                        href="#"
                                        title="facebook"
                                        className="text-decoration-none"
                                    >
                                        <ThemeProvider theme={socialBtnTheme}>
                                            <Button
                                                color="primary"
                                                variant="contained"
                                                data-aos="flip-right"
                                            >
                                                <i className="fab fa-facebook-f py-1"></i>
                                            </Button>
                                        </ThemeProvider>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="#"
                                        title="instagram"
                                        className="text-decoration-none"
                                    >
                                        <ThemeProvider theme={socialBtnTheme}>
                                            <Button
                                                color="primary"
                                                variant="contained"
                                                data-aos="flip-right"
                                            >
                                                <i className="fab fa-instagram py-1"></i>
                                            </Button>
                                        </ThemeProvider>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="#"
                                        title="twitter"
                                        className="text-decoration-none"
                                    >
                                        <ThemeProvider theme={socialBtnTheme}>
                                            <Button
                                                color="primary"
                                                variant="contained"
                                                data-aos="flip-right"
                                            >
                                                <i className="fab fa-twitter py-1"></i>
                                            </Button>
                                        </ThemeProvider>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="#"
                                        title="whatsapp"
                                        className="text-decoration-none"
                                    >
                                        <ThemeProvider theme={socialBtnTheme}>
                                            <Button
                                                color="primary"
                                                variant="contained"
                                                data-aos="flip-right"
                                            >
                                                <i className="fab fa-whatsapp py-1"></i>
                                            </Button>
                                        </ThemeProvider>
                                    </a>
                                </li>
                            </ul>
                            <ul className="list-inline mt-4">
                                <li className="list-inline-item">
                                    <ThemeProvider theme={socialBtnTheme}>
                                        <Button
                                            color="primary"
                                            data-aos="flip-right"
                                        >
                                            <i className="fas fa-envelope-open font-x-large"></i>
                                        </Button>
                                    </ThemeProvider>
                                </li>
                                <li className="list-inline-item">
                                    <div
                                        className="d-flex flex-column text-white"
                                        data-aos="zoom-in"
                                    >
                                        <span>Need free Consultation??</span>
                                        <span>
                                            <u>Book schedule</u>
                                        </span>
                                    </div>
                                </li>
                                <li className=""></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 mx-0 px-xl-0 px-sm-5">
                            <h6
                                className="text-captilized font-weight-bold  color-gold"
                                data-aos="flip-down"
                            >
                                Useful Links
                            </h6>{" "}
                            <hr
                                className="color-gold h-botoom-hr mt-1  mb-5"
                                data-aos="flip-down"
                            />
                            <ul className="list-bolt mb-0">
                                <li className="mb-2">
                                    <a
                                        href="#"
                                        className="text-decoration-none text-white text-capitalized"
                                        data-aos="zoom-in"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="mb-2" data-aos="zoom-in">
                                    <a
                                        href="#"
                                        className="text-white text-decoration-none text-capitalized"
                                    >
                                        Services
                                    </a>
                                </li>
                                <li className="mb-2" data-aos="zoom-in">
                                    <a
                                        href="#"
                                        className="text-white text-decoration-none text-capitalized"
                                    >
                                        FAQs
                                    </a>
                                </li>
                                <li className="mb-2" data-aos="zoom-in">
                                    <a
                                        href="#"
                                        className="text-white text-decoration-none text-capitalized "
                                    >
                                        About us
                                    </a>
                                </li>
                                <li className="mb-2" data-aos="zoom-in">
                                    <a
                                        href="#"
                                        className="text-white text-decoration-none text-capitalized "
                                    >
                                        Contact us
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 mx-0 px-xl-0 px-sm-5">
                            <h6
                                className="text-captilized font-weight-bold  color-gold"
                                data-aos="flip-down"
                            >
                                Latest News
                            </h6>{" "}
                            <hr
                                className="color-gold h-botoom-hr mt-1  mb-5"
                                data-aos="flip-down"
                            />
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2" data-aos="zoom-in">
                                    <a
                                        href="#"
                                        className="text-decoration-none"
                                    >
                                        <div className="d-flex flex-column">
                                            <span className="c-dark-gold mb-1">
                                                - March 30, 2022
                                            </span>
                                            <p className="text-white text-justify m-0 p-0">
                                                Mulesoft and Salesforce are
                                                among the cutting-edge
                                                technologies used by Workbird
                                                Services.
                                            </p>
                                            <hr className="c-dark-gold des-hr mt-1 p-0" />
                                        </div>
                                    </a>
                                </li>
                                <li className="mb-2" data-aos="zoom-in">
                                    <a
                                        href="#"
                                        className="text-decoration-none"
                                    >
                                        <div className="d-flex flex-column">
                                            <span className="c-dark-gold mb-1">
                                                - Feb 12, 2022
                                            </span>
                                            <p className="text-white text-justify m-0 p-0">
                                                Workbird goes above and beyond
                                                with Mulesoft Integration
                                                services.
                                            </p>
                                            <hr className="c-dark-gold des-hr mt-1 p-0" />
                                        </div>
                                    </a>
                                </li>
                                <li className="mb-2" data-aos="zoom-in">
                                    <a
                                        href="#"
                                        className="text-decoration-none"
                                    >
                                        <div className="d-flex flex-column">
                                            <span className="c-dark-gold mb-1">
                                                - jan 18, 2022
                                            </span>
                                            <p className="text-white text-justify m-0 p-0">
                                                Our vision get broadens to
                                                support startups and small
                                                enterprises.
                                            </p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-lg-0 ps-5 d-flex flex-column">
                            <h6
                                className="text-captilized font-weight-bold  color-gold"
                                data-aos="flip-down"
                            >
                                Don't Miss Any Update
                            </h6>{" "}
                            <hr
                                className="color-gold h-botoom-hr mt-1  mb-5"
                                data-aos="flip-down"
                            />
                            <form
                                method=""
                                action=""
                                className="d-flex flex-column"
                            >
                                {/* <CustomInput aria-label="Demo input" placeholder="Type something..." /> */}
                                <input
                                    type="email"
                                    placeholder="Enter your Email..."
                                    className="e-box w-75"
                                    data-aos="fade-left"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                />
                                <ThemeProvider theme={socialBtnTheme}>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        className="mt-4 text-uppercase e-submit"
                                        data-aos="fade-up"
                                        data-aos-easing="linear"
                                        data-aos-duration="1500"
                                    >
                                        Submit
                                    </Button>
                                </ThemeProvider>
                            </form>
                            <div className="f-w-normal mt-5">
                                <a
                                    href="#"
                                    className="text-decoration-none d-flex"
                                >
                                    <i
                                        className="fas fa-map-marker-alt fo-icon "
                                        data-aos="flip-left"
                                    ></i>
                                    <span
                                        className="text-white f-w-normal"
                                        data-aos="zoom-in"
                                    >
                                        Bengalluru & Patna - India
                                    </span>
                                </a>
                            </div>
                            <div className="f-w-normal mt-5">
                                <a
                                    href="#"
                                    className="text-decoration-none d-flex"
                                >
                                    <i
                                        className="fas fa-phone-alt fo-icon "
                                        data-aos="flip-left"
                                    ></i>
                                    <span
                                        className="text-white f-w-normal"
                                        data-aos="zoom-in"
                                    >
                                        +91 8936832521
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Copyrights --> */}
                <div className="bg-dark py-4">
                    <div className="container text-center">
                        <p className="text-white mb-0 py-2 text-capitalize">
                            copyright © 2022 Workbird privacy Policy terms and
                            conditions
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
