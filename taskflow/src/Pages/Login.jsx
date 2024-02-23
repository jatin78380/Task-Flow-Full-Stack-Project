import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { set } from "mongoose"

import { Link } from 'react-router-dom';
import {useState} from'react'
const Login = () => {
 
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate= useNavigate();
 axios.defaults.withCredentials = true;

  const handleSubmit =(e) => { 
      e.preventDefault();
      axios.post('http://localhost:3001/login', { email, password})
      .then(result => {
        if(result.data ==="Success"){
          navigate('/demo')
        }
         

      })
      .catch(err => console.error(err));
  }
 return (
  <>
  <div>
        
      <div className="header">

        <div>
        <div className="logo"><img src="" alt="logo_img" className="logo" /></div>
        </div>
        <div className="hlog">
          <h1>Let's start by creating your personal space</h1>
        </div>
        <div className="regd">
          <label htmlFor="email">Email:</label>
          <input type="email" placeholder="" autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        
        <div >
          <button onClick={handleSubmit} className="btnlog"> Continue to Taskflow</button>
        </div>
        <div className="regiter">
          <p>Don't Have Account? <Link to="/register">Register</Link></p>
        </div>
        <div className="img"><img src="" alt="reg_img" /></div>

      </div>
      <footer className='footers'> TaskFlow- BayArea Hacks 2.0 - 2024</footer>
 
  </div>
  
  </>
 )

}
export default Login;



