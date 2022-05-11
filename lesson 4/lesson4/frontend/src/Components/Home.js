import React from 'react'
import {useNavigate} from 'react-router-dom'
import Button from "react-bootstrap/Button";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='home'>
        <Button onClick={() => navigate('/login')} className="lbtn">Login</Button>
        <Button onClick={() => navigate('register')} className ="sigbtn">Signup</Button>
    </div>
  )
}

export default Home