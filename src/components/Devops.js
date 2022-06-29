import devImg from '../img/Dev-Ops.PNG';
import './Devops.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import React, { useEffect } from "react";
import newLogo from "./new-workbird-transparent-removebg-preview.png";



function Devops() {

     useEffect(() => {
          AOS.init({ duration: 1500 })
     }, [])

     return (
          <>
               <div id='dev-ops' className='mx-auto px-2 py-5 w-100 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row my-auto '>
                    <div className="d-flex flex-column text-white w-75 px-5 my-auto " data-aos="fade-right"
                         data-aos-offset="300"
                         data-aos-easing="ease-in-sine">
                         {/* <img src={newLogo} data-aos="flip-left" className='py-2 w-100 pe-5 h-w' /> */}
                         <p className='py-2 w-75'>
                         By intelligently connecting the relevant insights, technology, and expertise. We assist you in doing extraordinary things with your business.
                         </p>
                         <p className='py-2 w-75'>
                         We'd be happy to fill your business gap through a comprehensive end-to-end solution or bridge the gap with topnotch technologies.
                         </p>
                         <p className='py-2 w-75'>
                         With premium services like Mulesoft, Salesforce, Snowflakes, and Kafka, you can optimize and automate your integration.
                         </p>
                         {/* <p className="py-2 w-75" >Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text since ever 1500s</p> */}
                    </div>
                    <img src={devImg} data-aos="flip-right" className='pe-5' />
               </div>
          </>
     )
}
export default Devops;