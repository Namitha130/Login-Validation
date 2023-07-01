import Sign_up from "./components/Sign_up";

import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Check from "./components/Check";
function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Sign_up/>}/>
          <Route path="/check" element = {<Check/>}/>
        </Routes>
      </BrowserRouter>
    

    </div>
  );
}

export default App;
