import { Route, Routes } from 'react-router-dom';
import './App.css';
import Newnavbar from './components/NewNavBar/Newnavbar';

import Home from "./pages/Home";
import ApiScreen from './screens/ApiScreen/ApiScreen';
import Dashboard from "./screens/Dashboard/Dashboard";
import Services from "./screens/Services/Services";
import SideMenu from "./screens/SideMenu/SideMenu";

function App() {
  return (
    <>
            <Newnavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/services" element={<Services />} />
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
