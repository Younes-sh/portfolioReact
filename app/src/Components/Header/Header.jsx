import './header.css'
const Header = ({name,description,job}) => {
  return (
    <div className="Header-txt">
      
      <h1>Hi i'm{name}</h1>
      <h1>{job}</h1>
      <p>{description}</p>
    
    </div>
  )
}

export default Header