import logo from '../Group 692.png';
import './Navbar.css';
// https://mui.com/customization/color/#picking-colors
// import { purple, red } from '@mui/material/colors';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, cyan } from '@mui/material/colors';
import Button from '@mui/material/Button';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";

const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            contrastText: '#fff',
            main: '#33d7ed',
            darker: '#2ab5c7'
        },
        secondary: {
            // Purple and green play nicely together.
            contrastText: '#fff',
            darker: '#33d7ed',
            main: '#2ab5c7'
        },
    },
});

// function hideMenu(){
//     var navLinks = document.getElementById('navLinks');
//     navLinks.style.right = "0";

// }
// function showMenu(){
//     var navLinks = document.getElementById('navLinks');
//     navLinks.style.right = "-200px";
// }


function Navbar() {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    // const primary = red[500]; // #f44336
    // const accent = purple['A200']; // #e040fb
    // const accent = purple.A200; // #e040fb (alternative method)
    // hideMenu=(e)=>{
    //     alert("this is working fine");
    //     e.preventDefault();
    //     // e.target.style.color = 'black'
    //     // console.log(e.target);
    // }

    function hideMenu() {
        var navLinks = document.getElementById('navLinks');
        // alert("hide menus");
        navLinks.style.right = "-200px";
    }
    function showMenu() {
        var navLinks = document.getElementById('navLinks');

        // alert("show menus");
        navLinks.style.right = "0px";
        navLinks.style.background = "var(--c-light-gold)";
    }


    return (

        <>
            <nav className="py-3 fixed-top" data-aos="fade-in">
                <a href="#" className='text-white d-flex flex-column text-decoration-none'><img src={logo} data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" /><span className='ml-0 pl-0'>...for your startups</span></a>
                <div class="nav-links" id="navLinks">
                    <i class="fa fa-times" onClick={hideMenu}></i>
                    <ul className='my-auto'><ThemeProvider theme={theme}>
                        <li className='nav-item'><a href="#" className='text-decoration-none'> <Button color='secondary'>Home</Button></a></li>
                        <li className='nav-item'><a href="#" className='text-decoration-none'><Button color='secondary'>About</Button></a></li>
                        <li className='nav-item'><a href="#" className='text-decoration-none'>
                            <Button color='secondary'>Services</Button>
                        </a></li>
                        <span className='nav-item'><a href="#" className='text-decoration-none'>
                            <Button color='primary' variant="contained">Get Started</Button>
                        </a></span>
                    </ThemeProvider>
                    </ul>
                </div>
                <i class="fa fa-bars" onClick={showMenu}></i>
            </nav>
        </>
    );
}



export default Navbar;