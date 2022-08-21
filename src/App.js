import { Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import Newnavbar from "./components/NewNavBar/Newnavbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./screens/About/About";
import ApiScreen from "./screens/ApiScreen/ApiScreen";
import Dashboard from "./screens/Dashboard/Dashboard";
import Services from "./screens/Services/Services";
import SideMenu from "./screens/SideMenu/SideMenu";

const HomeRoute = () => {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    );
};

function App() {
    return (
        <>
            <Newnavbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Home />
                            <Footer />
                        </>
                    }
                />
                <Route path="/" element={<HomeRoute />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/about" element={<About />} />
                </Route>

                <Route path="/dashboard" element={<SideMenu />}>
                    <Route path="/dashboard/" element={<Dashboard />} />
                    <Route path="/dashboard/api" element={<ApiScreen />} />
                </Route>
                {/* <Route path='exp' element={<Myexp />} /> */}
                {/* <Route path='header' element={<Newheader />} /> */}
                {/* <Route path='two-particles-at-same-div' element={<Twoparticles />} /> */}
            </Routes>
        </>
    );
}

export default App;
