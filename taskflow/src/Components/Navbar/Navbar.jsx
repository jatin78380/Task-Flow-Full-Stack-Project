import './Navbar.css'
const Navbar = ()=>{
  

    return (
        <div className='navbar'>
            <div className="navlogo">
                <img src="" alt="logo_image"></img>
               

            </div>
            <ul className="nav-menu">
   

            <li onClick={()=>{setMenu("features")}} >  Features</li>
                    <li>Team</li>
                    <li>Login 
                        
                    </li>
                     
            </ul>
            <nav>
                <button>Check Demo</button>
                
            </nav>
        </div>
    )

}
export default Navbar;