import { useNavigate } from "react-router-dom"
import icon from '../../assets/droneIcon2.svg';
import './App.css';
import App from "./App"
var iwlist = require('wireless-tools/iwlist');
const exec  = require('child_process').exec;
import './App.css';


const Select = () => {
  const navigate = useNavigate();
  return (
    <div class="summary">
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>

      <div className="specialDiv">
        <div><button className="leftButton" type="button" onClick={() => navigate('/Hijack1')}><h2>Skyjack Attack</h2><h4>Deauthentication packets are sent through promiscuous mode on the network card to the target drone.</h4><h4>Once deauthenticated, will gain access to busybox, telnet, and all of the information needed to create a Node.js runtime environment. Issue your own commands to the drone using JavaScript code and the open-source drone-browser software.</h4></button></div>
        <div><button className="rightButton" type="button" onClick={() => navigate('/Telnet')}><h2>Telnet Attack</h2><h4>Utilizing the open Telnet server that the drone has, the application then connects to that Telnet service and gains root access to the drone’s Busy Box OS, which is linux based.</h4><h4>Utilizing that root access, a “poweroff” command is sent to the drone, to force it to power off and come crashing down to Earth.</h4></button></div>
      </div>
      <br></br><br></br><br></br>

      <button className="flex1" type="button" onClick={() => navigate('/NetFam4')}>Go Back</button>

    </div>
  );
}

export default Select;
