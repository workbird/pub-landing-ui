import './Newfooter.css';
import logo from '../Group 692.png';

//@mui buttons
import { createTheme, ThemeProvider, CustomInput, Button } from '@mui/material';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import React, { useEffect } from "react";

const socialBtnTheme = createTheme({
     palette: {
          primary: {
               // Purple and green play nicely together.
               contrastText: '#fff',
               main: '#fbb158',
               darker: '#fd8432'
          },
          secondary: {
               // Purple and green play nicely together.
               contrastText: '#fff',
               darker: '#fd8432',
               main: '#fd8432'
          },
     },
});


function NewFooter() {
     useEffect(() => {
          AOS.init({ duration: 1500 })
     }, [])

     return (
          <>
          <footer className=' m-0 py-5'>
               <div className='container'>
                    <div className='row px-5'>
                         <ul className='col-lg-4 col-md-6 list-unstyled pb-5'>
                              <li className='pb-5'>
                                   <img src={logo} alt="" width="180" className="" data-aos="flip-left"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000" />        </li>
                              <li className=''>
                                   <p className='text-white w-75 log-p' data-aos="zoom-in">Workbird Services is a rapidly expanding, cutting-edge technology solutions organization.</p>
                                   <p className='text-white w-75 log-p' data-aos="zoom-in">Automate your business backend with Workbird Services.</p>
                              </li>
                              <li>
                                   <ul className='list-inline footer-social-icon'>
                                        <li className="list-inline-item pb-3"><a href="#" title="facebook" className=''>
                                             <ThemeProvider theme={socialBtnTheme}>
                                                  <Button color='primary' variant="contained" data-aos="flip-right"><i class="fab fa-facebook-f py-1"></i></Button>
                                             </ThemeProvider>
                                        </a></li>
                                        <li className="list-inline-item pb-3"><a href="#" title="instagram" className='text-decoration-none'>
                                             <ThemeProvider theme={socialBtnTheme}>
                                                  <Button color='primary' variant="contained" data-aos="flip-right"><i class="fab fa-instagram py-1"></i></Button>
                                             </ThemeProvider></a></li>
                                        <li className="list-inline-item pb-3"><a href="#" title="twitter" className='text-decoration-none'>
                                             <ThemeProvider theme={socialBtnTheme}>
                                                  <Button color='primary' variant="contained" data-aos="flip-right"><i class="fab fa-twitter py-1"></i></Button>
                                             </ThemeProvider></a></li>
                                        <li className="list-inline-item pb-3"><a href="#" title="whatsapp" className='text-decoration-none'>
                                             <ThemeProvider theme={socialBtnTheme}>
                                                  <Button color='primary' variant="contained" data-aos="flip-right"><i class="fab fa-whatsapp py-1"></i></Button>
                                             </ThemeProvider></a></li>

                                   </ul>
                              </li>
                              <li>
                                   <ul className='list-inline'>
                                        <li className='list-inline-item'>
                                             <ThemeProvider theme={socialBtnTheme}>
                                                  <Button color='primary' data-aos="flip-right"><i class="fas fa-envelope-open font-x-large" ></i></Button></ThemeProvider>
                                        </li>
                                        <li className='list-inline-item'>
                                             <div className='d-flex flex-column text-white' data-aos="zoom-in">
                                                  <span>
                                                       Need free Consultation??
                                                  </span>
                                                  <span>
                                                       <u>Book schedule</u>
                                                  </span>
                                             </div>
                                        </li>
                                   </ul>
                              </li>
                         </ul>
                         <ul className='col-lg-2 col-md-6 list-unstyled pb-5'>
                              <li className='pb-5'>
                                   <h6 className="text-captilized font-weight-bold  color-gold" data-aos="flip-down">Useful Links</h6> <hr className='color-gold h-botoom-hr ' data-aos="flip-down" />
                              </li>
                              <ul className='list-bolt'>
                                   <li className="mb-3"><a href="#" className="text-decoration-none text-white text-capitalized font-lar f-large" data-aos="zoom-in">Home</a></li>
                                   <li className="mb-3" data-aos="zoom-in"><a href="#" className="text-white text-decoration-none text-capitalized f-large" >Services</a></li>
                                   <li className="mb-3" data-aos="zoom-in"><a href="#" className="text-white text-decoration-none text-capitalized f-large">FAQs</a></li>
                                   <li className="mb-3" data-aos="zoom-in"><a href="#" className="text-white text-decoration-none text-capitalized f-large">About us</a></li>
                                   <li className="mb-3" data-aos="zoom-in"><a href="#" className="text-white text-decoration-none text-capitalized f-large">Contact us</a></li>

                              </ul>
                         </ul>
                         <ul className='col-lg-3 col-md-6 list-unstyled pb-5'>
                              <li className='pb-5'>
                                   <h6 className="text-captilized font-weight-bold  color-gold" data-aos="flip-down">Latest News</h6> <hr className='color-gold h-botoom-hr ' data-aos="flip-down" />
                              </li>
                              <li>
                                   <ul className='list-unstyled '>
                                        <li className="mb-2" data-aos="zoom-in"><a href="#" className="text-decoration-none">
                                             <div className='d-flex flex-column'>
                                                  <span className='c-dark-gold mb-1'>- March 30, 2022</span>
                                                  <p className='text-white text-justify m-0 p-0 f-large'>Mulesoft and Salesforce are among the cutting-edge technologies used by Workbird Services.</p>
                                                  <hr className='c-dark-gold des-hr mt-1 p-0' />
                                             </div>
                                        </a></li>
                                        <li className="mb-2" data-aos="zoom-in"><a href="#" className="text-decoration-none">
                                             <div className='d-flex flex-column'>
                                                  <span className='c-dark-gold mb-1'>- Feb 12, 2022</span>
                                                  <p className='text-white text-justify m-0 p-0 f-large'>Workbird goes above and beyond with Mulesoft Integration services. </p>
                                                  <hr className='c-dark-gold des-hr mt-1 p-0' />
                                             </div>
                                        </a></li>
                                        <li className="mb-2" data-aos="zoom-in"><a href="#" className="text-decoration-none">
                                             <div className='d-flex flex-column'>
                                                  <span className='c-dark-gold mb-1'>- jan 18, 2022</span>
                                                  <p className='text-white text-justify m-0 p-0 f-large'>Our vision get broadens to support startups and small enterprises.</p>

                                             </div>
                                        </a></li>

                                   </ul>
                              </li>
                         </ul>
                         <ul className='col-lg-3 col-md-6 list-unstyled pb-5'>
                              <li className='pb-5'>
                                   <h6 className="text-captilized font-weight-bold  color-gold" data-aos="flip-down">Don't Miss Any Update</h6> <hr className='color-gold h-botoom-hr ' data-aos="flip-down" />
                              </li>
                              <li>
                                   <form method='' action='' className='d-flex flex-column'>
                                        {/* <CustomInput aria-label="Demo input" placeholder="Type something..." /> */}
                                        <input type='email' placeholder='Enter your Email...' className='e-box w-75' data-aos="fade-left"
                                             data-aos-easing="linear"
                                             data-aos-duration="1500" />
                                        <ThemeProvider theme={socialBtnTheme}>
                                             <Button color='primary' variant="contained" className='mt-4 text-uppercase e-submit' data-aos="fade-up"
                                                  data-aos-easing="linear"
                                                  data-aos-duration="1500">Submit</Button>
                                        </ThemeProvider>

                                   </form>
                              </li>
                              <li className='f-w-normal mt-5'>
                                   <a href="#" className='text-decoration-none d-flex'><i class="fas fa-map-marker-alt fo-icon " data-aos="flip-left"></i><span className='text-white f-w-normal' data-aos="zoom-in">Bengalluru & Patna - India</span></a>
                              </li>
                              <li className='f-w-normal mt-5'>
                                   <a href="#" className='text-decoration-none d-flex'><i class="fas fa-phone-alt fo-icon " data-aos="flip-left"></i><span className='text-white f-w-normal' data-aos="zoom-in">+91 8936832521</span></a>
                              </li>
                         </ul>
                    </div>
               </div>
               
          </footer>
          
          </>
     )
}

export default NewFooter;