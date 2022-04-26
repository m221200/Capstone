import { useNavigate } from "react-router-dom"
import icon from '../../assets/droneIcon2.svg';
import pic from '../../assets/image.png'
import './App.css';
import App from "./App"
var iwlist = require('wireless-tools/iwlist');
const exec  = require('child_process').exec;
import './App.css';


const NetFam1 = () => {
  const navigate = useNavigate();
  return (
    <div className="summary">
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>

      <div >
        <h1>A.R Drone Network Familiarization: </h1>
        <h2>Before we start finding vulnerabilities and controlling the A.R Drone with our computer, lets take a deeper dive into what is onboard the actual device!</h2>
        <h2>Start by connecting your laptop to the Parrot A.R. Drone, the network name should be something along the lines of “ardrone_XXXXX”. Note: once you connect to the drone you will NOT have internet access.
            Troubleshooting: if the network is not showing ensure that your drone battery is properly seated and connected to the device. Additionally, you can attempt turning your wifi adapter on and off, or disconnecting and reconnecting the drone battery!
        </h2>

        </div>
        <br></br>

        <div className="flexLessSpace">
        <div className="Hello">
          <button type="button" onClick={() => navigate('/')}>
            Go Back
          </button>
        </div>
        <div className="Hello">
          <button type="button" onClick={() => navigate('/NetFam2')}>
            Continue
          </button>
        </div>
        </div>

        <br></br><br></br><br></br>

      </div>
    );
  }

  export default NetFam1;
