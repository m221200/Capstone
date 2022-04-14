import { useNavigate } from "react-router-dom"
import icon from '../../assets/droneIcon2.svg';
import './App.css';
import App from "./App"
var iwlist = require('wireless-tools/iwlist');
const exec  = require('child_process').exec;


const HijackSummary = () => {
  const navigate = useNavigate();
  return (
    <div class="summary">
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>Hijack Summary</h1>
      <h2>Let's review what we have just done to our A.R. Drone: We connected to the Drones wifi, used the open and unsecured access to busybox, telnet, and all of the information needed to create a Node.js runtime environment, then finally issued our OWN commands to the drone using JavaScript code and the open-source drone-browser software. As you can tell, the makers of the A.R Drone did not think too much about security when crafting their budget consumer drone. As a result it is open to a LOT of vulnerabilities including the one seen here. What implications could this have if a consumer drone was compromised? What if it was being used for military applications? What is the future of drone security and vulnerabilities? Check out the other attacks in our program to see what other things are possible! And happy hacking!
</h2>
<br></br>
<div className="Hello">
  <button type="button" onClick={() => navigate('/')}>
    Home
  </button>
</div>
<br></br><br></br><br></br>
    </div>
  );
}

export default HijackSummary;
