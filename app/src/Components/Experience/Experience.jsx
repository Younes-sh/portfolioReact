import React from 'react'
import './Experience.css'


// function FadeInSection(props) {
//   const [isVisible, setVisible] = React.useState(false);
//   const domRef = React.useRef();

//   React.useEffect(() => {
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         console.log(`entry`, entry, `is = ${entry.isIntersecting}`);
//         setVisible(entry.isIntersecting);
//       });
//     });

//     const { current } = domRef;
//     observer.observe(current);

//     return () => observer.unobserve(current);
//   }, []);
//   return (
//     <div
//       className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
//       ref={domRef}
//     >
//       {props.children}
//     </div>
//   );
// }



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




