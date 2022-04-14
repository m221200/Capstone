import { useNavigate } from "react-router-dom"
import icon from '../../assets/droneIcon2.svg';
import './App.css';
import { BallTriangle} from 'react-loading-icons'
const { ipcRenderer } = window.require("electron");

const Telnet = () =>{
  const navigate = useNavigate();
  ipcRenderer.send('tellatt', '');
  ipcRenderer.on("completeTel", (event, arg) => {
    navigate('/telnetSummary')
  });
  ipcRenderer.on("failure", (event, arg) => {
    navigate('/failure')
  });
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h2 class="center">Executing Telnet</h2>
      <div className="Hello">
        <BallTriangle /><br></br>
      </div>
    </div>
  );
}

export default Telnet;
