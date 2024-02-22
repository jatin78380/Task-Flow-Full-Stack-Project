import { set } from "mongoose"
import { useNavigate } from "react-router-dom";

import axios from "axios";
const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    const navigate= useNavigate();

   const handleSubmit = async(event)=> {
    event.preventDefault();
    
    try {
        const response = await axios.post(
          "http://localhost:3001/register",
          { name, email, password } 
        );
  
        
        console.log("Registration successful:", response.data);
        navigate("/login"); 
  
      } catch (error) {
        console.error("Registration failed:", error);
       
      }
   
   }
  
    return (
        <>
        <div>

        <div className="navlogo">
                <img src="" alt="logo_image"></img>
                </div>


            
            <div> <p> Let's start by creating your personal space </p></div>
        <div>
            <h2>Registeration Page</h2>
            <p> Hi name! Nice to see you again
            </p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" autoComplete="off" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email"  name="email" autoComplete="off" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                   
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"  placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />
                   
                </div>
                <button onClick={handleSubmit} className="btn-login">Register to use TaskFlow</button>
                <div>
                    <input type="checkbox" name="tick" />
                    <label htmlFor="password">You are agree with terms & conditions</label>
                </div>
            </form>
            <div className="drgn"> <img src="" alt="drgn" /> </div>
        </div>
        <footer className="footers"> TaskFlow - BayArea Hacks 2.0 - 2024</footer>
    
        </div>
        
        </>
    )
}
export default Register;   