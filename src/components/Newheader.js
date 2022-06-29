import './Newheader.css';
import P3 from './P3';
import premiumServices from './premium-services-removebg-preview.png';

import { createTheme, ThemeProvider, CustomInput, Button } from '@mui/material';
import bgImage from './background-bubble-header.PNG';
// import Typed from 'react-typed';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import React, { useEffect } from "react";

const socialBtnRightBar = createTheme({
     palette: {
          primary: {
               // Purple and green play nicely together.
               contrastText: '#fff',
               main: '#33d7ed',
               darker: '#2ab5c7'
          }
     },
});

function Newheader() {

     useEffect(() => {
          AOS.init({ duration: 1500 })
     }, [])

     function scrollProgress() {

          // alert("am scrolling");

          var currentState = document.body.scrollTop || document.documentElement.scrollTop;
          // console.log(currentState);
          var pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          // console.log(pageHeight);
          var scrollStatePercentage = (currentState / pageHeight) * 100;
          console.log(scrollStatePercentage);
          document.querySelector("#scroll-incator-from-top").style.top = "" +scrollStatePercentage + "%";
          // var scrollIndicator = document.getElementById('navLinks');
          var diameterRadius = document.getElementById("scroll-incator-from-top");
          diameterRadius.style.width = "12px";
          diameterRadius.style.height = "12px";
          diameterRadius.style.left = "-5px";
        }
        window.onscroll = function () { scrollProgress() };


     return (
          <>
               <header className='m-0' style={{ backgroundImage: `url(${bgImage})` }}  >
                    <P3 className="m-0" />
                    <div id='right-area' className='d-flex flex-column m-0'>
                         <div id='scroll-indicator'
                              data-aos="zoom-in"><span data-aos="zoom-in" id="scroll-incator-from-top"></span></div>
                         <div className='d-flex flex-column  social-bar' data-aos="zoom-in" >
                              <a href='#' className='text-decoration-none' data-aos="zoom-in">
                                   <ThemeProvider theme={socialBtnRightBar}>
                                        <Button color='primary'><i class="fab fa-facebook-f font-x-large"></i></Button></ThemeProvider>
                              </a>
                              <a href='#' className='text-decoration-none' data-aos="zoom-in">
                                   <ThemeProvider theme={socialBtnRightBar}>
                                        <Button color='primary'><i class="fab fa-instagram font-x-large"></i></Button></ThemeProvider>
                              </a>
                              <a href='#' className='text-decoration-none' >
                                   <ThemeProvider theme={socialBtnRightBar}>
                                        <Button color='primary'><i class="fab fa-twitter font-x-large"></i></Button></ThemeProvider>
                              </a>
                              <a href='#' className='text-decoration-none' data-aos="zoom-in">
                                   <ThemeProvider theme={socialBtnRightBar}>
                                        <Button color='primary'><i class="fab fa-whatsapp font-x-large"></i></Button></ThemeProvider>
                              </a>
                         </div>
                    </div>
                    <div id='bottom-area' className='pe-5'>
                         {/* <div className='d-flex flex-row text-white text-justify justify-content-start justify-content-sm-around justify-content-md-around justify-content-lg-end jutsify-content-xl-end py-3 px-5'> */}
                              {/* <div className=' px-3 content-item' data-aos="fade-up-right">
                                   <h4>Heading 1</h4>
                                   <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's</p>
                              </div>
                              <div className=' px-3 content-item sm-not-show' data-aos="fade-up-right">
                                   <h4>Heading 2</h4>
                                   <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's</p>
                              </div> */}
                              <img src={premiumServices} alt="premium services" className='w-100 px-3 mx-aut' />
                         {/* </div> */}
                    </div>
               </header>
          </>
     )
}

export default Newheader;