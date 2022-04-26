import { useNavigate } from "react-router-dom"
import icon from '../../assets/droneIcon2.svg';
import pic from '../../assets/image.png'
import './App.css';
import App from "./App"
var iwlist = require('wireless-tools/iwlist');
const exec  = require('child_process').exec;
import './App.css';


const NetHelp = () => {
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


        <h2>Find the ip address of the drone:
Open a new terminal by typing Ctl+Alt+T all together.
The most traditional method of discovering an ip address on linux is the “ifconfig” command, try running it now in your new terminal and looking at the information it displays!
Can you discern the ip address of the drone from the ifconfig output? For example, when team counter-drone runs the command we receive the ip address “192.168.1.1” [see more: ip address, ifconfig, etc…depth] make sure to remember this address!
</h2>
<img className='img' src={pic}></img>

<h2>Run the nmap command on the drone’s ip address
“Nmap” or network mapper is a network scanner used for a sleuth of reasons in regards to host discovery, port scanning, and a variety of other things.
Run the command “nmap -o [drone ip address]” on your new terminal and see what information you can discern about the drone. What OS is it running? What ports or servers are open?
Two important takeaways from running nmap are that our drone has both an open FTP and Telnet server!
</h2>
<h2>Exploring the A.R Drone internals
Lets poke around with what we are working with here. What exactly makes the drone go? Is there windows onboard? A smartphone CPU? What do you think?
Let's get down to the bottom of it, try running the telnet command on your new terminal with your drone’s IP address. Try typing “telnet DRONE.IP.ADDRESS.” in your command line on the new terminal. What do you see?
Believe it or not, you are now in a shell for a software called “busybox” which is essentially a package that allows the drone to run a version of linux! And what does it mean to be in a shell? Well you are in a “shell” for your version of linux by using the command line right now, the only difference is now you are in a shell INSIDE a shell! Even more intriguing is that the A.R. Drone lets you access this drone without any credentials (unlike your own system) giving you full access to whatever is in store!
Now lets see what hardware this software is running on! With modern advances in technology we know that small devices can pack a large punch, how much RAM and CPU power does your phone have onboard? Well let's not set our expectations too high…this is a budget drone after all
Run the command “cat /proc/cpuinfo” in your shell and you will be graced with all of the information about the drones hardware! What type of processor is onboard? How much RAM is onboard? What other information can you discern from this?
</h2>
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

export default NetHelp;
