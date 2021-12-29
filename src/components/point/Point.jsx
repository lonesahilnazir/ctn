import React from 'react'
import './point.css'

const Point = (props) => {
    return (
        <div className='point'>
            <div className={props.color}/>
            <span>{props.number}</span>
            <p>{props.text}</p>
        </div>
    )
}

export default Point
