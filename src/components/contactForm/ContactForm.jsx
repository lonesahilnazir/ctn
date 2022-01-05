import React from 'react'
import { Button } from '..'

import './contactform.css'


const ContactForm = () => {
    return (
        <div className='contactform'>
            <form className='form'>
                <div className='form__name'>
                    <input className='form__input' type="text" id="name" name="name" placeholder=" " />
                    <label className='form__label' htmlFor="name">Name</label>
                </div>
                <div className='form__email'>
                    <input className='form__input' type="email" id="email" name="email" placeholder=" " />
                    <label className='form__label' htmlFor="email">Email</label>
                </div>
                <div className='form__subject'>
                    <input className='form__input' type="text" id="subject" name="subject" placeholder=" " />
                    <label className='form__label' htmlFor="subject">Subject</label>
                </div>
                <div className='form__message'>
                    <input className='form__input' id="message" name="message" placeholder=" " />
                    <label className='form__label' htmlFor="message">Message</label>
                </div>
                <Button text="Send Message" class="btn btn--full" />
            </form>
        </div>
    )
}

export default ContactForm
