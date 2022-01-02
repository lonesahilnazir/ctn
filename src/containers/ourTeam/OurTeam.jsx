import React from 'react'
import { Engineer } from '../../components'
import { img1, img2, img3 } from './imports'

import './ourteam.css'

const OurTeam = () => {
    return (
        <div className='ourteam'>
            <div className='ourteam__heading'>
                <h2>Our Best Engineers</h2>
                <p>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
            </div>
            <div className='ourteam__engineers'>
                <Engineer imgUrl={img1} name='Chris Evans' address='Michigan, TX' phone='989-653-2986' email='ChrisEvans@const.com' />
                <Engineer imgUrl={img2} name='Alison Kiara' address='Michigan, TX' phone='989-653-2986' email='alisonkiara@const.com' />
                <Engineer imgUrl={img3} name='Adam Gates' address='Michigan, TX' phone='989-653-2986' email='adamgates@const.com' />
            </div>
        </div>
    )
}

export default OurTeam