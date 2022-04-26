import { useNavigate } from "react-router-dom"
import icon from '../../assets/droneIcon2.svg';
import pic from '../../assets/image.png'
import './App.css';
import App from "./App"
var iwlist = require('wireless-tools/iwlist');
const exec  = require('child_process').exec;
import './App.css';


const NetFam2 = () => {
  const navigate = useNavigate();
  return (
    <div className="summary">
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>

      <div >
        <h1>A.R Drone Network Familiarization: </h1>
        <h2>Find the ip address of the drone:
Open a new terminal by typing Ctl+Alt+T all together.
The most traditional method of discovering an ip address on linux is the “ifconfig” command, try running it now in your new terminal and looking at the information it displays!
Can you discern the ip address of the drone from the ifconfig output? For example, when team counter-drone runs the command we receive the ip address “192.168.1.1” [see more: ip address, ifconfig, etc…depth] make sure to remember this address!
</h2>

        </div>
        <br></br>

        <div className="flex">
        <div className="Hello">
          <button type="button" onClick={() => navigate('/NetFam1')}>
            Go Back
          </button>
        </div>
        <div className="Hello">
          <button type="button" onClick={() => navigate('/NetFam3')}>
            Continue
          </button>
        </div>
        </div>

        <br></br><br></br><br></br>

      </div>
    );
  }

  export default NetFam2;
