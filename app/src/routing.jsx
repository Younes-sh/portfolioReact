import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/home'
import Contact from "./Pages/Contact/contact";
import Projects from "./Pages/Projects/projects";
const Routing = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/contact" element={<Contact />}/>
                <Route exact path="/projects" element={<Projects />} />
            </Routes>
        </>
    )
}


export default Routing