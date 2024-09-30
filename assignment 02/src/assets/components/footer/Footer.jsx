import React from 'react'
import './Footer.css'
import Grid from '@mui/material/Grid';
import footerImg from '../../images/building_img.png';
import Button from '../button/Button';
import logo from '../../images/logo.png'
import Navbar from '../navbar/Navbar';
import Links from '../links/Links';

export default function Footer() {
  return (
    <>
   <div className='upper_footer'>
   <div className='footer'>
    <div className="footer-upper footer-building-margin">
        <Grid container spacing={5}>
            <Grid item xs={4}>
            <img src={footerImg} alt="building-img" className='footer-building' />
            </Grid>
            <Grid item sm={8} xs={12}>
               <div className='footer-upper-right'>
                  <div className="footer-heaing">Signup for the Latest Deals</div>
                  <div className="footer-text">By joining our mailing list, you'll receive the latest updates and opportunities in investment properties directly to your inbox.</div>
                  <div style={{ width: '100%' }} >
                     <Grid container spacing={2}>
                       <Grid item sm={6} xs={12}>
                        <input    placeholder='First Name'></input>
                         
                        
                         </Grid>
                        <Grid item sm={6} xs={12}>
                        <input    placeholder='last_name'></input>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                        <input    placeholder='Email'></input>

                        </Grid>
                        <Grid item sm={6} xs={12}>
                        <input    placeholder='Phone Number'></input>

                        </Grid>
                      </Grid>
                    </div>
                    <Button
                        text='Sign up for the Latest Deals'
                    />
                   </div>
                </Grid>
              </Grid>
         </div>
               {/* <div className="footer-lower">
                <LowerFooter/>
              </div> */}
        </div>


   </div >
   <div className='lower_footer'>
   <div className="lower-Footer">
      <div className='footer-Logo-Div'>
        <img src={logo} alt='' className='logo-Img'></img>
      </div>
      <div className='companyName-Div'>
        <p>Insider's<span className='second-Text'>  Inventory</span></p>
      </div>
      <div className='slogan-Div'>
        Your gateway to Real Estate Excellence.
      </div>
      <div className='list-Div'>
        <Links/>
        
      </div>
      <div className='socialLinks-Div'>
        {/* <SocialLinks/> */}
      </div>
      <hr />
      <div className='footer-Copyrights'>
        Copyright Insider’s Inventory 2024. All rights reserved.
      </div>
    </div>
  

    </div>   
   
    </>
  )
}
