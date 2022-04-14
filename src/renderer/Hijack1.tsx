import { useNavigate } from "react-router-dom"
import icon from '../../assets/droneIcon2.svg';
import './App.css';
import App from "./App"
import { Bars} from 'react-loading-icons'
import React, { useRef } from "react"

const Hijack1 = () => {
  ipcRenderer.send('start')
  const navigate = useNavigate();
  // ipcRenderer.send('hijack1', '');
  // ipcRenderer.on("completeHijack", (event, arg) => {
  //   navigate('/hijackSummary')
  // });
  // ipcRenderer.on("failure", (event, arg) => {
  //   navigate('/failure')
  // });


  const myContainer = useRef(null);
  const myButton = useRef(null)
  function sendDroneMAC() {
    ipcRenderer.send('droneMAC', myContainer.current.value);
    navigate('/hijack2')
  }

  function success() {
    if(myContainer.current.value =="") {
      myButton.current.disabled = true
    } else {
      myButton.current.disabled = false
    }
  }

  return (
    <div className="summary">

      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>

        <h2 className="center">The Skyjack Attack</h2>

      <div>
          <h1>How to: Deauthentication attack</h1>
          <h2 className="important">Your command terminal might ask to enter your root password. You MUST enter this before continuing.</h2>
          <h2>Please ensure that a phone is connected to the drone’s WiFi network and the FreeFlight 2.0 app is running on the device. It need not be in flight just yet, but it can be if you desire.</h2>
          <h2>So, as you can see on the terminal where you started our application the first line you see is a “Killing these processes: ”. This references the processes that needed to be killed in order to change the network interface in your computer to monitor mode. This means that the network interface enters listening mode or promiscuous mode, which in turn allows the card to capture all WiFi traffic in the immediate area.</h2>
          <h2>Now that your wireless network card is in monitor mode, we need to snoop all the local traffic to find the AR drone and its Media Access Control (MAC) address. Just like each house has it's own postal address, every device connected on a network has a MAC address, that uniquely identifies it.To find this information, please open up a new terminal by pressing CTRL+ALT+T all at the same time. A new terminal should appear on your screen. From there, please enter the following command:</h2>
          <h2 className="Hello">sudo airodump-ng wlp2s0</h2>
          <h2>You should now see a long list of networks populating the screen. On the left hand side under the header BSSID, you will find all the MAC addresses of various WiFi routers in the area. On the far right under ESSI, you will find the names of the WiFi networks. We are looking for a network name similar to ardrone2_XXXXXX, with the Xs being the unique number identifier for that drone. Please note the BSSID or MAC address on the left side of the screen that is on the same line as the ardrone2_XXXXXX network name. Input that MAC address below:</h2>
          <div className="Hello">
            <input ref={myContainer} onChange={success} type="text" id="DroneMacAddress" className="css-input" placeholder="Drone's MAC Address"></input>
          </div>
          <h2>This is the drone’s MAC address. To exit this command please input CTRL+C at the same time. Your terminal should be expecting another command now. Congratulations! Let’s move on to the next step.
</h2>
          <div className="Hello"><button ref={myButton} onMouseOver={success} onClick={sendDroneMAC}>Next</button></div>
      </div>

      <br></br><br></br><br></br><br></br>
    </div>
  );
}

export default Hijack1;
