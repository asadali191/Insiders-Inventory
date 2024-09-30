import React from 'react'
import "./Card.css"

import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '../button/Button';

export default function Card({img , property  ,value ,percentage}) {
    return (
        <div>
            <div className="card_container">
                <div className="card_image">
                    <img src={img} alt="" />
                    <span className='card_property'>{property}</span>
                </div>
                <div className="card_values">
                    <div className="card_section">
                        <p>Initial Investment</p>
                        <p className='value'>{value}</p>
                    </div>

                    <div className="card_section">
                        <p>Potential ROI</p>
                        <p className='value'>{percentage}</p>
                    </div>

                </div>
                <div className="card_title">
                    <div>Luxury Apartment</div>
                    <div className='card_price'>$450,000</div>
                    <p>3 bedroom | 1 bathroom | 971 sq. ft.</p>
                    <div className='card_location'><LocationOnIcon />Australia</div>
                </div>
                <div> <Button
                    label='Login to Make an Offer'
                />
                </div>



            </div>

        </div>
    )
}
