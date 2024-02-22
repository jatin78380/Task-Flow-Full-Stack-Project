import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate();
    const navigationtotask = () => {
        navigate('/demo');
    };
 return (
    <>
   <div>
        <div>
            <div>  
                  <div> <img src="" alt="logo" /> </div>
                  <div className="colslog">
                  <div> <h1 className='hlog'>Hi ! Nice to see you again.</h1> </div>
                <div> <label htmlFor="email" className='emailpass' >Email:</label> 
                   <input type='email'></input>
                   </div>
                    <div> <label htmlFor="password"  className='emailpass'>Password:</label>
                  <input type='password'></input></div>
                  <div>
                    <button className='btnlog' onClick={navigationtotask}>Continue to TaskFlow</button></div>
            </div>
            <div className='dnln'> <img src='' alt='doinglogin'/> </div>

                  </div>
               
        </div>
    
    <footer className='footers'> TaskFlow- BayArea Hacks 2.0 - 2024</footer>
    </div> 
    </>
 )

}
export default Login;