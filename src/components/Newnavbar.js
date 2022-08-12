import oldlogo from '../logo.png';
import logo from '../new-logo-2.png';
import './Newnavbar.css'

//Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { MdClose } from "react-icons/md";

import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, cyan } from '@mui/material/colors';
import Button from '@mui/material/Button';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
import Modal from './Modal/Modal';

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
  const [isShown, setIsShown] = React.useState(false);
  const [startDate, setStartDate] = React.useState(new Date());
  const [startDate2, setStartDate2] = React.useState(new Date());

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
                <a className="nav-link active " aria-current="page" href="/home"><Button color='secondary' className='nav-btn'>Home</Button></a>
              </li>
              <li className="nav-item" data-aos="fade-in">
                <a className="nav-link " href="#"><Button color='secondary' className='nav-btn'>About</Button></a>
              </li>
              <li className="nav-item" data-aos="fade-in">
                <a className="nav-link " href="/services">                            <Button color='secondary' className='nav-btn'>Services</Button>
                </a>
              </li>
              <li className="nav-item" data-aos="fade-in">
                <a className="nav-link " href="/dashboard">                            <Button color='secondary' className='nav-btn'>Dashboard</Button>
                </a>
              </li>
              <li className="nav-item" data-aos="fade-in" >
                <a className="nav-link " href="#"><Button color='primary' variant="contained" onClick={() => setIsShown(!isShown)} >Get Started</Button></a>
                <Modal
                    isShown={isShown}
                    toggleModal={() => setIsShown(!isShown)}
                >
                    <div className='modal-popup'>
                        <h4>Get Started</h4>
                        <span className='modal-icon' onClick={() => setIsShown(!isShown)}><MdClose /></span>
                    </div>
                    <div className="modal-body">
                      <div className='inner-body d-flex justify-content-between align-items-center'>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Need to call back"/>
                            <button className='modal-btn'>Save</button>
                      </div>
                     
                      <div className='d-flex justify-content-between mt-4'>
                      
                        <DatePicker className='date' selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                        
                       <p className='text-white px-2'>to</p>
                       
                        <DatePicker className='date' selected={startDate2} onChange={(date:Date) => setStartDate2(date)} />
                        
                       
                        
                      </div>

                    </div>
                    <div className="modal-ftr">
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name"/>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name"/>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone"/>
                        <textarea class="form-control item1" id="exampleFormControlTextarea1" placeholder='Add description' rows="4"></textarea>

                    </div>
                </Modal>
                
              </li>
            </ThemeProvider>
          </ul>


        </div>
      </div>
    </nav>
  )
}

export default Newnavbar;