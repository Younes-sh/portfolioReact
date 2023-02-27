import { BrowserRouter } from "react-router-dom" ;
import './App.css';
import Routing from './routing';
import Navbar from './Components/Navbar/Navbar'
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routing />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
