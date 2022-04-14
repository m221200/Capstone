import { useNavigate } from "react-router-dom"
import icon from '../../assets/droneIcon2.svg';
import './App.css';
import App from "./App"
import { Bars} from 'react-loading-icons'
import React, { useRef } from "react"

const Hijack3 = () => {
  const navigate = useNavigate();
  const myContainer = useRef(null);
  function takeControl() {
    ipcRenderer.send('takecontrol');
    navigate('/hijack4')
  }



  return (
    <div className="summary">

      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>

        <h2 className="center">Executing Skyjack Attack</h2>

      <div>
          <h1>Taking Control</h1>
          <h2>You should now see a bunch of deauthentication packets populating the terminal in which you opened our program. These are deauthenticating the phone from the drone as we speak! If you look on the phone screen, you will see a message stating that the controller was disconnected. You are now ready to take over the drone with the laptop sitting in front of you. Please close the terminal the extra terminal that you opened in the first step of this attack. Now let’s take control of the drone!</h2>
          <h2>WARNING: before proceeding with the next steps please ensure that you have ample space to work with your drone, free of all obstacles and personnel. Once you begin issuing commands to the drone via your device you will not be able to stop the drone from running into obstacles were you to accidentally type a command and send the drone somewhere unexpected! IE: There are no brakes!</h2>
          <h2>NECESSARY STEP: Please ensure that your laptop is connected to the A.R Drone’s wifi network.</h2>
          <div className="Hello"><button  onClick={takeControl}>Take Control</button></div>
      </div>

      <br></br><br></br><br></br><br></br>
    </div>
  );
}

export default Hijack3;
