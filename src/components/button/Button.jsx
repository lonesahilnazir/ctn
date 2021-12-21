import React from 'react'

import './button.css'

const Button = (props) => {
    return (
        <button type='button' className={props.class}>
            {props.text}
        </button>
    )
}

export default Button
