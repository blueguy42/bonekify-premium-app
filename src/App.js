import Navbar from "./templates/Navbar";
import Penyanyi from "./Penyanyi";
import Login from "./Login";
import Register from "./Register";
import Admin from "./Admin";
import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/penyanyi" element={<div><Navbar/> <Penyanyi/></div>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<div><Navbar/><Admin/></div>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
