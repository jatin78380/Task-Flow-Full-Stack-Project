import { useNavigate } from "react-router-dom"
const LoginSignUp = () => { 
    const navigatetodemo= useNavigate()
   const handleSubmit = async(event)=> {
    event.preventDefault()
    navigatetodemo('/demo')
   }
    return (
        <>
        <div className="navlogo">
                <img src="" alt="logo_image"></img>
               

            </div>
            <div>

                Let's start by creating 
            </div>
            <div>your personal space</div>
        <div>
            <h2>Login Page</h2>
            <p> Hi name!
                Nice to see you again
            </p>
            <form onSubmit={handleSubmit}>
                
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email"  name="email" autoComplete="off" placeholder="Enter email" />
                   
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"  placeholder="Enter password" />
                   
                </div>
                <button className="btn-login">Continue to Taskflow</button>
                <div>
                    <input type="checkbox" name="tick" />
                    <label htmlFor="password">You are agree with terms & conditions</label>
                </div>
            </form>
        </div>
        <footer> TaskFlow - BayArea Hacks 2.0 - 2024</footer>
        
        </>
    )
}
export default LoginSignUp;