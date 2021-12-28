import React from 'react'

import { Button, Stats } from '../../components'

import './header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className='header__content'>
                <h1><span>Masters</span> of Consistency and <span>Quality</span>.</h1>
                <p>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
                <Button text="Explore" class="btn btn--full" />
                <Button text="Contact Us" class="btn btn--hollow" />
                <div className='stats-container'>
                    <Stats colorClass='orange' number='25,356' text='Projects Done' />
                    <Stats colorClass='blue' number='15,200' text='Buildings Done' />
                    <Stats colorClass='green' number='350+' text='Total Employees' />
                </div>
            </div>
            <div className='header__image'>
                <div className='showpiece'/>
                <div className='header__image-div' />
                <div className='showpiece'/>
            </div>
        </div>
    )
}

export default Header
