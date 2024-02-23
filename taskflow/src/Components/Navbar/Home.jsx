import { useNavigate } from 'react-router-dom'
import './Home.css'
import { TiTick } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";

import CreatingTask from '../../Pages/CreatingTask'
import Features from '../../Pages/Features'
import Register from '../../Pages/Register';

const Home = ()=>{
    const navigatetologinPage = useNavigate()
    const navigatetofeaturesPage = useNavigate()
    const navigatetoteamPage = useNavigate()
    const navigatetoCreatingTask = useNavigate()
    const navigatetoregPage = useNavigate()
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
function navigationtoregisterationPage(){
  navigatetoregPage('/register')
}
    return (
      <div className='home'>
        
        
 <div className='navbar'>
 <ul className="nav-menu">
 <img src="" className='logoimg'alt="logo_image"></img>
   <li onClick={navigationtofeaturesPage} >  Features</li>
           <li onClick={navigationtoteamPage}>Team</li>
           <li onClick={navigationtologinPage}>Login </li>
           <li onClick={navigationtoregisterationPage}>Register</li> 
           <button className='btn1_demo' onClick={navigationtoCreatingTask}>Check Demo</button>

   </ul>     
   </div>
   <div className='cols'>

   
    <div className='sec1'>
 
  <h1 className='h1sec1'>Project Management for  Freelancers  </h1>
  <p className='para'>We understand the challenge of prioritizing several tasks while you need to handle clients, organize your business and meet tight deadlines at the same time.</p>
<h4 className='sec1h4'>Here’s what TaskFlow can do for you:</h4>
<div className='cols'> 



<div className='add_task_seam'>  
  <h6 className='sec1h6'>Add tasks seamlessly with a single click.</h6>
  <div>
  <img src="" id='seam' alt="img_seamtask" />
  </div> 
  
</div>
<div className='use_time'> 
  <h6 className='sec1h6'>Use time windows for improving productivity.</h6>
  <img src="" id='time'alt="time_windows" />
</div>
              </div>
              </div>
            
               <div className='idt'> 
                <img src="" alt="image of doing task" />
               </div>
               </div>

               <div className='sec2'>
 <h2 className='sec2h2'>Stop working the old way...</h2>
 <p className='para'>Take your productivity to the next level, bring all your tasks to the same place, focus on your priorities and complete your milestones with a single tool.</p>
 <div className='cols'>
 <div className='oldwycol'> 
                <h4 className='old_p_h6'>The Old way: Manual Planning</h4>
                <img src="" alt="old_way" />
                <ul className='old_new'>
                  <li className='lists'> <RxCross1 className='cross '  />  Forgotten tasks.</li>
                  <li className='lists'> <RxCross1 className='cross ' /> No time to focus</li>
                  <li className='lists'> <RxCross1  className='cross '/>  No personal life.</li>
                  <li className='lists'> <RxCross1 className='cross '/> Too many options.</li>
                </ul>
               </div>
       <div className='effwaycol'>
        <h4 className='eff_p_h6'> The Efficient Way: Using TaskFlow</h4>
        <img src="" alt="efficien_img" />
        <ul className='old_new'>
        
          <li className='lists'> <TiTick className='right '/>  Complete every task.</li>
          <li className='lists'> <TiTick className='right '/> Uninterrupted work.</li>
          <li className='lists'><TiTick className='right '/> Everything in one place.</li>
          <li className='lists'><TiTick className='right '/> Enjoy your free time.</li>
        </ul>
       </div>
               </div>
               </div>
               

       <div className='sec3'>
        <h1 className='sec3h1'>Change the way your organize your tasks</h1>
        <button  className='btn1_demo' onClick={navigationtoCreatingTask}>Check Demo</button>
       </div> <br></br>
       <div>
        <footer className='footers'>TaskFlow - BayArea Hacks 2.0 - 2024</footer>
       </div>


          
           
      
      
      </div>
       
    )

}
export default Home;