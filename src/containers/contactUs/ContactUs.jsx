import React from 'react'
import { ContactForm, Map } from '../../components'

import './contactus.css'

const ContactUs = () => {
    return (
        <div className='contactus'>
            <div className='contactus__heading'>
                <h2>Contact Us</h2>
                <p>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
            </div>
            <div className='contactus__body'>
                <div className='contactus__form'>
                    <ContactForm />
                </div>
                <div className='contactus__map'>
                    <Map />
                </div>
            </div>
        </div>
    )
}

export default ContactUs
