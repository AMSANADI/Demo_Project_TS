import { useState } from "react";
import axios from "axios";
import { stringify } from "querystring";
import './Login.scss'
import { useNavigate } from "react-router-dom";


const Login: React.FC = () =>{
const [userName, setUserName] = useState<string>('');
const [password , setPassword] = useState<string>('');
const [userNameError, setUserNameError] = useState<string>('');
const [passwordError, setPasswordError] = useState<string>('');
const navigate = useNavigate();

const validateUserName = (value: string) => {
  // Basic email validation with regex
 
  if (!userName) {
    setUserNameError('Please enter user name');
    return false;
  }
  setUserNameError('');
  return true;
};
const validatePassword = (value: string) => {
  // Password validation logic (e.g., minimum length)
  if (value.length < 6) {
    setPasswordError('Password must be at least 6 characters');
    return false;
  }
  setPasswordError('');
  return true;
};

const handleSubmit = (e:React.FormEvent) =>{
  e.preventDefault();
  sessionStorage.setItem('userName', userName);
  if (!validateUserName(userName) || !validatePassword(password)) {
    return;
    
  }
  console.log({userName, password});
  console.log("successfully logged in")
  navigate("/home");
}

 return <div className="login">
   <form>
    <div className="wrapper">
      <div className="login_box">
        <div className="login-header"><span> Login </span></div>


<div className="input_box">
<input
                placeholder="Enter the userName"
                className="input-field"
                type="text"
                id="user"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                  validateUserName(e.target.value);
                }}
              /><br/>
    <span className="error-message">{userNameError}</span>
    <i className="bi bi-person"></i>
</div>
<div className="input_box">
              <input
                placeholder="Enter the password"
                className="input-field"
                type="password"
                id="pass"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validatePassword(e.target.value);
                }}
              /><br/>
    <span className="error-message">{passwordError}</span>
    <i className="bi bi-lock"></i>
</div>
<div className="input-box">
    <button type="submit" className="input-submit"onClick={handleSubmit}>Login</button></div>
    </div></div>
   </form>

 </div>
} 
export default Login; 