import React from 'react'
import './Links.css'

export default function Links() {
    const links = [
        { name: 'Home', link: '/' },
        { name: 'Buyers', link: '/' },
        { name: 'Sellers', link: '/' },
        { name: 'Buy & Hold', link: '/' },
        { name: 'Retail', link: '/' },
        { name: 'Flip Opportunities', link: '/' },
        { name: 'Off-Market Inventory', link: '/' }
      ];
    
    return (
    <div className='links_list'>
      {links.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
    </div>
  )
}


  
  