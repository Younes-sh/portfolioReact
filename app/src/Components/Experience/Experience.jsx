import React from 'react'
import './Experience.css'


export default function Experience ({Image , title , description,ModalTarget}){

  const [isShown, setIsShown] = React.useState(true);
 

  return (
      <div  className='container-card'>
    
        {isShown &&  (
        
          // <FadeInSection>
          
            <div className='card-experience ' >
              <img src={Image} alt="" />
              <div className='hide'>
                <h1>{title}</h1>
                <p>{description}</p>
                <a href={ModalTarget} >Learn</a>
              </div>
            </div>
          // </FadeInSection>
        )}

        {/* ------ */}
   

        {/* ------ */}
    </div>
  )
}




