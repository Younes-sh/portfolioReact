import './header.css'
import ImageHeader from '../../assets/younes.png'
const Header = ({name,description,job}) => {
  return (
    <div className="Header">
      
      
        <div className='Header-txt'>
          <h1>Hi i'm{name}</h1>
          <h1>{job}</h1>
          <p>{description}</p>
        </div>
     
      <div className="image_container">
        <img src={ImageHeader} alt="programmer" />
      </div>
    
    </div>
  )
}

export default Header