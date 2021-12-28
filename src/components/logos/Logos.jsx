import React from 'react'
import './logos.css'
import chase from '../../assets/chase.png'
import asana from '../../assets/asana.png'
import buzzfeed from '../../assets/buzzfeed.png'
import toggl from '../../assets/toggl.png'
import walmart from '../../assets/walmart.png'
import curve from '../../assets/curve.svg'

const Logos = () => {
    return (
        <div class='logos'>
            <img src={curve} alt='curve' />
            <img src={chase} alt="chase" />
            <img src={asana} alt="asana" />
            <img src={buzzfeed} alt="buzzfeed" />
            <img src={toggl} alt="toggl" />
            <img src={walmart} alt="walmart" />
        </div>
    )
}

export default Logos
