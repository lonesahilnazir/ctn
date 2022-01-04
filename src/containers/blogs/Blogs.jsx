import React from 'react'
import { Article } from '../../components'

import './blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className='blogs__heading'>
                <h2>Latest Blogs</h2>
                <p>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
            </div>
            <div className='blogs__articles'>
                <Article button={false} title='Unleash Your Creativity' text='Nine for Mortal Men, doomed to die, One for' />
                <Article button={true} title='Unleash Your Creativity' text='Nine for Mortal Men, doomed to die, One for' />
                <Article button={true} title='Unleash Your Creativity' text='Nine for Mortal Men, doomed to die, One for' />
                <Article button={false} title='Unleash Your Creativity' text='Nine for Mortal Men, doomed to die, One for' />
            </div>
        </div>
    )
}

export default Blogs