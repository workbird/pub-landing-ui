import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Newnavbar';
// import Header from './components/Header';
import Footer from './components/Newfooter';
// import Home from './pages/Home';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit'; // module

// import Twoparticles from './exprement/Twoparticles';
// import Newheader from './components/Newheader';
// import Devops from './components/Devops';
import Copyrights from './components/Copyrights';
import Services from './components/Services/Services';
import Dashboard from './components/Dashboard/Dashboard';

// import Myexp from './e+xprement/Myexp';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}

    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        {/* <Route path='exp' element={<Myexp />} /> */}
        {/* <Route path='header' element={<Newheader />} /> */}
        {/* <Route path='two-particles-at-same-div' element={<Twoparticles />} /> */}
      </Routes>
      {/* <Footer /> */}
      {/* <Copyrights/> */}
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
