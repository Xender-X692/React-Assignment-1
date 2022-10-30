import React from 'react'
import './Style.css'
import {IoLocation} from 'react-icons/io5';

const Card = (props) => {
    console.log(props);
  return (
    
    // <div className='container'>
    <div className='card-container'>
        <img src={props.img} alt="" />
        <div className='text-container'>
            <p><IoLocation style={{color:'tomato'}}/> {props.country} <a href="www.google.com">View on Google Maps</a></p>
            <h1>{props.famous}</h1>
            <p><strong>{props.date}</strong></p>
            <p>{props.content}</p>
        </div>
    </div> 

    
    
    
    // </div>
  )
}

export default Card