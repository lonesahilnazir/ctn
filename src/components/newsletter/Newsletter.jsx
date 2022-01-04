import React from 'react'
import { Button } from '..'

import './newsletter.css'

const Newsletter = () => {
    return (
        <div className='newsletter'>
            <h2>Subscribe to our Newsletter</h2>
            <p>Age sold some full like rich new. Amounted repeated as believed in confined juvenile.</p>
            <Button
                class='btn btn--full'
                text={`SUBSCRIBE ➤`}
            />
        </div>
    )
}

export default Newsletter
