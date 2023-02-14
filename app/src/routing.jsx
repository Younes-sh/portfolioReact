import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/home'
const Routing = () => {
    return (
        <>
            <Routes>
           
                <Route exact path="/" element={<Home />} />
           
            </Routes>

        </>
    )
}


export default Routing