import { useNavigate } from "react-router-dom"
import icon from '../../assets/droneIcon2.svg';
import './App.css';
import App from "./App"
var iwlist = require('wireless-tools/iwlist');
const exec  = require('child_process').exec;

const TelnetSummary = () => {
  const navigate = useNavigate();
  return (
    <div class="summary">
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <div>
      <h1>Telnet Completed Successfully</h1>
      <h2>After clicking the telnet attack button, the application searches for the IP address of the drone. </h2>
      <h2>When the IP address is found, Nmap is used to see if the drone’s Busy Box is running a Telnet service.</h2>
      <h2>Utilizing the open Telnet server that the drone has, the application then connects to that Telnet service and gains root access to the drone’s Busy Box OS, which is linux based.</h2>
      <h2>Utilizing that root access, a “poweroff” command is sent to the drone, to force it to power off and come crashing down to the Earth.</h2>
      </div>

      <br></br>
      <div className="Hello">
        <button type="button" onClick={() => navigate('/Select')}>
          Home
        </button>
      </div>
      <br></br><br></br><br></br>
      </div>
  );
}

export default TelnetSummary;
