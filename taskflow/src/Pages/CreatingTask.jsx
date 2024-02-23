import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from'react-router-dom'
function CreatingTask() {
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  useEffect(()=>{
    axios.get('http://localhost:3001/auth/verify')
    .then(res =>{
      if(res.data.status){

      }
      else{
        navigate('/login')
      }
    })
  })
  return (
    <div>
        Lets create lists
    </div>
  )
}

export default CreatingTask