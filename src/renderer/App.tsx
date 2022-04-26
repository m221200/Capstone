import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import icon from '../../assets/droneIcon2.svg';
import './App.css';
import Connect from "./Connect"
import NetFam1 from "./NetFam1"
import NetFam2 from "./NetFam2"
import NetFam3 from "./NetFam3"
import NetFam4 from "./NetFam4"
import Hijack1 from "./Hijack1"
import Hijack2 from "./Hijack2"
import Hijack3 from "./Hijack3"
import Hijack4 from "./Hijack4"
import Select from "./Select"
import HijackSummary from "./HijackSummary"
import DeAuth from "./DeAuth"
import DeauthSummary from './DeauthSummary'
import Telnet from "./Telnet"
import TelnetSummary from "./TelnetSummary"
import Failure from "./Failure"
import NetHelp from "./NetHelp"
import { Offline, Online } from "react-detect-offline";
// const wifi = require('node-wifi');
// import WifiManager from "react-native-wifi-manager";

const Home = () => {

  const navigate = useNavigate();
  // document.getElementById('connect').setAttribute("")

  return (
    <div className="center">
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <div>
        <h1>Counter Drone App</h1>
      </div>


      <div className="Hello">
        <button type="button" onClick={() => navigate('/NetFam1')}>
          Get Started
        </button>
      </div>

      <Online>

      </Online>

    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NetFam1" element={<NetFam1 />} />
        <Route path="/NetFam2" element={<NetFam2 />} />
        <Route path="/NetFam3" element={<NetFam3 />} />
        <Route path="/NetFam4" element={<NetFam4 />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/hijack1" element={<Hijack1 />} />
        <Route path="/hijack2" element={<Hijack2 />} />
        <Route path="/hijack3" element={<Hijack3 />} />
        <Route path="/hijack4" element={<Hijack4 />} />
        <Route path="/select" element={<Select />} />
        <Route path="/hijackSummary" element={<HijackSummary />} />
        <Route path="/telnet" element={<Telnet />} />
        <Route path="/telnetSummary" element={<TelnetSummary />} />
        <Route path="/failure" element={<Failure />} />
        <Route path="/nethelp" element={<NetHelp />} />
      </Routes>
    </Router>
  );
}
