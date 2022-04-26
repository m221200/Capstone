import { useNavigate } from "react-router-dom"
import icon from '../../assets/droneIcon2.svg';
import './App.css';
import App from "./App"
import { Bars} from 'react-loading-icons'
import React, { useRef } from "react"

const Hijack4 = () => {
  const navigate = useNavigate();
  const myContainer = useRef(null);
  function finish() {
    ipcRenderer.send('finishHijack');
    navigate('/Select')
  }

  return (
    <div className="summary">

      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>

        <h2 className="center">Executing Skyjack Attack</h2>

      <div>
          <h1>Taking Control</h1>
          <h2>Now notice the terminal window that appeared when you started the attack through our program. You should be prompted with “drone” on your command line. BOOM! You can now control the drone by issuing commands on the keyboard!I Think of some commands you can issue here such as “takeoff(), clockwise(.5), stop(), land()” etc… Try them out now! Enjoy seeing the drone being controlled completely by your inputed commands.</h2>
          <h2>Tip: When the drone crashes it will be in “emergency mode” as indicated by red LEDS vice the regular yellow/green. You can exit this mode by pressing “e” in your terminal!</h2>
          <h2>When you are done playing with the drone, or have unfortunately sent it into emergency mode, hit Ctrl+C twice and press Finish to continue to the summary page.</h2>
          <div className="Hello"><button onClick={finish}>Finish</button></div>
      </div>

      <br></br><br></br><br></br><br></br>
    </div>
  );
}

export default Hijack4;
