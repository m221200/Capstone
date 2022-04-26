import { useNavigate } from "react-router-dom"
import icon from '../../assets/droneIcon2.svg';
import pic from '../../assets/image.png'
import './App.css';
import App from "./App"
var iwlist = require('wireless-tools/iwlist');
const exec  = require('child_process').exec;
import './App.css';


const NetFam3 = () => {
  const navigate = useNavigate();
  return (
    <div className="summary">
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>

      <div >
        <h1>A.R Drone Network Familiarization: </h1>
        <h2>Run the nmap command on the drone’s ip address
        “Nmap” or network mapper is a network scanner used for a sleuth of reasons in regards to host discovery, port scanning, and a variety of other things.
        Run the command “nmap -o [drone ip address]” on your new terminal and see what information you can discern about the drone. What OS is it running? What ports or servers are open?
        Two important takeaways from running nmap are that our drone has both an open FTP and Telnet server!
        </h2>

        <img className='img' src={pic}></img>


        <h2>Conclusion
        There is a whole host of information available by poking around in the drones busybox software and you might be thinking of several interesting things you could potentially take advantage of in the interest of hacking or disabling a drone. Hopefully you will see some of those ideas in play with our software!
        </h2>

        </div>
        <br></br>

        <div className="flex">
        <div className="Hello">
          <button type="button" onClick={() => navigate('/')}>
            Go Back
          </button>
        </div>
        <div className="Hello">
          <button type="button" onClick={() => navigate('/Select')}>
            Continue
          </button>
        </div>
        </div>

        <br></br><br></br><br></br>

      </div>
    );
  }

  export default NetFam3;
