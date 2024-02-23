import { set } from "mongoose"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import {useState} from'react'

import axios from "axios";
const Register = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate= useNavigate();
   
    const handleSubmit =(e) => { 
        e.preventDefault();
        axios.post('http://localhost:3001/auth/register', {name, email, password})
        .then(response => {
          if(response.data.status){
            navigate('/login')
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
              
              <div className="name">
                <label htmlFor="name">Name </label>
                <input type="text"  id="" onChange={(e) => setName(e.target.value)} />
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
                <button onClick={handleSubmit} className="btnlog"> Start using Taskflow</button>
              </div>
              <div className="login">
                <p>Already registered? <Link to="/login">Login</Link></p> 
              </div>
              <div className="img"><img src="" alt="reg_img" /></div>

            </div>
            <footer className='footers'> TaskFlow- BayArea Hacks 2.0 - 2024</footer>
       
        </div>
        
        </>
    )
}
export default Register;   