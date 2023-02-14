const Header = ({name,description,job}) => {
  return (
    <div>
        <h1>Hi i'm{name}</h1>
        <h1>{job}</h1>
        <p>{description}</p>
    </div>
  )
}

export default Header