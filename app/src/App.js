import { BrowserRouter } from "react-router-dom" ;
import './App.css';
import Routing from './routing';
import Navbar from './Components/Navbar/Navbar'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
