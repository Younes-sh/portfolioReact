import React from 'react'
import './Experience.css'
export default function Experience ({Image , title , description}){
  return (
    <div className='experience'>
        <div>
            <img src={Image} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </div>
  )
}
