import React from 'react'
import './Experience.css'
export default function Experience ({Image , title , description}){
  return (
      <div  className='container-card'>
        <div className='card-experience'>
            <img src={Image} alt="" />
            <div className='hide'>
              <h1>{title}</h1>
              <p>{description}</p>
              <a href="" >Learn</a>
            </div>
        </div>
        {/* ------ */}
   

        {/* ------ */}
    </div>
  )
}




