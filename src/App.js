import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Landing /> */}
        
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='favorites' element={<Favorites />} />
        </Routes>

      </BrowserRouter>
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
