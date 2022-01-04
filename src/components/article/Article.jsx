import React from 'react'

import './article.css'

import { Button } from '../../components'

const Article = ({button, title, text}) => {
    return (
        <div className='article'>
            <h3>{title}</h3>
            <p>{text}</p>
            {button && <Button text="Read More" class="btn btn--hollow" />}
        </div>
    )
}

export default Article
