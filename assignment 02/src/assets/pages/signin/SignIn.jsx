import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './SignIn.css'
import img7 from '../../images/signin.png'
import { Checkbox } from '@mui/material'
import Button from '../../components/button/Button'
import Footer from '../../components/footer/Footer'

export default function SignIn() {
    return (
        <>
            <div>
             <Navbar/>
           </div> 
            
            <div className='signin_main_container'>
                <div className='signin_container'>
                    <div className='sub_container'>
                    <img src={img7} alt="" /><span className='signin_container_span'>Discover a place you'll adore</span>
                    </div>
                    <div className='sigin_details'>
                        <div className='sigin_heading'>
                            Log in to Submit an Off-Market Property

                            <div className="masterlogin_administration_input">
            <div className="username">
              <div className='username_heading1'> Username</div>
              <input type="text" className='textbox'/>
            </div>
            <div className="username">
              <div className='username_heading1'>Password</div>
              <input type="text" className='textbox' />
            </div>
            <div className='remember_section'>
              <div className='section_1_1'><Checkbox /><p>Remember Me</p></div>
              <div className='Section_2'> Forgot Password?</div>
            </div>
          </div>
          <div>
            <Button
              label={"Sign In"}
            />
          <div>
             <div className='lower_text'>
             Don’t have an account? <span className='lower_text_span'>Sign up</span>
          </div>
            </div>
          </div>
         
                        </div>
                    </div>


                </div>
            </div>
        
        <div>
            <Footer/>
        </div>
        </>
    )
}
