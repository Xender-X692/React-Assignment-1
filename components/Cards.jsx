import React from 'react'
import Card from './Card'
import './Style.css'
import {data} from './Data';

const Cards = () => {
    const carddata = data.map((data)=>{
        return(
            <Card key={data.id} {...data}/>
        )
    })

  return (
    <div className='container'>
        {/* <Card/> */}
        {carddata}
    
    </div>
  )
}

export default Cards