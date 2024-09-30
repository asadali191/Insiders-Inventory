import React from 'react'
import images from '../../images/person1.png'
import './Commentcard.css'

export default function Commentcard() {
    return (
        <div className="commentcard_main">
        <div className='commentcard_container'>
            <div className="commentcard_comment">
                Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta
                est convallis lacus AVestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus
                AVestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus A
            </div>
            <div className="commentcard_about">
                <div className='commentcard_personimage'>
                    <img src={images} alt="" />
                </div>
                <div className='commentcard_personabout'>
                    <div className='person_name'>Debra</div>
                    <div className='person_profession'>
                        <p>Web Designer</p>
                        <p>Biffco Enterprises Ltd.</p>
                    </div>
                </div>
            </div>


        </div>
        </div>
    )
}
