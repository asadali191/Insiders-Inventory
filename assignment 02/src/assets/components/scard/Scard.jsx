import React from 'react'
import './Scard.css'

export default function Scard({scimage , scheading ,sctext}) {
    return (
        <div>
            <div className="scard_container">
                <div className="scard_image">
                    <img src={scimage} alt="" />
                </div>
                <div className="scard_text">
                    <div className='scard_text_h'>{scheading}</div>
                    <div className='scard_text_P'>{sctext}</div>
                </div>
            </div>
        </div>
    )
}
