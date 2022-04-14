import { useNavigate } from "react-router-dom"
import icon from '../../assets/droneIcon2.svg';
import './App.css';
import App from "./App"
var iwlist = require('wireless-tools/iwlist');
const exec  = require('child_process').exec;


const Failure = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <div className="Hello">
      <h2>Something went wrong. Please check the command prompt for a full summary of the error.</h2></div>
      <div className="Hello">
        <button type="button" onClick={() => navigate('/Select')}>
          Home
        </button>
      </div>
    </div>
  );
}

export default Failure;
