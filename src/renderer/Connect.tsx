import { useNavigate } from "react-router-dom"
import icon from '../../assets/droneIcon2.svg';
import './App.css';
import App from "./App"
var iwlist = require('wireless-tools/iwlist');
const exec  = require('child_process').exec;


const Connect = () => {
  iwlist.scan('wlan0', function(err:any, networks:any) {
    console.log(networks);
    console.log('meep')
  });
  const navigate = useNavigate();
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h2>Available Networks:</h2>
      <div className="Hello">
        <button type="button" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Connect;
