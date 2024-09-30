import React from 'react'
import './Navbar.css'
import Button from '../button/Button'
import Home from '../../pages/home/Home'
import Links from '../links/Links'


const Navbar = () => {
  return (
    <>
      <div className='nb'>
        <div className='nb-title'>
          <h1>Insider's Inventory</h1>
        </div>
        <div className='nb-links'>
         <Links/>
        </div>
        <div className="nb-btn">

          <Button
            label='Menu'
          />
<p>Asad ali</p>
        </div>

      </div>

   </>

  )
}

export default Navbar
