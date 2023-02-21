import Experience from "./Experience"
import './Experience.css'
let experiences = [
  { id: 1, Img: '' , title:'1' , description:'jkdskbasd' },
  { id: 2, Img: '' , title:'1' , description:'jkdskbasd' },
  { id: 3, Img: '' , title:'1' , description:'younes' },
  { id: 4, Img: '' , title:'1' , description:'jkdskbasd' },
  { id: 5, Img: '' , title:'1' , description:'jkdskbasd' },
  { id: 6, Img: '' , title:'1' , description:'jkdskbasd' },
  { id: 7, Img: '' , title:'1' , description:'jkdskbasd' },
  { id: 8, Img: '' , title:'1' , description:'jkdskbasd' },
  { id: 9, Img: '' , title:'1' , description:'jkdskbasd' },
  { id: 10, Img: '' , title:'1' , description:'jkdskbasd' },
  { id: 11, Img: '' , title:'1' , description:'jkdskbasd' },
  { id: 12, Img: '' , title:'1' , description:'jkdskbasd' },
  { id: 13, Img: '' , title:'1' , description:'jkdskbasd' },
  { id: 14, Img: '' , title:'1' , description:'jkdskbasd' },
]

const Experiences = () => {
  return (
    <div className="Experiences">
        <div className="container-item">
          { experiences.map (item => <><Experience {...item} /></> )}
        </div>
    </div>
  )
}

export default Experiences