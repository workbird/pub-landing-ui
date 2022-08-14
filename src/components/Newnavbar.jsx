import logo from "../new-logo-2.png";
import "./Newnavbar.css";

//Font Awesome imports
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import "react-datepicker/dist/react-datepicker.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../screens/Common/Modal/Modal";
import ModalContent from "../screens/ModalContent/ModalContent";

const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            contrastText: "#fff",
            main: "#33d7ed",
            darker: "#2ab5c7",
        },
        secondary: {
            // Purple and green play nicely together.
            contrastText: "#fff",
            darker: "#33d7ed",
            main: "#2ab5c7",
        },
    },
});

const NavItem = ({ title, route }) => {
    const navigate = useNavigate();

    return (
        <li className="nav-item" data-aos="fade-in">
            <span className="nav-link">
                <Button
                    color="secondary"
                    className="nav-btn"
                    onClick={() => navigate(route)}
                >
                    {title}
                </Button>
            </span>
        </li>
    );
};

const Newnavbar = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    const [isShown, setIsShown] = React.useState(false);
    const [startDate, setStartDate] = React.useState(new Date());
    const [startDate2, setStartDate2] = React.useState(new Date());

    return (
        <nav
            className="px-4 py-3 navbar navbar-expand-lg navbar-white  fixed-top"
            data-aos="fade-in"
        >
            <div className="container-fluid ">
                <span
                    className="navbar-brand text-white d-flex flex-column text-decoration-none"
                    onClick={() => navigate("/")}
                >
                    <img
                        src={logo}
                        className="logo m-0 p-0"
                        alt="logo"
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    />
                    <span className="ml-0 pl-0 logo-p">
                        ...for your startups
                    </span>
                </span>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <FontAwesomeIcon
                        icon={faBars}
                        style={{ color: "#fff" }}
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <ThemeProvider theme={theme}>
                            <NavItem title="Home" route="/home" />
                            <NavItem title="About" route="/about" />
                            <NavItem title="Services" route="/services" />
                            <NavItem title="Dashboard" route="/dashboard/" />

                            <li className="nav-item" data-aos="fade-in">
                                <span className="nav-link ">
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        onClick={() =>
                                            setIsShown((prev) => !prev)
                                        }
                                    >
                                        Get Started
                                    </Button>
                                </span>

                                <Modal
                                    isShown={isShown}
                                    toggleModal={() =>
                                        setIsShown((prev) => !prev)
                                    }
                                >
                                    <ModalContent
                                        onClose={() =>
                                            setIsShown((prev) => !prev)
                                        }
                                    />
                                </Modal>
                            </li>
                        </ThemeProvider>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Newnavbar;
