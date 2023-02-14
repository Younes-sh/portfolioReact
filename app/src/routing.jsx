import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/home'
import Contact from "./Pages/Contact/contact";
const Routing = () => {
    return (
        <>
            <Routes>
           
                <Route exact path="/" element={<Home />} />
                <Route exact path="/contact" element={<Contact />}/>
           
            </Routes>

        </>
    )
}


export default Routing