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


        <h2>Exploring the A.R Drone internals
        Lets poke around with what we are working with here. What exactly makes the drone go? Is there windows onboard? A smartphone CPU? What do you think?
        Let's get down to the bottom of it, try running the telnet command on your new terminal with your drone’s IP address. Try typing “telnet DRONE.IP.ADDRESS.” in your command line on the new terminal. What do you see?
        Believe it or not, you are now in a shell for a software called “busybox” which is essentially a package that allows the drone to run a version of linux! And what does it mean to be in a shell? Well you are in a “shell” for your version of linux by using the command line right now, the only difference is now you are in a shell INSIDE a shell! Even more intriguing is that the A.R. Drone lets you access this drone without any credentials (unlike your own system) giving you full access to whatever is in store!
        Now lets see what hardware this software is running on! With modern advances in technology we know that small devices can pack a large punch, how much RAM and CPU power does your phone have onboard? Well let's not set our expectations too high…this is a budget drone after all
        Run the command “cat /proc/cpuinfo” in your shell and you will be graced with all of the information about the drones hardware! What type of processor is onboard? How much RAM is onboard? What other information can you discern from this?
        </h2>

        </div>
        <br></br>

        <div className="flex">
        <div className="Hello">
          <button type="button" onClick={() => navigate('/NetFam2')}>
            Go Back
          </button>
        </div>
        <div className="Hello">
          <button type="button" onClick={() => navigate('/NetFam4')}>
            Continue
          </button>
        </div>
        </div>

        <br></br><br></br><br></br>

      </div>
    );
  }

  export default NetFam3;
