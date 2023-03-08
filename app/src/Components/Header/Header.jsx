import './header.css'
import ImageHeader from '../../assets/younes.png'
import icon1  from '../../assets/Icons_head/figma.svg'
import icon2  from '../../assets/Icons_head/bootstrap.svg'
import icon3  from '../../assets/Icons_head/docker.svg'
import icon4  from '../../assets/Icons_head/git.svg'
import icon5  from '../../assets/Icons_head/mongodb.svg'
import icon6  from '../../assets/Icons_head/react.svg'
import icon7  from '../../assets/Icons_head/sass.svg'
import icon8  from '../../assets/Icons_head/github-2.svg'
import icon9  from '../../assets/Icons_head/node-js.svg'
const Header = ({name,description,job}) => {
  return (
    <div className="Header">
      
      
      <div className='Header-txt'>
        <h1>Hi i'm{name}</h1>
        <h1>{job}</h1>
        <p>{description}</p>
      </div>
     
      <div className="image_container">
        <img className='icons figma' src={icon1}></img>
        <img className='icons bootstrap' src={icon2}></img>
        <img className='icons docker' src={icon3}></img>
        <img className='icons git' src={icon4}></img>
        <img className='icons mongodb' src={icon5}></img>
        <img className='icons react' src={icon6}></img>
        <img className='icons sass' src={icon7}></img>
        <img className='icons github-2' src={icon8}></img>
        <img className='icons node-js' src={icon9}></img>
        <img className='img' src={ImageHeader} alt="programmer" />
      </div>
    
    </div>
  )
}

export default Header