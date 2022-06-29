import oldlogo from '../logo.png';
import logo from '../new-logo-2.png';
import './Newnavbar.css'

//Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

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



const Newnavbar = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <nav className="px-4 py-3 navbar navbar-expand-lg navbar-white  fixed-top" data-aos="fade-in">
      <div className="container-fluid ">
        <a className="navbar-brand text-white d-flex flex-column text-decoration-none" href="#"><img src={logo} className='logo m-0 p-0' alt='logo' data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" /><span className='ml-0 pl-0 logo-p'>...for your startups</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <ThemeProvider theme={theme}>

              <li className="nav-item" data-aos="fade-in" >
                <a className="nav-link active " aria-current="page" href="home"><Button color='secondary' className='nav-btn'>Home</Button></a>
              </li>
              <li className="nav-item" data-aos="fade-in">
                <a className="nav-link " href="#"><Button color='secondary' className='nav-btn'>About</Button></a>
              </li>
              <li className="nav-item" data-aos="fade-in">
                <a className="nav-link " href="#">                            <Button color='secondary' className='nav-btn'>Services</Button>
                </a>
              </li>
              <li className="nav-item" data-aos="fade-in" >
                <a className="nav-link " href="#"><Button color='primary' variant="contained" >Get Started</Button></a>
              </li>
            </ThemeProvider>
          </ul>


        </div>
      </div>
    </nav>
  )
}

export default Newnavbar;