import Experience from "./Experience"
import './Experience.css'
import handleViewport from 'react-in-viewport';

let experiences = [
  { id: 1, Img: '' , title:'HTML' , description:'Markup Language' },
  { id: 2, Img: '' , title:'CSS' , description:'jkdskbasd' },
  { id: 3, Img: '' , title:'JS' , description:'Javascript' },

  { id: 4, Img: '' , title:'React' , description:'jkdskbasd' },
  { id: 5, Img: '' , title:'Node.js' , description:'jkdskbasd' },
  { id: 6, Img: '' , title:'MongoDB' , description:'jkdskbasd' },

  { id: 7, Img: '' , title:'Next.js' , description:'jkdskbasd' },
  { id: 8, Img: '' , title:'Git' , description:'jkdskbasd' },
  { id: 9, Img: '' , title:'React' , description:'jkdskbasd' },
  
  { id: 10, Img: '' , title:'Node.js' , description:'jkdskbasd' },
  { id: 11, Img: '' , title:'MongoDB' , description:'jkdskbasd' },
  { id: 12, Img: '' , title:'Next.js' , description:'jkdskbasd' },
]

const Experiences = () => {

  return (
    <div className="Experiences">
        <div className="container-item">
          {/* { experiences.map (item => <><Experience className='Fadin' {...item} /></> )} */}
           
               { experiences.map (item => <><Experience className='Fadin' {...item} /></> )}
          
        </div>
    </div>
  )
}

export default Experiences