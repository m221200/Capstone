import { useNavigate } from "react-router-dom"
import icon from '../../assets/droneIcon2.svg';
import './App.css';
import App from "./App"
import { Bars} from 'react-loading-icons'
import React, { useRef, useState } from "react"
import { useEffect } from "react";

const Hijack2 = () => {
  const text = useRef(null)
  const loadingIcon = useRef(null)
  const navigate = useNavigate();
  const myContainer = useRef(null);
  const goBack = useRef(null)

  const [droneMac, setdroneMac] = useState(null)

  useEffect(() => {
    ipcRenderer.send('sendMac');

    ipcRenderer.on('droneMac', (event, arg) => {
        console.log("Here", arg)
        setdroneMac(arg)
    });
  }, [])

  function sendPhoneMAC() {
    ipcRenderer.send('phoneMAC', myContainer.current.value);
    loadingIcon.current.style.display = "flex"
    text.current.hidden = true
    goBack.current.hidden = true
  }

  ipcRenderer.on('deauthDone', (event, arg) => {
    navigate('/hijack3')
  });

  ipcRenderer.on('failure', (event, arg) => {
    navigate('/failure')
  });

  const myButton = useRef(null)
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

        <h2 className="center">Executing Deauthentication Attack</h2>


      <div ref={loadingIcon} style={{display:"none"}} className="Hello">
        <Bars />
      </div>

      <div ref={text}>
          <h1>Deauthentication continued</h1>
          <h2>We can now move on to finding the MAC address of the phone that is controlling the drone. Please enter the following command in that second terminal you just used in the previous page: </h2>
          <br></br><br></br><h2 className="Hello">sudo airodump-ng --bssid {droneMac} --channel 6 wlp2s0</h2><br></br><br></br>
          <h2>You should now see a similar screen as the previous command. However, these are all the devices that are connected to the AR Drone’s WiFi network. There should only be one device listed. That is the phone’s MAC address! Please input that MAC address in the box below:</h2>
          <div className="Hello">
            <input ref={myContainer} onChange={success} type="text" id="PhoneMacAddress" className="css-input" placeholder="Phone's MAC Address"></input>
          </div>
          <h2>Now that you have the MAC address of the drone and the MAC address of the phone we can send specified deauthentication packets to the phone that will disconnect the phone from the drone’s network! Please press CTRL+C to exit the program. Press the Deauthenticate button below to see it happen!</h2>
          <div className="Hello"><button ref={myButton} onMouseOver={success} onClick={sendPhoneMAC}>Deauthenticate</button></div>
      </div>
      <div><button type="button" ref={goBack} onClick={() => navigate('/hijack1')}>
        Go Back
      </button></div>

      <br></br><br></br><br></br><br></br>
    </div>
  );
}

export default Hijack2;
