import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Newnavbar";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import Header from './components/Header';
// import Home from './pages/Home';
import Home from "./pages/Home";
// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit'; // module

// import Twoparticles from './exprement/Twoparticles';
// import Newheader from './components/Newheader';
// import Devops from './components/Devops';
import Dashboard from "./screens/Dashboard/Dashboard";
import Services from "./screens/Services/Services";
import SideMenu from "./screens/SideMenu/SideMenu";
import { Api } from "@mui/icons-material";

// import Myexp from './e+xprement/Myexp';

ReactDOM.render(
    <React.StrictMode>
        {/* <App /> */}

        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/dashboard" element={<SideMenu />}>
                    <Route path="/dashboard/" element={<Dashboard />} />
                    <Route path="/dashboard/api" element={<Api />} />
                </Route>
                {/* <Route path='exp' element={<Myexp />} /> */}
                {/* <Route path='header' element={<Newheader />} /> */}
                {/* <Route path='two-particles-at-same-div' element={<Twoparticles />} /> */}
            </Routes>
            {/* <Footer /> */}
            {/* <Copyrights/> */}
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
