import { useState } from "react";
import axios from "axios";
import { stringify } from "querystring";
import './login.scss'
const Login: React.FC = () =>{

  
const [email, setEmail] = useState({});
const [password , setPassword] = useState({});


const handleSubmit = (e:React.FormEvent) =>{
  e.preventDefault();
  console.log({email, password});
  // axios.post("https://reqres.in/api/login", payLoad).then(response => {
  //   const response1 =response
  //  sessionStorage.setItem("stringyfy", JSON.stringify(response1))
  //  sessionStorage.setItem("Token", response1.data.token)

  // })
}

 return <div>
   <form>
    <div className="wrapper">
      <div className="login_box">
        <div className="login-header"><span> Login </span></div>


<div className="input_box">
    <input placeholder="Enter the userName" className="input-field" type="text" id="user"  onChange={(e) => setEmail(e.target.value)}/><br/>
    <i className="bi bi-person"></i>
</div>
<div className="input_box">
    <input placeholder= "Enter the password" className="input-field" type="password" id="pass" onChange={(e) => setPassword(e.target.value)}/><br/>
    <i className="bi bi-lock"></i>
</div>
<div className="input-box">
    <button type="submit" className="input-submit"onClick={handleSubmit}>Login</button></div>
    </div></div>
   </form>

 </div>
} 
export default Login; 