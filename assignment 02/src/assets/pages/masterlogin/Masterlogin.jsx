import React from 'react'
import './Masterlogin.css'
import logoimage from '../../images/logo.png'
import { Checkbox } from '@mui/material'
import Button from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'


export default function Masterlogin() {
  const navigate=useNavigate()
    const handlesigin = ()=>{
        navigate('/signin');
    }
  
  return (
    <div className='master_login'>
      <div className="master_login_container">
        <div className='masterlogin_logo'>
          <div className='masterlogin_logo_image'>
            <img src={logoimage} alt="" />
          </div>
          <div
            className='masterlogin_logo_text'>
            Insider’s <span className="masterlogin_logo_text_span"> Inventory</span>
          </div>
        </div>
        <div className='masterlogin_administration'>
          Administration Login
          <div className="masterlogin_administration_input">
            <div className="username">
              <div className='username_heading'> Username</div>
              <input type="text" />
            </div>
            <div className="username">
              <div className='username_heading'>Password</div>
              <input type="text" />
            </div>
            <div className='remember_section'>
              <div className='section_1'><Checkbox /><p>Remember Me</p></div>
              <div className='Section_2'> Forgot Password?</div>
            </div>
          </div>
          <div>
            <Button
               onclick={()=>handlesigin()}
              label={"Sign In"}
            />
          </div>
        </div>
      </div>

    </div>
  )
}
