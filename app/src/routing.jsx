import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/home'
import Contact from "./Pages/Contact/contact";
import Projects from "./Pages/Projects/projects";
// import About from "./Pages/About/about";
const Routing = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/contact" element={<Contact />}/>
                <Route exact path="/projects" element={<Projects />} />
                {/* <Route exact path="/about" element={<About />} /> */}
            </Routes>
        </>
    )
}


export default Routing