import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import CreatingTask from '../../Pages/CreatingTask'
import Features from '../../Pages/Features'

const Navbar = ()=>{
    const navigatetologinPage = useNavigate()
    const navigatetofeaturesPage = useNavigate()
    const navigatetoteamPage = useNavigate()
    const navigatetoCreatingTask = useNavigate()
  function navigationtologinPage() {
    navigatetologinPage('/login');
  }
  function navigationtofeaturesPage() {
    navigatetofeaturesPage('/features');
  }
  function navigationtoteamPage() {
    navigatetoteamPage('/team');
  }
  function navigationtoCreatingTask(){
    navigatetoCreatingTask('/demo')
  }

    return (
        <div className='navbar'>
            <div className="navlogo">
                <img src="" alt="logo_image"></img>
               

            </div>
            <ul className="nav-menu">
   

            <li onClick={navigationtofeaturesPage} >  Features</li>
                    <li onClick={navigationtoteamPage}>Team</li>
                    <li onClick={navigationtologinPage}>Login 
                        
                    </li>
                     
            </ul>
            <nav>
                <button onClick={navigationtoCreatingTask}>Check Demo</button>
                
            </nav>
            <Features createTask={navigationtoCreatingTask} />
        </div>
    )

}
export default Navbar;