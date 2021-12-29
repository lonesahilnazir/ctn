import React from 'react'
import { Button, Point } from '../../components'
import './whychooseus.css'
import image from '../../assets/img2.png'

const WhyChooseUs = () => {
    return (
        <div className='whychooseus'>
            <div className='whychooseus__heading'>
                <div className='whychooseus__heading__text'>
                    <p>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
                    <Button text='Read More' class='btn btn--full' />
                </div>
                <div className='whychooseus__heading__title'>
                    <h2>Why Choose us for best construction experience</h2>
                </div>
            </div>
            <div className='whychooseus__content'>
                <img src={image} alt='whychooseus-img' />
                <div className='whychooseus__content__points'>
                    <Point
                        number='01'
                        text='And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.'
                        color='blue-bullet'
                    />
                    <Point
                        number='02'
                        text='Up maids me an ample stood given. Certainty say suffering his him collected intention promotion.'
                        color='orange-bullet'
                    />
                    <Point
                        number='03'
                        text='Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom.'
                        color='green-bullet'
                    />
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
